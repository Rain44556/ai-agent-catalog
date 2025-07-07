import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import React from 'react';

const layout = ({children}: {children: React.ReactNode}) => {
    return (
    <>
      <div className='max-w-7xl mx-auto'>
        <Navbar></Navbar>
        <main className='min-h-screen'>{children}</main>
        <Footer></Footer>
      </div>
        </>
    );
};

export default layout;