import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'recipes';

  loadedFeature = 'recipes';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyC892NnYr4Df0BefmD4Hj-4J1TWCJWo-SQ",
      authDomain: "ng-recipe-book-4b467.firebaseapp.com"
    })
  }

  onNavigate(feature: string): void {
    this.loadedFeature = feature;
  }

}
