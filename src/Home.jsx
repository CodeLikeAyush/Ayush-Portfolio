import React from "react";
import hello from '../src/static/images/hello.png'

function Home() {
    return (

        <div className="showcase-area colorVar" id="home">
            <div className="container">
                <div>
                    <div className="big-title">
                        <h1>Hi there !</h1>
                        <h1>A warm welcom by
                            <br /><strong>AYUSH RAJ</strong>
                        </h1>
                    </div>

                    <p className="text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Delectus eius odit, magnam qui ex perferendis vitae!
                    </p>

                    <div className="btnDiv">
                        <a href="#" className="btn">Portfolio</a>
                    </div>
                </div>

                <div>
                    <img src={hello} alt="Hello Image" className="hello" />
                </div>
            </div>
        </div>
    );
}

export default Home;

{/* <div className="row">
<div className="col-md-3 ms-md-auto">.col-md-3 .ms-md-auto</div>
<div className="col-md-3 ms-md-auto">.col-md-3 .ms-md-auto</div>
</div>
<div className="row">
<div className="col-auto me-auto">.col-auto .me-auto</div>
<div className="col-auto">.col-auto</div>
</div> */}