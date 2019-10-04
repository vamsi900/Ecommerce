import { Injectable } from '@angular/core';
import { MOBILES }  from './mock-mobiles';

@Injectable({
  providedIn: 'root'
})
export class MobileService {
  mobiles: any;
  selection: any;
  

  constructor() { 
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
