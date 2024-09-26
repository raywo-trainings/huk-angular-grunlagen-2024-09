import {Component, inject, OnInit} from '@angular/core';
import {RecipeViewComponent} from "../recipe-view/recipe-view.component";
import {RecipesService} from "../../services/recipes.service";
import {AsyncPipe} from "@angular/common";
import {Recipe} from "../../model/recipe.model";
import {RouterLink} from "@angular/router";


@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [
    RecipeViewComponent,
    AsyncPipe,
    RouterLink
  ],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss'
})
export class RecipeListComponent implements  OnInit {

  private service = inject(RecipesService)
  // Das $-Zeichen signalisiert, dass der Wert der Variablen ein Observable ist.
  protected recipes$ = this.service.getAllRecipes()

  // Alternative zur async-Pipe
  protected recipes: Recipe[] = []

  ngOnInit() {
    this.service.getAllRecipes()
      .subscribe(recipes => this.recipes = recipes)
  }

}
