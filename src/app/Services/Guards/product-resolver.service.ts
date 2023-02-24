import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Parcel } from 'src/app/Interfaces/parcel';
import { ParcelService } from '../ProductService/product.service';


@Injectable({
  providedIn: 'root'
})
export class ProductResolverService implements Resolve<Parcel> {
    constructor( private parcelService:ParcelService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  : Parcel | Observable<Parcel> | Promise<Parcel> {
   return this.parcelService.getOneParcel(+route.params['id'])
  }
}
