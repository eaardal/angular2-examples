import {FoodComponent} from "./food.component";

describe("food.component", () => {

    function createSut(): FoodComponent {
        return new FoodComponent();
    }

    it ("should exist", () => expect(createSut()).toBeDefined());
});
