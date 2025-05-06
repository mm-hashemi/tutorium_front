

import React from 'react'
import StudentPanel from './page'

export default function layout({children}) {
  return (
    
    <html lang="en" dir="rtl">
          <head>
          <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
          </head>
          <body className="font-Sahel ">

          <div className='w-[100vw] bg-zinc-200 flex'>
         
      <div className='w-[400px] p-4 font-sahel'>
      <aside className="w-full md:w-64 bg-white shadow rounded-xl overflow-hidden ">
      <div className="p-4 bg-zinc-50">
          <h1 className="text-xl font-bold text-center text-gray-800 mb-2">پنل استاد</h1>
       </div>

<nav>
  <ul className="space-y-2">
    <li>
      <button className="w-full text-right p-3 rounded-lg bg-blue-100 text-blue-600">
        داشبورد
      </button>
    </li>
    <li>
      <button className="w-full text-right p-3 rounded-lg hover:bg-gray-100">
        حساب
      </button>
    </li>
    <li>
      <button className="w-full text-right p-3 rounded-lg hover:bg-gray-100">
        دانشجویان
      </button>
    </li>
    <li>
      <button className="w-full text-right p-3 rounded-lg hover:bg-gray-100">
        جلسات
      </button>
    </li>
    <li>
      <button className="w-full text-right p-3 rounded-lg hover:bg-gray-100">
        پکـت ها
      </button>
    </li>
    <li>
      <button className="w-full text-right p-3 rounded-lg hover:bg-red-100 hover:text-red-600">
        خروج
      </button>
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

