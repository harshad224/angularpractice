import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.scss']
})
export class AdditemComponent implements OnInit {

  constructor(private userSer:UserserviceService) { }

  addUserForm:any;

  ngOnInit(): void {

    this.addUserForm=new FormGroup({
'name':new FormControl(null,Validators.required),
'age':new FormControl(null,Validators.required)
    })

   
  }

  addUser(){
    const {value}=this.addUserForm
    let ar:any=[value]
this.userSer.additem(value).subscribe(()=>{
  this.userSer.user.next(ar)
})

  }
}
