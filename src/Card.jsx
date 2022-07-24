import * as React from 'react';
import "./index.css"

const CertfCard = (props) => {
    return (
        <>
            <div className="card card-elem">
                <img src={props.image}
                    alt="img_here" srcSet="" />

                <div className="info">
                    <h3>{props.name}</h3>
                    <span>{props.para1}</span>
                    <br />
                    <span>{props.para2}</span>
                    <br />
                    <span>{props.para3}</span>
                    <br />
                    <span>{props.para4}</span>
                    <br />
                    <br />
                </div>
                    <div className="btnDiv" >
                        <a href={props.link} className="btn btn-sm" onClick={props.scrollFunc} target={props.targt} data-bs-toggle="modal" data-bs-target="#exampleModal">{props.btnText} </a>
                    </div>

            </div>
        </>

    )
}

export default CertfCard;