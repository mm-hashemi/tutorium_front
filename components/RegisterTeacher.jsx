'use client';

import Link from 'next/link';

export default function BecomeTeacher() {
  return (
    <section className="bg-gray-100 py-12 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-purple-700">
          به جمع مدرسان ما بپیوندید
        </h2>
        <p className="text-gray-700 mb-6 text-2xl">
          اگر مدرس باتجربه‌ای هستید و علاقه‌مند به آموزش آنلاین، می‌توانید با ثبت‌نام در TUTORIUM به صدها زبان‌آموز دسترسی پیدا کنید و درآمد پایدار داشته باشید.
        </p>
        <Link
          href="/teacher/register"
          className="inline-block bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 px-6 rounded-xl transition"
        >
          ثبت‌نام به عنوان مدرس
        </Link>
      </div>
    </section>
  );
}
