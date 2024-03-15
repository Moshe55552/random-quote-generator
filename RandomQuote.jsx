import React, { useState } from "react";
import './RandomQuote.css'
import { FaXTwitter } from "react-icons/fa6";
import { RxReload } from "react-icons/rx";

const RandomQuote = () => {

    let quotes = [];

    async function loadQuotes () {
        const response = await fetch("https://type.fit/api/quotes")
        quotes = await response.json();
    }

    const random = () => {
        const select = quotes [Math.floor(Math.random()*quotes.length)]
        setQuote(select);
    }
   
    const [quote, setQuote] = useState({
        text: "I will be the best ",
        author: "Moshe",
    });

    const twitter = () => {
            window.open(`https://twitter.com/intent/tweet?text=${quote.text}- ${quote.author.split(',') [0] })`)

    }
loadQuotes();

    return (

        
        <div className="container">
            <div className="quote">{quote.text}</div>
            <div>
            <div className="line"></div>
            <div className="bottom">
            <div className="autor">** {quote.author.split(',') [0] }**</div>
            <div className="icons">
                <FaXTwitter className="twitter" onClick={()=>{twitter()}} />
                <RxReload className="reload" onClick={()=>{random()}}/>
            </div>
            </div>
            </div>
        </div>
    )
}

export default RandomQuote