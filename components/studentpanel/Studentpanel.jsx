import React from 'react'

export default function Studentpanel() {
  return (
    <div>

<div className=''>
      <div className='w-[400px p-4 font-sahel'>
          <header className="bg-white shadow rounded-lg p-4 mb-6">
          <h1 className="text-2xl font-bold text-gray-800">پنل دانشجویی</h1>
            </header>
          <aside className="w-full md:w-64 bg-white shadow rounded-lg p-4">
            <nav>
              <ul className="space-y-2">
                <li><span className="block p-3 rounded-lg bg-blue-100 text-blue-600">اطلاعیه نمره</span></li>
                <li><span className="block p-3 rounded-lg hover:bg-gray-100">برنامه کلاس ها</span></li>
                <li><span className="block p-3 rounded-lg hover:bg-gray-100">داشبورد</span></li>
                <li><span className="block p-3 rounded-lg hover:bg-gray-100">دوره ها</span></li>
                <li><span className="block p-3 rounded-lg hover:bg-gray-100">خریدها</span></li>
                <li><span className="block p-3 rounded-lg hover:bg-gray-100">گزارشات</span></li>
                <li><span className="block p-3 rounded-lg hover:bg-red-100 text-red-600">خروج</span></li>
              </ul>
            </nav>
          </aside>
    </div>
  </div>
    </div>
  )
}
