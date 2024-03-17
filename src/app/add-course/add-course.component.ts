import { Component, ElementRef, OnInit, ViewChild, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { cours } from '../model/cours';
import { types } from '../model/types';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.scss'
})

export class AddCourseComponent implements OnInit {
constructor(){
  
}
  coursData: cours = { name: "", hours: 0, type: types.fromHome, date: "" };
  num: number = 0;
  formLoaded: boolean = false;
  @Output()
  courseAdded: EventEmitter<cours> = new EventEmitter<cours>();
  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.formLoaded = true;
  }
  @ViewChild('f') f: NgForm | null = null;
  @ViewChild('n') n: ElementRef | null = null

  validateField(fieldName: string) {
    if (this.formLoaded) {
      const fieldValue = this.f!.form.controls[fieldName].value;
      if (!fieldValue) {
        return 'invalid';
      }
    }
    return '';
  }
  addCourse(c: cours) {
    this.courseAdded.emit(c);
  }
  save() {
    if (this.f!.valid) {
      // this.coursData = this.f!.value;
      this.addCourse(this.coursData);
      alert('course save')
    }
  }
}

