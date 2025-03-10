import { Component, signal } from '@angular/core';

import { InvestmentData } from '../investment-data.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initialInvestment = signal('0');
  expectedReturn = signal('5');
  annualInvestment = signal('0');
  duration = signal('10');

  constructor(private investmentService: InvestmentService) {}

  onSubmit() {
    let data: InvestmentData = {
      initialInvestment: parseInt(this.initialInvestment()), 
      expectedReturn: parseInt(this.expectedReturn()), 
      annualInvestment: parseInt(this.annualInvestment()), 
      duration: parseInt(this.duration())};

    this.investmentService.calculateInvestmentResults(data);

    this.initialInvestment.set('0');
    this.annualInvestment.set('0');
    this.expectedReturn.set('5');
    this.duration.set('10');
  }
}
