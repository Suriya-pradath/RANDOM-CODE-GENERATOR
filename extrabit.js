import React,{useState, useEffect} from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Extrabit() {
    const[quotes,setQuotes]=useState("");
    const[author,setAuthor]=useState("");
    

    let changeColor=()=>{
        document.body.style.backgroundColor=
        'rgb('+ Math.round(Math.random()*223)+
        ','+ Math.round(Math.random()*223)+
        ','+ Math.round(Math.random()*223)+')';
     }
    useEffect(()=> { 
        fetch("http://api.quotable.io/random")
        .then(res => res.json())
        .then(
            (quotes) =>{
                setQuotes(quotes.content);
               setAuthor(quotes.author);
               console.log(quotes);
            }
        )
    },[]);
    
    let fetchNewQuotes=()=>{
        fetch("http://api.quotable.io/random")
        .then(res => res.json())
        .then(
            (quotes) =>{
                setQuotes(quotes.content);
               setAuthor(quotes.author);
               console.log(quotes);
            }
        )
    }
  return (
    
    <div className="quotes">
    <h2>{quotes}</h2>
    <small>-{author}-</small><br />
    
    <div className='se'>
    <button className='btn'  onClick={()=>{fetchNewQuotes(); changeColor(); }}>New Quotes</button></div>
    <div style={{flexDirection:"column",paddingRight:100,}}>
    </div>
    <h className='twiter'> <a href='https://twitter.com/SuriyaNs2004?t=C7tKbqgclOh5KI_E9epudA&s=09
    '><TwitterIcon  /></a></h><h className='insta' ><a href='https://www.instagram.com/__._.suriya._.__/'><InstagramIcon/></a></h>
    
    </div>
    
    
  )
}