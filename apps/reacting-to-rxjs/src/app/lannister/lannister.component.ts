import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { GuerraDosTronosService } from '../guerra-dos-tronos.service';

@Component({
  selector: 'reagindo-lannister',
  templateUrl: './lannister.component.html',
  styleUrls: ['./lannister.component.css']
})
export class LannisterComponent implements OnInit {

  value$: Observable<string>;

  constructor(private guerraDosTronosService: GuerraDosTronosService) {
    this.value$ = this.guerraDosTronosService
    .observar();
  }

  ngOnInit(): void {
  }

}
