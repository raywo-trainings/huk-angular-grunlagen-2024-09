import {Component} from '@angular/core';
import {emptyRecipe, Recipe} from "../../model/recipe.model";


@Component({
  selector: 'app-recipe-detail-view',
  standalone: true,
  imports: [],
  templateUrl: './recipe-detail-view.component.html',
  styleUrl: './recipe-detail-view.component.scss'
})
export class RecipeDetailViewComponent {

  // public id = input.required<number>();

  protected recipe: Recipe = emptyRecipe()

}
