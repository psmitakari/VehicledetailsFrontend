import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-editvehicle',
  templateUrl: './editvehicle.component.html',
  styleUrls: ['./editvehicle.component.css']
})
export class EditvehicleComponent implements OnInit {

  constructor(private vhs:VehicleService) { }

  ngOnInit(): void {
  }

  vehicle:Vehicle=new Vehicle();

  saveVehicle(vehicleForm:any)
  {
    this.vehicle=vehicleForm.values;
    console.log(this.vehicle);
    this.vhs.addVehicle(this.vehicle).subscribe(
      (data)=>{
        console.log(data);
        alert("Vehicle Added!")
      },
      (error)=>
      {  console.log(error) }
      )
  }

}
