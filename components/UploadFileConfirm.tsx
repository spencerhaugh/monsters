import { IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const UploadFileConfirm = ({ image, imageName, handleRemove }) => {
    return (
        <>
            <div className='file-name'>
                <Typography variant='h6'>
                    Ready to upload: { imageName }
                </Typography>
                <IconButton 
                    color='error' 
                    disabled={ !image } 
                    sx={{ ml: '.5rem' }} 
                    onClick={ handleRemove }
                >
                    <DeleteIcon />
                </IconButton>
            </div>
        </>
    )
}

export default UploadFileConfirm;