export default function StudentDashboard() {
    // Sample data
    const classSchedule = [
      {
        day: 'شنبه',
        time: '۸-۱۰',
        professor: 'دکتر احمدی'
      },
      {
        day: 'یکشنبه',
        time: '۱۰-۱۲',
        professor: 'دکتر رضایی'
      },
      {
        day: 'سه‌شنبه',
        time: '۱۴-۱۶',
        professor: 'دکتر محمدی'
      }
    ]
  
    const grades = [
      { course: 'writing', grade: '3' },
      { course: 'listening', grade: '4' },
      { course: 'speaking', grade: '6' },
      { course: 'reading', grade: '7' }
    ]
  
    return (
      <div className="w-full mx-auto py-4 max-w-6xl">
       
        <div className="flex justify-between items-stretch">

        <div className="w-[500px] bg-white p-6 rounded-lg shadow-md mb-8">
      <h1 className="text-2xl font-bold text-right mb-8 text-gray-800">اطلاعیه</h1>
      <p>بیشتر روی صحبت کردن کار کن و فیلم ببین</p>
      </div>
    
        {/* Grades Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4 text-blue-600 border-b-2 border-blue-200 pb-2">نمرات</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {grades.map((item, index) => (
              <div key={index} className="bg-blue-50 p-3 rounded-lg text-center">
                <p className="font-medium text-gray-700">{item.course}</p>
                <p className="text-lg font-bold text-blue-600">{item.grade}</p>
              </div>
            ))}
          </div>
        </div>


        </div>
     
    
  
        {/* Class Schedule Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-blue-600 border-b-2 border-blue-200 pb-2">برنامه کلاس‌ها</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-center">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3">روز</th>
                  <th className="p-3">شنبه</th>
                  <th className="p-3">یکشنبه</th>
                  <th className="p-3">دوشنبه</th>
                  <th className="p-3">سه‌شنبه</th>
                  <th className="p-3">چهارشنبه</th>
                  <th className="p-3">پنجشنبه</th>
                  <th className="p-3">جمعه</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 font-medium bg-gray-50">ساعت</td>
                  {['شنبه', 'یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه'].map(day => {
                    const classData = classSchedule.find(item => item.day === day);
                    return (
                      <td key={day} className="p-3 border">
                        {classData ? classData.time : '-'}
                      </td>
                    );
                  })}
                </tr>
                <tr>
                  <td className="p-3 font-medium bg-gray-50">استاد</td>
                  {['شنبه', 'یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه'].map(day => {
                    const classData = classSchedule.find(item => item.day === day);
                    return (
                      <td key={day} className="p-3 border">
                        {classData ? classData.professor : '-'}
                      </td>
                    );
                  })}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }