import { Component, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AuthService } from '../../pages/auth/services/auth.services';

@Component({
  selector: 'app-dashboard-ui',
  templateUrl: './dashboard-ui.component.html',
  styleUrls: ['./dashboard-ui.component.scss'],
  providers: [DatePipe]
})

export class DashboardUiComponent {
  myDate = new Date();
  constructor(private datePipe: DatePipe, private service: AuthService,) {
    // this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
  }

  mycloud = true;
  allfiles = false;
  allfolders = false;

  userArr = new MatTableDataSource<any>();
  dataLen: any;
  displayedColumns: string[] = [
    "position",
    "File Name",
    "Invoice Number",
    "Uploaded By",
    "Type",
    "Size",
  ];
  userPgLen: any;
  @ViewChild("userPaginator", { read: MatPaginator })
  userPaginator: MatPaginator | any;

  ngOnInit() {
    this.getDoctorPatient(0, 10);
  }

  getDoctorPatient(pageIndex: any, pageSize: any) {
    this.service.news().subscribe((response: any) => {
      console.log("news: ", response);

      // this.generalService.getDoctorPatients1("Waiting", pageIndex, pageSize).subscribe((response: any) => {
      if (response != null) {
        this.dataLen = response.data.length;
        // this.userPaginator.pageSize = response.data.length;
        // this.userPgLen = response.data.length;
        this.userArr = new MatTableDataSource(response.data);
        console.log(" this.userArr: ",  this.userArr);
      }
      // });
    });
  }

  // onPgChange(event: { pageIndex: any; pageSize: any; }) {
  //   const pageIndex = event.pageIndex;
  //   const pageSize = event.pageSize;
  //   this.getDoctorPatient(pageIndex, pageSize);
  // }

  myCloud() {
    this.mycloud = true;
    this.allfiles = false;
    this.allfolders = false;
  }

  allFiles() {
    this.mycloud = false;
    this.allfiles = true;
    this.allfolders = false;
  }

  allFolders() {
    this.mycloud = false;
    this.allfiles = false;
    this.allfolders = true;
  }

}
