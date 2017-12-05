import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from "@angular/router"
import { APP_BASE_HREF } from "@angular/common";

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { TasksService } from './shared/tasks.service';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskComponent } from './task/task.component'

const router: Routes = [
    {path: '', component: MainComponent, pathMatch: 'full'},
    {path: 'new-task', component: NewTaskComponent},
    {path: 'task', component: TaskComponent}
];
const routes: ModuleWithProviders = RouterModule.forRoot(router);
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NewTaskComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [TasksService, {provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule {}

