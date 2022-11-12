import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { RESERVATION_FORM } from '@pages/constants/reservation';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
})
export class ReservationComponent implements OnInit {
  formConfig: any;
  reservationFormGroup: FormGroup;
  controlArray: Array<any>;

  constructor(private fb: FormBuilder) {
    this.formConfig = Object.assign({}, RESERVATION_FORM);
    this.reservationFormGroup = this.fb.group({});
    this.controlArray = [];

    this.initFormGroup();
  }

  ngOnInit(): void {}

  initFormGroup() {
    for (const control in this.formConfig) {
      this.controlArray.push(this.formConfig[control]);

      if (this.formConfig[control].name !== 'date') {
        this.reservationFormGroup.addControl(
          this.formConfig[control].name,
          this.fb.control(
            null,
            this.formConfig[control].required ? Validators.required : null
          )
        );
      } else {
        this.reservationFormGroup.addControl('start', this.fb.control(null));
        this.reservationFormGroup.addControl('end', this.fb.control(null));
      }
    }
  }

  submit() {
    if (this.reservationFormGroup.valid) {
      
    }
  }
}
