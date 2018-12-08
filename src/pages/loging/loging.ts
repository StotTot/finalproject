import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { Stepcounter } from '@ionic-native/stepcounter';
import { BackgroundMode } from '@ionic-native/background-mode';
@IonicPage()
@Component({
  selector: 'page-loging',
  templateUrl: 'loging.html',
})
export class LogingPage {

  fileName: string;
  stepsTaken;
  //timeElapsed: string;
  dirName: string;
  contents: string;
  dirPath;

  constructor(public navCtrl: NavController, public navParams: NavParams, public file: File,
     private stepcounter: Stepcounter, private backgroundMode: BackgroundMode) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogingPage');
  }

  writeToFile(fileName,contents,dirName)
  {
    this.fileName = fileName;
    //this.stepsTaken = stepsTaken;
    //this.timeElapsed = timeElapsed;
    this.dirName = dirName;
    this.contents = contents;
   let resualt =  this.file.createDir(this.file.externalRootDirectory, this.dirName, true)

   resualt.then(data => {
    this.dirPath = data.toURL();


    alert(" Dir created at " + this.dirPath);

    this.file.writeFile(this.dirPath, this.fileName, this.contents, {replace: true})
    alert(" File created at " + this.dirPath);

   }).catch(error =>{
     alert(" Error : " + error)

   });
   
  }

  getSteps() {
    this.stepsTaken
    this.backgroundMode.enable();
    let startingOffset = 0;
    this.stepcounter.start(startingOffset).then(
    onSuccess => console.log('stepcounter-start success', onSuccess), 
    onFailure => console.log('stepcounter-start error', onFailure));
    
    this.stepcounter.getStepCount();
    this.stepcounter.stop();
    this.backgroundMode.disable();


  }
 




}
