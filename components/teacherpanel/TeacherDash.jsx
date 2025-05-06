export default function TeacherDashboard() {
    // Sample data
    const stats = {
      studentCount: 30,
      monthlyIncome: '۱.۵ میلیون تومان',
      courses: [
        { name: 'ریاضی مهندسی', students: 15 },
        { name: 'برنامه‌نویسی پیشرفته', students: 10 },
        { name: 'هوش مصنوعی', students: 5 }
      ],
      recentActivities: [
        'تصحیح آزمون ریاضی',
        'بارگذاری جلسه جدید هوش مصنوعی',
        'پاسخ به سوالات دانشجویان'
      ]
    }
  
    return (
      <div className="w-full mx-auto py-4 max-w-6xl">
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-medium text-gray-600">تعداد دانشجویان</h2>
                <p className="text-3xl font-bold mt-2">{stats.studentCount} نفر</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
            </div>
          </div>
  
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-medium text-gray-600">درآمد ماهانه</h2>
                <p className="text-3xl font-bold mt-2">{stats.monthlyIncome}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
  
        {/* Courses Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4 text-blue-600 border-b-2 border-blue-200 pb-2">دروس شما</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {stats.courses.map((course, index) => (
              <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-medium text-lg">{course.name}</h3>
                <p className="text-gray-600 mt-2">{course.students} دانشجو</p>
                <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  مدیریت درس
                </button>
              </div>
            ))}
          </div>
        </div>
  
        {/* Recent Activities */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-blue-600 border-b-2 border-blue-200 pb-2">فعالیت‌های اخیر</h2>
          <ul className="space-y-3">
            {stats.recentActivities.map((activity, index) => (
              <li key={index} className="flex items-start">
                <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>{activity}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }