import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  tutorials: Tutorial[]; // Assuming Tutorial is a model/interface to represent tutorial data
  redirectToAnotherComponent(dynamicValue: string) {
    let lowercaseValue = dynamicValue.toLowerCase();

    const targetRoute = `/${lowercaseValue}`; // Replace 'target' with the desired route and parameter

    this.router.navigate([targetRoute]); // Replace 'another-component' with the desired route path
  }
  constructor(private router: Router) {
    // Initialize the tutorials array with some sample data
    this.tutorials = [
      {
        title: 'Java',
        description: 'Learn the basics of Angular framework and start building web applications.',
        duration: '1 hour',
        level: 'Beginner'
      },
      {
        title: 'Angular',
        description: 'Explore advanced Angular topics such as reactive forms, routing, and state management.',
        duration: '2 hours',
        level: 'Intermediate'
      },
      {
        title: 'Testing',
        description: 'Build a real-time chat application using Angular and Socket.IO library.',
        duration: '3 hours',
        level: 'Advanced'
      },      
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
