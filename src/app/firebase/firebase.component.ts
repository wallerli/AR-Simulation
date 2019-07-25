import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { Bee } from '../firebase-models/bee';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.scss']
})
export class FirebaseComponent implements OnInit {
  bees: Bee[];

  constructor(private firebaseServ: FirebaseService) { }

  ngOnInit() {
    this.firebaseServ.getFirebaseInfo().subscribe(bees => {
      console.log(bees);
      this.bees = bees;
    });
  }

}
