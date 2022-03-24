import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { NewvehicleComponent } from './newvehicle/newvehicle.component';
import { EditvehicleComponent } from './editvehicle/editvehicle.component';
import { ShowvehiclesComponent } from './showvehicles/showvehicles.component';
import { SearchvehicleComponent } from './searchvehicle/searchvehicle.component';

import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EligibilityComponent } from './eligibility/eligibility.component';
import { CheckeComponent } from './checke/checke.component';

import { LoanofferComponent } from './loanoffer/loanoffer.component';
import { EmicalComponent } from './emical/emical.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    NewvehicleComponent,
    EditvehicleComponent,
    ShowvehiclesComponent,
    SearchvehicleComponent,
    EligibilityComponent,
    CheckeComponent,
    LoanofferComponent,
    EmicalComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
