import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {Injectable, bootstrap, ComponentRef, Component} from "angular2/angular2";

@Injectable()
export class HttpContext{
	constructor(public http: Http){
		console.log("HTTP CLIENT", http);
	}
}

@Component({
	directives: [],
    selector: "app",
    template: "<div></div>",
    styleUrls: []
})
class AppComponent{

}

bootstrap(AppComponent, [
    HTTP_PROVIDERS
]).then((success: ComponentRef) => console.log("Bootstrap success"))
	.catch((error: ComponentRef) => console.log(error));
