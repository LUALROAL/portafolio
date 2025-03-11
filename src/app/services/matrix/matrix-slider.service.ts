import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatrixSliderService {

  private matrixEntered = new BehaviorSubject<boolean>(false);
  matrixEntered$ = this.matrixEntered.asObservable();

  constructor() { }

  enterMatrix() {
    this.matrixEntered.next(true);
  }
}
