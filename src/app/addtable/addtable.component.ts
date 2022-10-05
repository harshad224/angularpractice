import { ThisReceiver } from '@angular/compiler';
import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { throttleTime } from 'rxjs';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-addtable',
  templateUrl: './addtable.component.html',
  styleUrls: ['./addtable.component.scss']
})
export class AddtableComponent implements OnInit{

studentlist:any[]=[]


  constructor(private userSer:UserserviceService) { }

  ngOnInit(): void {
 
    this.getitems()

    this.userSer.user.subscribe((data:any)=>{
      this.studentlist.push(...data)
    })

  }

  getitems(){
    this.userSer.getitem().subscribe((data:any)=>{
      this.userSer.user.next(data)
    })
  }

}
