import { Component, output, signal } from '@angular/core';
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
  initialInvestment = signal('0');
  expectedReturn = signal('5');
  annualInvestment = signal('0');
  duration = signal('10');
  calculateResults = output<InvestmentData>();

  onSubmit() {
    console.log('Submit button clicked');

    let data: InvestmentData = {
      initialInvestment: parseInt(this.initialInvestment()), 
      expectedReturn: parseInt(this.expectedReturn()), 
      annualInvestment: parseInt(this.annualInvestment()), 
      duration: parseInt(this.duration())};

    this.calculateResults.emit( data);

    this.initialInvestment.set('0');
    this.annualInvestment.set('0');
    this.expectedReturn.set('5');
    this.duration.set('10');
  }
}
