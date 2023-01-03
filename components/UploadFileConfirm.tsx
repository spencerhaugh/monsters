import { Typography } from '@mui/material';

const UploadFileConfirm = ({ imageName }) => {
    return (
        <>
            <div className='file-name'>
                <Typography variant='h6'>
                    Ready to upload: { imageName }
                </Typography>
            </div>
        </>
    )
}

export default UploadFileConfirm;