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



            {imgData.map((val) => {
                return (
                    <Card image={val.imgURL} watchLink={val.Link} name={val.seriesName} key={val.id} btnText={val.btnText} para1={val.para1} para2={val.para2} para3={val.para3} para4={val.para4} target={val.target} />
                )
            })}



        </>
    );
}

export default Cards;
