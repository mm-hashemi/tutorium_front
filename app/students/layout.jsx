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
          <aside className="w-full md:w-64 bg-white shadow rounded-lg">
          <div className="p-4 bg-zinc-50">
          <h1 className="text-xl font-bold text-center text-gray-800 mb-2">پنل دانشجو</h1>
       </div>
            <nav>
              <ul className="space-y-2">
                <li><span className="block p-3 rounded-lg hover:bg-gray-100">داشبورد</span></li>
                <li><span className="block p-3 rounded-lg hover:bg-gray-100">برنامه کلاس ها</span></li>
                <li><span className="block p-3 rounded-lg hover:bg-gray-100">دوره ها</span></li>
                <li><span className="block p-3 rounded-lg hover:bg-gray-100">خریدها</span></li>
                <li><span className="block p-3 rounded-lg hover:bg-gray-100">گزارشات</span></li>
                <li><span className="block p-3 rounded-lg hover:bg-red-100 text-red-600">خروج</span></li>
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
