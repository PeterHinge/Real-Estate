class Calculator {
	constructor() {
		this.calculartorType = null;
		this.country = null;

		this.housePrize = 0;
		this.optimalDownPayment = 0;
		this.mortgageLoan = 0;
		this.bankLoan = 0;

		this.mortgageLoanPayment = 0;
		this.mortgageLoanInterest = 0;

		this.totalInvestment = 0;

		this.monthlyRentalIncome = 0;
		this.monthlyExpenses = 0;

		this.grossIncome = 0;
		this.netIncome = 0;
		this.returnOnInvestment = 0;
		this.cashFlow = 0;

		document.getElementById('housePrizeInput').value = 0;
		document.getElementById('monthlyRentalIncomeInput').value = 0;
		document.getElementById('monthlyExpensesInput').value = 0;

		this.simpleSetup()
	};

	simpleSetup(country='dk') {
		this.calculartorType = 'simple';
		this.country = country
	}

	checkField() {

	}

	calculate() {
		this.housePrize = Number(document.getElementById('housePrizeInput').value);
		this.monthlyRentalIncome = Number(document.getElementById('monthlyRentalIncomeInput').value);
		this.monthlyExpenses = Number(document.getElementById('monthlyExpensesInput').value);

		this.optimalDownPayment = this.housePrize * 0.2;
		this.mortgageLoan = this.housePrize * 0.8;
		this.bankLoan = 0;
		
		//Investment expenses and morgage payback
		if (this.country == 'dk') {
			this.totalInvestment = Number((this.optimalDownPayment).toFixed(0));
			this.totalInvestment += Number((this.housePrize * 0.006 + 1660).toFixed(0)); //Tingslysningsafgift af skøde
			this.totalInvestment += Number((this.mortgageLoan * 0.0145 + 1640).toFixed(0)); //Tingslysningsafgift af  realkreditlån
			this.totalInvestment += Number((this.mortgageLoan * 0.0015).toFixed(0)); //Omkostninger af realkreditlån

			this.mortgageLoanPayment = Number((this.mortgageLoan * 0.0028).toFixed(0));
			this.mortgageLoanInterest =  Number((this.mortgageLoan * 0.0039 - this.mortgageLoanPayment).toFixed(0));

			this.monthlyExpenses += this.mortgageLoanInterest;
		} else {
			this.totalInvestment = 0;
		}

		//ROI and cash flow
		if (this.calculartorType == 'simple') {
			this.grossIncome =  Number((this.monthlyRentalIncome - this.monthlyExpenses).toFixed(0));
			this.netIncome = Number((this.grossIncome * 0.78).toFixed(0)); // 22% skat ved virksomhedsordning

			this.returnOnInvestment = (((this.netIncome * 12) / this.totalInvestment) * 100).toFixed(2);

			this.cashFlow = (this.netIncome - this.mortgageLoanPayment).toFixed(0);
		} else {
			this.totalInvestment = 0;
		}
	}
}