import {Injectable} from '@angular/core';
import {Recipe} from "../model/recipe.model";
import {recipes} from "../data/recipe.dummy.data";


@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  public getAllRecipes(): Recipe[] {
    return recipes
      .sort((lhs: Recipe, rhs: Recipe) => {
        return lhs.name.localeCompare(rhs.name)
      })
  }


  public getRecipeAt(index: number): Recipe {
    if (index > this.getAllRecipes().length - 1 || index < 0) {
      throw new Error(`Index out of bounds index: ${index}, length: ${this.getAllRecipes().length}.`)
    }

    return this.getAllRecipes()[index]
  }


  public addRecipe(recipe: Recipe) {
    this.getAllRecipes().push(recipe)
  }
}
