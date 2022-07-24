import * as React from 'react';
import "./index.css"



import CertfCard from "./CertificateCard";
import imgData from "./imageSrc";


// const seriesCard = (val, index, imgData) => {
//     // console.log(`${index}. ${val.seriesName}`);
//     return (
//         <CertfCard image={val.imgURL} watchLink={val.Link} name={val.seriesName} key={val.id} />

//     )
// }

const CertfCards = () => {
    return (
        <>

            {/* {seriesData.map(seriesCard)}; */}

            {imgData.map((val) => {
                return (
                    <CertfCard image={val.imgURL} watchLink={val.Link} name={val.seriesName} key={val.id} btnText="Read More" para = {val.para} />
                )
            })}
        </>
    );
}

export default CertfCards;
