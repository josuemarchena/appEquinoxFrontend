//import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CustomDatePipe } from 'src/app/pipes/custom-date.pipe';
import { GenericService } from 'src/app/share/generic.service';

@Component({
  selector: 'app-pedido-all',
  templateUrl: './pedido-all.component.html',
  styleUrls: ['./pedido-all.component.css'],
})
export class PedidoAllComponent implements OnInit {
  datos: any;
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private gService: GenericService,
    //public datepipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.listaPedidos();
  }

  listaPedidos() {

    this.gService
      .list('pedido/all')
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: any) => {

        //this.datepipe.transform(data.fecha, 'yyyy/MM/dd');
        this.datos = data;

      });
  }



}
