import React from 'react'
import Card from "./Card";
import educationData from "./educationData";
import skillsData from "./skillsData";


// import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';



function AboutMe() {
    return (

        <>
            {/* {seriesData.map(seriesCard)}; */}


            <div style={{ height: "3em" }}></div>

            <div className="container mx-auto mt-5 " style={{ marginBottom: '500px ' }}>
                <h1 className="text-center my-1 text-light skeleton">About Me</h1>
                <br />
                <br />
                <br />


                <div className='d-block my-3 skeleton'>
                    <h1 className='text-left px-5 py-2 bg-warning' style={{ width: "90vw" }}>🗒️Education</h1>
                </div>
                <br />
                <div className='flexCard' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {educationData.map((val) => {
                        return (
                            <Card image={val.imgURL} watchLink={val.Link} name={val.seriesName} key={val.id} btnText={val.btnText} para1={val.para1} para2={val.para2} para3={val.para3} para4={val.para4} target={val.target} />
                        )
                    })}
                </div>

                <br />

                {/* <div style={{ height: "15em" }}></div> */}
                <div className='d-block my-5'>
                    <h1 className='text-left px-5 py-2 bg-warning skeleton' style={{ width: "90vw" }}>🗒️Skills</h1>
                </div>
                <br />



                <div className='flexCard' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {skillsData.map((val) => {
                        return (
                            <Card image={val.imgURL} watchLink={val.Link} name={val.seriesName} key={val.id} btnText={val.btnText} para1={val.para1} para2={val.para2} para3={val.para3} para4={val.para4} target={val.target} />
                        )
                    })}
                </div>






            </div>


        </>
    )
}

export default AboutMe;
