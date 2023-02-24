import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Parcel } from '../Interfaces/parcel';
import { ParcelService } from '../Services/ProductService/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  standalone: true,
  imports: [CommonModule,RouterModule]
})
export class ProductsComponent implements OnInit {
  parcels:Parcel[]=[]
  categories:string[]=[]
  constructor(private parcelService:ParcelService , private router:Router, 
    private route:ActivatedRoute
    ){}
  ngOnInit(): void {
    this.parcels= this.parcelService.getParcel()
    // this.categories=this.parcelService.getProductCategories()
       
  }
  LoadAdd(){
    this.router.navigate(['2'], {relativeTo:this.route})
  }

  showProducts(c:string){
    this.router.navigate(['category','all'],{relativeTo:this.route,
      queryParams:{category:c}})
  }
}
