import React from 'react'
import CommonTemplate from './CommonTemplate';
import hello from '../src/static/images/hello.png'


function Home() {
    return (
        <div>
            {/* <img src={hello} alt="" /> */}
            <CommonTemplate imgSrc={hello} btnText="About Me" link="http://localhost:3000/porfolio-experiment#/aboutme" targt="" />
        </div>
    )
}

export default Home
