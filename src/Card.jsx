import * as React from 'react';
import "./index.css"

const Card = (props) => {
    return (
        <>
            <div className="card card-elem skeleton">
                <div className="skeleton" style={{ borderTopLeftRadius: '0px', borderTopRightRadius: '0px', borderBottomLeftRadius: '100px', borderBottomRightRadius: '0', }}>

                    <img src={props.image}
                        alt="img_here" srcSet="" />
                </div>

                <div className="info ">
                    <h3 className=''>{props.name}</h3>
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
                <div className="btnDiv " >
                    <a href={props.watchLink} className="btn btn-sm" onClick={props.scrollFunc} target={props.target} >{props.btnText} </a>
                </div>

            </div>
        </>

    )
}

export default Card;