import React,{ useEffect, useState } from "react";
import '../stylesheets/MyList.css';
import BotCard from "./BotCard";
import MyBotCard from "./MyBotCard";

const API = "https://bot-battlr-db-json.vercel.app/api/bots"

function BotList(){

    const [myBots,setMyBots] = useState([{}]);

    useEffect(()=>{
        fetch(API)
        .then(resp=>resp.json())
        .then(data=>{
            setMyBots(data.slice(0,10))
            console.log(data.slice(0,10))
        })
        console.log("in useeffect")
        
    },[])

    const botsList = myBots?.map((bot)=>{
        return(
            <MyBotCard
            key={`botsList`+bot.id}
            bot={bot}
            />
        )
    })

    return(
        <div id="my-list" className="container-75 sticky-top" >
            <div className="d-flex flex-row flex-nowrap row" >
                {botsList}
            </div>
        </div>
    )
}

export default BotList