import React from 'react'
import ImgMediaCard from './ProjectCard';

function Projects() {
    return (
        <>
            <br />
            <br />

            <h1
                className="text-center my-5 text-primary">

                Projects</h1>
            <hr />
            <div className="container-fluid my-5" >
                <div class="row row-cols-1 row-cols-xl-4 row-cols-lg-3 row-cols-md-2">
                    <div class="col mb-5  " >
                        <ImgMediaCard />
                    </div>
                    <div class="col mb-5  " >
                        <ImgMediaCard />
                    </div>
                    <div class="col mb-5  " >
                        <ImgMediaCard />
                    </div>
                    <div class="col mb-5  " >
                        <ImgMediaCard />
                    </div>
                    <div class="col mb-5  " >
                        <ImgMediaCard />
                    </div>
                    <div class="col mb-5  " >
                        <ImgMediaCard />
                    </div>
                    <div class="col mb-5  " >
                        <ImgMediaCard />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Projects
