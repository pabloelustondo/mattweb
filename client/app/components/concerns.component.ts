import {Component} from 'angular2/core';
import {MattConcern} from '../model/MattConcern';
import {HeroDetailComponent} from './herodetail.component';
import {HeroService} from './hero.service';
import {OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
    selector: 'concerns',
    directives: [HeroDetailComponent],
    templateUrl: 'app/components/concerns.component.html',
    styleUrls:  ['app/components/concerns.component.css'],
})
export class ConcernsComponent implements OnInit {
    public title = 'Life';
    public concerns: MattConcern[];
    public selectedHero: MattConcern;

    constructor(private _heroService: HeroService, private _router: Router) { }

    ngOnInit() {
        this.getConcerns();
    }
    getConcerns() {
        this._heroService.getHeroes().then(heroes => this.concerns = heroes);
    }
    onSelect(hero:MattConcern) {

        this.selectedHero = hero;
        this.gotoDetail(hero);
    }
    gotoDetail(hero: MattConcern) {
        let link = ['HeroDetail', { id: hero.id }];
        this._router.navigate(link);
    }

}
