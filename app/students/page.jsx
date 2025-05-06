'use client'

import StudentDashboard from "@/components/studentpanel/studentDash";
import StudentProgress from "@/components/studentpanel/StudentProgres";



export default function StudentPanel() {
  return (
    <div className="w-[98vw] mx-auto mt-4">
        <header className="w-[90%] mx-auto bg-white shadow rounded-lg p-4 mb-6">
          <h1 className="text-2xl font-bold text-gray-800">پنل دانشجویی</h1>
            </header>
            <div className="w-[90%] mx-auto">

     <StudentDashboard/>
      <StudentProgress/>
              
            </div>
    </div>
  );
}
