import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent implements OnInit {

  messages: any[] = [];
  followedUsers: any[] = [];
  totalUsers: number = 0;
  totalMessages: number = 0;
  

  constructor(private messageService: MessageService, private userService: UserService) {}
  currentUser: { fullName: string } = { fullName: 'John Doe' };

  

  ngOnInit() {
    this.messages = this.messageService.getMessages();
    this.followedUsers = this.messageService.getFollowedUsers();
    this.totalUsers = this.userService.getTotalUsers(); // Simula o llama al método real en el servicio
    
    
  }

  logout() {
    this.messageService.logout();
  }

}