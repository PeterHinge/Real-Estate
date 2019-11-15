cal = new Calculator;

document.getElementById("calculateButton").onclick = function() {
	cal.calculate()
	document.getElementById("housePrizeOutput").innerHTML = cal.housePrize;
	document.getElementById("grossIncomeOutput").innerHTML = cal.grossIncome;
	document.getElementById("totalExpensesOutput").innerHTML = cal.totalExpenses;
	document.getElementById("downPayment").innerHTML = cal.optimalDownPayment;
	document.getElementById("morgageLoan").innerHTML = cal.morgageLoan;
	document.getElementById("returnOnInvestment").innerHTML = cal.returnOnInvestment
	document.getElementById("cashFlow").innerHTML = cal.cashFlow
}
