'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from 'recharts';

const barData = [
  {
    name: 'آزمون اول',
    Reading: 70,
    Writing: 60,
    Listening: 80,
    Speaking: 60,
  },
  {
    name: 'آزمون دوم',
    Reading: 65,
    Writing: 55,
    Listening: 45,
    Speaking: 50,
  },
  {
    name: 'آزمون سوم',
    Reading: 75,
    Writing: 45,
    Listening: 65,
    Speaking: 60,
  },
  {
    name: 'آزمون چهارم',
    Reading: 85,
    Writing: 90,
    Listening: 70,
    Speaking: 75,
  },
];

const pieData = [
  { name: 'Reading', value: 6 },
  { name: 'Writing', value: 7 },
  { name: 'Listening', value: 5 },
  { name: 'Speaking', value: 8 },
];

const COLORS = ['#00C49F', '#0088FE', '#FFBB28', '#8884d8'];

export default function StudentProgress() {
  return (
    <div className="max-w-6xl mx-auto py-6 space-y-8">
      {/* Table */}
      
      <div className="bg-white p-4 rounded shadow text-center">
        <h2 className="text-xl font-bold mb-4">نتایج آزمون ها</h2>
        <table className="w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">آزمون اول</th>
              <th className="border px-4 py-2">آزمون دوم</th>
              <th className="border px-4 py-2">آزمون سوم</th>
              <th className="border px-4 py-2">آزمون چهارم</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">شنبه ۱۴۰۴/۰۵/۰۱</td>
              <td className="border px-4 py-2">شنبه ۱۴۰۴/۰۵/۰۱</td>
              <td className="border px-4 py-2">شنبه ۱۴۰۴/۰۵/۰۱</td>
              <td className="border px-4 py-2">شنبه ۱۴۰۴/۰۵/۰۱</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Score and Chart Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Score Box */}
        <div className="bg-white p-6 rounded shadow flex flex-col items-center justify-center">
          <div className="text-6xl font-bold mb-2">۶</div>
          <div className="text-lg font-semibold mb-4">آخرین نمره</div>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                outerRadius={80}
                fill="#8884d8"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-white p-6 rounded shadow">
          <div className="text-sm text-gray-500 text-right mb-2">۱۴۰۴/۰۴/۰۱</div>
          <h3 className="text-lg font-semibold text-right mb-2">پیشرفت تحصیلی دانشجو</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Reading" fill="#00C49F" />
              <Bar dataKey="Writing" fill="#0088FE" />
              <Bar dataKey="Listening" fill="#FFBB28" />
              <Bar dataKey="Speaking" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
