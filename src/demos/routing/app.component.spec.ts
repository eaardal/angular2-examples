import {AppComponent} from "./app.component";
import {ROUTE_NAMES} from "./routes";

describe("app.component", () => {

    function createSut(): AppComponent {
        return new AppComponent();
    }

    it("should exist", () => expect(createSut()).toBeDefined());

    it("should have same routes as routes.ts", () => {
        let originalRoutes: any = Object.keys(ROUTE_NAMES);

        let sut: AppComponent = createSut();
        let appRoutes: any = Object.keys(sut.routes);

        expect(appRoutes.length).toBe(originalRoutes.length);
    });
});
