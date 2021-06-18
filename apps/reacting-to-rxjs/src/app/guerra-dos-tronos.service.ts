import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuerraDosTronosService implements OnDestroy {

  private _topicoGuerra = new BehaviorSubject<string>('😮');

  constructor() { }

  proximo(valor: string): void {
    this._topicoGuerra.next(valor);
  }

  observar(): Observable<string> {
    return this._topicoGuerra.asObservable();
  }

  ngOnDestroy(): void {
    this._topicoGuerra.unsubscribe();
  }
}
