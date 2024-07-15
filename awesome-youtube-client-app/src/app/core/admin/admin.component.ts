import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ReactiveFormsModule, UpperCasePipe, CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent implements OnInit {
  submitButtonName = 'Submit';
  resetButtonName = 'Reset';
  deleteButtonName = 'delete';
  addButtonName = 'add';
  index!: number;
  initialValue = '';
  requiredSign = '*';

  constructor(private router: Router) {}

  onSubmit() {
    if (
      this.adminForm.value.title?.trim() &&
      this.adminForm.value.img?.trim() &&
      this.adminForm.value.linkVideo?.trim()
    ) {
      this.router.navigate(['/main']);
    }
  }

  adminForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    img: new FormControl(''),
    linkVideo: new FormControl(''),
    tags: new FormArray([new FormControl()]),
  });

  ngOnInit() {
    this.adminForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      description: new FormControl('', [Validators.maxLength(255)]),
      img: new FormControl('', [Validators.required]),
      linkVideo: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      tags: new FormArray([new FormControl('', Validators.required)]),
    });
  }

  get title() {
    return this.adminForm.get('title');
  }

  get description() {
    return this.adminForm.get('description');
  }

  get img() {
    return this.adminForm.get('img');
  }

  get linkVideo() {
    return this.adminForm.get('linkVideo');
  }

  get tags() {
    const tags = this.adminForm.controls['tags'];
    return tags;
  }

  addTag() {
    if (this.tags.length <= 4) {
      const tag = new FormControl('', Validators.required);
      return this.tags.push(tag);
    }
  }

  removeTag() {
    if (this.tags.length > 1) {
      return this.tags.removeAt(this.index);
    }
  }

  reset() {
    // this.tags.reset(['']);

    /*  return this.adminForm.reset({
      title: this.initialValue,
      description: this.initialValue,
      img: this.initialValue,
      linkVideo: this.initialValue,
      tags: [],
    }); */

    /* this.adminForm.reset();
    while (this.tags.length > 1) {
      this.removeTag();
    } */

    this.adminForm.reset();
    this.tags.clear();
    this.addTag();
  }
}
