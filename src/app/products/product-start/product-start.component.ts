import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import { Parcel } from '../../Interfaces/parcel';
import { ParcelService } from '../../Services/ProductService/product.service';

@Component({
  selector: 'app-product-start',
  templateUrl: './product-start.component.html',
  styleUrls: ['./product-start.component.css'],
  standalone: true,
  imports: [CommonModule,RouterModule]
})
export class ProductStartComponent implements OnInit {

  parcels:Parcel[]=[]
  constructor(private parcelService:ParcelService, private route:ActivatedRoute){}
  
  ngOnInit(): void {
  this.route.queryParams.subscribe((params:Params)=>{
    this.parcels=this.parcelService.getParcel()
  })
  }
}
