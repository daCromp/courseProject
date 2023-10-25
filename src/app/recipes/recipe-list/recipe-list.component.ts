import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  recipes: Recipe[] = [
    new Recipe("Butterchicken", "Lecker Lecker", "https://www.einfachmalene.de/wp-content/uploads/2022/09/Butter-Chicken-13.jpg")
  ];
}
