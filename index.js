const { openBrowser, goto, write, click } = require('taiko');

(async () => {
    try {
        await openBrowser();
        await goto('https://google.com');
        await write('Bang head here');
        await click('Google Search');
        await click('Images');
    } catch (e) {
        console.error(e);
    } finally {
        await closeBrowser();
    }
})();
