// app/page.tsx (در صورت استفاده از App Router)
// یا pages/index.tsx (در صورت استفاده از Pages Router)

import BecomeTeacher from "@/components/RegisterTeacher";

export default function Page() {
  return (
    <>
    <main className="max-w-7xl mx-auto font-sans bg-white text-gray-800">
      {/* هدر و فرم */}
      <section className=" bg-zinc-50 mt-10 px-6 py-12 shadow-2xl rounded-2xl flex flex-col lg:flex-row items-center justify-between">

        <div className="mt-8 lg:mt-0 bg-white p-6 rounded-xl shadow-md border-2 border-purple-500 w-full max-w-md ">
          <input type="text" placeholder="نام و نام خانوادگی" className="w-full mb-4 p-2 border rounded" />
          <input type="text" placeholder="شماره تماس" className="w-full mb-4 p-2 border rounded" />
          <button className="bg-purple-600 text-white w-full py-2 rounded hover:bg-purple-700 transition">
            ثبت‌نام برای مشاوره رایگان
          </button>
        </div>

        <div className="max-w-xl w-[400px]">
          <h1 className="text-3xl font-bold text-purple-700 leading-loose">
            با کمترین هزینه و بهترین معلم‌های خصوصی آیلتس
          </h1>
          <p className="mt-4 text-lg text-purple-800">
            از اولین قدم تا دریافت نمره دلخواهت همراهت هستیم؛ یاد بگیر، تمرین کن، رزرو کن و نتیجه بگیر!
          </p>
        </div>
      </section>
      <section>
        <BecomeTeacher/>
      </section>
      {/* خدمات */}
      <section className="py-12 px-6 text-center grid grid-cols-1 md:grid-cols-3 gap-6">
        {['رزرو کلاس آنلاین', 'تمرین با معلم', 'تحلیل نقاط ضعف'].map((title, index) => (
          <div key={index} className="border rounded-xl p-6 shadow">
           <div className="flex items-center justify-between">
           <h3 className="text-xl font-bold mb-2">{title}</h3>
           <i className='bx bx-desktop text-3xl'></i>
           </div>
            <p className="text-sm text-gray-600 text-right">
            گزارش‌گیری مستمر به شما این امکان را می‌دهد که روند پیشرفت خود را در بازه‌های زمانی مختلف بررسی کنید و نقاط قوت و ضعف‌تان را دقیق‌تر بشناسید. این گزارش‌ها بر اساس فعالیت‌های کلاسی، تمرین‌ها و بازخورد معلمان تولید می‌شوند. با تحلیل منظم عملکرد، می‌توانید مسیر یادگیری‌تان را هوشمندانه‌تر تنظیم کنید و سریع‌تر به نمره دلخواه برسید.

            </p>
          </div>
        ))}
      </section>

      {/* اساتید */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-center text-2xl font-bold mb-8">اساتید ما</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white border rounded-xl shadow p-4 text-center">
              <img
                src="assets/images/teacher.jpg"
                alt="معلم"
                className="mx-auto mb-4 w-32 h-32 object-cover rounded-full border"
              />
              <h4 className="font-semibold text-lg">سارا احمدی</h4>
              <p className="text-sm text-gray-600 mt-2">
                استاد زبان انگلیسی با ۷ سال سابقه تدریس آیلتس و نمره ۸ در Speaking.
              </p>
              <button className="mt-4 bg-purple-600 text-white py-1 px-4 rounded hover:bg-purple-700">
                مشاهده پروفایل
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* درباره ما */}
      {/* <section className="py-16 px-6 flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="w-full max-w-sm h-64 bg-gray-300 rounded-lg"></div>
        <div className="max-w-xl">
          <h2 className="text-2xl font-bold mb-4">درباره ما</h2>
          <p className="text-gray-700 leading-relaxed">
            ما تیمی از معلمان حرفه‌ای آیلتس هستیم که با هدف ارتقای سطح زبان‌آموزان و کمک به کسب نمره بالا، آموزش را
            متناسب با نیاز هر فرد طراحی کرده‌ایم.
          </p>
        </div>
      </section> */}

      {/* بخش انتهایی */}
    </main>
      <footer className="bg-gray-300 p-8 pb-44 flex items-center justify-around">
        <div className="max-w-md text-right">
          <h4 className="font-bold text-xl mb-2">چرا tutorium</h4>
          <p className="text-sm text-gray-700">
          TUTORIUM با رویکردی نوین در آموزش، فضایی هوشمند و منعطف برای یادگیری زبان فراهم کرده است. ما با ترکیب تکنولوژی، مدرسین حرفه‌ای و گزارش‌گیری مستمر، مسیر یادگیری را هدفمند و شفاف می‌کنیم. اگر به دنبال تجربه‌ای متفاوت، مؤثر و لذت‌بخش در یادگیری هستید، توتوریوم انتخابی مطمئن است
          </p>
        </div>
        <div className="w-24 h-24 bg-white rounded"></div>
      </footer>
      </>
  );
}
