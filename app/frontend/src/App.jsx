import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthStore } from "./store/auth";
import SuperAdminLogin from "./pages/superadmin/Login";
import SuperAdminLayout from "./pages/superadmin/Layout";
import SuperAdminDashboard from "./pages/superadmin/Dashboard";
import SuperAdminRestaurants from "./pages/superadmin/Restaurants";
import SuperAdminPayments from "./pages/superadmin/Payments";
import SuperAdminThemes from "./pages/superadmin/Themes";
import RestroLogin from "./pages/restro/Login";
import RestroLayout from "./pages/restro/Layout";
import RestroDashboard from "./pages/restro/Dashboard";
import RestroMenu from "./pages/restro/Menu";
import RestroTables from "./pages/restro/Tables";
import RestroOrders from "./pages/restro/Orders";
import RestroHistory from "./pages/restro/History";
import RestroReport from "./pages/restro/Report";
import RestroFeedback from "./pages/restro/Feedback";
import RestroSettings from "./pages/restro/Settings";
import RestroNotifications from "./pages/restro/Notifications";
import RestroInvoice from "./pages/restro/Invoice";
import RestroStaff from "./pages/restro/Staff";
import CustomerMenu from "./pages/customer/Menu";
import CustomerCart from "./pages/customer/Cart";
import CustomerMyOrder from "./pages/customer/MyOrder";
import NotFound from "./pages/NotFound";
import Landing from "./pages/Landing";
import RestaurantWebsite from "./pages/restaurant/Website";

const ProtectedSuperAdmin = ({ children }) => {
  const { user } = useAuthStore();
  if (!user || user.role !== "superadmin") return <Navigate to="/admin/login" replace />;
  return children;
};

const ProtectedRestro = ({ children }) => {
  const { user } = useAuthStore();
  if (!user || user.role !== "restro") return <Navigate to="/restro/login" replace />;
  return children;
};

export default function App() {
  return (
    <Routes>
      <Route path="/admin/login" element={<SuperAdminLogin />} />
      <Route path="/admin" element={<ProtectedSuperAdmin><SuperAdminLayout /></ProtectedSuperAdmin>}>
        <Route index element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="dashboard" element={<SuperAdminDashboard />} />
        <Route path="restaurants" element={<SuperAdminRestaurants />} />
        <Route path="payments" element={<SuperAdminPayments />} />
        <Route path="themes" element={<SuperAdminThemes />} />
      </Route>
      <Route path="/restro/login" element={<RestroLogin />} />
      <Route path="/restro" element={<ProtectedRestro><RestroLayout /></ProtectedRestro>}>
        <Route index element={<Navigate to="/restro/dashboard" replace />} />
        <Route path="dashboard" element={<RestroDashboard />} />
        <Route path="menu" element={<RestroMenu />} />
        <Route path="tables" element={<RestroTables />} />
        <Route path="orders" element={<RestroOrders />} />
        <Route path="history" element={<RestroHistory />} />
        <Route path="report" element={<RestroReport />} />
        <Route path="notifications" element={<RestroNotifications />} />
        <Route path="invoice/:id" element={<RestroInvoice />} />
        <Route path="staff" element={<RestroStaff />} />
        <Route path="feedback" element={<RestroFeedback />} />
        <Route path="settings" element={<RestroSettings />} />
      </Route>
      <Route path="/menu/:slug" element={<CustomerMenu />} />
      <Route path="/menu/:slug/cart" element={<CustomerCart />} />
      <Route path="/menu/:slug/order/:ordercode" element={<CustomerMyOrder />} />
      <Route path="/r/:slug" element={<RestaurantWebsite />} />
      <Route path="/" element={<Landing />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
