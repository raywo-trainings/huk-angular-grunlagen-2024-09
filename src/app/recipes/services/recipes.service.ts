import {inject, Injectable} from '@angular/core';
import {Recipe, RecipeDTO} from "../model/recipe.model";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {mapRecipeDTOToRecipe, mapRecipeToRecipeDTO} from "../mappings/recipe.mappings";


type RecipeIdentifier = Recipe | number


@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private readonly http = inject(HttpClient)


  public getAllRecipes(): Observable<Recipe[]> {
    return this.http.get<RecipeDTO[]>(this.getUrl())
      .pipe(
        map(dtoArray => dtoArray.map(dto => mapRecipeDTOToRecipe(dto)))
      )
  }


  public getRecipe(id: number): Observable<Recipe> {
    return this.http.get<RecipeDTO>(this.getUrl(id))
      .pipe(
        map(dto => mapRecipeDTOToRecipe(dto))
      )
  }


  public addRecipe(recipe: Recipe): Observable<Recipe> {
    const recipeDTO = mapRecipeToRecipeDTO(recipe);
    return this.http.post<RecipeDTO>(this.getUrl(), recipeDTO)
      .pipe(
        // äquivalent zu map(dto => mapRecipeDTOToRecipe(dto)
        map(mapRecipeDTOToRecipe)
      )
  }


  public updateRecipe(recipe: Recipe): Observable<Recipe> {
    const recipeDTO = mapRecipeToRecipeDTO(recipe);
    return this.http.put<RecipeDTO>(this.getUrl(recipe), recipeDTO)
      .pipe(
        map(mapRecipeDTOToRecipe)
      )
  }


  public deleteRecipe(recipe: Recipe): Observable<void> {
    return this.http.delete<void>(this.getUrl(recipe))
  }


  private getUrl(identifier?: RecipeIdentifier): string {
    let id = this.extractID(identifier)

    return `http://localhost:3000/recipes${id ? '/' + id : ""}`
  }


  private extractID(identifier?: RecipeIdentifier): number | undefined {
    if (!identifier) return undefined

    if (typeof identifier === "number") {
      return identifier
    }

    return identifier.id
  }
}
