import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {  Parcel } from '../../Interfaces/parcel';
import { ParcelService } from '../../Services/ProductService/product.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule]
})
export class AddProductComponent implements OnInit {
  constructor( private fb: FormBuilder, private parcelService:ParcelService) {
        
  }
  addParcel!:FormGroup
  ngOnInit(): void {
    this.addParcel= this.fb.group({
      name:[null, Validators.required],
      email:[null, Validators.required],
      destination:[null, Validators.required],
      
    })
  }

  AddParcel(){
    let parcel :Parcel= {...this.addParcel.value, id:Math.floor(Math.random() *10000)};
    this.parcelService.addParcel(parcel)
  }
}
