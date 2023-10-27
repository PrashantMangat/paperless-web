import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TutorGuardGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const token = sessionStorage.getItem('token');
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token!);
      // let userId = decodedToken['userId'];
      // let userType = '';
      if (decodedToken['role'] == '2') {
       return true;
      }
      else{
        return false;
      }
  }
  
}
