import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Upload2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-upload2',
  templateUrl: 'upload2.html',
})
export class Upload2Page {
  close() {
    this.navCtrl.pop();
  }
  goNext(){
    this.navCtrl.push('Upload3Page'); 
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Upload2Page');
  }

}
