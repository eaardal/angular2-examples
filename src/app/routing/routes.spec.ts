import {RouteDefinition} from "angular2/router";
import {ROUTES, ROUTE_NAMES} from "./routes";
import {PageOneComponent} from "./page-one.component";
import {PageTwoComponent} from "./page-two.component";

describe("routes", () => {

    describe("ROUTE_NAMES", () => {

        it("should exist", () => expect(ROUTE_NAMES).toBeDefined());

        it("should have \"pageOne\"", () => {
            expect(ROUTE_NAMES.pageOne).toBeDefined();
            expect(ROUTE_NAMES.pageOne).toBe("PageOne");
        });

        it("should have \"pageTwo\"", () => {
            expect(ROUTE_NAMES.pageTwo).toBeDefined();
            expect(ROUTE_NAMES.pageTwo).toBe("PageTwo");
        });
    });

    describe("ROUTES", () => {

        function getRoute(key: string): RouteDefinition {
            for (let route of ROUTES){
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
            expect(route.redirectTo).toBe(ROUTE_NAMES.pageOne);
        });

        it("/page-one", () => {
            let route: RouteDefinition = getRoute("/page-one");
            expect(route).not.toBeNull("route not null");
            expect(route.path).toBe("/page-one", "path is /pageOne");
            expect(route.as).toBe(ROUTE_NAMES.pageOne, "as should be ROUTE_NAMES.pageOne");
            expect(route.component).toBe(PageOneComponent, "component should be PageOneComponent");
        });

        it("/page-two", () => {
            let route: RouteDefinition = getRoute("/page-two");
            expect(route).not.toBeNull("route not null");
            expect(route.path).toBe("/page-two", "path is /page-two");
            expect(route.as).toBe(ROUTE_NAMES.pageTwo, "as should be ROUTE_NAMES.pageTwo");
            expect(route.component).toBe(PageTwoComponent, "component should be PageTwoComponent");
        });
    });
});
