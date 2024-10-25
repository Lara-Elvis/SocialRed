import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users = [
    { fullName: 'John Doe', username: 'johndoe', password: 'Password123' },
    { fullName: 'Jane Smith', username: 'janesmith', password: 'Password456' }
  ];

  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);
    return !!user;
  }

  register(fullName: string, username: string, password: string): boolean {
    if (this.users.find(u => u.username === username)) return false;
    this.users.push({ fullName, username, password });
    return true;
  }
}
