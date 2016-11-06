/**
 * Created by pabloelustondo on 15-12-30.
 */
import {bootstrap}    from 'angular2/platform/browser'
import {provide} from 'angular2/core';
import {APP_BASE_HREF} from 'angular2/router';
import { MattngComponent } from './components/mattng.component'
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

bootstrap(MattngComponent, [
    ROUTER_PROVIDERS,
    provide(APP_BASE_HREF, {useValue: '/mattweb/client'})
]);