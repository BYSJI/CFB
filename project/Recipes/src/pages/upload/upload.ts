import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ActionSheetController, AlertController, Events } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { HttpClient } from '@angular/common/http';
import { ImagePicker } from '@ionic-native/image-picker';
import { Camera } from '@ionic-native/camera';

/**
 * Generated class for the UploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-upload',
  templateUrl: 'upload.html',
})
export class UploadPage {
  slides: any;
  time;
  uid = localStorage.getItem("uid");
  title;

  release() {
    // var mytime = new Date();
    // var formatDateTime = function (date) {
    //   var m = date.getMonth() + 1;
    //   m = m < 10 ? ('0' + m) : m;
    //   var d = date.getDate();
    //   d = d < 10 ? ('0' + d) : d;
    //   var h = date.getHours();
    //   var minute = date.getMinutes();
    //   minute = minute < 10 ? ('0' + minute) : minute;
    //   return m + '-' + d + ' ' + h + ':' + minute;
    // };
    // this.time = formatDateTime(mytime);
    // // alert("uid:"+this.uid+"title:"+this.title+"time:"+this.time);
    
    this.http.post('/api/login/upload', {
      
      
      // "time": this.time,
      "title": this.title,
      // "uid": this.uid
    }).subscribe(() => { });
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public app: App,
    public http: HttpClient,
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController,
    public imagePicker: ImagePicker,
    public camera: Camera,
    public events: Events
  ) {
  }

  slideTap(ev){
    let currentIndex = ev.clickedIndex;
    this.slides.slideTo(currentIndex, 0);
    this.getTrendData()
    console.log('Current index is', currentIndex);
  }
  getTrendData() {
    throw new Error("Method not implemented.");
  }
  
slideChanged(ev){
 
  this.slides.slideTo(this.slideIndex, 0);

}
  slideIndex(slideIndex: any, arg1: number) {
    throw new Error("Method not implemented.");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadPage');
  }

  //ionic中当页面进入初始化的时候触发的生命周期方法
  ionViewDidEnter() {
    let elements = document.querySelectorAll(".tabbar");
    if (elements != null) {
      Object.keys(elements).map((key) => {
        elements[key].style.display = 'none';
      });
    }
  }

  //ionic当退出页面的时候触发的方法
  ionViewWillLeave() {
    let elements = document.querySelectorAll(".tabbar");
    if (elements != null) {
      Object.keys(elements).map((key) => {
        elements[key].style.display = 'flex';
      });
    }
  }

  goNext() {
    this.navCtrl.push('Upload2Page');
  }
  
  goHome() {
    this.app.getRootNavs()[0].setRoot(TabsPage);
  }

}
