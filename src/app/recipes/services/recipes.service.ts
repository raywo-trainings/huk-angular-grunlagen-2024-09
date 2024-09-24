import { Injectable } from '@angular/core';
import {Recipe} from "../model/recipe.model";
import {recipes} from "../data/recipe.dummy.data";

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  public getAllRecipes(): Recipe[] {
    return recipes
  }
}
