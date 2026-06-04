import { useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../lib/api';
import { PageLoader } from '../../components/ui/Spinner';
import { Printer, ArrowLeft, Download } from 'lucide-react';

export default function RestroInvoice() {
  const { id } = useParams();
  const navigate = useNavigate();
  const printRef = useRef();

  const { data: order, isLoading: orderLoading } = useQuery({
    queryKey: ['invoice-order', id],
    queryFn: () => api.get(`/orders/history/${id}`).then((r) => r.data),
  });

  const { data: profile, isLoading: profileLoading } = useQuery({
    queryKey: ['restro-profile'],
    queryFn: () => api.get('/restaurant/profile').then((r) => r.data),
  });

  const handlePrint = () => {
    const content = printRef.current.innerHTML;
    const win = window.open('', '_blank');
    win.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Invoice - ${order?.ordercode}</title>
          <style>
            * { box-sizing: border-box; margin: 0; padding: 0; }
            body { font-family: 'Arial', sans-serif; font-size: 13px; color: #111; background: #fff; }
            .invoice { max-width: 420px; margin: 0 auto; padding: 24px; }
            .header { text-align: center; margin-bottom: 16px; border-bottom: 2px dashed #ddd; padding-bottom: 16px; }
            .header h1 { font-size: 22px; font-weight: bold; margin-bottom: 4px; }
            .header p { font-size: 12px; color: #555; margin: 2px 0; }
            .section { margin: 12px 0; }
            .row { display: flex; justify-content: space-between; padding: 4px 0; border-bottom: 1px solid #f0f0f0; }
            .row:last-child { border-bottom: none; }
            .label { color: #555; }
            .total-row { display: flex; justify-content: space-between; padding: 6px 0; font-weight: bold; font-size: 15px; border-top: 2px solid #111; margin-top: 8px; }
            .info-row { display: flex; justify-content: space-between; font-size: 12px; color: #555; margin: 3px 0; }
            .badge { display: inline-block; background: #f0f0f0; padding: 2px 8px; border-radius: 4px; font-size: 11px; }
            .footer { text-align: center; margin-top: 20px; font-size: 11px; color: #888; border-top: 1px dashed #ddd; padding-top: 12px; }
            @media print { body { margin: 0; } }
          </style>
        </head>
        <body>${content}</body>
      </html>
    `);
    win.document.close();
    win.focus();
    setTimeout(() => { win.print(); win.close(); }, 300);
  };

  if (orderLoading || profileLoading) return <PageLoader />;
  if (!order) return <div className="text-center py-20 text-gray-400">Order not found</div>;

  const gst = profile?.gstno;
  const subtotal = order.subtotal || order.items?.reduce((s, i) => s + i.totalprice, 0) || 0;
  const discount = order.discount || 0;
  const servicecharge = order.servicecharge || 0;
  const grandtotal = order.grandtotal || subtotal;

  return (
    <div>
      {/* Action bar — hidden on print */}
      <div className="flex items-center gap-3 mb-6 print:hidden">
        <button onClick={() => navigate(-1)} className="btn-secondary btn-sm">
          <ArrowLeft size={14} /> Back
        </button>
        <button onClick={handlePrint} className="btn-primary btn-sm">
          <Printer size={14} /> Print Invoice
        </button>
      </div>

      {/* Invoice preview */}
      <div className="max-w-md mx-auto">
        <div className="card p-6" ref={printRef}>
          <div className="invoice">
            {/* Header */}
            <div className="header text-center mb-5 pb-4 border-b-2 border-dashed border-gray-200">
              <h1 className="text-xl font-bold text-gray-900">{profile?.restroname}</h1>
              {profile?.address && <p className="text-xs text-gray-500 mt-1">{profile.address}</p>}
              {profile?.mobileno && <p className="text-xs text-gray-500">📞 {profile.mobileno}</p>}
              {gst && <p className="text-xs text-gray-500 mt-1">GSTIN: {gst}</p>}
              <p className="text-xs text-gray-400 mt-2">TAX INVOICE</p>
            </div>

            {/* Order info */}
            <div className="grid grid-cols-2 gap-1 text-xs text-gray-600 mb-4 pb-3 border-b border-dashed border-gray-200">
              <div><span className="text-gray-400">Invoice #</span><br /><span className="font-mono font-medium">{order.ordercode}</span></div>
              <div className="text-right"><span className="text-gray-400">Date</span><br /><span>{new Date(order.timestamp).toLocaleDateString('en-IN')}</span></div>
              {order.tablename && <div><span className="text-gray-400">Table</span><br /><span className="font-medium">{order.tablename}</span></div>}
              {order.customername && <div className="text-right"><span className="text-gray-400">Customer</span><br /><span>{order.customername}</span></div>}
              {order.customermob && <div><span className="text-gray-400">Mobile</span><br /><span>{order.customermob}</span></div>}
            </div>

            {/* Items */}
            <table className="w-full text-sm mb-4">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-1.5 text-gray-500 font-medium text-xs">Item</th>
                  <th className="text-center py-1.5 text-gray-500 font-medium text-xs">Qty</th>
                  <th className="text-right py-1.5 text-gray-500 font-medium text-xs">Rate</th>
                  <th className="text-right py-1.5 text-gray-500 font-medium text-xs">Amount</th>
                </tr>
              </thead>
              <tbody>
                {order.items?.map((item) => (
                  <tr key={item.id} className="border-b border-gray-50">
                    <td className="py-1.5 text-gray-800">{item.name_eng}</td>
                    <td className="py-1.5 text-center text-gray-600">{item.quantity}</td>
                    <td className="py-1.5 text-right text-gray-600">₹{item.price}</td>
                    <td className="py-1.5 text-right font-medium text-gray-800">₹{item.totalprice}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Totals */}
            <div className="border-t border-gray-200 pt-3 space-y-1.5 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Discount</span>
                  <span>-₹{discount.toFixed(2)}</span>
                </div>
              )}
              {servicecharge > 0 && (
                <div className="flex justify-between text-gray-600">
                  <span>Service Charge</span>
                  <span>₹{servicecharge.toFixed(2)}</span>
                </div>
              )}
              {gst && (
                <div className="flex justify-between text-gray-600">
                  <span>GST (incl.)</span>
                  <span>—</span>
                </div>
              )}
              <div className="flex justify-between font-bold text-base pt-2 border-t-2 border-gray-900 mt-2">
                <span>TOTAL</span>
                <span>₹{grandtotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center mt-6 pt-4 border-t border-dashed border-gray-200 text-xs text-gray-400">
              <p>Thank you for dining with us! 🙏</p>
              <p className="mt-1">Powered by Q-Menu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
