import './App.css'
import { useCatFact } from './hooks/useCatFact.js'
import { useCatImage } from "./hooks/useCatImage.js"



export function App() {
    
    const { fact, refreshFract } = useCatFact()
    const { imageUrl } = useCatImage({ fact })

    const handleClick =async () => {
        refreshFract()
     }

    return (
        <main>
            <h1>App de gatitos</h1>

            <button onClick={handleClick}>Get new fact</button>

            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt={`IMage extracted usig the first three words for ${fact}`}/>}
            
            {/* <Otro /> */}
        </main>
    )
}