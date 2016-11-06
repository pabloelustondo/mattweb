System.register(['angular2/platform/browser', 'angular2/core', 'angular2/router', './components/mattng.component'], function(exports_1) {
    var browser_1, core_1, router_1, mattng_component_1, router_2;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (mattng_component_1_1) {
                mattng_component_1 = mattng_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(mattng_component_1.MattngComponent, [
                router_2.ROUTER_PROVIDERS,
                core_1.provide(router_1.APP_BASE_HREF, { useValue: '/mattweb/client' })
            ]);
        }
    }
});
//# sourceMappingURL=boot.js.map