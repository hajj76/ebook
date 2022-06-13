import React, { useState } from "react";

import ReactCardFlip from "react-card-flip";


function Card({book}){
         console.log(book);
         const [isFlipped, setIsFlipped] = useState(false);
         function handleClick(){
            setIsFlipped(!isFlipped);
         }
      
    return(
        <div className="parent">
            {
                book.map((item)=>{
                  console.log(item.volumeInfo.averageRating)
                  
               
                  if(item.saleInfo.saleability=== 'FREE'){
                   
                    return(
                        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                        
                        <div className="card">
                            <img className="cardimg" src={item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail} alt="book"/>
                            <h3>{item.volumeInfo.authors}</h3>
                            <h3>{item.volumeInfo.publisher}</h3>
                            <h3>Published in {item.volumeInfo.publishedDate}</h3>
                            {/* <h3>{item.volumeInfo.averageRating}</h3> */}
                            {
                                item.volumeInfo.ratingsCount>0 ?  <h3 className="rates">
                            {item.volumeInfo.ratingsCount} rated this book
                            </h3> : null
                            }
                          <h3>Read it<a href={item.saleInfo.buyLink}>NOW!</a></h3> 
                        <button className="flipbtn"
                        onClick={handleClick}>for more info</button>
                        </div>
                        <div className="card">
                        <h3>{item.volumeInfo.title}</h3>
                        <h3>{item.volumeInfo.subtitle}</h3>
                        <h3>Download it <a href={item.accessInfo.epub.downloadLink}>Now!</a></h3>
                        <h3>language: {item.volumeInfo.language}</h3>
                        {
                            item.volumeInfo.pageCount > 0 ? <h3>{item.volumeInfo.pageCount} pages</h3> : null
                        }
                        {/* <h3>{item.volumeInfo.pageCount} pages</h3> */}
                            <button className="flipbtn"
                            
                             onClick={handleClick}>go back</button>
                        </div>
                        </ReactCardFlip>
                    )
                  }
                  
                
            })
            }
           
        </div>
    ) 
}
export default Card;
