import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './logo1.jfif';
import css from './index.css';
import Meme from "./App"

function App(){

    return (
        <main>
            <div className='header'>
               {/* HEADER  */}
               <img src={`${logo}`} alt='logo'></img>
               <h1 className='headerName'>Meme Generator</h1>
            </div>
            <Meme />
        </main>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <App />
)
