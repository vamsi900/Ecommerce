import { Component, OnInit } from '@angular/core';
import { MobileService } from './mobile.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {
  mobiles: any;
  CheckBox: boolean;
  CheckBox1: boolean;
  public tableSelect:any="1";
  RAMSorted6: any;
  array: any;
  array1: any;
  originalArray: any;
  notEmptyPost = true;
  notscrolly = true;
  constructor(private mobileService: MobileService, private router: Router, private http: HttpClient, private spinner: NgxSpinnerService) { 
    this.mobiles = this.mobileService.getAll();
    this.originalArray = this.mobiles;
  }

  ngOnInit() {
    this.relevance();
  }

  chooseMobile(mobile) {
    this.mobileService.setSelection(mobile);
    this.router.navigate(['mobiles-details']);
  }

  onScroll(){
    if(this.notscrolly && this.notEmptyPost){
      this.spinner.show();
      this.notscrolly = false;
      this.loadNextData();
    }
  }

  loadNextData(){
    const lastMobile = this.mobiles[this.mobiles.length - 1];
    const lastMobileId = lastMobile.id;
    const dataToSend = new FormData();
    dataToSend.append('id', lastMobileId);
    
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

    this.originalArray;
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
      this.array = this.mobiles.filter((a) => {
        return a.RAM >= 6
      })
      this.mobiles = this.array;
    }
    else if(this.CheckBox == false){
      console.log("unchecked")
      this.mobiles = this.originalArray;
    }
    else{
      console.log('error');
    }
  }

  toggle1(e){
    if(this.CheckBox1 == true){
      console.log("checked")
      this.array1 = this.mobiles.filter((a) => {
        return a.Battery >= 3000 && a.Battery <=4000;
        });
        console.log(this.array1);
        this.mobiles = this.array1;
    }
    else if(this.CheckBox1 == false){
      console.log("unchecked")
      this.mobiles = this.originalArray;
    }
    else{
      console.log('error');
    }
  }

}
