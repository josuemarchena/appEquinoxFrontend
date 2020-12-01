import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidoRoutingModule } from './pedido-routing.module';
import { PedidoAllComponent } from './pedido-all/pedido-all.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PedidoIndexComponent } from './pedido-index/pedido-index.component';

@NgModule({
  declarations: [PedidoAllComponent, PedidoIndexComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PedidoRoutingModule,
  ],
})
export class PedidoModule {}
