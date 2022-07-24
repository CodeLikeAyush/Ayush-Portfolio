import * as React from 'react';
import "./index.css"

const CertfCard = (props) => {
    return (
        <>
            <div className="card card-elem">
                <img src={props.image}
                    alt="img_here" srcSet="" />
                <div className="info">
                    <span>{props.para}</span>
                    <h3>{props.name}</h3>
                    {/* <a href={props.watchLink} target="_blank">Watch Now</a> */}
                    {/* <br /> */}
                    <div className="btnDiv" >
                        <a href={props.link} className="btn btn-sm" onClick={props.scrollFunc} target={props.targt} >{props.btnText}</a>
                    </div>
                </div>
            </div>
        </>

    )
}

export default CertfCard;