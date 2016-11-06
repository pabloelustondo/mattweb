import {MattInitialConcerns} from '../model/MattInitialConcerns';
import {Injectable} from 'angular2/core';

@Injectable()
export class HeroService {
    getHeroes() {
        return Promise.resolve(MattInitialConcerns);
    }

    getHero(id:number) {
        return Promise.resolve(MattInitialConcerns).then(
                heroes => heroes.filter(hero => hero.id === id)[0]
        );
    }
}

