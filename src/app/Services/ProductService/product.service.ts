import { Injectable } from '@angular/core';
import { Parcel } from '../../Interfaces/parcel';

@Injectable({
  providedIn: 'root'
})
export class ParcelService {


  private parcels:Parcel[]=[
    {  
      id:1,
      name:'Mouse',
      email:'simomutu8@travel.com',
      destination:'Nyeri',
    },
    {  
      id:2,
      name:'Keyboard',
      email:'simomutu8@travel.com',
      destination:'Nyeri',
    },
    {  
      id:3,
      name:'Monitor',
      email:'simomutu8@travel.com',
      destination:'Nyeri'
    },
    
    
    ]

  constructor() { }

  addParcel(parcel:Parcel):void{
    this.parcels.push(parcel)
      }

  getParcel():Parcel[]{
    return this.parcels
  }

  getOneParcel(id:number):Parcel{
    return this.parcels.find(x=>x.id===id) as Parcel
  }

  updateParcel(id:number, parcel:Parcel){
    let index= this.parcels.findIndex(x=>x.id===id)
    this.parcels[index]=parcel
  }
}
