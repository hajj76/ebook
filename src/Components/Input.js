import React, { useState } from "react";
import axios from "axios";
import Card from "./Card";


function Input(){
    const [message, setMessage] = useState("?");
    const [bookData, setData] = useState([]);

    function inputValue(event){
        setMessage(event.target.value);
        console.log(event.target.value);
    }
    function handleSubmit(e){
        e.preventDefault();
        axios.get("https://www.googleapis.com/books/v1/volumes?q="+message+"&key=AIzaSyDpc8ynkw-kAQACVDTmvUbrunCKuImWaXg")
        .catch(err=>console.log(err.data.items))
        .then(res=>setData(res.data.items))
        
    }
    function handleEnterKey(e){
        while(e.keyCode===13){
            handleSubmit();
        }
    }


    return(
        <div >
        <form className="containerinput">
            <input
            
             id="searchinput" 
            type="text"   
            placeholder="Search for an author..."
            onChange={inputValue}
            onKeyPress={handleEnterKey}
            >
        
            </input>
            
            <button id="inputbtn"
            onClick={handleSubmit}
            >Submit</button>
        
            </form>
            {
                <Card book={bookData} />
            }
            
            
        </div>
    )
}

export default Input;