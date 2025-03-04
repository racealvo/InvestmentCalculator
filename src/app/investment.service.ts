import { Injectable, signal } from "@angular/core";
import type { InvestmentData } from "./investment-data.model";

@Injectable({providedIn: 'root'})
export class InvestmentService {
    resultData = signal<{
        year: number,
        interest: number,
        valueEndOfYear: number,
        annualInvestment: number,
        totalInterest: number,
        totalAmountInvested: number,
      }[] | undefined>(undefined);

    calculateInvestmentResults(data: InvestmentData) {
        const { initialInvestment, expectedReturn, duration, annualInvestment } = data;
        const annualData = [];
        let investmentValue = initialInvestment;
      
        for (let i = 0; i < duration; i++) {
          const year = i + 1;
          const interestEarnedInYear = investmentValue * (expectedReturn / 100);
          investmentValue += interestEarnedInYear + annualInvestment;
          const totalInterest =
            investmentValue - annualInvestment * year - initialInvestment;
          annualData.push({
            year: year,
            interest: interestEarnedInYear,
            valueEndOfYear: investmentValue,
            annualInvestment: annualInvestment,
            totalInterest: totalInterest,
            totalAmountInvested: initialInvestment + annualInvestment * year,
          });
        }
      
        // this.resultsData.set(annualData);
        // this.resultData = annualData;
        this.resultData.set(annualData);
      }
    
}