import { Component } from '@angular/core';
import {Recipe} from "../../model/recipe.model";
import {recipes} from "../../data/recipe.dummy.data";
import {RecipeViewComponent} from "../recipe-view/recipe-view.component";

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

  protected recipes: Recipe[] = recipes;

}
