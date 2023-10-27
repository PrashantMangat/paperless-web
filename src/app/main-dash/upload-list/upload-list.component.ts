import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AuthService } from '../../pages/auth/services/auth.services';
@Component({
  selector: 'app-upload-list',
  templateUrl: './upload-list.component.html',
  styleUrls: ['./upload-list.component.scss']
})
export class UploadListComponent {
  constructor(private service: AuthService,) { }

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
      if (response != null) {
        this.dataLen = response.data.length;
        // this.userPaginator.pageSize = response.data.length;
        // this.userPgLen = response.data.length;
        this.userArr = new MatTableDataSource(response.data);
        console.log(" this.userArr: ", this.userArr);
      }
    });
  }
}
