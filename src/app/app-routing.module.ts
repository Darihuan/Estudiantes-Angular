import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {PrincipalComponent} from "./components/principal/principal.component";
import {ListComponent} from "./components/persona/list/list.component";

const routes: Routes = [

  {path:'',
  component:NavbarComponent,
    children:[
      {
        path:"home",
        component:PrincipalComponent
      },
      {
        path:"list",
        component:ListComponent
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
