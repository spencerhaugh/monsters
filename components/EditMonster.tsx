import Router from 'next/router';
import { useState } from 'react';
import fetcher from '../lib/api';
import axios from 'axios'
import UploadForm from './UploadForm';
import UploadFileConfirm from './UploadFileConfirm';

const EditMonster = ({ monsterId }) => {

    const [ image, setImage ] = useState('');
    const [ imageName, setImageName ] = useState('');


    const handleUploadToClient = (e) => {
        if (e.target.files && e.target.files[0]) {
            const tempImage = e.target.files[0];
            setImage(tempImage);
            setImageName(tempImage.name);
        };
    }

    const handleUploadToServer = async (e: Event) => {
        e.preventDefault();

        const formData = new FormData();
        const file = image;

        formData.append('files', file);

        axios.post(`${process.env.NEXT_PUBLIC_STRAPI_URL}/upload`, formData)
            .then((response) => {
                const imageUrl = response.data[0].url;
                const imageId = response.data[0].id;

                fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/monsters/${monsterId}`, { 
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        data: { 
                            imageUrl: imageUrl, 
                            image: imageId 
                        }
                    })
                })
                    .then((response) => {
                        Router.reload();
                    })
                    .catch((err) => {
                        console.error("Aw, beans. Something went wrong.", err);
                    })
            }).catch((err) => {
                console.error("Aw snap, something went wrong!", err);
            })
    }

    return (
        <form className='edit-monster-form'>
            <UploadForm 
                image={ image } 
                handleUploadToClient={ handleUploadToClient } 
                handleUploadToServer={ handleUploadToServer } 
            />
            { imageName && 
                <UploadFileConfirm imageName={ imageName } />
            }
        </form>
    )
}

export default EditMonster;