import {Observable, Injector} from "angular2/angular2";
import {inject} from "angular2/testing";
import {MyService} from "./service";
import {Http, ConnectionBackend} from "angular2/http";

describe("service", () => {

    let injector: Injector;

    beforeEach(() => {

    });

    function createSut(): MyService{
        let injector = Injector.resolveAndCreate([MyService, Http, ConnectionBackend]);
        let s: MyService = injector.get(MyService);
        return s;
        /*let sut: MyService;
        inject([MyService], (myService) => {
            sut = myService;
        });
        return sut;*/
    }

    it ("should exist", () => expect(createSut()).toBeDefined());

    describe("the getGreetings method", () => {

        it("should exist", () => {
            let sut: MyService = createSut();
            expect(sut.getGreetings).toBeDefined("getGreetings should be defined");
        });

        it("should return 5 greetings", () => {
            let sut: MyService = createSut();          
            
        });
    });
});
