import {Injectable} from "angular2/angular2";
import {Http} from "angular2/http";

@Injectable()
export class MyService {
    greetings: string[] = [];

    constructor(private _http: Http) { }

    getGreetings(): Promise<string[]> {
        return this._http.get("greetings.json");
    }
}
