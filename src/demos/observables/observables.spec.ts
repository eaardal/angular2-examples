/// <reference path="../../typings/jasmine/jasmine.d.ts" />

import { Observable } from "rxjs/Observable";
import { Observer } from 'rxjs/Observer';
import { Operator } from 'rxjs/Operator';
import { Scheduler } from 'rxjs/Scheduler';
import { Subscriber } from 'rxjs/Subscriber';
import { Subscription } from 'rxjs/Subscription';
import { CoreOperators } from 'rxjs/CoreOperators';
import { GroupedObservable } from 'rxjs/operator/groupBy-support';
import { ConnectableObservable } from 'rxjs/observable/ConnectableObservable';
import { Subject } from 'rxjs/Subject';
import { Notification } from 'rxjs/Notification';
import 'rxjs/add/observable/fromArray';

describe("RxJS Observable", () => {
	function expectExists(obj: any): void{
		expect(obj).toBeDefined();
		expect(obj).not.toBeNull();
	}

	it("Should exist", () => {
		expectExists(Observable);
	});

	it("Can be created with new keyword", (done) => {
		let names = ["John", "Bob", "Sarah"];

		let observable = new Observable(observer => {
			for (let n of names) {
				observer.next(n);
			}
			observer.complete();
		});

		let receivedNames = [];
		observable.subscribe(
			n => receivedNames.push(n),
			e => console.log('ERR', e),
			() => {
				expect(receivedNames.length).toBe(3);
				expect(receivedNames[0]).toBe(names[0]);
				expect(receivedNames[1]).toBe(names[1]);
				expect(receivedNames[2]).toBe(names[2]);
				done(); // When done is present in a test, it won't complete until it's called
			}
		);
	});

	it("Can be created with Observable.create", (done) => {
		let names = ["John", "Bob", "Sarah"];

		// Observable.create is just a shortcut for newing up an Observable instance
		let observable = Observable.create(observer => {
			for(let n of names){
				observer.next(n);
			}
			observer.complete(); // Remember to call complete, or the expectations in the onComplete block will never be called
		});

		let receivedNames = [];
		observable.subscribe(
			n => receivedNames.push(n),
			e => console.log('ERR', e),
			() => {
				expect(receivedNames[0]).toBe(names[0]);
				expect(receivedNames[1]).toBe(names[1]);
				expect(receivedNames[2]).toBe(names[2]);
				expect(receivedNames.length).toBe(3);
				done();
			}
		);				
	});

	it("Can be created with Observable.fromArray", (done) => {
		let names = ["John", "Bob", "Sarah"];

		// This works because the fromArray operator has been imported at the top: "import 'rxjs/add/observable/fromArray';"
		let observable = Observable.fromArray(names);

		let receivedNames = [];
		observable.subscribe(
			n => receivedNames.push(n),
			e => console.log('ERR', e),
			() => {
				expect(receivedNames.length).toBe(3);
				expect(receivedNames[0]).toBe(names[0]);
				expect(receivedNames[1]).toBe(names[1]);
				expect(receivedNames[2]).toBe(names[2]);
				done();
			}
		);		
	});
});