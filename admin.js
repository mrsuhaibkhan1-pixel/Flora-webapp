const dbA = window._db;
const authA = window._auth;

_auth.onAuthStateChanged(async user=>{
  if(!user) return location.href='index.html';
});
