import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Deck Builder';
  constructor(private _httpService: HttpService){}

  creatures = [];
  nonCreatures = [];
  lands = [];
  deck = [];
<<<<<<< HEAD
  deckPrice = 0;

  params = { 'colors': "", 'notColors': [] }

  started = false;
=======

  params = { 'colors': "" }

>>>>>>> 028848d14fd7af72b503bae5567bcf2be2040839
  choseColor = false;
  gotLands = false;
  gotCreatures = false;
  gotNonCreatures = false;

  ngOnInit(){
<<<<<<< HEAD
    // THIS CODE WILL INITIALIZE YOUR DATABASE THE FIRST TIME YOU LOAD THIS UP. UNCOMMENT IT OUT AND LET IT RUN ONCE, THEN COMMMENT IT BACK OUT
=======
>>>>>>> 028848d14fd7af72b503bae5567bcf2be2040839
    // let observable = this._httpService.allCards();
    // observable.subscribe(data => {
    //   console.log(data);
    // })
<<<<<<< HEAD
  }

  getPrice(){
    return this.deckPrice.toFixed(2);
  }

  chooseColor(){
    this.choseColor = true;
    this.started = true;
    if (this.params['colors'] == 'W'){
      this.params = {
        'colors': 'W',
        'notColors': ['U', 'G', 'R', 'B']
      }
      console.log("This is params!", this.params);
    }
    else if (this.params['colors'] == 'U'){
      this.params = {
        'colors': 'U',
        'notColors': ['W', 'G', 'R', 'B']
      }
      console.log("This is params!", this.params);
    }
    else if (this.params['colors'] == 'B'){
      this.params = {
        'colors': 'B',
        'notColors': ['U', 'G', 'R', 'W']
      }
      console.log("This is params!", this.params);
    }
    else if (this.params['colors'] == 'G'){
      this.params = {
        'colors': 'G',
        'notColors': ['U', 'W', 'R', 'B']
      }
      console.log("This is params!", this.params);
    }
    else if (this.params['colors'] == 'R'){
      this.params = {
        'colors': 'R',
        'notColors': ['U', 'G', 'W', 'B']
      }
      console.log("This is params!", this.params);
    }
  }

  getLands(){
    this.gotLands = true;
    this.choseColor = false;
    let observable = this._httpService.getLands(this.params);
    observable.subscribe(data => {
      this.lands = data['data'];
      for (var i = 0; i < this.lands.length; i++){
        this.deck.push(this.lands[i]);
        console.log("This is parseFloat", parseFloat(this.lands[i]['usd']));
        this.deckPrice += parseFloat(this.lands[i]['usd']);
        console.log("This is deckPrice", this.deckPrice);

      }
    })
=======
    this.deck = [];
  }

/*   group(){
    for (var i = 0; i < this.deck.length; i++){

    }
  } */

  chooseColor(){
    this.choseColor = true;
    console.log(this.params['color']);
>>>>>>> 028848d14fd7af72b503bae5567bcf2be2040839
  }

  getCreatures(){
    this.gotCreatures = true;
    this.gotLands = false;
<<<<<<< HEAD
    console.log("This is params!", this.params);
=======
>>>>>>> 028848d14fd7af72b503bae5567bcf2be2040839
    let observable = this._httpService.getCreatures(this.params);
    observable.subscribe(data => {
      this.creatures = data['data'];
      for (var i = 0; i < this.creatures.length; i++){
        this.deck.push(this.creatures[i]);
<<<<<<< HEAD
        console.log("This is parseFloat", parseFloat(this.creatures[i]['usd']));
        this.deckPrice += parseFloat(this.creatures[i]['usd']);
        console.log("This is deckPrice", this.deckPrice);

=======
>>>>>>> 028848d14fd7af72b503bae5567bcf2be2040839
        }
      })
    }


  getNonCreatures(){
    this.gotNonCreatures = true;
    this.gotCreatures = false;
    let observable = this._httpService.getNonCreatures(this.params);
    observable.subscribe(data => {
      this.nonCreatures = data['data'];
      for (var i = 0; i < this.nonCreatures.length; i++){
        this.deck.push(this.nonCreatures[i]);
<<<<<<< HEAD
        console.log("This is parseFloat", parseFloat(this.nonCreatures[i]['usd']));
        this.deckPrice += parseFloat(this.nonCreatures[i]['usd']);
        console.log("This is deckPrice", this.deckPrice);
=======
      }
    })
  }

  getLands(){
    this.gotLands = true;
    this.choseColor = false;
    let observable = this._httpService.getLands(this.params);
    observable.subscribe(data => {
      this.lands = data['data'];
      for (var i = 0; i < this.lands.length; i++){
        this.deck.push(this.lands[i]);
>>>>>>> 028848d14fd7af72b503bae5567bcf2be2040839
      }
    })
  }

  restart(){
<<<<<<< HEAD
    this.started = false;
=======
>>>>>>> 028848d14fd7af72b503bae5567bcf2be2040839
    this.choseColor = false;
    this.gotLands = false;
    this.gotCreatures = false;
    this.gotNonCreatures = false;
<<<<<<< HEAD
    this.params = { 'colors': "", 'notColors': [] };
    this.deck = [];
    this.deckPrice = 0;
=======
    this.params = { 'colors': "" };
    this.deck = [];
>>>>>>> 028848d14fd7af72b503bae5567bcf2be2040839
  }
}
