import React, { useEffect } from 'react'
import { useState } from 'react'
//import memedata from '../MemeData'

export default function Main(){
    const [memeImg, setMemeImg] = useState({
        toptext:"",
        bottomtext:"",
        randomImg: "https://i.imgflip.com/25w3.jpg"
    })

     const [allMemeImg, setAllMemeImg] = useState([])

     useEffect(()=>{
        async function getMemes(){
           const res = await fetch("https://api.imgflip.com/get_memes")
           const data = await res.json()
           setAllMemeImg(data.data.memes)
        }
        getMemes()
    },[])

    function getMemeImg(){
        //const memesArray =allMemeImg.data.memes
        const randomNum = Math.floor(Math.random() * allMemeImg.length )
       // setMemeImg(memesArray[randomNum].url)
       const url = allMemeImg[randomNum].url
       setMemeImg(prevMeme =>({
        ...prevMeme,
        randomImg : url
       }))
    }

   

    function handleChange(event){
        const {name, value} = event.target
        setMemeImg(prevText=>({
            ...prevText,
            [name]:value
        }))
    }
    return (
        <main>
            <div className='form'>
                <input 
                type='text' 
                placeholder='toptext' 
                className='form--input'
                name="toptext"
                value={memeImg.toptext}
                onChange={handleChange}
                />
                <input 
                type='text' 
                placeholder='bottomtext'
                className='form--input'
                name='bottomtext'
                value={memeImg.bottomtext}
                onChange={handleChange}
                />
                <button 
                className='form--button'
                onClick={getMemeImg} 
                >Get a new meme image🖼️</button>
            </div>
            <div className='meme'>
           <img src={memeImg.randomImg} alt='img' className='meme--image'/>
           <h2 className='meme--text top'>{memeImg.toptext}</h2>
           <h2 className='meme--text bottom'>{memeImg.bottomtext}</h2>
           </div>
        </main>
    )
}