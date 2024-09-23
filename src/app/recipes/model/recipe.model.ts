
export enum Difficulty {
  EASY = "Einfach",
  MEDIUM = "Mittel",
  HARD = "Schwierig"
}

export enum TimeUnit {
  MINUTES = "Minuten",
  HOURS = "Stunden"
}

export enum PortionUnits {
  NONE = "",
  GRAM = "Gramm",
  CUBE = "Würfel",
  MILLILITER = "Milliliter",
  TEASPOON = "Teelöffel",
  TABLESPOON = "Esslöffel",
  BALL = "Kugel",
  PINCH = "Prise"
}

export interface Duration {
  unit: TimeUnit
  value: number
}

export interface Ingredient {
  name: string
  quantity: number
  unit: PortionUnits
}

export interface Recipe {

  name: string
  img: string
  servings: number
  lastEdited: string
  ingredients: Ingredient[]
  preparation: string
  difficulty: Difficulty
  duration: Duration

}
