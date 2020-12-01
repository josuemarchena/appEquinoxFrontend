import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PedidoAllComponent } from './pedido-all/pedido-all.component';
import { PedidoIndexComponent } from './pedido-index/pedido-index.component';

const routes: Routes = [
  {
    path: 'pedido/all',
    component: PedidoAllComponent,
  },
  {
    path: 'pedido/index',
    component: PedidoIndexComponent,
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidoRoutingModule {}
