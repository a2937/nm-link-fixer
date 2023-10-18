var anchors = document.querySelectorAll('a');

anchors.forEach(function (anchor) {

  // New: https://www.nexusmods.com/newvegas/mods/40040

  const oldURL = anchor.href;
  const gameNameNexusRegex = /(http:\/\/www\.)?([^/]+?)nexus.com\/downloads\/file\.php\?id=/; // Example match: http://www.newvegasnexus.com/downloads/file.php?id=40040
  const idRegex = /id=(\d+)/; // Example match: id=40040

  const gameNameSubdomainRegex = /:\/\/(?!www\.)([^.]+).nexusmods.com\/downloads\/file.php\?id=[\d]+/;

  const gameNexusMatch = oldURL.match(gameNameNexusRegex);
  const idMatch = oldURL.match(idRegex);
  const subdomainMatch = oldURL.match(gameNameSubdomainRegex);


  if ((gameNexusMatch || subdomainMatch) && idMatch) {
    let gameName;
    if (gameNexusMatch) {
      gameName = gameNexusMatch[2]; // this will capture 'newvegas' for example
    }
    else if (subdomainMatch) {
      gameName = subdomainMatch[1];
    }
    const id = idMatch[1]; // this will capture '40040' for example
    const newURL = `https://www.nexusmods.com/${gameName}/mods/${id}`;
    anchor.href = newURL;
  }
});