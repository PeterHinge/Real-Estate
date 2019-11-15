class Calculator {
	constructor() {
		this.calculartorType = null;
		this.country = null;

		this.housePrize = 0;
		this.optimalDownPayment = 0;
		this.morgageLoan = 0;
		this.bankLoan = 0;

		this.morgageLoanPayback = 0;
		this.morgageLoanInterest = 0;

		this.totalInvestment = 0;

		this.grossIncome = 0;
		this.totalExpenses = 0;

		this.netIncome = 0;
		this.returnOnInvestment = 0;
		this.cashFlow = 0;

		document.getElementById('housePrizeInput').value = 0;
		document.getElementById('grossIncomeInput').value = 0;
		document.getElementById('totalExpensesInput').value = 0;

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
		this.grossIncome = Number(document.getElementById('grossIncomeInput').value);
		this.totalExpenses = Number(document.getElementById('totalExpensesInput').value);

		this.optimalDownPayment = this.housePrize * 0.2;
		this.morgageLoan = this.housePrize * 0.8;
		this.bankLoan = 0;
		
		//Investment expenses and morgage payback
		if (this.country == 'dk') {
			this.totalInvestment = this.optimalDownPayment;
			this.totalInvestment += this.housePrize * 0.006 + 1660; //Tingslysningsafgift af skøde
			this.totalInvestment += this.morgageLoan * 0.0145 + 1640; //Tingslysningsafgift af  realkreditlån
			this.totalInvestment += this.morgageLoan * 0.0015; //Omkostninger af realkreditlån

			this.morgageLoanPayback = this.morgageLoan * 0.0028;
			this.morgageLoanInterest = this.morgageLoan * 0.0039 - this.morgageLoanPayback;

			this.totalExpenses += this.morgageLoanInterest;

		} else {
			this.totalInvestment = 0;
		}

		//ROI and cash flow
		if (this.calculartorType == 'simple') {
			this.netIncome = this.grossIncome - this.totalExpenses;
			this.netIncomeTaxed = this.netIncome * 0.78; // 22% skat ved virksomhedsordning

			this.returnOnInvestment = ((this.netIncomeTaxed * 12) / this.totalInvestment) * 100;

			this.cashFlow = this.netIncomeTaxed - this.morgageLoanPayback;
		} else {
			this.totalInvestment = 0;
		}
	}
}