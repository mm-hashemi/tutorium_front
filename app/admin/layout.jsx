import React from 'react'
import StudentPanel from './page'
import Head from 'next/head';
import { Bar } from 'react-chartjs-2';
import { 
  FiHome, FiUsers, FiUser, FiMail, FiSettings, FiLogOut,
  FiDollarSign, FiBook, FiUserPlus 
} from 'react-icons/fi';

export default function layout({children}) {
  return (
    
    <html lang="en" dir="rtl">
          <head>
          <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
          </head>
          <body className="font-Sahel ">

          <div className='w-[100vw] mx-auto bg-zinc-200 flex'>
         
      <div className='w-[400px] p-4 font-sahel'>
           {/* Sidebar */}
                 <aside className="w-64 bg-white shadow-lg h-screen sticky top-0" dir='ltr'>
                   <div className="p-4 bg-zinc-50">
                     <h1 className="text-xl font-bold text-center text-gray-800">پنل ادمین</h1>
                   </div>
                   
                   <nav className="p-4">
                     <ul className="space-y-2">
                       <li>
                         <div className="w-full flex items-center gap-3 justify-end p-3 rounded-lg bg-blue-100 text-blue-600">
                           <span className="ml-2">داشبورد</span>
                           <FiHome />
                         </div>
                       </li>
                       <li>
                         <div className="w-full flex items-center gap-3 justify-end p-3 rounded-lg hover:bg-gray-100">
                           <span className="ml-2">دانشجویان</span>
                           <FiUsers />
                         </div>
                       </li>
                       <li>
                         <div className="w-full flex items-center gap-3 justify-end p-3 rounded-lg hover:bg-gray-100">
                           <span className="ml-2">اساتید</span>
                           <FiUserPlus />
                         </div>
                       </li>
                       <li>
                         <div className="w-full flex items-center gap-3 justify-end p-3 rounded-lg hover:bg-gray-100">
                           <span className="ml-2">تیکت ها</span>
                           <FiMail />
                         </div>
                       </li>
                       <li>
                         <div className="w-full flex items-center gap-3 justify-end p-3 rounded-lg hover:bg-gray-100">
                           <span className="ml-2">مدیریت محتوا</span>
                           <FiBook />
                         </div>
                       </li>
                       <li>
                         <div className="w-full flex items-center gap-3 justify-end p-3 rounded-lg hover:bg-gray-100">
                           <span className="ml-2">تنظیمات</span>
                           <FiSettings />
                         </div>
                       </li>
                       <li>
                         <div className="w-full flex items-center gap-3 justify-end p-3 rounded-lg hover:bg-red-100 hover:text-red-600">
                           <span className="ml-2">خروج</span>
                           <FiLogOut />
                         </div>
                       </li>
                     </ul>
                   </nav>
                 </aside>
    </div>
            {children}
  </div>
          </body>
        </html>
 
  )
}
