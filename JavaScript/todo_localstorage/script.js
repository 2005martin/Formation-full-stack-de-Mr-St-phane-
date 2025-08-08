const btn = document.getElementById('rechercher');
const input = document.getElementById('ville');
const resultat = document.getElementById('resultat');

btn.addEventListener('click', async () => {
  const ville = input.value.trim();
  resultat.innerText = '';

  if (!ville) {
    resultat.innerText = 'Veuillez entrer un nom de ville.';
    return;
  }

  try {
    const url = `https://wttr.in/${encodeURIComponent(ville)}?format=j1`;
    console.log('Fetch ->', url);

    // 1) Essai direct
    let resp = await fetch(url);

    // Si la réponse n'est pas ok, on essaye via un proxy public
    if (!resp.ok) {
      console.warn('Réponse non OK:', resp.status, resp.statusText);
      const proxy = `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`;
      console.log('Retry via proxy ->', proxy);
      resp = await fetch(proxy);
      if (!resp.ok) throw new Error('API indisponible (status ' + resp.status + ')');
    }

    const data = await resp.json();
    console.log('data =', data);

    // Vérification des champs attendus
    if (!data || !data.current_condition || !data.current_condition[0]) {
      resultat.innerText = `Aucune donnée météo trouvée pour "${ville}".`;
      return;
    }

    const tempC = data.current_condition[0].temp_C;
    const desc = (data.current_condition[0].weatherDesc && data.current_condition[0].weatherDesc[0].value) || '';
    resultat.innerText = `À ${ville}, il fait ${tempC}°C — ${desc}.`;

  } catch (err) {
    console.error(err);
    resultat.innerText = "Erreur : impossible de récupérer la météo. Ouvre la console (F12) pour voir l'erreur détaillée.";
  }
});
