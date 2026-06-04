import { useQuery } from '@tanstack/react-query';
import api from '../../lib/api';
import { PageLoader } from '../../components/ui/Spinner';

export default function SuperAdminPayments() {
  const { data: payments = [], isLoading } = useQuery({
    queryKey: ['admin-payments'],
    queryFn: () => api.get('/admin/payments').then((r) => r.data),
  });

  if (isLoading) return <PageLoader />;

  const total = payments.reduce((s, p) => s + p.price, 0);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Payment History</h1>
        <div className="card px-4 py-2 text-sm">
          Total: <span className="font-bold text-primary-600">₹{total.toLocaleString()}</span>
        </div>
      </div>
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="bg-gray-50 border-b border-gray-100">
              <th className="px-4 py-3 text-left font-medium text-gray-500">Restaurant</th>
              <th className="px-4 py-3 text-left font-medium text-gray-500">Payment Date</th>
              <th className="px-4 py-3 text-left font-medium text-gray-500">Plan</th>
              <th className="px-4 py-3 text-left font-medium text-gray-500">Price</th>
              <th className="px-4 py-3 text-left font-medium text-gray-500">Expires</th>
            </tr></thead>
            <tbody>
              {payments.map((p) => (
                <tr key={p.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                  <td className="px-4 py-3 font-medium text-gray-900">{p.restaurant?.restroname}</td>
                  <td className="px-4 py-3 text-gray-600">{new Date(p.paymentdate).toLocaleDateString()}</td>
                  <td className="px-4 py-3 text-gray-600">{p.subplan} months</td>
                  <td className="px-4 py-3 font-semibold text-green-600">₹{p.price.toLocaleString()}</td>
                  <td className="px-4 py-3 text-gray-600">{new Date(p.expdate).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {!payments.length && <p className="text-center py-10 text-gray-400">No payments yet</p>}
        </div>
      </div>
    </div>
  );
}
