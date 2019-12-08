cal = new Calculator;

document.getElementById("downPayment").innerHTML = cal.optimalDownPayment;
document.getElementById("mortgageLoan").innerHTML = cal.mortgageLoan;
document.getElementById("bankLoan").innerHTML = cal.bankLoan;
document.getElementById("mortgageLoanInterest").innerHTML = cal.mortgageLoanInterest;
document.getElementById("mortgageLoanPayment").innerHTML = cal.mortgageLoanPayment;
document.getElementById("totalInvestment").innerHTML = cal.totalInvestment;
document.getElementById("grossIncome").innerHTML = cal.grossIncome;
document.getElementById("netIncome").innerHTML = cal.netIncome;
document.getElementById("returnOnInvestment").innerHTML = cal.returnOnInvestment;
document.getElementById("cashFlow").innerHTML = cal.cashFlow;

document.getElementById("calculateButton").onclick = function() {
	cal.calculate()
	document.getElementById("downPayment").innerHTML = cal.optimalDownPayment;
	document.getElementById("mortgageLoan").innerHTML = cal.mortgageLoan;
	document.getElementById("bankLoan").innerHTML = cal.bankLoan;
	document.getElementById("mortgageLoanInterest").innerHTML = cal.mortgageLoanInterest;
	document.getElementById("mortgageLoanPayment").innerHTML = cal.mortgageLoanPayment;
	document.getElementById("totalInvestment").innerHTML = cal.totalInvestment;
	document.getElementById("grossIncome").innerHTML = cal.grossIncome;
	document.getElementById("netIncome").innerHTML = cal.netIncome;
	document.getElementById("returnOnInvestment").innerHTML = cal.returnOnInvestment;
	document.getElementById("cashFlow").innerHTML = cal.cashFlow;
}
