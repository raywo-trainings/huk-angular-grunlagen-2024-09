import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RecipeListComponent} from "./recipes/components/recipe-list/recipe-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RecipeListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'recipes';
}
