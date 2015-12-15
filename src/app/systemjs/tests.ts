/*
import {Injector} from "angular2/angular2";
import {bootstrap} from "angular2/angular2";
import {Observable} from "rxjs";

describe("node_modules/angular2/bundles/angular2/", () => {
	function exists(obj: any): void{
		expect(obj).toBeDefined();
		expect(obj).not.toBeNull();
	}

	function hasDefined(path: string): boolean{
		let hasPath = System.has(path);
		expect(hasPath).toBe(true);
		return hasPath;
	}

	it("Imports Injector from src/core/di", () => {		
		exists(Injector);

		const path = "http://127.0.0.1:8080/src/app/systemjs/angular2/angular2"
		hasDefined(path);

		let mod = System.get(path);
		exists(mod);

		let injector = mod.Injector;
		expect(injector).toEqual(Injector);
	});

	it("Imports bootstrap from src/core/bootstrap", () => {
		exists(bootstrap);
	});

	it("Imports Observable from rxjs", () => {
		exists(Observable);

		const path = "http://127.0.0.1:8080/src/app/systemjs/@reactivex/rxjs/dist/cjs/Observable";
		let hasPath = System.has(path);
		expect(hasPath).toBe(true);

		let mod = System.get(path);
		exists(mod);

		let obs = mod.Observable;
		expect(obj).toEqual(Observable);

	});
});
*/