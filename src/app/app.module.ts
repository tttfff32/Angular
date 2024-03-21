import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursComponent } from './cours/cours.component';
import { NewCourseComponent } from './new-course/new-course.component';
import { SignUpComponent } from './sign-up/sign-up.component';
 import { AddCourseComponent } from './add-course/add-course.component';
@NgModule({
  declarations: [
    AppComponent,
    CoursComponent,
    NewCourseComponent,
    SignUpComponent,
    AddCourseComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
