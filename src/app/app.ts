import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductivityTrackerComponent } from './components/productivity-tracker-component/productivity-tracker-component';

@Component({
  imports: [RouterOutlet, ProductivityTrackerComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('sondeProject');
}
