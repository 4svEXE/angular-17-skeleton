import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private stateSubject = new BehaviorSubject<string>('login');
  public state$: Observable<string> = this.stateSubject.asObservable();

  updateState(newState: string): void {
    this.stateSubject.next(newState);
  }
}
