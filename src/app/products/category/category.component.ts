import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import { Parcel } from '../../Interfaces/parcel';
import { ParcelService } from '../../Services/ProductService/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  standalone: true,
  imports: [CommonModule,RouterModule]
})
export class CategoryComponent implements OnInit {

  parcels:Parcel[]=[]
  constructor(private parcelService:ParcelService, private route:ActivatedRoute){}
  
  ngOnInit(): void {
  // this.route.queryParams.subscribe((params:Params)=>{
  //   this.products=this.parcelService.getProductinaCategory(params['category'])
  // })
  }

}
