import React from "react";
const hours = new Date().getHours();
let timeName = null;


function Welcome(){

    if (hours < 12){
        timeName = "in the Morning";
    }
    else if(hours < 18){
        timeName = "in the Afternoon";
    }
    else{
        timeName = "at Night";
    }

    return(<div>
        <h1 className="welcomeheading">how lovely is reading your favorite book {timeName} </h1>
    </div>)

}

export default Welcome;