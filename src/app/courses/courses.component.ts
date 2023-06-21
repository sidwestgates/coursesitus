import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  tutorials: Tutorial[]; // Assuming Tutorial is a model/interface to represent tutorial data

  constructor() {
    // Initialize the tutorials array with some sample data
    this.tutorials = [
      {
        title: 'Getting Started with Angular',
        description: 'Learn the basics of Angular framework and start building web applications.',
        duration: '1 hour',
        level: 'Beginner'
      },
      {
        title: 'Advanced Angular Techniques',
        description: 'Explore advanced Angular topics such as reactive forms, routing, and state management.',
        duration: '2 hours',
        level: 'Intermediate'
      },
      {
        title: 'Building a Real-Time Chat Application with Socket.IO',
        description: 'Build a real-time chat application using Angular and Socket.IO library.',
        duration: '3 hours',
        level: 'Advanced'
      },      
      {
        title: 'Building a Real-Time Chat Application with Socket.IO',
        description: 'Build a real-time chat application using Angular and Socket.IO library.',
        duration: '3 hours',
        level: 'Advanced'
      },      
      {
        title: 'Building a Real-Time Chat Application with Socket.IO',
        description: 'Build a real-time chat application using Angular and Socket.IO library.',
        duration: '3 hours',
        level: 'Advanced'
      }
    ];
  }

  ngOnInit() {
    // Any additional initialization logic can be placed here
  }

}

interface Tutorial {
  title: string;
  description: string;
  duration: string;
  level: string;
}
