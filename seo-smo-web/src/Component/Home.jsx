import React from 'react';
import "../App.css";
import mobile from "../assets/mobilePreview.png";
function Home() {
  return (
    <div className="bg-blue-500 text-white p-4" >
   <div className='flex flex-row  p-6 '> 
    <div style={{ width: '75%', height: '100%' ,border:"solid black"}} className='m-12 '>
      <h1 className="text-5xl font-bold">Digital Marketing Company In India</h1>
      <p className="mt-8 text-3xl ">Best Digital Marketing Services In India From Top Rated Digital Marketing Experts</p>
      <p className='mt-8 text-2xl '>A Well-Known Digital Marketing Company in India focused on Client Business Growth Only. Our digital marketing experts are offering Digital Marketing Solutions for businesses for more than 10 Years.</p>
      <div>
        <img src=""/>
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
