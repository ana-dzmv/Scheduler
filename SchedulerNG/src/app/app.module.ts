import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NgAppComponent } from './ng-app/ng-app.component';
import { NgMainSectionComponent } from './ng-main-section/ng-main-section.component';
import { NgSidebarComponent } from './ng-sidebar/ng-sidebar.component';
import { NgNewTaskFormComponent } from './ng-new-task-form/ng-new-task-form.component';
import { NgScheduleComponent } from './ng-schedule/ng-schedule.component';
import { NgSettingsDdComponent } from './ng-settings-dd/ng-settings-dd.component';

@NgModule({
  declarations: [
    AppComponent,
    NgAppComponent,
    NgMainSectionComponent,
    NgSidebarComponent,
    NgNewTaskFormComponent,
    NgScheduleComponent,
    NgSettingsDdComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
