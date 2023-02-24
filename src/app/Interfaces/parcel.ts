import { Observable } from "rxjs"

export interface Parcel{
    id: number
    name:string
    email:string
    destination:string

}


export interface CanDeactivateComponent{
    canDeactive:()=> Promise<boolean> | Observable<boolean> | boolean 
}