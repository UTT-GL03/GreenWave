module.exports = async (page) => {
  await page.goto('http://localhost/', { waitUntil: 'networkidle' });
  await page.waitForSelector('.list-music .music-card');

  const firstMusicLink = await page.$('.list-music a');
  if (!firstMusicLink) throw new Error("Impossible de trouver la première musique");
  await firstMusicLink.click();

  await page.waitForSelector('.music-detail button.favorite, .music-detail button.favorite-active');

  const favoriteActive = await page.$('.music-detail button.favorite-active');
  if (!favoriteActive) {
    const favoriteButton = await page.$('.music-detail button.favorite');
    if (favoriteButton) {
      await favoriteButton.click();
      await page.waitForSelector('.music-detail button.favorite-active');
    }
  }

  await page.click('header nav a[href="/favorites"]');
  await page.waitForSelector('.list-music .music-card');
};
