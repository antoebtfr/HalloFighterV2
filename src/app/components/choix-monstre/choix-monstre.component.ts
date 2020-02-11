import { MonstreService } from './../../service/monstre.service';
import { Component, OnInit } from '@angular/core';
import { Monster } from 'src/app/models/monster';

@Component({
  selector: 'app-choix-monstre',
  templateUrl: './choix-monstre.component.html',
  styleUrls: ['./choix-monstre.component.scss'],
})

export class ChoixMonstreComponent implements OnInit {

  chooseMonster: Monster[];

  constructor(private monsterService: MonstreService) { }

  ngOnInit() {
    // this.chooseMonster = this.monsterService.allMonster;
    // console.log("cela ne marche pas")
  }
}
