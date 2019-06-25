import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Bee } from 'src/app/models/bee';

@Injectable({
  providedIn: 'root'
})
export class RoundService {
  beesCollection: AngularFirestoreCollection<Bee>;
  bees: Observable<Bee[]>;

  constructor(public afs: AngularFirestore) { 
    this.bees = this.afs.collection('bees').valueChanges();
  }

  getRoundInfo() {
    return this.bees;
  }
}


