import * as React from 'react';
// import VisibilityIcon from '@mui/icons-material/Visibility';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

export default function ViewProjBtn() {
    return (
        <Tooltip title="View Source Code">
            <IconButton>
                <CodeOutlinedIcon color='primary' />
            </IconButton>
        </Tooltip>
    );
}
