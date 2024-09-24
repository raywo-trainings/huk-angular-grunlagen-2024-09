import {Component, inject} from '@angular/core';
import {Recipe} from "../../model/recipe.model";
import {RecipeViewComponent} from "../recipe-view/recipe-view.component";
import {RecipesService} from "../../services/recipes.service";


@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [
    RecipeViewComponent
  ],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss'
})
export class RecipeListComponent {

  private service = inject(RecipesService)
  protected recipes: Recipe[] = this.service.getAllRecipes()

}
