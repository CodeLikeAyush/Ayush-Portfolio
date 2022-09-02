import React from "react";

function CommonTemplate(props) {
    return (
        <>
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
                        <img src={props.imgSrc} alt="Hello" className="hello" />
                    </div>
                </div>
            </div >
        </>

    );
}

export default CommonTemplate;

