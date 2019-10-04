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
  CheckBox = false;
  public tableSelect:any="1";
  RAMSorted6: any;
  constructor(private mobileService: MobileService, private router: Router) { 
    this.mobiles = this.mobileService.getAll();
  }

  ngOnInit() {
    this.relevance();
  }

  chooseMobile(mobile) {
    this.mobileService.setSelection(mobile);
    this.router.navigate(['mobiles-details']);
  }

  relevance(){
    this.tableSelect="1";

    // console.log("relevance")

    document.getElementById("relevance").style.color= "#157BFF";
    document.getElementById("relevance").style.borderBottom= "3px solid #157BFF";

    document.getElementById("lowtohigh").style.color="black";
    document.getElementById("lowtohigh").style.borderBottom= "";

    document.getElementById("hightolow").style.color="black";
    document.getElementById("hightolow").style.borderBottom= "";
  }

  lowtohigh(){
    this.tableSelect="2";

    document.getElementById("relevance").style.color="black";
    document.getElementById("relevance").style.borderBottom= "";

    document.getElementById("lowtohigh").style.color= "#157BFF";
    document.getElementById("lowtohigh").style.borderBottom= "3px solid #157BFF";

    document.getElementById("hightolow").style.color="black";
    document.getElementById("hightolow").style.borderBottom= "";

    // if(this.mobiles){
      this.mobiles.sort((a,b) => {
      if(a.Price>b.Price){
      return 1;
        }
      else if(a.Price<b.Price){
      return -1;
        }
        else
        return 0;
      });
    // }   
  }

  hightolow(){
    this.tableSelect="3";

    document.getElementById("relevance").style.color="black";
    document.getElementById("relevance").style.borderBottom= "";

    document.getElementById("lowtohigh").style.color="black";
    document.getElementById("lowtohigh").style.borderBottom= "";

    document.getElementById("hightolow").style.color= "#157BFF";
    document.getElementById("hightolow").style.borderBottom= "3px solid #157BFF";

    // if(this.mobiles){
      this.mobiles.sort((a,b) => {
      if(a.Price<b.Price){
      return 1;
        }
      else if(a.Price>b.Price){
      return -1;
        }
        else
        return 0;
      });
    // }
  }

  toggle(e){
    if(this.CheckBox == true){
      console.log("checked")
      this.mobiles.filter((a) => {
        return a.RAM >= 6
      })
    }
    else if(this.CheckBox == false){
      console.log("unchecked")
    }
    else{
      console.log('error');
    }
  }

  toggle1(e){
    if(this.CheckBox == true){
      console.log("checked")
      this.mobiles.sort((a,b) => {
        if(a.Battery>b.Battery){
        return 1;
          }
        else if(a.Battery<b.Battery){
        return -1;
          }
          else
          return 0;
        });
    } else {
      console.log("unchecked");
    }
  }

}
