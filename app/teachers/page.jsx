import AccountTeacher from '@/components/teacherpanel/account';
import TeacherAccount from '@/components/teacherpanel/account';
import MeetingSchedule from '@/components/teacherpanel/Schadule';
import TeacherDashboard from '@/components/teacherpanel/TeacherDash';
import StudentList from '@/components/teacherpanel/TeacherStudents';
import Head from 'next/head';

export default function TeacherPanel() {
  

  return (
    <div className="w-[98vw] h-[100vh] mx-auto mt-4" dir="rtl">
      <Head>
        <title>پنل استاد</title>
        <meta name="description" content="پنل مدیریت اساتید" />
      </Head>
      <header className="w-[90%] mx-auto bg-white shadow rounded-lg p-4 mb-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">پنل استاد</h1>
        
        </header>
      <div className="w-[90%] mx-auto">
     
          <TeacherDashboard/>
        <AccountTeacher/>
        <StudentList/>
        <MeetingSchedule/>
      
      </div>
    </div>
  );
}
