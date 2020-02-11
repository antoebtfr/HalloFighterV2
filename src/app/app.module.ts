import { MonstreService } from './service/monstre.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadpageComponent } from './components/loadpage/loadpage.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ChoixMonstreComponent } from './components/choix-monstre/choix-monstre.component';
import { BattlegroundComponent } from './components/battleground/battleground.component';
import { TimerComponent } from './components/timer/timer.component';
import { ContainerBarreComponent } from './components/container-barre/container-barre.component';
import { HUDComponent } from './components/hud/hud.component';
import { MonstresComponent } from './components/monstres/monstres.component';
import { ChampselectComponent } from './components/champselect/champselect.component';
import { AttackChooseComponent } from './components/attack-choose/attack-choose.component';
import { HttpClientModule } from '@angular/common/http';
import { AttackService } from './service/attack.service';

@NgModule({
  declarations: [
    AppComponent,
    LoadpageComponent,
    AccueilComponent,
    ChoixMonstreComponent,
    BattlegroundComponent,
    TimerComponent,
    ContainerBarreComponent,
    HUDComponent,
    MonstresComponent,
    ChampselectComponent,
    AttackChooseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MonstreService,AttackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
