import * as React from 'react';
import "./index.css"



import Card from "./Card";
import imgData from "./certfInfo";


// const seriesCard = (val, index, imgData) => {
//     // console.log(`${index}. ${val.seriesName}`);
//     return (
//         <Card image={val.imgURL} watchLink={val.Link} name={val.seriesName} key={val.id} />

//     )
// }

const Cards = () => {
    return (
        <>

            {/* {seriesData.map(seriesCard)}; */}

            <br /><br /><br /><br />
            <h1 className="text-center my-1 text-light skeleton">Certificates</h1>

            <div className='d-block my-3 skeleton'>
                <h1 className='text-left px-5 py-2 bg-warning' style={{ width: "90vw" }}>📃Certificates</h1>
            </div>


            <div className='flexCard' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',flexWrap:'wrap' }}>
                {imgData.map((val) => {
                    return (
                        <Card image={val.imgURL} watchLink={val.Link} name={val.seriesName} key={val.id} btnText={val.btnText} para1={val.para1} para2={val.para2} para3={val.para3} para4={val.para4} target={val.target} />
                    )
                })}
            </div>



        </>
    );
}

export default Cards;
