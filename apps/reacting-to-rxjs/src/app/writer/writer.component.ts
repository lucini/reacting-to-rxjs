import { GuerraDosTronosService } from './../guerra-dos-tronos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'reagindo-writer',
  templateUrl: './writer.component.html',
  styleUrls: ['./writer.component.css']
})
export class WriterComponent implements OnInit {

  constructor(private guerraDosTronosService: GuerraDosTronosService) { }

  ngOnInit(): void {
  }

  proximo(valor: string): void {
    this.guerraDosTronosService.proximo(valor);
  }

}
