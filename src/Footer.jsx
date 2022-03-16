import React from 'react'

// import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import footerLinks from './FooterLinks';



function Footer() {
    return (
        <>
            <footer className="text-center text-lg-start sticky-bottom mt-5" style={{ backgroundColor: "#ff008d" }}>
                <div className="container-fluid d-flex justify-content-center py-5">
                    <Stack direction="row" spacing={5}>
                        <Button
                            href={footerLinks.instagram}
                            target="_blank">{< InstagramIcon style={{ color: "black", fontSize: "2.5em" }} />}</Button>
                        <Button
                            href={footerLinks.facebook}
                            target="_blank">{<FacebookOutlinedIcon style={{ color: "black", fontSize: "2.5em" }} />}</Button>
                        <Button
                            href={footerLinks.gitHub}
                            target="_blank">{<GitHubIcon style={{ color: "black", fontSize: "2.5em" }} />}</Button>
                        <Button
                            href={footerLinks.gmail}>{<MailOutlineRoundedIcon style={{ color: "black", fontSize: "2.5em" }} />}</Button>
                        <Button
                            href={footerLinks.linkedIn}
                            target="_blank" >{<LinkedInIcon style={{ color: "black", fontSize: "2.5em" }} />}</Button>
                    </Stack>

                </div>

                <div className="text-center text-white p-3" style={{ backgroundColor: "#ff008d", lineHeight: "2em" }}>
                    &copy; 2021 Copyright :
                    <span className="text-white text-lg-center"> ayush raj</span>
                </div>
            </footer>


        </>
    )
}

export default Footer
