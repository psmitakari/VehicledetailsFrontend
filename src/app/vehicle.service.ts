import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicle } from './vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private myhttp:HttpClient) { }
  
  resturl:string="http://localhost:9090/rest/api";

  getAllVehicles()
  {
    return this.myhttp.get(this.resturl+"/vehicle")
  }
  addVehicle(veh:Vehicle)
  {
    return this.myhttp.post(this.resturl+"/vehicle",veh);
  }
}
