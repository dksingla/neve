describe('Visual Regression Testing - https://qa-neve.themeisle.com/neve/neve-blog/?blog-grid-4=yes', () => {
	let url = "https://qa-neve.themeisle.com/neve/neve-blog/?blog-grid-4=yes";
	it('Should not add any visual change', function () {
		cy.visit(url);
		cy.captureDocument();
	});
});
