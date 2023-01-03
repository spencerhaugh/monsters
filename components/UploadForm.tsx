import { PhotoCamera } from '@mui/icons-material'
import { Button } from '@mui/material'

const UploadForm = ({ image, handleUploadToClient, handleUploadToServer }) => {
    return (
        <>
            <Button variant="outlined" component="label">
                Add Image
                <PhotoCamera sx={{ ml: '.5rem' }}/>
                <input 
                    hidden accept="image/*" 
                    required 
                    type="file" 
                    name="image"  
                    onChange={ handleUploadToClient } 
                />
            </Button>
            <Button variant='contained'
                color='success'
                onClick={ handleUploadToServer } 
                sx={{ ml: '.5rem' }} 
                disabled={ !image }
            >
                Upload!
            </Button>
        </>
    )
}

export default UploadForm