import { Component, OnInit } from '@angular/core';
import { IonicSlides } from '@ionic/angular';
import { Preferences } from '@capacitor/preferences';
import { Router } from '@angular/router';

const {} = Preferences;

export const INTRO_KEY = "intro-slides"; 

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slides: any[] = [];
  slideOpts: any;
  swiperModules = [IonicSlides];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.slides = [
      {image: 'assets/imgs/screen1.png'}
    ]
  }

  async goToLogin() {
    await Preferences.set({
      key: 'INTRO_KEY',
      value: 'true',
    });
    this.router.navigateByUrl('/auth-screen', {replaceUrl: true});
  }

}
