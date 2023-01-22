import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../../styles/Footer.module.css'
const inter = Inter({ subsets: ['latin'] })
import Link from 'next/link'
import React, { useState } from 'react';




export default function Footer() {
 

  return (
    <>
     <div className={styles.main_footer}>
     
     <div className={styles.footer_container}>
        
        <div className={styles.footer_container_one}>
          <img src="https://www.brightskills.com/_nuxt/img/logo-white.395dad6.svg" width="100%" height="345" className={styles.footer_image}/>
          <div className={styles.footer_descirpt}>
            ব্রাইট স্কিলস বাংলাদেশের অন্যতম সেরা ই-লার্নিং স্কিল ডেভেলপমেন্ট প্ল্যাটফর্ম। দক্ষতা উন্নয়নের মাধ্যমে দেশ থেকে বেকারত্ব দূরীকরণ এবং বৈশ্বিক মানবসম্পদ তৈরিতে আমরা প্রতিশ্রুতিবদ্ধ।
          </div>
        </div>


        <div className={styles.footer_container_two}>
          <div className={styles.footer_course_header}>কোর্স ক্যাটেগরি</div>          
          <div className={styles.footer_course_list}>              
                <div className={styles.footer_course_course}>3d ভিজুয়ালইজেনশন</div>
                <div className={styles.footer_course_course}>সফট স্কিলস</div>
                <div className={styles.footer_course_course}>ডিজাইন</div>
                <div className={styles.footer_course_course}>ডিজিটাল মার্কেটিং</div>
                <div className={styles.footer_course_course}>রোবটিক অটোমেশন</div>
                <div className={styles.footer_course_course}>মাইক্রোসফট অফিস</div>
                <div className={styles.footer_course_course}>ভাষা শিক্ষা</div>
                <div className={styles.footer_course_course}>লজিষ্ট্রিক্স এবং সাপ্লাই চেইন</div>
                <div className={styles.footer_course_course}>মাল্টিমিডিয়া</div>
                <div className={styles.footer_course_course}>আই সিটি অলিম্বিক বাংলাদেশ</div>
                <div className={styles.footer_course_course}>কম্পিউটার নেটওয়ার্ক</div>
          </div>
        </div>
        

        <div className={styles.footer_container_three}>
          <div className={styles.footer_course_header}>প্রয়োজনীয় লিঙ্ক</div>
              <div className={styles.footer_course_list}>   
              <div className={styles.footer_course_course}>সার্টিফিক্টে খুজুন</div>
                <div className={styles.footer_course_course}>ব্লগ</div>
                <div className={styles.footer_course_course}>স্টুডেন্ট ফিডব্যাক</div>
                <div className={styles.footer_course_course}>সার্টিফিকটে</div>
                <div className={styles.footer_course_course}>3d ভিজুয়ালইজেনশন</div>
                <div className={styles.footer_course_course}>আমাদের সাথে যোগাযোগ</div>
          </div>
        </div>


        <div className={styles.footer_container_four}>
          <div className={styles.footer_course_header}>লিগ্যাল</div>          
          <div className={styles.footer_course_list}>              
              <div className={styles.footer_course_course}>ব্যবহার বিধি</div>
              <div className={styles.footer_course_course}>FAQ</div>
              <div className={styles.footer_course_course}>প্রাইভেসি পলিসি</div>
              <div className={styles.footer_course_course}>আমাদের সম্পর্কে</div>
          </div>
        </div>


     </div>

     </div>          
    </>
  )
}


