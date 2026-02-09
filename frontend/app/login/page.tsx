"use client";

import AdminLoginPage from '../components/sections/login';
import AdminDashboard from '../admin/dashboard/page';
export default function LoginPage() {
  return (
    <main>
      {/* Aqui renderiza apenas a tela de login */}
      <AdminLoginPage />
      <AdminDashboard />
    </main>
  );
}