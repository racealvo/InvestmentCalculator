import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  userInput: string = '';
  userInputs: string[] = [];

  // addUserInput() {
  //   if (this.userInput.trim()) {
  //     this.userInputs.push(this.userInput);
  //     this.userInput = '';
  //   }
  // }

  onSubmit() {
    console.log(this.userInput);
    this.userInput = '';
  }
}
