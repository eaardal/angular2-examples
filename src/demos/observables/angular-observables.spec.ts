/// <reference path="../../typings/angular2/angular2.d.ts" />

import {Observable, Injector} from "angular2/angular2";

describe("angular-observables", () => {

	function exists(obj: any): void{
		expect(obj).toBeDefined();
		expect(obj).not.toBeNull();
	}

	it("Are created using the Observable class", () => {
		let obs = new Observable();
		expect(obs).toBeDefined();
		expect(obs).not.toBeNull();
	});
	
});

/*
	it("Are generic", () => {
		let obs = new Observable<number>();
		expect(obs).toBeDefined();
		expect(obs).not.toBeNull();
	});

	it("Can NOT be subscribed upon", () => {
		let obs = new Observable<string>();
		expect(obs.subscribe).not.toBeDefined();
	});
it("Extends Observable from rxjs/observable", () => {
		let obs = new Observable();
		expect(obs instanceof RxObservable).toBe(true);
	});

it("Get returns Observable<Response>", () => {

});
*/