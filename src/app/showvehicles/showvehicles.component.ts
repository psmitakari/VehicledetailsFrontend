import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';
@Component({
  selector: 'app-showvehicles',
  templateUrl: './showvehicles.component.html',
  styleUrls: ['./showvehicles.component.css']
})
export class ShowvehiclesComponent implements OnInit {

  constructor(private vhs:VehicleService) { }
  
  vehicleList:any;
  
  ngOnInit(): void 
  {
    this.vhs.getAllVehicles().subscribe(
      (data)=>{
        console.log(data);
        this.vehicleList=data;
      },
      (error)=>
      {
        console.log(error);
        
      }
    )
  
    
  }

}
