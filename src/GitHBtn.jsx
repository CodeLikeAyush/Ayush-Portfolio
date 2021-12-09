import * as React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

export default function GitHBtn() {
    return (
        <Tooltip title="View GitHub Profile">
            <IconButton>
                <GitHubIcon sx={{ width: 35, height: 35, }} style={{ color: "#ff008d" }} />
            </IconButton>
        </Tooltip>
    );
}
