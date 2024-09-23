import {Ingredient} from "./Ingredient.model";
import {Duration} from "./Duration.model";
import {Difficulty} from "./Difficulty.model";


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
