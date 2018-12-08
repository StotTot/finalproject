import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LogingPage } from '../loging/loging';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  log() {
    this.navCtrl.push(LogingPage);
  }
  openLog() {
    this.navCtrl.push(ContactPage);
  }


}
