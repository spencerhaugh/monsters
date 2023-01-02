import Button from '@mui/material/Button';
import { useState } from 'react';
import fetcher from '../lib/api';

const EditMonster = () => {

    const [ files, setFiles ] = useState('');

    const handleImageUpload = async (e) => {
        e.preventDefault();

        // const formData = new FormData();

        // formData.append('files', files[0]);

        // fetcher('http://localhost:1337/api/upload', formData)
        //     .then((response) => {
        //         const imageId = response[0].id;

        //         fetcher('http://localhost:1337/monsters', { image: imageId })
        //             .then((res) => {
        //                 //stuff?
        //             })
        //             .catch((err) => {
        //                 console.error("Aw, beans. Something went wrong.", err);
        //             })
        //     }).catch((err) => {
        //         console.error("Aw snap, something went wrong!", err);
        //     })
    }

    return (
        <div className='edit-monster-form'>
            <form onSubmit={ handleImageUpload } >
                <Button variant="contained" component="label">
                    Upload Images
                    <input hidden accept="image/*" multiple type="file" name="image" required />
                </Button>
            </form>
        </div>
    )
}

export default EditMonster;