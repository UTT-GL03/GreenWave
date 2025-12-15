module.exports = async (page) => {

  // 1️⃣ Aller sur la page d'accueil
  await page.goto('http://localhost/', { waitUntil: 'networkidle' });

  // Attendre que la liste des musiques soit affichée
  await page.waitForSelector('.list-music');

  // 2️⃣ Cliquer sur la première carte musique
  const firstMusic = await page.$('.list-music > a:nth-child(1)');
  await firstMusic.click();

  // Attendre la page détail
  await page.waitForSelector('.music-detail');

  // 3️⃣ Ajouter la musique aux favoris
  // (bouton "Add to favorites")
  await page.waitForSelector('.music-detail button.favorite');
  const favoriteButton = await page.$('.music-detail button.favorite');
  await favoriteButton.click();

  // Attendre le changement d'état (favorite-active)
  await page.waitForSelector('.music-detail button.favorite-active');

  // 4️⃣ Cliquer sur "Favoris" dans la navigation
  await page.waitForSelector('header nav a[href="/favorites"]');
  const favoritesLink = await page.$('header nav a[href="/favorites"]');
  await favoritesLink.click();

  // 5️⃣ Attendre la page des favoris
  await page.waitForSelector('.list-music');

  // Vérifier qu'au moins une musique est affichée
  await page.waitForSelector('.music-card');

};
