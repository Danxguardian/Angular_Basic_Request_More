import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { PersonsComponent } from "./persons/persons.component";
import { PersonComponent } from "./persons/person/person.component";
import { FormsModule } from "@angular/forms";
import { PersonFormComponent } from 
"./persons/person-form/person-form.component";
import { LoggingService } from "./Services/loggingService.service";
import { PersonsService } from "./Services/personsService.service";
import { AppRoutingModule } from "./app-routing.module";
import { ErrorComponent } from './error/error.component';

@NgModule({
	declarations: [
		AppComponent,
		PersonsComponent,
		PersonComponent,
		PersonFormComponent,
  ErrorComponent,
	],
	imports: [BrowserModule, FormsModule, AppRoutingModule],
	providers: [LoggingService, PersonsService],
	bootstrap: [AppComponent],
})
export class AppModule {}
