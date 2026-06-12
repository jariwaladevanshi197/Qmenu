export default function StatCard({ label, value, icon: Icon, color = 'primary', sub }) {
  const colors = {
    primary: 'bg-primary-50 text-primary-600',
    green: 'bg-green-50 text-green-600',
    blue: 'bg-blue-50 text-blue-600',
    purple: 'bg-purple-50 text-purple-600',
    yellow: 'bg-yellow-50 text-yellow-600',
    red: 'bg-red-50 text-red-600',
  };
  return (
    <div className="card p-4 sm:p-5 flex items-start gap-2 sm:gap-3 min-w-0">
      {Icon && (
        <div className={`p-2 sm:p-3 rounded-xl shrink-0 ${colors[color]}`}>
          <Icon size={20} />
        </div>
      )}
      <div className="min-w-0">
        <p className="text-sm text-gray-500 leading-tight">{label}</p>
        <p className="text-base 2xl:text-lg font-bold text-gray-900 mt-0.5 truncate tracking-tight">{value}</p>
        {sub && <p className="text-xs text-gray-400 mt-0.5 truncate">{sub}</p>}
      </div>
    </div>
  );
}
