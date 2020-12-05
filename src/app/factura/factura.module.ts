import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacturaRoutingModule } from './factura-routing.module';
import { FacturaAllComponent } from './factura-all/factura-all.component';
import { FacturaCreateComponent } from './factura-create/factura-create.component';

@NgModule({
  declarations: [FacturaAllComponent, FacturaCreateComponent],
  imports: [CommonModule, FacturaRoutingModule],
})
export class FacturaModule {}
