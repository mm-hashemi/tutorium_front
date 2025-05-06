'use client';

import Link from 'next/link';
import { useContext } from 'react'
import { AuthContext } from '@/_context/AuthContext';
import AuthModal from './authModals/AuthModal';
export default function Header() {
  const { user, setShowAuthModal, setAuthType, logout } = useContext(AuthContext)
  return (
    <header className="bg-white py-4 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">
          <Link href="/"><img src="assets/images/logotu.jpg" alt="" className='w-[120px]'/></Link>
        </h1>
        <nav className="">
         <ul className='flex gap-8'>
            <li><Link href="/" className="hover:text-purple-600">خانه</Link></li>
            <li><Link href="/teachers" className="hover:text-purple-600">مدرسان</Link></li>
            <li><Link href="/about" className="hover:text-purple-600">درباره ما</Link></li>
            <li><Link href="/contact" className="hover:text-purple-600">تماس با ما</Link></li>
         </ul>
          
        </nav>

        <button className='bg-purple-600 px-6 py-2 rounded-2xl text-white cursor-pointer'  onClick={() => {
                setAuthType('register')
                setShowAuthModal(true)
              }}>ورود</button>
                    {!user && <AuthModal />}
      </div>
    </header>
  );
}
