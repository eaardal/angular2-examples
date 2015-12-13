import {IndexComponent} from "./index.component";

describe("index.component", () => {

    function createSut(): IndexComponent {
        return new IndexComponent();
    }

    it ("should exist", () => expect(createSut()).toBeDefined());
});
