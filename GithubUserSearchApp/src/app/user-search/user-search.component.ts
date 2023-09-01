import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface User {
  login: string;
  id: number;
}

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent {
  searchQuery: string = ''; 
  users: any[] = []; // Declaración de la propiedad 'users'

  constructor(private http: HttpClient, private router: Router) {}

  searchUsers(): void {
    if (this.searchQuery.length >= 4 && this.searchQuery !== 'raspberry') {
      const apiUrl = `https://api.github.com/search/users?q=${this.searchQuery}`;
      this.http.get<any>(apiUrl).subscribe(data => {
        this.users = data.items.slice(0, 10);
      });
    }
  }

  search() {

    console.log('Search query:', this.searchQuery);
  }
}



