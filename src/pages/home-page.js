
import React from "react";
import './home.css'
import { Link } from "react-router-dom";


const Home = () => {

    return (
        <>
        <div
        style={{
          display:'flex',
          justifyContent:'space-around',
          alignItems:"center"
        }}
        >
          <div>
            <p id="home" style={{fontWeight:"bold"}}>Portfolio </p>
            </div>
          <div
          style={{
            width:"800px",
            display:'flex',
            justifyContent:'space-around',
            alignItems:"center"
          }}
          >
            <a href="#profile">ประวัติส่วนตัว</a>
            <a href="#experience">ประสบการณ์ทำงาน</a>
            <a href="#arch">รางวัลและเกียรติประวัติ</a>
            <a href="#text">ภาษาที่เขียนได้</a>
            <a href="#education">การศึกษา</a>
            <Link to="/list">โปเกมอน</Link>
          </div>
        </div>
            <div style={{
                color: 'black',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
                <p style={{ fontSize: '60px' }}>Im' PHAIRAT KAEWKANDEE</p>
                <h1>Print Of SongKla University</h1>
                <h2>Bachelor of Science </h2>
                <h3>Computer Science </h3>
                <img alt="ddd" style={{ width: '500px' }} src="./cat.png" />
            </div>
            <div  style={{ color: 'black', margin: '80px' }}>
                <h1 id="profile">ประวัติส่วนตัว</h1>
                <h4>Name :    Phairat Kaewkandee</h4>
                <h4>Age :    300 years old</h4>
                <h4>Hobbies :   Music , Book ,Game</h4>
            </div>
            <div style={{ color: 'black', margin: '80px' }}>
                <h1 id="experience">ประสบการณ์ทำงาน</h1>
                <p style={{ fontSize: '18px' }}>
                    <span style={{ color: 'tomato' }}>Software Engineer</span> บริษัท มั่งมีไม่ จำกัด
                </p>
                <p style={{ fontSize: '18px' }}>
                    <span style={{ color: 'tomato' }}>Web application</span> พัฒนาแอปพลิเคชันบนโทรศัพท์มือถือ  บริษัท งบประมาณมี จำกัด
                </p>
            </div>
            <div style={{ color: 'black', margin: '80px', fontFamily: 'Kanit' }}>
                <h1 id="text">ภาษาที่ฉันเขียนได้</h1>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center'
                }}>
                    <div>
                        <img alt="ddd" style={{ width: '50px', height: '50px' }} src="js.png" />
                        <p>Javascript</p>
                    </div>
                    <div>
                        <img alt="ddd" style={{ width: '50px', height: '50px' }} src="ft.png" />
                        <p>Flutter</p>
                    </div>
                    <div>
                        <img alt="ddd" style={{ width: '50px', height: '50px' }} src="django.jpg" />
                        <p>Django</p>
                    </div>
                </div>
            </div>
            <div style={{ color: 'black', margin: '80px', fontFamily: 'Kanit' }}>
                <h1 id="arch">รางวัลและเกียรติประวัติ</h1>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center'
                }}>
                    <div>
                        <img alt="ddd" style={{ width: '300px', height: '200px',objectFit:'contain' }} src="cer1.jfif" />
                        <p>รางวัลแข่งขันประกวดคัดภาษาไทย</p>
                        <p style={{fontSize:'13px'}}>ได้รับรางวัลจากการแข่งขันงานหัตถกรรมแห่งชาติครั้งที่ 300</p>
                    </div>
                    <div>
                        <img alt="ddd" style={{  width: '300px', height: '200px',objectFit:'contain' }} src="cer2.jfif" />
                        <p>รางวัลแข่งขันตอบปัญหาวิทายศาสตร์</p>
                        <p style={{fontSize:'13px'}}>ได้รับรางวัลจากการแข่งขันงานหัตถกรรมแห่งชาติครั้งที่ 300</p>
                    </div>
                   
                </div>
               
            </div>
            <div style={{ color: 'black', margin: '80px', fontFamily: 'Kanit' }}>
                <h1 id="education">การศึกษา</h1>
                <p>ยังไม่มี</p>
                </div>
            <div style={{ color: 'black', margin: '80px', fontFamily: 'Kanit' }}>
                <a href="#home">กลับสู่ด้านบน</a>
                
                </div>
        </>
    )
}

export default Home
