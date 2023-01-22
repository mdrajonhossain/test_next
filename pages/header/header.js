import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../../styles/Home.module.css'
const inter = Inter({ subsets: ['latin'] })
import Link from 'next/link'
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState } from 'react';




export default function Header() {

  const [show, setShow] = useState(true);

 const showNavbar = () => {
    setShow(!show)
  };



  return (
    <>
        <div className={styles.nav_header}>
            <div className={styles.container}>
              <div className="logo">shikhonschool</div>

              <div className={show ? styles.navber : styles.navber_show}>
              <div className={styles.tab_close_btn} onClick={showNavbar}><FaTimes size={24}/></div>
                <ul>
                  <li>লগিন</li>
                  <li>রেজিষ্ট্রেশন</li>
                  <li>কোর্স</li>
                  <li>লার্নিং</li>
                  <li>বুক স্টোর</li>
                  <li>ব্লক</li>
                  <li>কুইজ</li>
                </ul>
              </div>              
              <div className={styles.toggle} onClick={showNavbar}><FaBars size={24}/></div>
             
            </div>
        </div>
    </>
  )
}


