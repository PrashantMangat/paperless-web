import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
// import { AllFilesComponent } from './main-dash/all-files/all-files.component';
// import { AllFoldersComponent } from './main-dash/all-folders/all-folders.component';
// import { UploadListComponent } from './main-dash/upload-list/upload-list.component';




@NgModule({
    declarations: [
        AppComponent,
        LoaderComponent,
        // AllFilesComponent,
        // AllFoldersComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatProgressSpinnerModule,
        HttpClientModule
    ]
})
export class AppModule { }
