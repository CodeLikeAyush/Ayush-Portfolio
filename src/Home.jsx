import React from 'react'
import CommonTemplate from './CommonTemplate';
import hello from '../src/static/images/hello.png'


function Home() {
    return (
        <div>
            {/* <img src={hello} alt="" /> */}
            <CommonTemplate H1="Hi there !" H2="A warm welcome by" name = "Ayush Raj" para="With a lot of efforts and learnings,I created this website using React, Material-UI and Bootstrap. Hope you would like it." imgSrc={hello} btnText="About Me" link="https://codelikeayush.github.io/porfolio-experiment/#/aboutme" targt="" />
        </div>
    )
}

export default Home
