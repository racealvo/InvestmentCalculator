import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InvestmentData } from '../investment-data.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initialInvestment = '0';
  expectedReturn = '5';
  annualInvestment = '0';
  duration = '10';
  calculateResults = output<InvestmentData>();

  onSubmit() {
    console.log('Submit button clicked');

    let data: InvestmentData = {
      initialInvestment: parseInt(this.initialInvestment), 
      expectedReturn: parseInt(this.expectedReturn), 
      annualInvestment: parseInt(this.annualInvestment), 
      duration: parseInt(this.duration)};

    this.calculateResults.emit( data);
  }
}
