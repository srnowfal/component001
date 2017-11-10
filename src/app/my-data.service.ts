import { Injectable } from '@angular/core';

@Injectable()
export class MyDataService {

  constructor() { }

  cars=['Ford', 'Suzuki', 'Honda'];
  myMethode(){
    return "This is my method..";
  }

}
