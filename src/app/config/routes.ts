import {RouteDefinition} from "angular2/router";
import {IndexComponent} from "../index.component";
import {FoodComponent} from "../food/food.component";

export const ROUTE_NAMES: any = {
  index: "Index",
  food: "Food"
};

export const ROUTES: RouteDefinition[] = [
  { path: "/", redirectTo: ROUTE_NAMES.index },
  { path: "/index", as: ROUTE_NAMES.index, component: IndexComponent },
  { path: "/food", as: ROUTE_NAMES.food, component: FoodComponent },
];
