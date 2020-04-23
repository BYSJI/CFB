import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Upload4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-upload4',
  templateUrl: 'upload4.html',
})
export class Upload4Page {
  close() {
    this.navCtrl.pop();
  }
  goNext(){
    this.navCtrl.push('Upload2Page'); 
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Upload4Page');
  }

}
