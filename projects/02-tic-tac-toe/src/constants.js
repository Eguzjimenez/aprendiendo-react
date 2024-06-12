
export const TURNS = {
    X: 'X',
    O: '〇'
  }
  
 export const WINNING_COMBOS = [
// Combinaciones horizontales
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
// Combinaciones verticales
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
// Combinaciones diagonales
[0, 4, 8],
[2, 4, 6]
];