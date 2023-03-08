/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { Paper } from '@mui/material';

export default function About() {
    return (
        <Paper className='about-main' elevation={5}>
            <h1>About Alex</h1>
            <Paper elevation={5} sx={{ margin: '1rem auto', width: 'min-content' }}>
                <Image 
                    src={'/aleximg.jpg'} 
                    alt={'Self portrait'} 
                    width={250} 
                    height={250}
                    priority
                />
            </Paper>
            <main className='bio-main'>
                <Image 
                        src={'/amm_logo_250x.png'} 
                        alt="AMM Logo"
                        width={200} 
                        height={45} 
                        priority
                />
                <h3 className='bio-headline'>Sometimes Alex asks her social media followers to give her Pokemon names as prompts...</h3> 
                <section className='bio-body'>
                    <p>Then, as a drawing exercise, she attempts to recreate them as best she can from memory, without looking up any reference image. Usually adhering a time limit of 20 minutes or so.</p>
                    <p>Sometimes it turns out alright, sometimes not.</p>
                    <p className='bio-close'>This is a digital archive of these attempts.</p>
                </section>
                    <img
                        src={'/poorly_drawn_pokemon_sheet.jpg'}
                        alt={'A collection of poorly drawn Pokemon'}
                        className='hero-image'
                    ></img>
            </main>
        </Paper>
    )
}
