import React,{ useEffect, useState } from "react";
import '../stylesheets/BotList.css';
import BotCard from "./BotCard";

const API = "https://bot-battlr-db-json.vercel.app/api/bots"

function BotList(){

    const [bots,setBots] = useState([{}]);
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
            />
        )
    })

    return(
        <div className="container" >
            <div className="row" >
                {botsList}
            </div>
        </div>
    )
}

export default BotList