import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation';
import Parse from 'parse';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private backgroundGeolocation: BackgroundGeolocation) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      
      const config: BackgroundGeolocationConfig = {
        desiredAccuracy: 10,
        stationaryRadius: 0,
        distanceFilter: 0,
        url: 'http://192.168.0.33:3000/location',
        httpHeaders: { 'X-FOO': 'bar' },
        interval: 1000,
        startForeground: true,
        stopOnTerminate: false
      };
 
      this.backgroundGeolocation.configure(config).subscribe((location: BackgroundGeolocationResponse) => {

        console.log(location);

      }, (err) => {
        console.log(err);
      });

      this.backgroundGeolocation.start().then((res) => {
        console.log(res);
      }, (err) => {
        console.log(err);
      });


    });
  }
}

