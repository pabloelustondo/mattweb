/**
 * Created by pabloelustondo on 16-02-20.
 */
import { Component } from 'angular2/core'
import { ConcernsComponent } from './concerns.component';
import { HeroDetailComponent } from './herodetail.component';
import { HeroService }     from './hero.service';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
  selector:"mattng",
    styleUrls: ['app/components/mattng.component.css'],
  directives: [ROUTER_DIRECTIVES],
  template:`
  <router-outlet></router-outlet>
  `,
  providers: [
    HeroService,
    ROUTER_PROVIDERS,
  ]
})

//  <nav><a [routerLink]="['Heroes']">Heroes</a></nav>
//  <nav><a [routerLink]="['Dashboard']">Dashboard</a></nav>

@RouteConfig([
  {
    path: '/concerns',
    name: 'Concerns',
    component: ConcernsComponent,
    useAsDefault: true
  },
  {
    path: '/detail/:id',
    name: 'HeroDetail',
    component: HeroDetailComponent
  }
])
export class MattngComponent{
  public title: string = 'Matt';
}
