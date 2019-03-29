import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { DataStorageService } from "../shared/data-storage.service";
import { Response } from "@angular/http";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    constructor(private router: Router, private dataStorageService: DataStorageService) {}

    onBrandClick() {
        this.router.navigate(['home'])
    }

    onSaveData() {
        this.dataStorageService.storeRecipes()
            .subscribe(
                (response: Response) => {
                    console.log(response);
                    
                }
            )

    }

    onFetchData() {
        this.dataStorageService.fetchRecipes()            
    }
}