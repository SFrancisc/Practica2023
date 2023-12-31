import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { User } from 'src/app/app-logic/services/user';
import { UserAdminService } from 'src/app/app-logic/services/user-admin.service';

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.css'],
})
export class UserAdminComponent implements OnInit {
  constructor(private userService: UserAdminService) {}
  @ViewChild(MatPaginator, { static: true }) paginator?:
    | MatPaginator
    | undefined;
  @ViewChild(MatSort, { static: true }) sort?: MatSort | undefined;
  userAdmin: any;
  userList!: any;
  ngOnInit(): void {
    this.userService.getData().subscribe((res: any) => {
      this.userList = new MatTableDataSource<User>(res);
      this.userList.paginator = this.paginator;
      this.userList.sort = this.sort;
    });
  }

  deleteUser(id?: string) {
    // let result = confirm('Do you want to delete the user?');
    // if (result) {
    //   this.userService.deleteUser();
    //   var target = id.target || id.srcElement || id.currentTarget;
    //   var idAttr = target.attributes.id;
    //   this.userService.deleteUser(idAttr);
    // }
  }

  userAdminColumn: string[] = [
    'firstName',
    'lastName',
    'phoneNumber',
    'role',
    'email',
    'actions',
  ];
}
