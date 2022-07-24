import * as React from 'react';
import "./index.css"



import Card from "./Card";
import imgData from "./imageSrc";


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


            {/* ----------------------Button to trigger modal  -----------------------------------*/}

            {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button> */}

            {/* ---------------------------------------Modal---------------------------------------  */}
            {/* <!-- Button trigger modal --> */}
            {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button> */}

            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered mx-auto">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        {/* <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div> */}
                    </div>
                </div>
            </div>
            {imgData.map((val) => {
                return (
                    <Card image={val.imgURL} watchLink={val.Link} name={val.seriesName} key={val.id} btnText={val.btnText} para1={val.para1} para2={val.para2} para3={val.para3} para4={val.para4} />
                )
            })}



        </>
    );
}

export default Cards;
