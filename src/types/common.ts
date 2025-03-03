export type Clue = {
  id: number,
  dollarAmount: number
}

export type Category = {
  name: string,
  clues: Clue[]
}

export type Board = {
  categories: Category[]
}
