import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../../styles/Slider.module.css'
const inter = Inter({ subsets: ['latin'] })
import Link from 'next/link'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'





const Slider_catagory = ()=>{

	const counter = useSelector((state) => state.reducer.show)

return (
    <>
		<div style={{padding:'20px'}}>{counter}</div>
    </>
  )


}

export default Slider_catagory;