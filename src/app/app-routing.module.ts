import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: HomeComponent },
  { path: 'products/create', component:HomeComponent}

]


@NgModule({
  declarations: [],
  imports:
    [RouterModule.forRoot(routes)],
  exports: [RouterModule]


})
export class AppRoutingModule { }
