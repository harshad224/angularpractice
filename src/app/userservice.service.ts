import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

user=new Subject<[]>()

  constructor(private http:HttpClient) { }
baseurl:string="http://localhost:3000"

// studentList:any[]=[]

  additem(user:any){
   
    return this.http.post(this.baseurl+'/'+'users',user)
  }

  getitem(){
    return this.http.get(this.baseurl+'/'+'users')
  }

  removeitem(id:number){
    return this.http.delete(this.baseurl+'/'+'users'+'/'+id)
  }

  // updateitem(id:number){
  //   this.userarr.splice(id,1)
  // }
}
