
import React from "react";
// import './home.css'


const Home = () => {

    return (
        <>
   <div style={{
    color:'white',
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'center',
    flexDirection:'column'
    }}>
    <p style={{fontSize:'60px'}}>Im' Meow Meow</p>
    <h1>โรงเรียน มอ.วิทยานุสรณ์</h1>
    <h3>ชั้นมัธยมศึกษาปีที่ 8</h3>
     <img style={{width:'500px'}} src="./cat.png"/>
   </div>
  <div style={{color:'white',margin:'80px'}}>
    <h2>Profile</h2>
    <h4>Name :    Meow  Meow</h4>
    <h4>Age :    300 years old</h4>
    <h4>Hobbies :   Music , Book ,Game</h4>
  </div>
        </>
    )
}

export default Home
