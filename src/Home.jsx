import React from 'react'
import CommonTemplate from './CommonTemplate';
import hello from '../src/static/images/hello.png'


function Home() {
    return (
        <div>
            {/* <img src={hello} alt="" /> */}
            <CommonTemplate imgSrc={hello} btnText="About Me" link="https://codelikeayush.github.io/porfolio-experiment/#/aboutme" targt="" />
        </div>
    )
}

export default Home
