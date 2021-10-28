import {
  Component
} from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  currentPage = 1;

  selectedTaco = {};
  selectedIndexTaco = 0;

  tacosArray = [{
      image: 'assets/home/taco_asada.png',
      name: 'Taco de carne asada',
      type: 1,
      amount: 0,
      favorite: true
    },
    {
      image: 'assets/home/taco_suadero.jpg',
      name: 'Taco de suadero',
      type: 2,
      amount: 0,
      favorite: false
    },
    {
      image: 'assets/home/taco_carnitas.png',
      name: 'Taco de carnitas',
      type: 3,
      amount: 0,
      favorite: false
    },
    {
      image: 'assets/home/taco_maciza.jpg',
      name: 'Taco de maciza',
      type: 4,
      amount: 0,
      favorite: false
    },
  ];

  constructor(public toastController: ToastController) {
    this.selectedTaco = this.tacosArray[0];
  }

  validateTaco() {
    let counter = 0;

    this.tacosArray.forEach(taco => {
      if (taco.amount === 0) {
        counter += 1;
      }
    });

    if (counter === this.tacosArray.length) {
      this.presentToast('No haz puesto una cantidad de tacos =(');
    } else {
      this.currentPage = 2;
    }
  }

  selectTaco(index, taco) {
    this.selectedIndexTaco = index;
    this.selectedTaco = taco;
  }

  addTaco(index) {
    this.tacosArray[index].amount += 1;
  }

  removeTaco(index) {
    if (this.tacosArray[index].amount > 0) {
      this.tacosArray[index].amount -= 1;
    }
  }

  async presentToast(text) {
    const toast = await this.toastController.create({
      message: text,
      duration: 2000
    });
    toast.present();
  }
}
