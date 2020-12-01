import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalAllComponent } from './personal-all/personal-all.component';
import { PersonalCreateComponent } from './personal-create/personal-create.component';
import { PersonalIndexComponent } from './personal-index/personal-index.component';
import { PersonalShowComponent } from './personal-show/personal-show.component';
import { PersonalUpdateComponent } from './personal-update/personal-update.component';

const routes: Routes = [
  { path: 'personal/index', component: PersonalIndexComponent },
  {
    path: 'personal/all',
    component: PersonalAllComponent,
  },
  { path: 'personal/create', component: PersonalCreateComponent },
  { path: 'personal/:id', component: PersonalShowComponent },
  { path: 'personal/update/:id', component: PersonalUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalRoutingModule {}
