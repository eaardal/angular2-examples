import {bootstrap, ComponentRef } from "angular2/angular2";
import {HTTP_PROVIDERS} from "angular2/http";
import {ROUTER_PROVIDERS} from "angular2/router";
import {AppComponent} from "../app.component";

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
]).then((success: ComponentRef) => console.log("Bootstrap success"))
  .catch((error: ComponentRef) => console.log(error));
