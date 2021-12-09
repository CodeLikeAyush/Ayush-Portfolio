import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import NavAvtarImg from '../src/static/images/avatar.png'


// import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

export default function ImageAvatars() {
    return (
        <Stack direction="row" spacing={2} className='px-4'>
            <Tooltip title="Hey! I'm Ayush">

                <Avatar alt="Remy Sharp" src={NavAvtarImg} sx={{ width: 56, height: 56 }}



                // "C:\Users\ayush\Desktop\Web\my-app\src\static\images\avtar.png"
                // {/* <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" /> */}
                />
            </Tooltip>
        </Stack>
    );
}


