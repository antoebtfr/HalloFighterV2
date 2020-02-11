import { BattlegroundComponent } from './components/battleground/battleground.component';
import { ChampselectComponent } from './components/champselect/champselect.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoadpageComponent } from './components/loadpage/loadpage.component';


const routes: Routes = [
  {path: "", component: LoadpageComponent},
  {path: "accueil", component: AccueilComponent},
  {path: "selectmonstre", component: ChampselectComponent},
  {path: "battleground", component: BattlegroundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
