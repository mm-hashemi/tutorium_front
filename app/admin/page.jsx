'use client'
import DashboardAdmin from "@/components/adminpanel/DashAdmin";
import AdminChart from "@/components/adminpanel/payments";
import StudentList from "@/components/teacherpanel/TeacherStudents";
import Head from "next/head";
import React from "react";

export default function StaticAdminPanel() {
 
  return (
    <div className="w-[94vw] mx-auto mt-4" dir="rtl">
        <Head>
        <title>پنل استاد</title>
        <meta name="description" content="پنل مدیریت اساتید" />
      </Head>
      <header className="w-[90%] mx-auto bg-white shadow rounded-lg p-4 mb-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">داشبورد</h1>
        
        </header>
        <div className="w-[90%] mx-auto ">

      <DashboardAdmin/>
      <AdminChart/>
      <StudentList/>

        </div>
    </div>
  );
}
