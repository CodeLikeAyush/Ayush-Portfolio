import React from "react";
import hello from '../src/static/images/hello.png'
import contact from '../src/static/images/contact.png'

function CommonTemplate(props) {
    return (

        <div className="showcase-area colorVar" id="home">
            <div className="container">
                <div>
                    <div className="big-title">
                        <h1>{props.H1}</h1>
                        <h1>{props.H2}
                            <br /><strong>{props.name}</strong>
                        </h1>
                    </div>

                    <p className="text">
                        {props.para}

                    </p>

                    <div className="btnDiv" >
                        <a href={props.link} className="btn btn-lg" onClick={props.scrollFunc} target={props.targt} >{props.btnText}</a>
                    </div>
                </div>

                <div>
                    <img src={props.imgSrc} alt="Hello Image" className="hello" />
                </div>
            </div>
        </div >
    );
}

export default CommonTemplate;

{/* <div className="row">
<div className="col-md-3 ms-md-auto">.col-md-3 .ms-md-auto</div>
<div className="col-md-3 ms-md-auto">.col-md-3 .ms-md-auto</div>
</div>
<div className="row">
<div className="col-auto me-auto">.col-auto .me-auto</div>
<div className="col-auto">.col-auto</div>
</div> */}