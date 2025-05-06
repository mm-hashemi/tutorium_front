import Head from 'next/head';
import { Bar, Pie } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend,
  ArcElement
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export default function AdminChart() {
  const monthlyIncomeData = {
    labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور'],
    datasets: [
      {
        label: 'درآمد (میلیون تومان)',
        data: [12, 19, 8, 15, 12, 18],
        backgroundColor: 'rgba(54, 162, 235, 0.7)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const monthlyIncomeOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: {
        display: true,
        text: 'چارت درآمد ماهانه',
        font: { size: 16 },
      },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  const priceList = [
    { id: 1, name: 'محمدرضا هاشمی', price: '۲,۵۰۰,۰۰۰ تومان' },
    { id: 2, name: 'محمدرضا هاشمی', price: '۱,۸۰۰,۰۰۰ تومان' },
    { id: 3, name: 'علی محمدی', price: '۳,۲۰۰,۰۰۰ تومان' },
    { id: 4, name: 'فاطمه زهرا احمدی', price: '۲,۱۰۰,۰۰۰ تومان' },
  ];

  const expensesData = {
    labels: ['هزینه هاست', 'هزینه دامنه', 'مالیات', 'آزمون ها'],
    datasets: [
      {
        data: [35, 25, 20, 20],
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const expensesOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'right' },
    },
  };

  const totalExpenses = expensesData.datasets[0].data.reduce((a, b) => a + b, 0);

  return (
    <div className="" dir="rtl">
      <Head>
        <title>پنل مدیریت درآمد</title>
        <meta name="description" content="پنل مدیریت درآمد و هزینه ها" />
      </Head>

    

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow">
          <div className="h-64">
            <Bar data={monthlyIncomeData} options={monthlyIncomeOptions} />
          </div>
          <div className="flex justify-between mt-4">
            <div className="bg-red-100 text-red-800 px-4 py-2 rounded-lg">
              <span className="font-bold">کمترین: </span>
              <span>۸ میلیون تومان (خرداد)</span>
            </div>
            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg">
              <span className="font-bold">بالاترین: </span>
              <span>۱۹ میلیون تومان (اردیبهشت)</span>
            </div>
          </div>
        </div>

        <div className="w-[350px] bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-4">لیست قیمت ها</h2>
          <div className="space-y-3">
            {priceList.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b pb-2">
                <div className="flex items-center">
                  <span className="text-gray-500 ml-2">{item.id}......</span>
                  <span>{item.name}</span>
                </div>
                <span className="font-bold">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-4">هزینه های جاری</h2>
          <div className="h-64">
            <Pie data={expensesData} options={expensesOptions} />
          </div>
        </div>

        <div className="w-[350px] bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-4">جزئیات هزینه ها</h2>
          <div className="space-y-4">
            {expensesData.labels.map((label, index) => (
              <div key={index} className="flex justify-between">
                <span>{label}:</span>
                <span className="font-bold">{expensesData.datasets[0].data[index]}٪</span>
              </div>
            ))}
            <div className="border-t border-gray-200 my-3"></div>
            <div className="flex justify-between text-lg font-bold">
              <span>جمع کل:</span>
              <span>{totalExpenses}٪</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
