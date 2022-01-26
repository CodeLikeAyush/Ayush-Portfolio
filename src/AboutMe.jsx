import React from 'react'
import VerticalLinearStepper from './VertStepper';

// import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';



function AboutMe() {
    return (
        <div
            className="container mx-auto mt-5"
            style={{ marginBottom: '500px !important', height: '120vh' }}>
            <h1
                className="text-center my-4 text-primary">
                {/* {
                    <EmojiEventsIcon />
                } */}
                My Journey</h1>
            <hr />
            <VerticalLinearStepper />
        </div>
    )
}

export default AboutMe;
