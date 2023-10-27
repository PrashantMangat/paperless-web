import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatBadgeModule } from "@angular/material/badge";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatChipsModule } from "@angular/material/chips";
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { TutorDashboardComponent } from "./dashboard/container/dashboard.component";
import { TutorRoutingModule } from "./tutor-routing.module";
import { TutorLayoutComponent } from "./shared/layout/layout.component";
import { HeaderComponent } from "./shared/layout/header/header.component";
import { SidebarComponent } from "./shared/layout/sidebar/sidebar.component";
import { ChartComponent } from './dashboard/container/chart/chart.component';
import { NgChartsModule } from 'ng2-charts';
import { DashboardUiComponent } from "src/app/main-dash/dashboard-ui/dashboard-ui.component";
import { UploadListComponent } from "src/app/main-dash/upload-list/upload-list.component";
import { AllFilesComponent } from "src/app/main-dash/all-files/all-files.component";
import { AllFoldersComponent } from "src/app/main-dash/all-folders/all-folders.component";


@NgModule({
    declarations: [
        TutorDashboardComponent,
        TutorLayoutComponent,
        HeaderComponent,
        SidebarComponent,
        ChartComponent,
        DashboardUiComponent,
        UploadListComponent,
        AllFilesComponent,
        AllFoldersComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        MatListModule,
        MatIconModule,
        RouterModule,
        MatButtonModule,
        MatMenuModule,
        MatSelectModule,
        FormsModule,
        MatSidenavModule,
        MatRadioModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatSnackBarModule,
        MatBadgeModule,
        MatToolbarModule,
        MatCardModule,
        MatExpansionModule,
        MatTabsModule,
        MatChipsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTableModule,
        MatPaginatorModule,
        MatCheckboxModule,
        MatSnackBarModule,
        MatSlideToggleModule,
        MatSortModule,
        TutorRoutingModule,
        NgChartsModule

    ]
})

export class TutorModule {
    constructor() {
        console.log("tutor module loaded.");

    }
}