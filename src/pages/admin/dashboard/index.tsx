import React from 'react'
import AdminInterface from '../sidebar';
import AdminContent from '../content';

let logo = "School";
let name = "Jumael Kamga";
let email = "jumaelkamga1@gmail.com";
let logout = "Déconnexion";

const AdminDashboard  = () => {
  return (
    <>
      <section className="flex items-stretch min-h-screen bg-[#e3e3dd] w-screen">
            <AdminInterface />
            <AdminContent />
          </section>
    </>
  )
}

export default AdminDashboard;