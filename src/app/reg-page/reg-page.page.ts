import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { Directive, Input, ViewChild, ElementRef} from '@angular/core';
// import { Dialogs } from '@ionic-native/dialogs/ngx';
import { AlertController } from '@ionic/angular';

// import {Alert} from 'ionic/ionic'
@Component({
  selector: 'app-reg-page',
  templateUrl: './reg-page.page.html',
  styleUrls: ['./reg-page.page.scss'],
})
export class RegPagePage implements OnInit {
  // @ViewChild('myDiv') myDiv: ElementRef;

  file: File;


  regForm: FormGroup;
   arr = [];
    // param1 = this.regForm.value.email
    error_messages = {
      place: [
        {type: 'required', message: "Place name is required."},
        {type: 'minLength', message:'Place name length must be longer than or equal to 6 characters.'},
        {type: 'maxLength', message: "Place name length must be lesser than or equal to 50 characters."},
        {type: 'pattern', message: "Please enter valid Place name ."},

      ],
      profession: [
        {type: 'required', message:'profession is required.'},
        {type: 'minLength', message:'profession length must be longer than or equal to 6 characters.'},
        {type: 'maxLength', message:'profession length must be lesser than or equal to 30 characters.'},

      ],
      first: [
        {type: 'required', message: "First Name is required."},
        {type: 'minLength', message:'First Name must be longer than or equal to 6 characters.'},
        {type: 'maxLength', message:'First Name must be lesser than or equal to 30 characters.'},

      ],

    };
  base64textString: string;

      constructor(
        // private dialogs: Dialogs,
        public alertController: AlertController,
        private dataService: DataService,
        private router: Router,
        public formBuilder: FormBuilder
      ) {
        this.regForm = this.formBuilder.group({
          profession: new FormControl('', Validators.compose([
            Validators.required,
            Validators.minLength[6],
            Validators.maxLength[30],
          ])),
          place: new FormControl('', Validators.compose([
            Validators.required,
            Validators.minLength[6],
            Validators.maxLength[50],
            Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z]+$')
          ])),
          first: new FormControl('', Validators.compose([
            Validators.required,
            Validators.minLength[6],
            Validators.maxLength[50],
          ])),
          picture: new FormControl('', Validators.compose([
            Validators.required,

          ])),
        });
      }

      ngOnInit() {}

      async presentAlert() {
        const alert = await this.alertController.create({
          header: 'The User has been added successfully !!!',
          // subHeader: 'Subtitle',
          // message: 'The User has been added successfully.',
          buttons: [
            {text: 'OK',
            handler: () => {
              console.log('Confirm OK');
              this.router.navigate(['third-page']);
            }
          }]
        });

        await alert.present();

      }

goToHome() {
  this.router.navigate(['second-page']);

}

handleFileSelect(evt) {
  const files = evt.target.files;
  const file = files[0];

  console.log(evt.target.files);
  console.log(files[0]);

  if (files && file) {
    // tslint:disable-next-line: prefer-const
    let reader = new FileReader();

    reader.onload = this.handleReaderLoaded.bind(this);

    reader.readAsBinaryString(file);
    console.log(reader);
    console.log(this);
}
}



handleReaderLoaded(readerEvt) {
 // tslint:disable-next-line: prefer-const
 let binaryString = readerEvt.target.result;
 console.log(readerEvt);
 this.base64textString = btoa(binaryString);
 console.log(btoa(binaryString));
 localStorage.setItem('mypic', this.base64textString);
 console.log(this.base64textString);
}




register() {

      console.log('firstname:', this.regForm.value.first);
      console.log('place:', this.regForm.value.place);
      console.log('profession:', this.regForm.value.profession);
      console.log('pic:', (this.base64textString));

      localStorage.setItem('firstname', this.regForm.value.first);
      localStorage.setItem('place', this.regForm.value.place);
      localStorage.setItem('profession', this.regForm.value.profession);
      localStorage.setItem('mypic', this.base64textString);

      console.log(localStorage.getItem('firstname'));
      console.log(localStorage.getItem('place'));
      console.log(localStorage.getItem('profession'));
      this.presentAlert();
  // this.router.navigateByUrl('/third-page/' + );
// tslint:disable-next-line: max-line-length
      // const arr = this.dataService.loadarray(this.regForm.value.first, this.regForm.value.place, this.regForm.value.profession, this.base64textString);
      // console.log(arr);
  }

}
