import {AppComponent} from "./component";

describe("component", () => {

    // "sut" == System Under Test aka the thing that is being tested.
    function createSut(): AppComponent {
        return new AppComponent();
    }

    it("should exist", () => expect(createSut()).toBeDefined());
});
