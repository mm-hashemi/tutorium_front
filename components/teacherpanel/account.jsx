'use client';

export default function AccountTeacher() {
    const userInfo = {
        fullName: 'علی محمدی',
        phoneNumber: '09123456789',
        documents: [
          { id: 1, name: 'مدرک تحصیلی', status: 'تایید شده' },
          { id: 2, name: 'کارت ملی', status: 'در انتظار تایید' },
          { id: 3, name: 'گواهی سابقه کار', status: 'آپلود نشده' }
        ]
      }
  return (
    <div className="w-full flex justify-between text-right mt-5">
      
      {/* Profile Picture Card */}
      <div className="w-[250px] h-[400px] bg-white rounded-2xl shadow p-6 flex flex-col items-center justify-start">
        <div className="w-32 h-32 rounded-full bg-gray-300 mb-4"></div>
        <p className="text-gray-500">Lorem Ipsum</p>
      </div>

      {/* Form Card */}
   <div className=" flex flex-col gap-9">


   <div className="md:col-span-2 bg-white rounded-2xl shadow p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="نام و نام خانوادگی"
            className="p-3 bg-gray-50 rounded-md border border-gray-200"
          />
          <input
            type="text"
            placeholder="شماره تماس"
            className="p-3 bg-gray-50 rounded-md border border-gray-200"
          />
        </div>

        <textarea
          placeholder=""
          className="w-full p-3 bg-gray-50 rounded-md border border-gray-200"
        ></textarea>

       
      </div>

   
     
      {/* Documents Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-blue-600 border-b-2 border-blue-200 pb-2">مدارک</h2>
        
        <div className="space-y-4">
          {userInfo.documents.map((doc) => (
            <div key={doc.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h3 className="font-medium">{doc.name}</h3>
                <span className={`text-sm ${
                  doc.status === 'تایید شده' ? 'text-green-600' : 
                  doc.status === 'در انتظار تایید' ? 'text-yellow-600' : 'text-gray-500'
                }`}>
                  {doc.status}
                </span>
              </div>
              
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                {doc.status === 'آپلود نشده' ? 'بارگذاری مدرک' : 'مشاهده مدرک'}
              </button>
            </div>
          ))}
        </div>
      </div>

   </div>
    </div>
  );
}
