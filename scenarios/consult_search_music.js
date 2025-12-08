module.exports = async (page) => {
  const query = "eli";

  await page.goto('http://localhost/', { waitUntil: 'networkidle' });

  const searchInput = await page.$('input[type="text"]');
  await searchInput.focus();
  await searchInput.type(query);

  const searchButton = await page.$('button');
  await searchButton.click();

};
