import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { mainRoutes } from 'src/app/shared/const';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthGuard } from './guards/auth.guard';

import { AuthPageComponent } from './containers';
import { TutorGuardGuard } from './guards/user-guard.guard';
import { DashboardUiComponent } from "src/app/main-dash/dashboard-ui/dashboard-ui.component";
import { UploadListComponent } from "src/app/main-dash/upload-list/upload-list.component";

const routes: Routes = [
  {
    path: mainRoutes.HOME,
    pathMatch: 'full',
    redirectTo: mainRoutes.DASHBOARD
  },
  {
    path: mainRoutes.LOGIN,
    component: AuthPageComponent
  },
  {
    path: 'dashboard-ui',
    component: DashboardUiComponent
  },
  {
    path: 'upload-ui',
    component: UploadListComponent
  },
  
  {
    path: mainRoutes.TUTOR_DASHBOARD,
    // canActivate: [AuthGuard, TutorGuardGuard],
    loadChildren: () => import('../tutor/tutor.module').then(m => m.TutorModule)
  },
  // {
  //   path: mainRoutes.STUDENT_DASHBOARD,
  //   canActivate: [AuthGuard, StudentGuardGuard],
  //   loadChildren: () => import('../student/student.module').then(m => m.StudentModule)
  // },
  // {
  //   path: mainRoutes.PAT_ADMIN_DASHBOARD,
  //   //canActivate: [AuthGuard, PatAdminGuardGuard],
  //   loadChildren: () => import('../pat-admin/pat-admin.module').then(m => m.PATAdminModule)
  // }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule,
  ]
})

export class AuthRoutingModule {
}

