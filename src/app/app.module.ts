import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { PersonsComponent } from "./persons/persons.component";
import { PersonComponent } from "./person/person.component";
import { FormsModule } from "@angular/forms";
import { PersonFormComponent } from './person-form/person-form.component';

@NgModule({
	declarations: [AppComponent, PersonsComponent, PersonComponent, PersonFormComponent],
	imports: [BrowserModule, FormsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}

