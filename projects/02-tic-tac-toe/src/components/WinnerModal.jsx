import { Square } from "./Square"
// eslint-disable-next-line react/prop-types
export function WinnerModal ({winner, resetGame}) {
    if (winner === null) return null

    const winnerText = winner === false ? 'Empate' : 'Gano'

    return (
        <section className="winner">
        <div className="text">
            <h2>{winnerText}</h2>

            <head className="win">
            {winner && <Square>{winner}</Square>}
            </head>

            <footer>
            <button onClick={resetGame}>Empezar de nuevo</button>
            </footer>
        </div>
        </section>
    )
}