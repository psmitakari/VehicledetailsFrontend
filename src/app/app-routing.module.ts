import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewvehicleComponent } from './newvehicle/newvehicle.component';
import { ShowvehiclesComponent } from './showvehicles/showvehicles.component';

const routes: Routes = [
  {path:'addvehicle',component:NewvehicleComponent},
  {path:'showall',component:ShowvehiclesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
