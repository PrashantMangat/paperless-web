import { Injectable } from '@angular/core';
import { rsapublicKey } from 'src/app/shared/const';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import JSEncrypt from 'jsencrypt';
import { SocketService } from 'src/app/shared/services/socket.service';
import { AuthApiUrls } from '../consts/Auth-api-urls';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public currentUser = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') as string));

  constructor(
    private http: HttpClient,
    private router: Router,
    private socketService: SocketService,
    // private snackBar: MatSnackBar,

  ) {
    this.currentUser.asObservable()
  }

  news() {
    return this.http.get('https://smpdev.patharitech.com/smp_mwdev/api/news/by/status?status=ACTIVE');
  }


  login(data: any, role: any) {
    const encrypt = new JSEncrypt();
    encrypt.setPublicKey(rsapublicKey);
    const encrypted = encrypt.encrypt("web-" + data.password);
    const jsonObject = {
      'role': role,
      'username': data.username,
      'password': encrypted,

      // 'captchaID': this.captchaID
    };
    return this.http.post(AuthApiUrls.Login, jsonObject);
  }

  isLoggedIn() {
    const helper = new JwtHelperService();
    const token = sessionStorage.getItem('token') as string;
    const decodedToken = helper.decodeToken(token);
    const expirationDate = helper.getTokenExpirationDate(token);
    const isExpired = helper.isTokenExpired(token);
    if (!token) {
      return false;
    } else {
      if (isExpired) {
        // this.snackBar.open('Session Expired Please Login to Continue', 'x', {
        //   duration: 5000,
        // });
        return false;
      }
      return true;
    }


  }

  refreshToken(): Observable<any> {
    let token = sessionStorage.getItem('token') as string;
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    const sesId = decodedToken['sessionId'];
    const sesToken = decodedToken['sessionToken'];
    const username = decodedToken['username'];
    return this.http.get(AuthApiUrls.refToken + `/${sesId}/${sesToken}/${username}`);
  }

  logout() {
    let token = sessionStorage.getItem('token') as string;
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    const sesId = decodedToken['sessionId'];
    const sessionToken = decodedToken['sessionToken'];
    const userId = decodedToken['userId'];

    let userType = '';
    if (decodedToken['role'] == '1')
      userType = 'ADMIN';
    let currentUserSocketOb = { 'userId': userId, 'userType': userType }


    this.http.get(AuthApiUrls.Logout + `/${userId}/${sessionToken}`).subscribe(response => {
      
      
      if (this.socketService) {
        this.socketService.removeUser(currentUserSocketOb);
        this.socketService.disconnect();
      }
      this.router.navigate(['login']);
    }, error => {
     
    });
    if(localStorage)
    {
      localStorage.clear();
    }
    if(sessionStorage)
    {
      sessionStorage.clear();
    }
    if(this.currentUser)
    {
      this.currentUser.next({})
    }
    this.router.navigate(['login']);
  }
  // forgotUsername(params){
  //   let query = this.commonHelper.obToquery(params);
  //   if (query !== '') {
  //     query = '?' + query;
  //   }
  //   return this.http.get(GlobalVariables.forgotUsername + query);
  // }
  // forgotPassword(params){
  //   let query = this.commonHelper.obToquery(params);
  //   if (query !== '') {
  //     query = '?' + query;
  //   }
  //   return this.http.get(GlobalVariables.forgotPassword + query);
  // }
  // getTutorsDetailsByUserId(userId) {
  //   return this.http.get(AuthApiUrls.tutor + '/details/' + userId);

  // }
  // getStudentDetailsByUserId(userId) {
  //   return this.http.get(AuthApiUrls.student + '/details/' + userId);

  // }
  getUserDetails(userId: string) {
    return this.http.get(AuthApiUrls.User + '/' + userId, { responseType: 'json' });
  }
  getSchoolStudentDetails(obj: { userId: any; schoolId: any; schoolSessionId: any; }){
    
    return this.http.get(AuthApiUrls.schoolStudentDetailUrl + '/' + obj.userId+"?schoolSessionId="+obj.schoolSessionId+"&schoolId="+obj.schoolId, { responseType: 'json' });
  }
  getSchoolDetail(userId: string){
    
    return this.http.get(AuthApiUrls.schoolDetailUrl + '/' + userId, { responseType: 'json' });
  }
  getTutorDetails(obj: { userId: any; schoolId: any; }){
    
    return this.http.get(AuthApiUrls.tutorDetail + '/' + obj.userId+"?schoolId="+obj.schoolId, { responseType: 'json' });
  }
}
