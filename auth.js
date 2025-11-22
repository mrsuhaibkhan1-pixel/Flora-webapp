// Firebase config placeholder
const firebaseConfig = {
  apiKey: "REPLACE_ME",
  authDomain: "REPLACE_ME",
  projectId: "REPLACE_ME",
  storageBucket: "REPLACE_ME",
  messagingSenderId: "REPLACE_ME",
  appId: "REPLACE_ME"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

window._auth = auth;
window._db = db;

const signupBtn = document?.getElementById('signupBtn');
if(signupBtn){
  signupBtn.addEventListener('click', async ()=>{
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const userCred = await auth.createUserWithEmailAndPassword(email,password);
    const uid = userCred.user.uid;
    await db.collection('users').doc(uid).set({
      email, balance:0, lastMine:0, refCode: generateRefCode()
    });
  });
}

const loginBtn = document?.getElementById('loginBtn');
if(loginBtn){
  loginBtn.addEventListener('click', async ()=>{
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    await auth.signInWithEmailAndPassword(email,password);
  });
}

function generateRefCode(){
  return 'FL-'+Math.random().toString(36).substr(2,6).toUpperCase();
}

_auth.onAuthStateChanged(async user=>{
  if(user){
    document.getElementById('authSection').style.display='none';
    document.getElementById('dashboard').style.display='block';
    document.getElementById('logoutBtn').style.display='inline-block';
  } else {
    document.getElementById('authSection').style.display='block';
    document.getElementById('dashboard').style.display='none';
  }
});

document.getElementById('logoutBtn')?.addEventListener('click', ()=> auth.signOut());
