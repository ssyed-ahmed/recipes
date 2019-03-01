import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core'
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {

	recipeSelected = new EventEmitter<Recipe>()

	private recipes: Recipe[] = [
		new Recipe(
			'Test recipe', 
			'This is a simple beef recipe', 
			'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/480px-Recipe_logo.jpeg',
			[
				new Ingredient('Meat', 1),
				new Ingredient('French Fries', 20),
			]
		),
		new Recipe(
			'Another test recipe', 
			'This is a simple chicken recipe', 
			'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/480px-Recipe_logo.jpeg',
			[
				new Ingredient('Buns', 2),
				new Ingredient('Meat', 1),
			]
		)
	]

	getRecipes() {
		return this.recipes.slice()
	}
}