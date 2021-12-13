import React from 'react'
import CommonTemplate from './CommonTemplate';
import hello from '../src/static/images/hello.png'


function Home() {
    return (
        <div>
            {/* <img src={hello} alt="" /> */}
            <CommonTemplate imgSrc={hello} btnText="About Me" />
        </div>
    )
}

export default Home
