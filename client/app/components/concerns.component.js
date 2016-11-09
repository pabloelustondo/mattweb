System.register(['angular2/core', './herodetail.component', './hero.service', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, herodetail_component_1, hero_service_1, router_1;
    var ConcernsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (herodetail_component_1_1) {
                herodetail_component_1 = herodetail_component_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ConcernsComponent = (function () {
                function ConcernsComponent(_heroService, _router) {
                    this._heroService = _heroService;
                    this._router = _router;
                    this.title = 'Life';
                }
                ConcernsComponent.prototype.ngOnInit = function () {
                    this.getConcerns();
                };
                ConcernsComponent.prototype.getConcerns = function () {
                    var _this = this;
                    this._heroService.getHeroes().then(function (heroes) { return _this.concerns = heroes; });
                };
                ConcernsComponent.prototype.onSelect = function (hero) {
                    this.selectedHero = hero;
                    this.gotoDetail(hero);
                };
                ConcernsComponent.prototype.gotoDetail = function (hero) {
                    var link = ['HeroDetail', { id: hero.id }];
                    this._router.navigate(link);
                };
                ConcernsComponent = __decorate([
                    core_1.Component({
                        selector: 'concerns',
                        directives: [herodetail_component_1.HeroDetailComponent],
                        templateUrl: 'app/components/concerns.component.html',
                        styleUrls: ['app/components/concerns.component.css'],
                    }), 
                    __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.Router])
                ], ConcernsComponent);
                return ConcernsComponent;
            }());
            exports_1("ConcernsComponent", ConcernsComponent);
        }
    }
});
//# sourceMappingURL=concerns.component.js.map