import {Observable, Injector} from "angular2/angular2";
import {inject} from "angular2/testing";
import {FoodService} from "./food.service";
import {Food} from "./food.model";
import {Http} from "angular2/http";

describe("food.service", () => {

    let injector: Injector;

    beforeEach(() => {

    });

    function createSut(): FoodService{
        let injector = Injector.resolveAndCreate([FoodService, Http, ConnectionBackend]);
        let s: FoodService = injector.get(FoodService);
        return s;
        /*let sut: FoodService;
        inject([FoodService], (foodService) => {
            sut = foodService;
        });
        return sut;*/
    }

    it ("should exist", () => expect(createSut()).toBeDefined());

    describe("the getFoods method", () => {

        it("should exist", () => {
            let sut: FoodService = createSut();
            expect(sut.getFoods).toBeDefined("getFoods should be defined");
        });

        it("should return 3 foods", () => {
            let sut: FoodService = createSut();
            let foods: Promise<Food[]> = sut.getFoods();
            console.log(foods);
            //foods.subscribe(f => console.log(`Got food: ${f}`));
        });
    });
});
