import { Component, Input } from '@angular/core';
import { IonicSlides } from '@ionic/angular';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  @Input() slides: any[] = [];
  swiperModules = [IonicSlides];
  
  constructor() {}
}
