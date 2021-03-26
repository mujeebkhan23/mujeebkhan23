
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatCompComponent } from './chat-comp.component';
import { ChatModule } from './chat-comp.module';

const routes: Routes = [
  {
    path: '',
    component: ChatCompComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatRoutingModule {}
