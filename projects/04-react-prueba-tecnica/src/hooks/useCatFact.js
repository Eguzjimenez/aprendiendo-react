import { useState, useEffect } from "react"
import { getRandomFact} from "../services/facts"

export function useCatFact  () {
    const [fact, setFact] = useState()

    const refreshFract = () => {
        getRandomFact().then(newFact => setFact(newFact))
    }
    // para recuperar la cita al cargar la pagina
    useEffect(refreshFract, [])

    return { fact, refreshFract }
}
