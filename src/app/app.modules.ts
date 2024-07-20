import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { routes } from "./app.routes";


@NgModule({
    declarations:[
        
    ],
    imports:[
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes)
    ],
    providers:[],
    
})

export class AppModule{ }
