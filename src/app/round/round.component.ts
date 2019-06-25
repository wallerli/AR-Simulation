import { Component, OnInit } from '@angular/core';
import { RoundService } from './round.service';
import { Bee } from '../models/bee';

@Component({
  selector: 'app-round',
  templateUrl: './round.component.html',
  styleUrls: ['./round.component.scss']
})
export class RoundComponent implements OnInit {
  bees: Bee[];

  constructor(private roundServ: RoundService) { }

  ngOnInit() {
    this.roundServ.getRoundInfo().subscribe(bees => {
      console.log(bees);
      this.bees = bees;
    });
  }

}
