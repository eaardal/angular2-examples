import {Component} from "angular2/angular2";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {ROUTES, ROUTE_NAMES} from "./config/routes";

@Component({
    directives: [ROUTER_DIRECTIVES],
    selector: "diet-maestro-app",
    templateUrl: "app/app.component.html",
    styleUrls: []
})
@RouteConfig(ROUTES)
export class AppComponent {
    public routes: {} = ROUTE_NAMES;
}
