import { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { useAuthStore } from '../../store/auth';
import api from '../../lib/api';
import toast from 'react-hot-toast';
import { PageLoader } from '../../components/ui/Spinner';
import { RefreshCw, Copy, ExternalLink, Printer, Monitor, Wallet } from 'lucide-react';

const API = import.meta.env.VITE_API_URL?.replace('/api', '') || 'http://localhost:5000';

const Field = ({ label, children }) => <div><label className="label">{label}</label>{children}</div>;

export default function RestroSettings() {
  const { user } = useAuthStore();
  const [form, setForm] = useState({ restroname: '', mobileno: '', email: '', address: '', gstno: '', discount: '', servicecharge: '', logo: null });
  const [printForm, setPrintForm] = useState({ printNodeApiKey: '', printNodePrinterId: '' });
  const [upiForm, setUpiForm] = useState({ upiId: '' });
  const [otpVisible, setOtpVisible] = useState(false);

  const { data: profile, isLoading } = useQuery({
    queryKey: ['restro-profile'],
    queryFn: () => api.get('/restaurant/profile').then((r) => r.data),
  });

  useEffect(() => {
    if (profile) {
      setForm({ restroname: profile.restroname || '', mobileno: profile.mobileno || '', email: profile.email || '', address: profile.address || '', gstno: profile.gstno || '', discount: String(profile.discount || 0), servicecharge: String(profile.servicecharge || 0), logo: null });
      setPrintForm({ printNodeApiKey: profile.printNodeApiKey || '', printNodePrinterId: profile.printNodePrinterId || '' });
      setUpiForm({ upiId: profile.upiId || '' });
    }
  }, [profile]);

  const updateMutation = useMutation({
    mutationFn: (fd) => api.put('/restaurant/profile', fd),
    onSuccess: () => toast.success('Settings saved'),
    onError: (e) => toast.error(e.response?.data?.error || 'Error'),
  });

  const otpMutation = useMutation({
    mutationFn: () => api.patch('/restaurant/otp'),
    onSuccess: () => toast.success('OTP regenerated'),
  });

  const pdfMutation = useMutation({
    mutationFn: (fd) => api.post('/restaurant/pdf', fd),
    onSuccess: () => toast.success('PDF uploaded'),
    onError: (e) => toast.error(e.response?.data?.error || 'Error'),
  });

  const printMutation = useMutation({
    mutationFn: (fd) => api.put('/restaurant/profile', fd),
    onSuccess: () => toast.success('Printing settings saved'),
    onError: (e) => toast.error(e.response?.data?.error || 'Error'),
  });

  const savePrintSettings = () => {
    const fd = new FormData();
    fd.append('printNodeApiKey', printForm.printNodeApiKey);
    fd.append('printNodePrinterId', printForm.printNodePrinterId);
    printMutation.mutate(fd);
  };

  const upiMutation = useMutation({
    mutationFn: (fd) => api.put('/restaurant/profile', fd),
    onSuccess: () => toast.success('UPI settings saved'),
    onError: (e) => toast.error(e.response?.data?.error || 'Error'),
  });

  const saveUpiSettings = () => {
    const fd = new FormData();
    fd.append('upiId', upiForm.upiId);
    upiMutation.mutate(fd);
  };

  const displayUrl = `${window.location.origin}/display/${profile?.slug || user?.slug}`;
  const kitchenUrl = `${window.location.origin}/restro/kitchen`;

  const copyLink = (url, label) => {
    navigator.clipboard.writeText(url);
    toast.success(`${label} link copied`);
  };

  if (isLoading) return <PageLoader />;

  const submit = () => {
    const fd = new FormData();
    Object.entries(form).forEach(([k, v]) => { if (v !== null) fd.append(k, v); });
    updateMutation.mutate(fd);
  };

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Settings</h1>

      <div className="card p-6 mb-5">
        <h2 className="text-base font-semibold text-gray-900 mb-4">Restaurant Profile</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Restaurant Name"><input className="input" value={form.restroname} onChange={(e) => setForm({ ...form, restroname: e.target.value })} /></Field>
          <Field label="Mobile"><input className="input" value={form.mobileno} onChange={(e) => setForm({ ...form, mobileno: e.target.value })} /></Field>
          <Field label="Email"><input className="input" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></Field>
          <Field label="GST No"><input className="input" value={form.gstno} onChange={(e) => setForm({ ...form, gstno: e.target.value })} /></Field>
          <div className="sm:col-span-2"><Field label="Address"><textarea className="input" rows={2} value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} /></Field></div>
          {profile?.logo && (
            <div className="sm:col-span-2">
              <p className="label">Current Logo</p>
              <img
                src={profile.logo.startsWith('http') ? profile.logo : `${API}${profile.logo}`}
                alt="logo"
                className="w-20 h-20 rounded-xl object-cover border border-gray-100 shadow-sm"
              />
            </div>
          )}
          <div className="sm:col-span-2"><Field label="Update Logo"><input className="input" type="file" accept="image/*" onChange={(e) => setForm({ ...form, logo: e.target.files[0] })} /></Field></div>
        </div>
      </div>

      <div className="card p-6 mb-5">
        <h2 className="text-base font-semibold text-gray-900 mb-1">Billing Configuration</h2>
        <p className="text-sm text-gray-500 mb-4">Applied automatically to every completed order.</p>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <Field label="Discount (%)">
            <input className="input" type="number" min="0" max="100" value={form.discount} onChange={(e) => setForm({ ...form, discount: e.target.value })} placeholder="0" />
          </Field>
          <Field label="Service Charge (%)">
            <input className="input" type="number" min="0" max="100" value={form.servicecharge} onChange={(e) => setForm({ ...form, servicecharge: e.target.value })} placeholder="0" />
          </Field>
        </div>
        {/* Live bill preview */}
        {(parseFloat(form.discount) > 0 || parseFloat(form.servicecharge) > 0) && (
          <div className="bg-gray-50 rounded-lg p-3 text-sm space-y-1">
            <p className="text-xs font-medium text-gray-500 mb-2">Preview on ₹1000 order:</p>
            <div className="flex justify-between text-gray-600"><span>Subtotal</span><span>₹1000.00</span></div>
            {parseFloat(form.discount) > 0 && (
              <div className="flex justify-between text-green-600">
                <span>Discount ({form.discount}%)</span>
                <span>-₹{(1000 * parseFloat(form.discount) / 100).toFixed(2)}</span>
              </div>
            )}
            {parseFloat(form.servicecharge) > 0 && (
              <div className="flex justify-between text-gray-600">
                <span>Service Charge ({form.servicecharge}%)</span>
                <span>₹{((1000 - (1000 * parseFloat(form.discount || 0) / 100)) * parseFloat(form.servicecharge) / 100).toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between font-bold border-t border-gray-200 pt-1 mt-1">
              <span>Grand Total</span>
              <span className="text-primary-600">
                ₹{(
                  1000
                  - (1000 * parseFloat(form.discount || 0) / 100)
                  + ((1000 - (1000 * parseFloat(form.discount || 0) / 100)) * parseFloat(form.servicecharge || 0) / 100)
                ).toFixed(2)}
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-end mb-5">
        <button className="btn-primary" onClick={submit} disabled={updateMutation.isPending}>{updateMutation.isPending ? 'Saving...' : 'Save Changes'}</button>
      </div>

      <div className="card p-6 mb-5">
        <h2 className="text-base font-semibold text-gray-900 mb-1">OTP / Restro Code</h2>
        <p className="text-sm text-gray-500 mb-4">Customers need this code to call waiter or place orders from their table.</p>
        <div className="flex items-center gap-3">
          <code className="bg-gray-100 px-4 py-2 rounded-lg text-lg font-bold tracking-widest">{otpVisible ? profile?.restrootp : '••••'}</code>
          <button className="btn-secondary btn-sm" onClick={() => setOtpVisible(!otpVisible)}>{otpVisible ? 'Hide' : 'Show'}</button>
          <button className="btn-secondary btn-sm" onClick={() => otpMutation.mutate()} disabled={otpMutation.isPending}><RefreshCw size={13} /> Regenerate</button>
        </div>
      </div>

      {/* ── Kitchen Printing & Customer Display ── */}
      <div className="card p-6 mb-5">
        <h2 className="text-base font-semibold text-gray-900 mb-1 flex items-center gap-2">
          <Printer size={16} /> Kitchen Printing
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Connect PrintNode to auto-print a kitchen ticket for every new order. Leave blank to use the
          manual "Print Ticket" button on the Kitchen Display / Live Orders pages instead.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <Field label="PrintNode API Key">
            <input className="input" type="password" placeholder="Paste your PrintNode API key"
              value={printForm.printNodeApiKey}
              onChange={(e) => setPrintForm({ ...printForm, printNodeApiKey: e.target.value })} />
          </Field>
          <Field label="PrintNode Printer ID">
            <input className="input" placeholder="e.g. 123456"
              value={printForm.printNodePrinterId}
              onChange={(e) => setPrintForm({ ...printForm, printNodePrinterId: e.target.value })} />
          </Field>
        </div>
        <div className="flex justify-end">
          <button className="btn-primary btn-sm" onClick={savePrintSettings} disabled={printMutation.isPending}>
            {printMutation.isPending ? 'Saving...' : 'Save Printing Settings'}
          </button>
        </div>
      </div>

      {/* ── UPI Payments ── */}
      <div className="card p-6 mb-5">
        <h2 className="text-base font-semibold text-gray-900 mb-1 flex items-center gap-2">
          <Wallet size={16} /> UPI Payments
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Enter your UPI ID (e.g. from GPay/PhonePe/Paytm/BHIM) to let customers pay you directly
          for their order — no fees, no setup. They'll see a "Pay via UPI" option and a QR code on
          their order page; mark the order "Paid" from Live Orders once you receive the payment.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <Field label="UPI ID">
            <input className="input" placeholder="e.g. yourname@okaxis"
              value={upiForm.upiId}
              onChange={(e) => setUpiForm({ ...upiForm, upiId: e.target.value })} />
          </Field>
        </div>
        <div className="flex justify-end">
          <button className="btn-primary btn-sm" onClick={saveUpiSettings} disabled={upiMutation.isPending}>
            {upiMutation.isPending ? 'Saving...' : 'Save UPI Settings'}
          </button>
        </div>
      </div>

      <div className="card p-6 mb-5">
        <h2 className="text-base font-semibold text-gray-900 mb-1 flex items-center gap-2">
          <Monitor size={16} /> Order Ready Display
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Open this link on a TV or tablet at your counter. It shows order numbers that are ready
          for customers to collect.
        </p>
        <div className="flex items-center gap-2 mb-3">
          <code className="flex-1 bg-gray-100 px-3 py-2 rounded-lg text-xs sm:text-sm truncate">{displayUrl}</code>
          <button className="btn-secondary btn-sm" onClick={() => copyLink(displayUrl, 'Display')}><Copy size={13} /></button>
          <a className="btn-secondary btn-sm" href={displayUrl} target="_blank" rel="noreferrer"><ExternalLink size={13} /></a>
        </div>

        <h3 className="text-sm font-semibold text-gray-700 mt-5 mb-1">Kitchen Display (KDS)</h3>
        <p className="text-sm text-gray-500 mb-3">
          Login here from a kitchen tablet/phone for the live order board with auto-print and a
          manual "Print Ticket" button per order — useful as a backup if the power goes out.
        </p>
        <div className="flex items-center gap-2">
          <code className="flex-1 bg-gray-100 px-3 py-2 rounded-lg text-xs sm:text-sm truncate">{kitchenUrl}</code>
          <button className="btn-secondary btn-sm" onClick={() => copyLink(kitchenUrl, 'Kitchen')}><Copy size={13} /></button>
          <a className="btn-secondary btn-sm" href={kitchenUrl} target="_blank" rel="noreferrer"><ExternalLink size={13} /></a>
        </div>
      </div>

      <div className="card p-6">
        <h2 className="text-base font-semibold text-gray-900 mb-1">PDF Menu</h2>
        <p className="text-sm text-gray-500 mb-4">Upload a PDF version of your menu for download by customers.</p>
        {profile?.pdf && <p className="text-sm text-green-600 mb-3">✓ PDF uploaded</p>}
        <input type="file" accept=".pdf" className="input mb-3" onChange={(e) => { const fd = new FormData(); fd.append('pdf', e.target.files[0]); pdfMutation.mutate(fd); }} />
      </div>
    </div>
  );
}
