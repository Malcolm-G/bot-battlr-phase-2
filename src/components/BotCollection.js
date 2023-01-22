import React,{ useEffect, useState } from "react";
import '../stylesheets/BotCollection.css';
import BotCard from "./BotCard";

const API = "https://bot-battlr-db-json.vercel.app/api/bots"

function BotCollection({addMyBot}){

    const [bots,setBots] = useState([]);
    const [fetchStatus,setFetchStatus] = useState("pending");

    useEffect(()=>{
        fetch(API)
        .then(resp=>resp.json())
        .then(data=>{
            setBots(data)
        })
        // console.log("in useeffect")
        
    },[])

    const botsList = bots?.map((bot)=>{
        return(
            <BotCard
            key={`botsList`+bot.id}
            bot={bot}
            addMyBot={addMyBot}
            />
        )
    })

    return(
        <div className="container" >
            <h2>BOT COLLECTION</h2>
            <div className="row" >
                {botsList}
            </div>
        </div>
    )
}

export default BotCollection
