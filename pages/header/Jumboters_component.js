import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../../styles/Home.module.css'
const inter = Inter({ subsets: ['latin'] })
import Link from 'next/link'
import React, { useState } from 'react';




export default function Jumboters_component() {

 

  return (
    <>
      <div className={styles.main_jumboter}>      
        <div className={styles.jumboter_container}>
          <div className={styles.jumboter_left}>
            <div className={styles.slider_title}>লক্ষ্য হোক দক্ষ হওয়া!</div>
            <div className={styles.slider_descript}>
              ‘সব সম্ভব’- এর এই যুগে আপনি কেনো ‘অসম্ভব’ এর নামতা আওড়াচ্ছেন? এখন ঘরে বসেই নিজের স্কিল ডেভেলপ করুন- সেরা এক্সপার্টদের কাছ থেকে!
              </div>
              <div className={styles.slider_course_btn}>All Course</div><br/>
          </div>
          <div className={styles.jumboter_right}>
              <img src="https://panel.brightskills.com/media/homepage/Website-Header2_1.png" width="100%" height="345" className={styles.jumboter_image}/>
          </div>
        </div>
      </div> 
    </>
  )
}


