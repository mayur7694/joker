import React, { useEffect, useState } from 'react'


function Jokes() {

const[Jokes,setJokes] = useState({})
const URL = "https://official-joke-api.appspot.com/random_joke"

 const getNewJoke = async ()=>{
    let res = await fetch(URL)
    let jsonres = await res.json()
    setJokes({setup: jsonres.setup, punchline: jsonres.punchline})
 }

 useEffect(()=>{
    getNewJoke()
 }, [])



  return (
    <div>
        <h2>setup:-{Jokes.setup}</h2>
        <h2>punchline:-{Jokes.punchline}</h2>
      <button onClick={getNewJoke}>new joke</button>
    </div>
  )
}

export default Jokes
