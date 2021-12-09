import * as React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

export default function GitHBtn() {
    return (
        <Tooltip title="View GitHub Profile">
            <IconButton  className='NavGitHub'>
                <GitHubIcon sx={{ width: 35, height: 35, }} />
            </IconButton>
        </Tooltip>
    );
}
