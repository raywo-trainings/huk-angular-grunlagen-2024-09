import {inject, Injectable} from '@angular/core';
import {Recipe, RecipeDTO} from "../model/recipe.model";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {mapRecipeDTOToRecipe} from "../mappings/recipe.mappings";


@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private readonly http = inject(HttpClient)


  public getAllRecipes(): Observable<Recipe[]> {
    return this.http.get<RecipeDTO[]>("http://localhost:3000/recipes")
      .pipe(
        map(dtoArray => dtoArray.map(dto => mapRecipeDTOToRecipe(dto)))
      )
  }


  // public getRecipeAt(index: number): Recipe {
  // if (index > this.getAllRecipes().length - 1 || index < 0) {
  //   throw new Error(`Index out of bounds index: ${index}, length: ${this.getAllRecipes().length}.`)
  // }
  //
  // return this.getAllRecipes()[index]
  // }


  // public addRecipe(recipe: Recipe) {
  // this.getAllRecipes().push(recipe)
  // }
}
