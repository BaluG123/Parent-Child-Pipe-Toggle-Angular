import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ToggleComponent } from './toggle/toggle.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoComponent } from './todo/todo.component';
import { PtocComponent } from './ptoc/ptoc.component';
import { CtopComponent } from './ctop/ctop.component';
import { UsdInrPipe } from './pipes/usd-inr.pipe';
import { NavComponent } from './nav/nav.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    ToggleComponent,
    TodoComponent,
    PtocComponent,
    CtopComponent,
    UsdInrPipe,
    NavComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
