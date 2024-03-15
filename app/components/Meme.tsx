"use client";
import Image from "next/image";
import MemeImage from "../../public/memeimg.png";
import {useState} from "react";

export default function Meme(){
    const [bottomText, setBottomText] = useState("")
    const [topText, setTopText] = useState("");
    const [allImages, setAllImages] = useState<{url: string, width: number, height: number}[]>([])
    const [randomImage, setRandomImage] = useState({
       url: "https://i.imgflip.com/434i5j.png",
       width: 400,
       height: 400
    });


    {/*
           Travel Journal Project Object Example (Homework)
    [
        {
            id: "1",
            location:"Japan",
            imageUrl: "https://source.unsplash.com/WLxQvbMyfas",
            title: "Mount Fuji",
            date: "12 Jan, 2021 - 24 Jan, 2021",
            description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
        },
        {

        }
    ]
    */}


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

    async function handleMemeImage(){
        console.log("handleMemeImage")
        // Resim fetch edilecek. Api url: https://api.imgflip.com/get_memes
        // Remote bir api üzerinden gelecek resimler

        const result = await fetch("https://api.imgflip.com/get_memes")
        const res = await result.json();
        setAllImages(res.data.memes)

        const randomIndex = Math.floor(Math.random() * allImages.length);

        console.log("random index", randomIndex)

        console.log("one image", allImages[randomIndex]);

        setRandomImage({
            url: allImages[randomIndex].url,
            width: allImages[randomIndex].width,
            height: allImages[randomIndex].height
        })


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
                <Image src={randomImage.url} alt="Meme image" className="meme-image" width={randomImage.width} height={randomImage.height} />
                <h2 className="meme-text top" >{topText}</h2>
                <h2 className="meme-text bottom">{bottomText}</h2>
            </div>

        </>
    )
}