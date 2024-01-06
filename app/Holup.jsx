import React from 'react';
import Nav from './components/Navigation/Nav';


import Image from 'next/image';
import { CiFaceSmile as Smile } from "react-icons/ci";
import { GrInProgress } from "react-icons/gr";
const Holup = () => {
  return (
    <>
    <Nav/>
   <div className='text-black flex align-center justify-center flex-col text-center mt-40' >
    <div className='flex align-center self-center justify-center'>
<img src='/images/holup.png' alt='Appa <3' className='align-center self-center'/>
    </div>

    <h1 className='text-xl self-center' style={{fontFamily:'Hanken Grotesk Variable', fontSize: '20px', fontWeight:'bold', color: '#08090B'}}><GrInProgress/></h1>

   </div>
   </>
  )
} 

export default Holup