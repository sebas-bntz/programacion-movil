import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  sliderOptions = [
    {name: 'Clase 1', icon: 'accessibility-outline'},
    {name: 'Clase 2', icon: 'airplane-outline'},
    {name: 'Clase 3', icon: 'alarm-outline'},
    {name: 'Clase 4', icon: 'aperture-outline'},
  ];

  cardsArray = [

    {subtitle: 'Clase 1', title: 'Ejemplo de javascript', description: 'Dogs are just beautiful', image: 'assets/home/dog.jpg', type: 1},
    {subtitle: 'Clase 2', title: 'Segunda carta', description: 'Segunda carta creada con ngfor', image: 'assets/home/ionic.png', type: 0},
    {subtitle: 'Clase 3', title: 'Tercera carta', description: 'Tercera carta creada con ngfor', image: 'assets/home/ionic-2.jpg', type: 1}

  ]

  constructor(public alertController: AlertController, public toastController: ToastController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Descargar multimedia!',
      message: 'Estas apunto de descargar un contenido <strong>increible</strong>!!!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'custom-danger',
          handler: (blah) => {
            this.presentToast();
          }
        }, {
          text: 'Descargar',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      header: 'Cancelado',
      message: 'Descarga cancelada.',
      color: 'danger',
      duration: 3000
    });
    toast.present();
  }
}
