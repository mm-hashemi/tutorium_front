'use client'
import Head from 'next/head';
import { Bar } from 'react-chartjs-2';
import { 
  FiHome, FiUsers, FiUser, FiMail, FiSettings, FiLogOut,
  FiDollarSign, FiBook, FiUserPlus 
} from 'react-icons/fi';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend 
} from 'chart.js';
import AdminChart from '@/components/adminpanel/payments';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function DashboardAdmin() {
  const stats = {
    monthlyIncome: '۲۰MT',
    studentsCount: '۱۰',
    teachersCount: '۲۰'
  };

  const chartData = {
    labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور'],
    datasets: [
      {
        label: 'دانشجویان جدید',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
      {
        label: 'اساتید جدید',
        data: [2, 3, 1, 5, 4, 2],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        rtl: true,
      },
      title: {
        display: true,
        text: 'آمار ماهانه',
        font: {
          size: 16,
        },
      },
    },
  };

  return (
    <div className="w-full mx-auto py-4 max-w-6xl" dir="rtl">
      <Head>
        <title>پنل مدیریت</title>
        <meta name="description" content="پنل مدیریت سیستم آموزشی" />
      </Head>


        {/* charts */}



      <div className="flex">
      

        {/* Main Content */}
        <main className="flex-1">
         
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow flex items-center">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FiDollarSign className="text-blue-600 text-xl" />
              </div>
              <div>
                <p className="text-gray-500">درآمد ماهانه</p>
                <p className="text-2xl font-bold">{stats.monthlyIncome}</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow flex items-center">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <FiUsers className="text-green-600 text-xl" />
              </div>
              <div>
                <p className="text-gray-500">تعداد دانشجویان</p>
                <p className="text-2xl font-bold">{stats.studentsCount}</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow flex items-center">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <FiUser className="text-purple-600 text-xl" />
              </div>
              <div>
                <p className="text-gray-500">تعداد اساتید</p>
                <p className="text-2xl font-bold">{stats.teachersCount}</p>
              </div>
            </div>
          </div>
          
          {/* Chart */}
          <div className="bg-white p-6 rounded-lg shadow mb-8">
            <div className="h-64">
              <Bar data={chartData} options={chartOptions} />
            </div>
          </div>
          
          {/* Recent Activity */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-4">فعالیت های اخیر</h3>
            <div className="space-y-4">
              <div className="flex items-start border-b pb-4">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <FiUserPlus className="text-blue-600" />
                </div>
                <div>
                  <p className="font-medium">استاد جدید ثبت نام کرد</p>
                  <p className="text-sm text-gray-500">۲ ساعت پیش</p>
                </div>
              </div>
              <div className="flex items-start border-b pb-4">
                <div className="bg-green-100 p-2 rounded-full mr-3">
                  <FiUsers className="text-green-600" />
                </div>
                <div>
                  <p className="font-medium">۵ دانشجوی جدید ثبت نام کردند</p>
                  <p className="text-sm text-gray-500">دیروز</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
