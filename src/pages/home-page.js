
import React from "react";

// import './home.css'

const Home = () => {

    return (
        <>
            <div style={{ color: 'white' }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                }}>
                    <img src="./cat.png" alt='hh' style={{
                        width: '500px'
                    }} />
                    <div >
                        <p style={{ fontSize: '64px' }}>I'm Meowmeow Meowmeow</p>
                        <h1 >โรงเรียน มอ.วิทยานุสรณ์</h1>
                        <h3>มัธยมศึกษาปีที่ 8</h3>
                    </div>
                </div>
                <div style={{
                    margin: '80px'
                }}>
                    <h2>About</h2>
                    <div>
                        <h4>Name: Meowmeow Meowmeow</h4>
                        <h4>Age: 300  year old</h4>
                        <h4>Hobbies: Music,Book</h4>
                        <h4>Favorite Color : Red</h4>

                    </div>
                </div>
                <div style={{
                    margin: '80px'

                }}>
                    <h2>Skills</h2>
                    <div>
                        <h4>Artificial Intelligence (AI) </h4>
                        <h5>ฉันสามารถสร้างเอไอเลียนแบบแมวได้ ฉันเก่งมากหน้าฉันก็เหมือนแมวดูสิ</h5>
                    </div>
                    <div>
                        <h4>Mathematics </h4>
                        <h5>ฉันได้รับรางวัล เกียวกับคณิตศาสตร์มากมาย อย่างเช่น คิดเลขเร็วมาก แต่ไม่มีไครเข้าใจภาษาฉันเลย</h5>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home