import {Injector, provide} from "angular2/core";

abstract class Animal {}
class Cat implements Animal { }
class Dog implements Animal { }

describe("Dependency Injection", () => {
	function expectExists(obj: any): void {
		expect(obj).toBeDefined();
		expect(obj).not.toBeNull();
	}

	it("Injector exists", () => {
		expectExists(Injector);
	});

	describe("Injector.resolveAndCreate", () => {
		it("Should register Cat and Dog classes", () => {
			let injector = Injector.resolveAndCreate([Cat, Dog]);
			expectExists(injector);
			let cat = injector.get(Cat);
			expectExists(cat);
			let dog = injector.get(Dog);
			expectExists(dog);
		});

		it("Should resolve same instance of Cat when resolved multiple times", () => {
			let injector = Injector.resolveAndCreate([Cat]);
			let cat1 = injector.get(Cat);
			let cat2 = injector.get(Cat);
			let cat3 = injector.get(Cat);
			expect(cat1).toBe(cat2);
			expect(cat1).toBe(cat3);
			expect(cat2).toBe(cat3);
		});
	});	

	describe("provide", () => {
		it ("Should return Cat when Cat is provided for Animal", () => {
			let injector = Injector.resolveAndCreate([
				provide(Animal, { useClass: Cat })
			]);

			let animal = injector.get(Animal);
			expectExists(animal);
			expect(animal.constructor.name).toBe("Cat");
		});

		it("Should return existing instance of Cat when provided for Animal", () => {
			let cat = new Cat();

			let injector = Injector.resolveAndCreate([
				provide(Animal, { useExisting: cat })
			]);

			let animal = injector.get(Animal);
			expectExists(animal);
			expect(animal.constructor.name).toBe("Cat");
			expect(animal).toBe(cat);
		});
	});
});