import { Component , computed, effect, signal} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-productivity-tracker-component',
  styleUrl: './productivity-tracker-component.css',
  templateUrl: './productivity-tracker-component.html',
})
export class ProductivityTrackerComponent {

  DAILY_GOAL: number = 5;
  completedTasks = signal(localStorage.getItem('tasks') ? parseInt(localStorage.getItem('tasks')!) : 0);
  progressPercentage = computed(() => (this.completedTasks() / this.DAILY_GOAL) * 100);

  message = computed(() => {
    if (this.progressPercentage() == 0) {
      "Prêt à démarrer la journée ?";
    } else if (this.progressPercentage() < 100) {
      "Continuez comme ça, vous y êtes presque !";
    } else {
      "Félicitations, objectif atteint ! 🚀"
    }
  })


  constructor() {
    effect(() => {

    if(this.completedTasks()) {
      localStorage.setItem('tasks', this.completedTasks().toString());
    }

    if(this.progressPercentage() >= 100) {
      alert("Bravo, vous avez fini votre journée !");
    }
  })
  }

  incrementTasks() {
    if(this.completedTasks() < this.DAILY_GOAL) {
      this.completedTasks.set(this.completedTasks() + 1);
    }
  }

  resetTasks() {
    this.completedTasks.set(0);
  }
}