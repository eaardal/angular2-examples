import {PageTwoComponent} from "./page-two.component";
import {ROUTE_NAMES} from "./routes";

describe("page-two.component", () => {

    function createSut(): PageTwoComponent {
        return new PageTwoComponent();
    }

    it("should exist", () => expect(createSut()).toBeDefined());
});
