import React from "react";
import CommonTemplate from "./CommonTemplate";
import hello from "../src/static/images/hello.png";

function Home() {
  return (
    <div>
      {/* <img src={hello} alt="" /> */}
      {/* <CommonTemplate H1="Hi there !" H2="A warm welcome by" name = "Ayush Raj" para="With a lot of efforts and learnings,I created this website using React, Material-UI and Bootstrap. Hope you would like it." imgSrc={hello} btnText="About Me" link="https://codelikeayush.github.io/Ayush-Portfolio/#/aboutme" targt="" /> */}
      <CommonTemplate
        H1="Hi there !"
        H2="A warm welcome by"
        name="Ayush Raj"
        para="With a lot of efforts and learnings,I created this website using React, Material-UI and Bootstrap. Hope you would like it."
        imgSrc={hello}
        btnText="Resume"
        link="https://drive.google.com/file/d/16jJ18jo9DwtnIi20byrmTU_oSt9ybmRq/view?usp=sharing"
        targt="_blank"
      />
    </div>
  );
}

export default Home;
