import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle';
import {VehicleService} from '../vehicle.service'

@Component({
  selector: 'app-newvehicle',
  templateUrl: './newvehicle.component.html',
  styleUrls: ['./newvehicle.component.css']
})
export class NewvehicleComponent implements OnInit {

  constructor(private vhs:VehicleService) { }
  vehicleList:any;
  ngOnInit(): void {
  
  }
  vehicle:Vehicle=new Vehicle();

  saveVehicle(vehicleForm:any)
  {
    this.vehicle=vehicleForm.value;
    console.log(this.vehicle);
    this.vhs.addVehicle(this.vehicle).subscribe(
      (data)=>{
        console.log(data);
        alert("Vehicle Added")

      },
      (error)=>
      { console.log(error)}
    )
    
    
  }

}
