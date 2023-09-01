import { Component, Input } from '@angular/core';

interface User {
  login: string;
  id: number;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  @Input() users: User[] = [];

}
