import { Component } from '@angular/core';
import {Recipe} from "../../model/recipe.model";
import {recipes} from "../../data/recipe.dummy.data";

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss'
})
export class RecipeListComponent {

  protected recipes: Recipe[] = recipes;

}
