"use client";
import Image from "next/image";
import MemeImage from "../../public/memeimg.png";
import {useState} from "react";

export default function Meme(){
    const [bottomText, setBottomText] = useState("")
    const [topText, setTopText] = useState("");


    function handleInputChange(event:any){
       
        const{name,value} = event.target;

        console.log("event",name,value)
        if(name === "topText"){
            setTopText(value)
        }

        if(name === "bottomText") {
            setBottomText(value)
        }

    }

    function handleMemeImage(){
        console.log("handleMemeImage")
        // Resim fetch edilecek. Api url: https://api.imgflip.com/get_memes
        // Remote bir api üzerinden gelecek resimler


    }


    return (
        <>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top Text"
                    className="form-input"
                    name="topText"
                    onChange={handleInputChange}
                    value={topText}
                />
                <input 
                    type="text"
                    placeholder="Bottom Text"
                    className="form-input"
                    name="bottomText"
                    onChange={handleInputChange}
                    value={bottomText}
                />
                <button className="form-btn" onClick={handleMemeImage}>Get a new meme image</button>
            </div>
            <div className="meme-result">
                <Image src={MemeImage} alt="Meme image" className="meme-image" />
                <h2 className="meme-text top" >{topText}</h2>
                <h2 className="meme-text bottom">{bottomText}</h2>
            </div>

        </>
    )
}