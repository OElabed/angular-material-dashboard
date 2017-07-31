import { NgModule } from '@angular/core';
import { LandingComponent } from './landing.component';
import { LandingRoutingModule } from './landing-routing.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [CommonModule, LandingRoutingModule, RouterModule],
  declarations: [LandingComponent],
  exports: [LandingComponent]
})
export class LandingModule { }
