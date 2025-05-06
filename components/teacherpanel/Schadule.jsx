export default function MeetingSchedule() {
    // Sample schedule data
    const schedule = [
      { time: '۸-۹', days: ['گروه A', '', '', 'گروه B', '', '', ''] },
      { time: '۹-۱۰', days: ['', 'گروه D', '', '', 'گروه c', '', ''] },
      { time: '۱۰-۱۱', days: ['', '', 'جلسه تاریخ', '', '', 'جلسه زیست', ''] },
      { time: '۱۱-۱۲', days: ['', '', '', 'جلسه جغرافیا', '', '', ''] },
      { time: '۱۲-۱۳', days: ['', 'جلسه هنر', '', '', '', '', ''] },
      { time: '۱۴-۱۵', days: ['جلسه ورزش', '', '', '', '', '', ''] },
      { time: '۱۶-۱۷', days: ['', '', 'جلسه کامپیوتر', '', '', '', ''] },
      { time: '۱۸-۱۹', days: ['', '', '', '', 'جلسه موسیقی', '', ''] },
    ]
  
    const days = ['شنبه', 'یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه']
  
    return (
      <div className="container mx-auto p-4 max-w-6xl">
        <h1 className="text-2xl font-bold text-center mb-8 text-gray-800">برنامه جلسات</h1>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 w-24">زمان</th>
                  {days.map((day, index) => (
                    <th key={index} className="p-3">{day}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {schedule.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    <td className="p-3 font-medium text-center bg-gray-50">{row.time}</td>
                    {row.days.map((meeting, dayIndex) => (
                      <td key={dayIndex} className="p-3 border text-center min-w-[120px] h-16">
                        {meeting && (
                          <div className="bg-blue-50 text-blue-800 p-2 rounded-md text-sm">
                            {meeting}
                          </div>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }