import { Injectable } from '@angular/core';
import { MOBILES }  from './mock-mobiles';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MobileService {
  mobiles: any;
  selection: any;

  constructor(private http:HttpClient) { 
    this.mobiles = MOBILES;
  }

  getAll(){
    return this.mobiles;
  }

  setSelection(selection) {
    this.selection = selection;
  }
  
  getSelection() {
    return this.selection;
  }
}
