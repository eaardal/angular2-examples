import {RouteDefinition} from "angular2/router";
import {PageOneComponent} from "./page-one.component";
import {PageTwoComponent} from "./page-two.component";

export const ROUTE_NAMES: any = {
  pageOne: "PageOne",
  pageTwo: "PageTwo"
};

export const ROUTES: RouteDefinition[] = [
  { path: "/", redirectTo: ROUTE_NAMES.pageOne },
  { path: "/page-one", as: ROUTE_NAMES.pageOne, component: PageOneComponent },
  { path: "/page-two", as: ROUTE_NAMES.pageTwo, component: PageTwoComponent },
];
