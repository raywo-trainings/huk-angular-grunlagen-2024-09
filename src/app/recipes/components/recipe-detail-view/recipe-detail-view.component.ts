import {Component, effect, inject, input, signal, WritableSignal} from '@angular/core';
import {emptyRecipe, Recipe} from "../../model/recipe.model";
import {RecipesService} from "../../services/recipes.service";
import {RecipeInfoViewComponent} from "../recipe-info-view/recipe-info-view.component";
import {RecipeIngredientsListComponent} from "../recipe-ingredients-list/recipe-ingredients-list.component";


@Component({
  selector: 'app-recipe-detail-view',
  standalone: true,
  imports: [
    RecipeInfoViewComponent,
    RecipeIngredientsListComponent
  ],
  templateUrl: './recipe-detail-view.component.html',
  styleUrl: './recipe-detail-view.component.scss'
})
export class RecipeDetailViewComponent {

  public recipeID = input.required<string>();

  protected recipe: WritableSignal<Recipe> = signal(emptyRecipe())
  private readonly service = inject(RecipesService)


  constructor() {
    effect(() => {
      this.service.getRecipe(this.recipeID())
        .subscribe(recipe => this.recipe.set(recipe))
    })

    // toObservable(this.recipeID)
    //   .pipe(
    //     distinctUntilChanged(),
    //     switchMap(id => this.service.getRecipe(parseInt(id)))
    //   )
    //   .subscribe(recipe => this.recipe = recipe)
  }

}
