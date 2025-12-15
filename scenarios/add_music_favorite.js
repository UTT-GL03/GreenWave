module.exports = async (page) => {
  await page.goto('http://localhost/', { waitUntil: 'networkidle' });
  await page.waitForSelector('.list-music');
  const firstMusic = await page.$('.list-music > a:nth-child(1)');
  await firstMusic.click();

  await page.waitForSelector('.music-detail');
  const favoriteActive = await page.$('.music-detail button.favorite-active');

  if (!favoriteActive) {
    const favoriteButton = await page.$('.music-detail button.favorite');
    if (favoriteButton) {
      await favoriteButton.click();

      await page.waitForSelector('.music-detail button.favorite-active');
    } else {
      console.warn("Le bouton 'Add to favorites' n'existe pas");
    }
  }

  await page.waitForSelector('header nav a[href="/favorites"]');
  const favoritesLink = await page.$('header nav a[href="/favorites"]');
  await favoritesLink.click();

  await page.waitForSelector('.list-music');
  await page.waitForSelector('.music-card');
};
