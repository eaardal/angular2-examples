import {Injectable} from "angular2/angular2";
import {Http} from "angular2/http";
import {Food} from "./food.model";

@Injectable()
export class FoodService {
    foods: Food[] = [];

    constructor(private _http: Http) { }

    getFoods(): Promise<Food[]> {
        return this._http.get("foods.json");
    }


}
