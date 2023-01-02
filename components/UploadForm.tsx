import { PhotoCamera } from '@mui/icons-material'
import { Button } from '@mui/material'

const UploadForm = ({ image, handleUploadToClient, handleUploadToServer }) => {
    return (
        <>
            <Button variant="outlined" component="label">
                Add Image
                <PhotoCamera sx={{ ml: '.5rem' }}/>
                <input hidden accept="image/*" multiple type="file" name="image" required onChange={ handleUploadToClient } />
            </Button>
            <Button variant='contained' onClick={ handleUploadToServer } sx={{ ml: '.5rem' }} disabled={ !image }>
                Upload!
            </Button>
        </>
    )
}

export default UploadForm