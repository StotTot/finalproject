import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FileOpener } from '@ionic-native/file-opener'
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, private fileOpener: FileOpener) {

    
  }

 

}
