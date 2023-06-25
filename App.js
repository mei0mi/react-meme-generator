import React from 'react';
import css from './index.css';
// import meme from './meme.js'

export default function Meme(){

    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        memeImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [memeImage, setMemeImage] = React.useState([]);

    function memeGen(event){
        event.preventDefault()
    
        const RandomNum = Math.floor(Math.random() * memeImage.length)
        const RandomMeme = memeImage[RandomNum].url
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                memeImage: RandomMeme
            }
        })
    }

    //FETCHING THE MEME API
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setMemeImage(data.data.memes))
    }, [])

    function updateText(event) {
        const {value, name} = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        }) 
    }

    return (
        <main>
            <div className='header-container'>
            <form className='form'>
                <input 
                type='text' 
                className='input' 
                placeholder='Top Text' 
                name='topText'
                onChange={updateText}
                />
                <input
                type='text'
                className='input'
                placeholder='Bottom Text'
                name='bottomText'
                onChange={updateText}
                />
                <input
                type='Submit'
                value={'Generate Meme'}
                className='formBtn'
                onClick={memeGen}
                />
            </form>
            </div>
            <div className='meme-container'>
            <div className="meme">
                <img src={meme.memeImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
            </div>
        </main>           
    )
}
