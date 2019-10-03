import { Component, OnInit } from '@angular/core';
import { MobileService } from './mobile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {
  mobiles: any;

  constructor(private mobileService: MobileService, private router: Router) { 
    this.mobiles = this.mobileService.getAll();
  }

  ngOnInit() {
  }

  chooseMobile(mobile) {
    this.mobileService.setSelection(mobile);
    this.router.navigate(['']);
  }

  lowtohigh(){
    if(this.mobiles){
      // console.log(this.contacts);
      this.mobiles.sort((a,b)=>{
      if(a.Price>b.Price){
      return 1;
        }
      else if(a.Price<b.Price){
      return -1;
        }
        else
        return 0;
      });
    }   
  }

  hightolow(){
    if(this.mobiles){
      // console.log(this.contacts);
      this.mobiles.sort((a,b)=>{
      if(a.Price<b.Price){
      return 1;
        }
      else if(a.Price>b.Price){
      return -1;
        }
        else
        return 0;
      });
    }
  }

}
