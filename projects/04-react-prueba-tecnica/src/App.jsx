import { useEffect, useState } from "react"
import './App.css'
import { getRandomFact } from "./services/facts"
import { useCatImage } from "./hooks/useCatImage.js"


const CAT_PREFIX_IMAGE_URL = " https://cataas.com"



export function App() {
    const [fact, setFact] = useState()
    const { imageUrl } = useCatImage({ fact })

    // para recuperrar la cita al acargar la pagina 
    useEffect(() =>{
        getRandomFact().then(setFact)
    }, [])

    const handleClick =async () => {
        const newFact = await getRandomFact()
        setFact(newFact)
     }

    return (
        <main>
            <h1>App de gatitos</h1>

            <button onClick={handleClick}>Get new fact</button>

            {fact && <p>{fact}</p>}
            {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`IMage extracted usig the first three words for ${fact}`}/>}
        </main>
    )
}