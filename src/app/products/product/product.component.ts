import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { Parcel } from 'src/app/Interfaces/parcel';
import { ParcelService } from '../../Services/ProductService/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  standalone: true,
  imports: [CommonModule]
})

export class ProductComponent implements OnInit  {
parcel!:Parcel
show!:boolean
constructor(private route:ActivatedRoute, private router:Router,
  private parcelService:ParcelService) {
}

ngOnInit(): void {
  this.route.params.subscribe((params:Params)=>{
    console.log(params['id']);
    this.parcel=this.parcelService.getOneParcel(+params['id'])
  })

  this.route.data.subscribe((data:Data)=>{
    this.parcel= data['parcel']
    // console.log(data);
    
  })

  this.route.queryParams.subscribe((params:Params)=>{
    console.log(params['showPrice']);
    params['showPrice']==='true'?this.show=true:this.show=false
    this.parcel=this.parcelService.getOneParcel(+params['id'])
  })

}

Update(){
this.router.navigate(['edit'], {relativeTo:this.route})
}
}
