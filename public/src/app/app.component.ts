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

  params = { 'colors': "" }

  choseColor = false;
  gotLands = false;
  gotCreatures = false;
  gotNonCreatures = false;

  ngOnInit(){
    // let observable = this._httpService.allCards();
    // observable.subscribe(data => {
    //   console.log(data);
    // })
    this.deck = [];
  }

/*   group(){
    for (var i = 0; i < this.deck.length; i++){

    }
  } */

  chooseColor(){
    this.choseColor = true;
    console.log(this.params['color']);
  }

  getCreatures(){
    this.gotCreatures = true;
    this.gotLands = false;
    let observable = this._httpService.getCreatures(this.params);
    observable.subscribe(data => {
      this.creatures = data['data'];
      for (var i = 0; i < this.creatures.length; i++){
        this.deck.push(this.creatures[i]);
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
      }
    })
  }

  restart(){
    this.choseColor = false;
    this.gotLands = false;
    this.gotCreatures = false;
    this.gotNonCreatures = false;
    this.params = { 'colors': "" };
    this.deck = [];
  }
}
