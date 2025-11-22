const REWARD_PER_CLAIM = 1.0;
const CLAIM_INTERVAL_SEC = 300;

document.getElementById('claimBtn')?.addEventListener('click', async ()=>{
  const user = _auth.currentUser;
  if(!user) return alert('Login required');
  const uRef = _db.collection('users').doc(user.uid);
  try{
    await _db.runTransaction(async tx=>{
      const doc = await tx.get(uRef);
      const data = doc.data();
      const now = Math.floor(Date.now()/1000);
      const last = data.lastMine || 0;
      if(now - last < CLAIM_INTERVAL_SEC) throw 'Too soon';
      const newBal = (data.balance || 0) + REWARD_PER_CLAIM;
      tx.update(uRef, { balance: newBal, lastMine: now });
    });
    alert('Claim success');
  }catch(e){
    alert('Cannot claim: '+e);
  }
});
