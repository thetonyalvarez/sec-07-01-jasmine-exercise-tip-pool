
describe("Helpers test (with setup and tear-down)", () => {
	beforeEach(function () {
		// initialization logic
		billAmtInput.value = 20;
		tipAmtInput.value = 2;
		submitPaymentInfo();
	});

	it("should calculate tip percent", () => {
		expect(calculateTipPercent(100,10)).toEqual(10);
		expect(calculateTipPercent(200,50)).toEqual(25);
		expect(calculateTipPercent(60,10)).toEqual(17);
	});

	it("should sum all entries to billAmt and return total when using sumPaymentTotal()", () => {
		expect(sumPaymentTotal('billAmt')).toEqual(20);
		
		billAmtInput.value = 60;
		tipAmtInput.value = 10;
		submitPaymentInfo();

		expect(sumPaymentTotal('billAmt')).toEqual(80);
	});

	it("should sum all entries to tipAmt and return total when using sumPaymentTotal()", () => {
		expect(sumPaymentTotal('tipAmt')).toEqual(2);
		
		billAmtInput.value = 60;
		tipAmtInput.value = 10;
		submitPaymentInfo();

		expect(sumPaymentTotal('tipAmt')).toEqual(12);
	});

	it("should sum all tip percentages to tipPercent and return total when using sumPaymentTotal()", () => {
		expect(sumPaymentTotal('tipPercent')).toEqual(10);
		
		billAmtInput.value = 60;
		tipAmtInput.value = 10;
		submitPaymentInfo();

		expect(sumPaymentTotal('tipPercent')).toEqual(27);
	});

	it("should generate new td from value and append to tr on appendTd(tr, value)", function () {
		let newTr = document.createElement('tr');

		appendTd(newTr, 'test');
		expect(newTr.children.length).toEqual(1);
		expect(newTr.innerText).toEqual('test');
		
	});

	it('should create a close X element', () => {
		let tr = document.createElement('tr');
		appendDeleteBtn(tr);
		expect(tr.innerText).toEqual('X');
		expect(tr.children[0].className).toEqual('deleteBtn');
	});

	// ? How do I create a test for Listener events?
	// it('should remove row if X is clicked', () => {
	// 	let tr = document.createElement('tr');
	// 	appendDeleteBtn(tr);
	// })

	afterEach(function() {
		billAmtInput.value = '';
		tipAmtInput.value = '';
		allPayments = {};
		paymentTbody.innerHTML = "";
		summaryTds[0].innerHTML = "";
		summaryTds[1].innerHTML = "";
		summaryTds[2].innerHTML = "";
		serverTbody.innerHTML = "";
	});
});
