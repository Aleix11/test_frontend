describe('Test', function() {
    it('Amaris Test', function() {
        browser.get('http://localhost:4200');

        browser.sleep(5000);

        element(by.className('searchbar-input')).sendKeys('Malbin');

        browser.sleep(5000);

        element(by.className('infinite-scroll-enabled'));

        browser.sleep(5000);

        element(by.id('0item')).click();

        browser.sleep(10000);

    });
});
