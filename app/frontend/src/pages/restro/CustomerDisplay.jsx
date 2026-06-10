import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import api from '../../lib/api';
import { subscribeToReadyOrders } from '../../lib/realtime';
import { supabase } from '../../lib/supabase';

// Public page — no auth needed. Open on a TV / tablet at the counter.
// URL: /display/:slug

export default function CustomerDisplay() {
  const { slug } = useParams();
  const qc = useQueryClient();
  const [restroid, setRestroid] = useState(null);
  const [restroName, setRestroName] = useState('');
  const [flash, setFlash] = useState(null); // newly added order code to highlight

  // Fetch restaurant info
  useEffect(() => {
    api.get(`/customer/restro/${slug}`).then((r) => {
      setRestroid(r.data.id);
      setRestroName(r.data.restroname);
    }).catch(() => {});
  }, [slug]);

  // Poll ready orders every 10s
  const { data: readyOrders = [] } = useQuery({
    queryKey: ['ready-orders', slug],
    queryFn: () => api.get(`/customer/restro/${slug}/ready`).then((r) => r.data),
    refetchInterval: 10000,
    enabled: !!slug,
  });

  // Realtime: flash new order code when order is completed
  useEffect(() => {
    if (!restroid) return;
    const unsub = subscribeToReadyOrders(restroid, (newEntry) => {
      qc.invalidateQueries(['ready-orders', slug]);
      setFlash(newEntry.ordercode);
      setTimeout(() => setFlash(null), 4000);
    });
    return unsub;
  }, [restroid, slug, qc]);

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col" style={{ fontFamily: 'Inter, sans-serif' }}>

      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800 px-8 py-5 flex items-center justify-between">
        <div>
          <p className="text-2xl font-bold text-white">{restroName}</p>
          <p className="text-gray-400 text-sm mt-0.5">Order Collection Counter</p>
        </div>
        <div className="text-right">
          <p className="text-green-400 text-lg font-semibold">✅ Ready to Collect</p>
          <p className="text-gray-500 text-xs mt-0.5">Orders from the last 30 minutes</p>
        </div>
      </header>

      {/* Display board */}
      <main className="flex-1 p-8">
        {readyOrders.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
            <p className="text-6xl">🍽️</p>
            <p className="text-2xl font-semibold text-gray-400">No orders ready yet</p>
            <p className="text-gray-600">Completed orders will appear here</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {readyOrders.map((order) => {
              const isNew = flash === order.ordercode;
              return (
                <div key={order.ordercode}
                  className={`rounded-2xl flex flex-col items-center justify-center p-6 transition-all duration-500 ${
                    isNew
                      ? 'bg-green-500 scale-105 shadow-lg shadow-green-500/40'
                      : 'bg-gray-800 border border-gray-700'
                  }`}>
                  <p className={`text-3xl font-black tracking-wide ${isNew ? 'text-white' : 'text-green-400'}`}>
                    #{order.ordercode}
                  </p>
                  {order.tablename && (
                    <p className={`text-sm mt-1 ${isNew ? 'text-green-100' : 'text-gray-400'}`}>
                      {order.tablename}
                    </p>
                  )}
                  {isNew && (
                    <p className="text-white text-xs mt-2 font-semibold animate-bounce">
                      COLLECT NOW
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 px-8 py-3 text-center">
        <p className="text-gray-500 text-sm">
          Please collect your order from the counter when your number is displayed
        </p>
      </footer>
    </div>
  );
}
