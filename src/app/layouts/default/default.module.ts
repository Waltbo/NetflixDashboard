import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DefaultComponent} from "./default.component";
import {DashboardComponent} from "../../modules/dashboard/dashboard.component";
import {RouterModule, RouterOutlet} from "@angular/router";
import {HeaderComponent} from "../../shared/components/header/header.component";
import {FooterComponent} from "../../shared/components/footer/footer.component";
import {SharedModule} from "../../shared/shared.module";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatDividerModule} from "@angular/material/divider";
import {AboutComponent} from "../../modules/about/about.component";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {DashboardService} from "../../modules/dashboard.service";



@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    AboutComponent,
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    MatGridListModule
  ],
  providers:[
    DashboardService
  ]
})
export class DefaultModule { }
