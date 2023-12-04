
import React from "react";
import './home.css'


const Home = () => {

    return (
        <>
   <div style={{
    color:'black',
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'center',
    flexDirection:'column'
    }}>
    <p style={{fontSize:'60px'}}>Im' PHAIRAT KAEWKANDEE</p>
    <h1>Print Of SongKla University</h1>
    <h2>Bachelor of Science </h2>
    <h3>Computer Science </h3>
     <img style={{width:'500px'}} src="./cat.png"/>
   </div>
  <div style={{color:'black',margin:'80px'}}>
    <h1>ประวัติส่วนตัว</h1>
    <h4>Name :    Phairat Kaewkandee</h4>
    <h4>Age :    300 years old</h4>
    <h4>Hobbies :   Music , Book ,Game</h4>
  </div>
  <div style={{color:'black',margin:'80px'}}>
    <h1>ประสบการณ์ทำงาน</h1>
    <p style={{fontSize:'18px'}}>
<span style={{color:'tomato'}}>Software Engineer</span> บริษัท มั่งมีไม่ จำกัด
    </p>
    <p style={{fontSize:'18px'}}>
<span style={{color:'tomato'}}>Web application</span> พัฒนาแอปพลิเคชันบนโทรศัพท์มือถือ  บริษัท งบประมาณมี จำกัด
    </p>
  </div>
  <div style={{color:'black',margin:'80px',fontFamily: 'Kanit'}}>
    <h1>ภาษาที่ฉันเขียนได้</h1>
    <div style={{
      display:'flex',
      justifyContent:'space-around',
      alignItems:'center'
    }}>
      <div>
        <img style={{width:'50px',height:'50px'}} src="js.png"/>
        <p>Javascript</p>
      </div>
      <div>
        <img style={{width:'50px',height:'50px'}} src="ft.png"/>
        <p>Flutter</p>
      </div>
      <div>
        <img style={{width:'50px',height:'50px'}} src="django.jpg"/>
        <p>Django</p>
      </div>
    </div>
  </div>
  <div style={{color:'black',margin:'80px',fontFamily: 'Kanit'}}>
    <h1>รางวัลและเกียรติประวัติ</h1>
    <div style={{
      display:'flex',
      justifyContent:'space-around',
      alignItems:'center'
    }}>
      <div>
        <img style={{width:'50px',height:'50px'}} src="js.png"/>
        <p>Javascript</p>
      </div>
      <div>
        <img style={{width:'50px',height:'50px'}} src="ft.png"/>
        <p>Flutter</p>
      </div>
      <div>
        <img style={{width:'50px',height:'50px'}} src="django.jpg"/>
        <p>Django</p>
      </div>
    </div>
  </div>
        </>
    )
}

export default Home
