import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Upload3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-upload3',
  templateUrl: 'upload3.html',
})
export class Upload3Page {
  close() {
    this.navCtrl.pop();
  }
  goNext(){
    this.navCtrl.push('Upload4Page'); 
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Upload3Page');
  }

}
