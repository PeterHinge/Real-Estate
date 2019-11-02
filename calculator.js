class Calculator {
	constructor() {
		this.calculartorType = null;
		this.country = null;

		this.housePrize = null;
		this.optimalDownPayment = null;
		this.morgageLoan = null;
		this.bankLoan = null;

		this.morgageLoanPayback = null;
		this.morgageLoanInterest = null;

		this.totalInvestment = null;

		this.grossIncome = null;
		this.totalExpenses = null;

		this.netIncome = null;
		this.returnOnInvestment = null;
		this.cashFlow = null;

		document.getElementById('housePrize').value = 0;
		document.getElementById('grossIncome').value = 0;
		document.getElementById('totalExpenses').value = 0;

		this.simpleSetup()
	};

	simpleSetup(country='dk') {
		this.calculartorType = 'simple';
		this.country = country
	}

	checkField() {

	}

	calculate() {
		this.housePrize = Number(document.getElementById('housePrize').value);
		this.grossIncome = Number(document.getElementById('grossIncome').value);
		this.totalExpenses = Number(document.getElementById('totalExpenses').value);

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

			this.returnOnInvestment = ((this.netIncome * 12) / this.totalInvestment) * 100;
			console.log("ROI: " + this.returnOnInvestment);

			this.cashFlow = this.netIncome - this.morgageLoanPayback;
			console.log("Cash flow: " + this.cashFlow);
		} else {
			this.totalInvestment = 0;
		}
	}
}