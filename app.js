const db = window._db;
const auth = window._auth;

const balanceEl = document.getElementById('balance');
const displayNameEl = document.getElementById('displayName');
const refCodeEl = document.getElementById('refCode');
const historyEl = document.getElementById('history');

_auth.onAuthStateChanged(async user=>{
  if(!user) return;
  const uRef = db.collection('users').doc(user.uid);
  uRef.onSnapshot(doc=>{
    const data = doc.data();
    displayNameEl.textContent = user.email.split('@')[0];
    balanceEl.textContent = (data.balance||0).toFixed(2);
    refCodeEl.textContent = data.refCode || '-';
  });
});
