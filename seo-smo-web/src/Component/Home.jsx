import React from 'react';
import "../App.css";
import location from "../assets/location.png"
import smartphone from "../assets/smartphone.png"

import mobile from "../assets/mobilePreview.png";
function Home() {
  return (
    <div className="bg-blue-500 text-white p-4" >
   <div className='flex flex-row  p-6 '> 
    <div style={{ width: '55%' ,border:"solid black"}} className='m-12 '>
      <h1 className="text-5xl font-bold">Digital Marketing Company In India</h1>
      <p className="mt-8 text-3xl ">Best Digital Marketing Services In India From Top Rated Digital Marketing Experts</p>
      <p className='mt-8 text-2xl '>A Well-Known Digital Marketing Company in India focused on Client Business Growth Only. Our digital marketing experts are offering Digital Marketing Solutions for businesses for more than 10 Years.</p>
      <div className='flex justify-between m-12'>
       <div className='flex'>
       <img  className='w-14 h-14' src={location}/>
       <p> Noida , UP</p>
       </div>

       <div  className='flex '>
       <img  className='w-14 h-14' src={smartphone}/>
       <p>More Information Call Us</p>
       </div>
      </div>
      </div>


   
    <div>
      <img    style={{ width: '100%', height: '100%' }}className='' src={mobile}/>
    </div>
   </div>

    </div>
  );
}

export default Home;
// 
