export default function StudentList() {
    // Sample student data
    const students = [
      {
        id: 1,
        name: 'علی رضایی',
        semester: 4,
        grade: 18.5,
        status: 'فعال',
        email: 'ali.rezaei@example.com'
      },
      {
        id: 2,
        name: 'مریم محمدی',
        semester: 3,
        grade: 16.75,
        status: 'انصراف',
        email: 'maryam.mohammadi@example.com'
      },
      {
        id: 3,
        name: 'رضا حسینی',
        semester: 5,
        grade: 19.25,
        status: 'اتمام',
        email: 'reza.hosseini@example.com'
      },
      {
        id: 4,
        name: 'سارا کریمی',
        semester: 2,
        grade: 17.0,
        status: 'فعال',
        email: 'sara.karimi@example.com'
      },
      {
        id: 5,
        name: 'امیر عباسی',
        semester: 4,
        grade: 15.5,
        status: 'مشروط',
        email: 'amir.abbasi@example.com'
      }
    ]
  
    const getStatusColor = (status) => {
      switch(status) {
        case 'فعال': return 'bg-green-100 text-green-800';
        case 'انصراف': return 'bg-yellow-100 text-yellow-800';
        case 'اتمام': return 'bg-blue-100 text-blue-800';
        case 'مشروط': return 'bg-red-100 text-red-800';
        default: return 'bg-gray-100 text-gray-800';
      }
    }
  
    return (
      <div className="container mx-auto p-4 max-w-6xl">
        <h1 className="text-2xl font-bold text-center mb-8 text-gray-800">لیست دانشجویان</h1>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 text-right">نام دانشجو</th>
                  <th className="p-3">ترم</th>
                  <th className="p-3">نمره</th>
                  <th className="p-3">وضعیت</th>
                  <th className="p-3">عملیات</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {students.map((student) => (
                  <tr key={student.id} className="hover:bg-gray-50">
                    <td className="p-3">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <p className="font-medium">{student.name}</p>
                          <p className="text-sm text-gray-500">{student.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-3 text-center">{student.semester}</td>
                    <td className="p-3 text-center">{student.grade}</td>
                    <td className="p-3 text-center">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(student.status)}`}>
                        {student.status}
                      </span>
                    </td>
                    <td className="p-3 text-center">
                      <button className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                        مشاهده وضعیت
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
  
        {/* Pagination */}
        <div className="flex justify-center mt-6">
          <nav className="flex items-center space-x-2">
            <button className="px-3 py-1 border rounded-md hover:bg-gray-100">
              قبلی
            </button>
            <button className="px-3 py-1 bg-blue-600 text-white rounded-md">
              1
            </button>
            <button className="px-3 py-1 border rounded-md hover:bg-gray-100">
              2
            </button>
            <button className="px-3 py-1 border rounded-md hover:bg-gray-100">
              3
            </button>
            <button className="px-3 py-1 border rounded-md hover:bg-gray-100">
              بعدی
            </button>
          </nav>
        </div>
      </div>
    )
  }