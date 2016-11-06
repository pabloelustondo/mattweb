import {Component} from 'angular2/core';
import {MattConcern} from '../model/MattConcern';
import {RouteParams} from 'angular2/router';
import { HeroService } from './hero.service';
import { OnInit } from 'angular2/core';

@Component({
    selector: 'herodetail',
    styleUrls:  ['app/components/herodetail.component.css'],
    template: `
  <div *ngIf="hero">
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name"/>
    </div>
  </div>
   <button (click)="goBack()">Back</button>
`  ,
    inputs: ['hero']
})

export class HeroDetailComponent {

    constructor(
        private _heroService: HeroService,
        private _routeParams: RouteParams) {
    }

    ngOnInit() {
        let id = +this._routeParams.get('id');  //+ converts string into number
        this._heroService.getHero(id)
            .then(hero =>
                this.hero = hero);
    }

    goBack() {
        window.history.back();
    }

    public hero: MattConcern;

}