cal = new Calculator;

	document.getElementById("downPayment").innerHTML = cal.optimalDownPayment;
	document.getElementById("morgageLoan").innerHTML = cal.morgageLoan;
	document.getElementById("bankLoan").innerHTML = cal.bankLoan;
	document.getElementById("morgageLoanInterest").innerHTML = cal.morgageLoanInterest;
	document.getElementById("morgageLoanPayment").innerHTML = cal.morgageLoanPayment;
	document.getElementById("totalInvestment").innerHTML = cal.totalInvestment;
	document.getElementById("grossIncome").innerHTML = cal.netIncome;
	document.getElementById("netIncome").innerHTML = cal.netIncomeTaxed;
	document.getElementById("returnOnInvestment").innerHTML = cal.returnOnInvestment;
	document.getElementById("cashFlow").innerHTML = cal.cashFlow;

document.getElementById("calculateButton").onclick = function() {
	cal.calculate()
	document.getElementById("downPayment").innerHTML = cal.optimalDownPayment;
	document.getElementById("morgageLoan").innerHTML = cal.morgageLoan;
	document.getElementById("bankLoan").innerHTML = cal.bankLoan;
	document.getElementById("morgageLoanInterest").innerHTML = cal.morgageLoanInterest;
	document.getElementById("morgageLoanPayment").innerHTML = cal.morgageLoanPayment;
	document.getElementById("totalInvestment").innerHTML = cal.totalInvestment;
	document.getElementById("grossIncome").innerHTML = cal.netIncome;
	document.getElementById("netIncome").innerHTML = cal.netIncomeTaxed;
	document.getElementById("returnOnInvestment").innerHTML = cal.returnOnInvestment;
	document.getElementById("cashFlow").innerHTML = cal.cashFlow;
}
