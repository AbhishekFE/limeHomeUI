import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {

  @Input() control:any;
  @Input() formGroup: FormGroup;

  dateObj: any;

  constructor(private fb: FormBuilder) { 
    this.formGroup = this.fb.group({});
  }

  ngOnInit(): void {
  }

}
