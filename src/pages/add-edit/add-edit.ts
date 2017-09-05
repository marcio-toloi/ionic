import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Room } from '../../model/room';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the AddEditPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-edit',
  templateUrl: 'add-edit.html',
})
export class AddEditPage {

  room: Room = new Room();
  isReactiveForm: boolean;
  roomForm: FormGroup;
  base64CameraImage: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera) {

    this.roomForm = new FormGroup({
      'title': new FormControl(this.room.title, [
        Validators.required
      ]),
      'email': new FormControl(this.room.email, [
        Validators.required
      ]),
      'address': new FormControl(this.room.address, [
        Validators.required
      ]),
      'type': new FormControl(this.room.type, [
        Validators.required
      ])
    });
  }

  getUserPhoto() {

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64:
     this.base64CameraImage = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEditPage');
  }

  submit() {
    console.log(JSON.stringify(this.room));

    if (this.isReactiveForm) {
      this.setValueOfReactiveForm();
    }

  }

  setValueOfReactiveForm() {

    var formValue = this.roomForm.value;
    this.room = new Room(
      0,
      formValue.title,
      formValue.address,
      formValue.image,
      formValue.price
    );
    console.log(this.room);
  }

}
