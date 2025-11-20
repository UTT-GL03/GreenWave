module.exports = async (page) => {
  await page.goto('http://localhost/detail/music_1000', {
      waitUntil: 'networkidle',
  });
  await page.waitForTimeout(10000);
  await page.scrollToEnd();
  await page.waitForNetworkIdle();
  await page.waitForTimeout(7000);
};
