import {useState} from 'react'
import Quotes from './Quotes'

function App() {
  const [quoote,setQuoote] = useState([])
  
  const getQuotes = async () =>{
    const response = await fetch('https://animechan.vercel.app/api/random')
    const data = await response.json()
    setQuoote(data)
    console.log(data)
  }
  return (
    <div>
    <Quotes anime={quoote.anime} quote={quoote.quote} character={quoote.character}/>
    <br />
    <button onClick={getQuotes}>Load More</button>
    </div>
  );
}

export default App;
// adobe color recoomneded by hp foods and co