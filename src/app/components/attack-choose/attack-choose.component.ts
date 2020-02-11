import { Attack } from './../../models/attack';
import { MonstreService } from './../../service/monstre.service';
import { AttackService } from './../../service/attack.service';
import { Component, OnInit } from '@angular/core';
import { Monster } from 'src/app/models/monster';

@Component({
  selector: 'app-attack-choose',
  templateUrl: './attack-choose.component.html',
  styleUrls: ['./attack-choose.component.scss']
})

export class AttackChooseComponent  {

  monsterAttacks: Attack[];
  allMonster: Monster[] = [];
  currentMonster: Monster[] = [];

  attackCurentMonster: [];

  constructor(private attackService: AttackService, private monstreService: MonstreService) {
      // this.monsterAttacks = this.attackService.allAttack;
  }


  // ngOnInit() {
  //   this.allMonster = this.monstreService.allMonster;
  //   this.currentMonster = this.monstreService.currentMonster;
  //   this.monstreService.getMonsterById(1)
  //       .subscribe((current)=>{

  //         this.attackService.getAttackByIdMonster(1).subscribe((data) => {
  //           this.monsterAttacks = data
  //         })
  //   });
  // }
  // showMonsterAttack(){
  //   console.log( this.monsterAttacks);
  //   console.log( 'allMonster' + this.allMonster);
  //   console.log('currentMonster :' + this.currentMonster);
  // }
}
