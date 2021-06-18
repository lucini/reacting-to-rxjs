import { GuerraDosTronosService } from './../guerra-dos-tronos.service';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'reagindo-stark',
  templateUrl: './stark.component.html',
  styleUrls: ['./stark.component.css']
})
export class StarkComponent implements OnInit {

  values: string[] = [];

  constructor(private guerraDosTronosService: GuerraDosTronosService) { 
    this.guerraDosTronosService.observar()
      .pipe(distinctUntilChanged())
      .subscribe(val => this.values.push(val));
  }

  ngOnInit(): void {
  }

}
