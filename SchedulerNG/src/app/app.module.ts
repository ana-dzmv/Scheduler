import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { NewTaskFormComponent } from './new-task-form/new-task-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MainSectionComponent,
    SidebarComponent,
    SchedulerComponent,
    ToolboxComponent,
    NewTaskFormComponent
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
