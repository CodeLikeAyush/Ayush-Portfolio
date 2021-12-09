import React from 'react'
import ProjectCard from './ProjectCard';

function Projects() {
    return (
        <>
            <div className="container-fluid my-5" style={{ backgroundColor: '#dce8fc' }}>
                <div class="row">
                    <div class="col-12 col-sm-6 col-md-4 col-lg-3  " >
                        <ProjectCard />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3  " >
                        <ProjectCard />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 " >
                        <ProjectCard />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3  " >
                        <ProjectCard />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3  " >
                        <ProjectCard />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3  " >
                        <ProjectCard />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3  " >
                        <ProjectCard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects
