import {PageOneComponent} from "./page-one.component";
import {ROUTE_NAMES} from "./routes";

describe("page-one.component", () => {

    function createSut(): PageOneComponent {
        return new PageOneComponent();
    }

    it("should exist", () => expect(createSut()).toBeDefined());
});
