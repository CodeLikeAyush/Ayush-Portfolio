import React from 'react'
import Card from "./Card";
import projectData from "./projectData";





function Projects() {
    return (

        <>


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
                    <h1 className='text-left px-5 py-2 bg-warning' style={{ width: "90vw" }}>🗒️Projects</h1>
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


            </div>


        </>
    )
}

export default Projects;
