// import React from 'react'
// import ImgMediaCard from './ProjectCard';

// function Projects() {
//     return (
//         <>
//             <br />
//             <br />

//             <h1
//                 className="text-center my-5 text-primary">

//                 Projects</h1>
//             <hr />
//             <div className="container-fluid my-5" >
//                 <div class="row row-cols-1 row-cols-xl-4 row-cols-lg-3 row-cols-md-2">
//                     <div class="col mb-5  " >
//                         <ImgMediaCard />
//                     </div>
//                     <div class="col mb-5  " >
//                         <ImgMediaCard />
//                     </div>
//                     <div class="col mb-5  " >
//                         <ImgMediaCard />
//                     </div>
//                     <div class="col mb-5  " >
//                         <ImgMediaCard />
//                     </div>
//                     <div class="col mb-5  " >
//                         <ImgMediaCard />
//                     </div>
//                     <div class="col mb-5  " >
//                         <ImgMediaCard />
//                     </div>
//                     <div class="col mb-5  " >
//                         <ImgMediaCard />
//                     </div>

//                 </div>
//             </div>
//         </>
//     )
// }

// export default Projects

import React from 'react'
import Card from "./Card";
import projectData from "./projectData";
// import skillsData from "./skillsData";


// import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';



function Projects() {
    return (

        <>
            {/* {seriesData.map(seriesCard)}; */}


            <div style={{ height: "3em" }}></div>

            <div
                className="container mx-auto mt-5"
                style={{ marginBottom: '500px ' }}>
                <h1
                    className="text-center my-1 text-white">

                    Projects</h1>
                <br />
                <br />
                <br />


                <div className='d-block my-3'>
                    <h1 className='text-left px-5 py-2 bg-warning' style={{ width: "90vw" }}>🗒️projects</h1>
                </div>
                <br />
                <div className='flexCard' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {projectData.map((val) => {
                        return (
                            <Card image={val.imgURL} watchLink={val.Link} name={val.seriesName} key={val.id} btnText={val.btnText} para1={val.para1} para2={val.para2} para3={val.para3} para4={val.para4} target={val.target} />
                        )
                    })}
                </div>

                <br />

                {/* <div style={{ height: "15em" }}></div> */}
                {/* <div className='d-block my-3 '>
                    <h1 className='text-left px-5 py-2 bg-warning'>⚙️skills</h1>
                </div>
                <br /> */}



                {/* <div style={{ width: "100vw" }}>
                    {skillsData.map((val) => {
                        return (
                            <Card image={val.imgURL} watchLink={val.Link} name={val.seriesName} key={val.id} btnText={val.btnText} para1={val.para1} para2={val.para2} para3={val.para3} para4={val.para4} target={val.target} />
                        )
                    })}
                </div> */}






            </div>


        </>
    )
}

export default Projects;
