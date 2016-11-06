System.register(['angular2/core', './concerns.component', './herodetail.component', './hero.service', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, concerns_component_1, herodetail_component_1, hero_service_1, router_1;
    var MattngComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (concerns_component_1_1) {
                concerns_component_1 = concerns_component_1_1;
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
            MattngComponent = (function () {
                function MattngComponent() {
                    this.title = 'Matt';
                }
                MattngComponent = __decorate([
                    core_1.Component({
                        selector: "mattng",
                        styleUrls: ['app/components/mattng.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        template: "\n  <router-outlet></router-outlet>\n  ",
                        providers: [
                            hero_service_1.HeroService,
                            router_1.ROUTER_PROVIDERS,
                        ]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/concerns',
                            name: 'Concerns',
                            component: concerns_component_1.ConcernsComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/detail/:id',
                            name: 'HeroDetail',
                            component: herodetail_component_1.HeroDetailComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], MattngComponent);
                return MattngComponent;
            })();
            exports_1("MattngComponent", MattngComponent);
        }
    }
});
//# sourceMappingURL=mattng.component.js.map