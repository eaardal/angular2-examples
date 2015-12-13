import {RouteDefinition} from "angular2/router";
import {ROUTES, ROUTE_NAMES} from "./routes";
import {IndexComponent} from "../index.component";
import {FoodComponent} from "../food/food.component";

describe("routes", () => {

    describe("ROUTE_NAMES", () => {

        it("should exist", () => expect(ROUTE_NAMES).toBeDefined());

        it("should have \"index\"", () => {
            expect(ROUTE_NAMES.index).toBeDefined();
            expect(ROUTE_NAMES.index).toBe("Index");
        });

        it("should have \"food\"", () => {
            expect(ROUTE_NAMES.food).toBeDefined();
            expect(ROUTE_NAMES.food).toBe("Food");
        });
    });

    describe("ROUTES", () => {

        function getRoute(key: string): RouteDefinition {
            for (var route of ROUTES){
                if (route.path === key) {
                    return route;
                }
            }
            return null;
        }

        it("should exist", () => expect(ROUTES).toBeDefined());

        it("/", () => {
            let route: RouteDefinition = getRoute("/");
            expect(route).not.toBeNull();
            expect(route.path).toBe("/");
            expect(route.redirectTo).toBe(ROUTE_NAMES.index);
        });

        it("/index", () => {
            let route: RouteDefinition = getRoute("/index");
            expect(route).not.toBeNull("route not null");
            expect(route.path).toBe("/index", "path is /index");
            expect(route.as).toBe(ROUTE_NAMES.index, "as should be ROUTE_NAMES.index");
            expect(route.component).toBe(IndexComponent, "component should be IndexComponent");
        });

        it("/food", () => {
            let route: RouteDefinition = getRoute("/food");
            expect(route).not.toBeNull("route not null");
            expect(route.path).toBe("/food", "path is /food");
            expect(route.as).toBe(ROUTE_NAMES.food, "as should be ROUTE_NAMES.food");
            expect(route.component).toBe(FoodComponent, "component should be FoodComponent");
        });
    });
});
