import React from 'react'

export default function ListStudents() {
    const students = [
        { id: 1, name: 'علی رضایی', status: 'فعال', grade: '4', semester: '1', action: 'مشاهده وضعیت' },
        { id: 2, name: 'علی رضایی', status: 'انصراف', grade: '4', semester: '1', action: 'مشاهده وضعیت' },
        { id: 3, name: 'علی رضایی', status: 'اتمام', grade: '4', semester: '1', action: 'مشاهده وضعیت' },
      ];
  return (
    <div>

<main className="flex-1 bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">داشبورد</h2>
            <div className="border-t border-gray-200 my-4"></div>
            <p className="text-gray-600 mb-8">اطلاعات کلی و آمار در این بخش نمایش داده می شود.</p>

            <h2 className="text-xl font-bold mb-4">لیست دانشجویان</h2>
            <div className="border-t border-gray-200 my-4"></div>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border p-2">مشاهده وضعیت</th>
                    <th className="border p-2">وضعیت</th>
                    <th className="border p-2">نمره</th>
                    <th className="border p-2">ترم</th>
                    <th className="border p-2">نام دانشجو</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => (
                    <tr key={student.id}>
                      <td className="border p-2 text-blue-600 hover:underline cursor-pointer">
                        {student.action}
                      </td>
                      <td className="border p-2">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          student.status === 'فعال' ? 'bg-green-100 text-green-800' :
                          student.status === 'انصراف' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {student.status}
                        </span>
                      </td>
                      <td className="border p-2">{student.grade}</td>
                      <td className="border p-2">{student.semester}</td>
                      <td className="border p-2">{student.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </main>
    </div>
  )
}
