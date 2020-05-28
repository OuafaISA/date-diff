import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { checkValidityDates } from './validators/checkValidityDates';
import { DateDiff } from '../DateDiff';
import { isNotNull } from './validators/isNotNull';


@Component({
  selector: 'app-date-diff-form',
  templateUrl: './date-diff-form.component.html',
  styleUrls: ['./date-diff-form.component.css']
})
export class DateDiffFormComponent implements OnInit {

  form: FormGroup;

  submited: boolean;

  constructor() { 
    this.submited = false;
  }

  ngOnInit(): void {
    
    this.form = new FormGroup({
      firstDate: new FormControl(null,[Validators.required, isNotNull() ]),
      secondDate: new FormControl(null,[Validators.required, isNotNull() ]),
    }, { validators: checkValidityDates });

  }
  onSubmit() {
    console.warn(this.form.value);
    if(this.form.valid) 
    {
      this.submited = true;
    }
  }

  get firstDate() { return this.form.get("firstDate"); }
  get secondDate() { return this.form.get("secondDate"); }
  
  get dateDiffInDays() { 
    return DateDiff.inDays(this.form.get("firstDate").value, this.form.get("secondDate").value)
  }

}
