import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanDeactivateComponent, Parcel } from '../../Interfaces/parcel';
import { ParcelService } from '../../Services/ProductService/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule]
})
export class EditProductComponent implements OnInit, CanDeactivateComponent {
  form!:FormGroup
  parcel!:Parcel
  updated=false

  constructor( private fb: FormBuilder, 
    private route:ActivatedRoute,
    private router:Router,
    private parcelService:ParcelService) {
        
  }


  ngOnInit(): void {
    this.form= this.fb.group({
      name:[null, Validators.required],
      email:[null, Validators.required],
      destination:[null, Validators.required],
    })
    this.route.params.subscribe((params:Params)=>{
      this.parcel= this.parcelService.getOneParcel(+params['id'])
    })
    this.form.setValue({
      name:this.parcel.name,
      email:this.parcel.email,
      destination:this.parcel.destination,
 
    })
  }

  UpdateParcel(){
    let parcel:Parcel= {...this.parcel ,...this.form.value}
    this.router.navigate(['../'],{relativeTo:this.route})
    this.updated=true
  }

  canDeactive():boolean | Promise<boolean> | Observable<boolean>{
   
    if((
    this.form.value.name !== this.parcel.name ||
    this.form.value.email !== this.parcel.email ||
    this.form.value.destination !== this.parcel.destination 
   
    ) && !this.updated){
     const prom= new Promise<boolean>((resolve,reject)=>{
        setTimeout(()=>{
        resolve(confirm('Are you Sure you want to Discard the Changes'))
        },1000)
     })
     return prom
    }else{
      return true
    }
  };
}
