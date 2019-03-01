import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core'

export class RecipeService {

	recipeSelected = new EventEmitter<Recipe>()

	private recipes: Recipe[] = [
		new Recipe('Test recipe', 'This is a simple beef recipe', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/480px-Recipe_logo.jpeg'),
		new Recipe('Another test recipe', 'This is a simple chicken recipe', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/480px-Recipe_logo.jpeg')
	]

	getRecipes() {
		return this.recipes.slice()
	}
}