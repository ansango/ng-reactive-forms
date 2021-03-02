import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  Activity,
  ActivityCategory,
  ActivityLanguage,
  ActivitySubcategoryBeach,
  ActivitySubcategoryCulture,
  ActivitySubcategoryWine,
} from 'src/app/shared/models/activity/activity';
import { ActivityService } from 'src/app/shared/services/activity.service';

@Component({
  selector: 'app-new-activity',
  templateUrl: './new-activity.component.html',
  styleUrls: ['./new-activity.component.css'],
})
export class NewActivityComponent implements OnInit {
  public newActivity?: Activity;
  public newActivityForm!: FormGroup;
  public categories = Object.values(ActivityCategory);
  public subCulture = Object.values(ActivitySubcategoryCulture);
  public subWine = Object.values(ActivitySubcategoryWine);
  public subBeach = Object.values(ActivitySubcategoryBeach);
  public selectedCat: string = '';
  public languages = Object.values(ActivityLanguage);
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private activityService: ActivityService
  ) {}

  ngOnInit(): void {
    this.newActivityForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(55),
        ],
      ],
      category: [null, [Validators.required]],
      subcategory: [null, [Validators.required]],
      description: [''],
      language: [null, [Validators.required]],
      date: [''],
      price: [0, [Validators.required, Validators.min(0)]],
    });
  }

  selectedCategory(event: any): string {
    return (this.selectedCat = event.target.value.match('[a-zA-Z]+')[0]);
  }

  onSubmit(form: FormGroup) {
    const activity = form.value;
    this.activityService.postActivity(activity).subscribe((resp) => {
      this.router.navigate(['/'])
    });
    
  }
}
