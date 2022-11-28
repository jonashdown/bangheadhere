const { openBrowser, goto, write, click, closeBrowser } = require('taiko');

(async () => {
    try {
        await openBrowser({ headless: false });
        await goto('https://google.com');
        await write('Bang Head Here!');
        await click('Google Search');
        await click('Images');
    } catch (e) {
        console.error(e);
    } finally {
        await closeBrowser();
    }
})();
