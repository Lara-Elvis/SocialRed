import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private users: any[] = [
    { fullName: 'Juan Pérez', username: 'juanp', password: 'Password123', messages: [], following: ['maria'] },
    { fullName: 'María López', username: 'maria', password: 'Password123', messages: ['Hola a todos'], following: [] },
  ];

  private validUser = {
    username: 'admin',
    password: 'admin123'
  };

  private currentUser: any = null;

  login(username: string, password: string) {
    if (username === this.validUser.username && password === this.validUser.password) {
      return this.validUser; // O puedes retornar un token o cualquier cosa relevante
    } else {
      return null;
    }
  }

  
  signup(fullName: string, username: string, password: string) {
    const existingUser = this.users.find(u => u.username === username);
    if (existingUser) return false;

    this.users.push({ fullName, username, password, messages: [], following: [] });
    return true;
  }

  getMessages() {
    if (this.currentUser) {
      const followedUsersMessages = this.users
        .filter(user => this.currentUser.following.includes(user.username))
        .flatMap(user => user.messages);
      return [...this.currentUser.messages, ...followedUsersMessages].sort((a, b) => b.date - a.date);
    }
    return [];
  }


  getFollowedUsers() {
    return this.currentUser ? this.currentUser.following : [];
  }

  addMessage(content: string) {
    if (this.currentUser) {
      this.currentUser.messages.push({ content, date: new Date() });
    }
  }

  logout() {
    this.currentUser = null;
  }

}
