describe("Payments test (with setup and tear-down)", function() {
	beforeEach(() => {
		billAmtInput.value = 100;
		tipAmtInput.value = 20;
	});

	it('should do nothing when handling empty input to billAmt', () => {
		billAmtInput.value = '';
		createCurPayment()
		expect().nothing();
	});

	it('should do nothing when handling empty input to tipAmt', () => {
		tipAmtInput.value = '';
		createCurPayment()
		expect().nothing();
	});

	it('should create new object from createCurPayment()', () => {
		let newObject = {
			billAmt: billAmtInput.value,
			tipAmt: tipAmtInput.value,
			tipPercent: 20
		}
		createCurPayment()
		expect(createCurPayment()).toEqual(newObject);
	});

	it('should append createCurPayment() object to payment table using appendPaymentTable()', () => {
		let newPayment1 = createCurPayment();
		let newPayment2 = createCurPayment();
		// allPayments["payment1"] = newPayment;

		appendPaymentTable(newPayment1)
		appendPaymentTable(newPayment2)
		let paymentList = document.querySelectorAll('#paymentTable tbody tr');

		expect(paymentList.length).toEqual(2);
	});

	afterEach(() => {

	})
});
