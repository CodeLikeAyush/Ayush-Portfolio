import React from 'react'
import Footer from './Footer';

import VerticalLinearStepper from './VertStepper';

// import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';



function AboutMe() {
    return (

        <>
            <div style={{ height: "3em" }}></div>

            <div
                className="container mx-auto mt-5"
                style={{ marginBottom: '500px ' }}>
                <h1
                    className="text-center my-1 text-primary">

                    About Me</h1>
                <br />
                <br />
                <br />


                <div className='d-block my-3 '>
                    <h1 className='text-left px-5 py-2 bg-danger'>🗒️education</h1>
                </div>
                <br />


                <div className='d-block my-5' style={{ width: "90vw", height: "15em", border: "3px solid black", borderRadius: "1em" }}>
                    <h3 className='my-3 text-center'>High School🏫</h3>
                    <div className='mx-3'>
                        <ul>
                            <li>School : Jawahar Navodaya Vidyalaya Gaya-2, Bihar</li>
                            <li>Percentage : 92%</li>
                            <li>Passing Year : 2018</li>
                        </ul>
                    </div>
                </div>
                <br />
                <div className='d-block my-5' style={{ width: "90vw", height: "15em", border: "3px solid black", borderRadius: "1em" }}>
                    <h3 className='my-3 text-center'>📚Intermediate</h3>
                    <div className='mx-3'>
                        <ul>
                            <li>School : Jawahar Navodaya Vidyalaya, Bangalore Urban</li>
                            <li>Percentage : 92%</li>
                            <li>Passing Year : 2020</li>
                        </ul>
                    </div>
                </div>
                <br />
                <div className='d-block my-5' style={{ width: "90vw", height: "15em", border: "3px solid black", borderRadius: "1em" }}>
                    <h3 className='my-3 text-center'>🎓College</h3>
                    <div className='mx-3'>
                        <ul>
                            <li>Degree : B.Tech</li>
                            <li>Stream : Mining Engineering</li>
                            <li>Institute : Jawahar Navodaya Vidyalaya, Bangalore Urban</li>
                            <li>CGPA* : 7.2(*3rd semester) </li>
                            <li>Passing Year : Currently enrolled</li>
                        </ul>
                    </div>
                </div>
                <br />
                {/* <div style={{ height: "15em" }}></div> */}
                <div className='d-block my-3 '>
                    <h1 className='text-left px-5 py-2 bg-danger'>⚙️skills</h1>
                </div>
                <br />


                <div className='d-block my-5' style={{ width: "90vw", height: "15em", border: "3px solid black", borderRadius: "1em" }}>
                    <h3 className='my-3 text-center'>🧑🏿‍💻Competitive Coding</h3>
                    <div className='mx-3'>
                        <ul>
                            <li>Language(s) : C & C++</li>
                            {/* <li>Percentage : 92%</li>
                            <li>Passing Year : 2018</li> */}
                        </ul>
                    </div>
                </div>
                <br />
                <div className='d-block my-5' style={{ width: "90vw", height: "15em", border: "3px solid black", borderRadius: "1em" }}>
                    <h3 className='my-3 text-center'>🔎web development</h3>
                    <div className='mx-3'>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>ReactJs</li>
                            <li>MongoDB</li>
                            <li>NodeJs</li>
                        </ul>
                    </div>
                </div>
                <br />






            </div>


        </>
    )
}

export default AboutMe;
