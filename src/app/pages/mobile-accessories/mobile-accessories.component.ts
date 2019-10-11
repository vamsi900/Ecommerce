import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-mobile-accessories',
  templateUrl: './mobile-accessories.component.html',
  styleUrls: ['./mobile-accessories.component.css']
})
export class MobileAccessoriesComponent implements OnInit {
  toss: any;
  constructor(private api: ApiService) { }
  data: any;
  ngOnInit() {
    
  }

  getData(){
    this.api.getData().subscribe(data => {
      this.toss = data;
      console.log("hello",this.toss)
    });
  }

}
