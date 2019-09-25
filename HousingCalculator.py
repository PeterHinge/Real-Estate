HOUSE_PRICE = 1000000


OPTIMAL_VALUE_PERCENTAGE = 20  # Percentage
INTEREST_ON_MORTGAGE = 0  # Percentage


########################################################################################################################


class Calculator:
    def __init__(self, house_price=None, optimal_down_payment=None, interest_on_mortgage=None):
        self.house_price = house_price
        self.optimal_down_payment = optimal_down_payment
        self.interest_on_mortgage = interest_on_mortgage

        self.optimal_payment = self.house_price * self.optimal_down_payment // 100
        self.mortgage_loan = self.house_price - self.optimal_payment
        self.tax_fee = int(self.house_price * 0.006 + 1660)  # Tingslysningsafgift af skødet
        self.loan_fee = int(self.mortgage_loan * 0.0145 + 1640)  # Tingslysningsafgift af lån
        

        print('--------- INPUTS ---------\n')
        print(f'HOUSE PRICE: {self.house_price}')
        print(f'OPTIMAL VALUE PERCENTAGE: {self.optimal_down_payment}%')
        print(f'INTEREST ON MORTGAGE: {self.interest_on_mortgage}%')

    def expenses(self):
        print('\n\n')
        print('-------- EXPENSES --------\n')

        transaction_fees = self.tax_fee + self.loan_fee
        total_expenses = self.optimal_payment + transaction_fees

        print(f'OPTIMAL DOWN PAYMENT: {self.optimal_payment}')
        print(f'TRANSACTION FEES: {transaction_fees}')
        print(f'TOTAL MAX EXPENSES ON PURCHASE: {total_expenses}')

    def return_on_investment(self):
        print('\n\n')
        print('---RETURN ON INVESTMENT---')




########################################################################################################################


if __name__ == '__main__':
    calculator = Calculator(house_price=HOUSE_PRICE,
                            optimal_down_payment=OPTIMAL_VALUE_PERCENTAGE,
                            interest_on_mortgage=INTEREST_ON_MORTGAGE)
    calculator.expenses()
    calculator.return_on_investment()
