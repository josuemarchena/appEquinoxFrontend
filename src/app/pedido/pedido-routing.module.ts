import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../share/auth-guard.service';
import { RolGuardService } from '../share/rol-guard.service';
import { PedidoAllComponent } from './pedido-all/pedido-all.component';
import { PedidoIndexComponent } from './pedido-index/pedido-index.component';

const routes: Routes = [
  {
    path: 'pedido/all',
    component: PedidoAllComponent,
    canActivate: [AuthGuardService, RolGuardService],
    data: { expectedRole: 1 },
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
