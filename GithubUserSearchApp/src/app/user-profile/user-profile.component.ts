import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface UserProfile {
  login: string;
  avatar_url: string;
  // Otros campos relevantes del perfil
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})


export class UserProfileComponent implements OnInit {
  user: UserProfile | undefined;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const username = params['username'];
      const apiUrl = `https://api.github.com/users/${username}`;
      this.http.get<UserProfile>(apiUrl).subscribe(data => {
        this.user = data;
      });
    });
  }
}
