# Flora Webapp
Local setup:
1. Create Firebase project and enable Authentication (Email/Google) and Firestore.
2. Replace the firebaseConfig in `js/auth.js` with your Firebase project's config.
3. Run `firebase deploy --only hosting` (if using Firebase hosting) or serve static files locally.

Features:
- Email/Google auth
- Mining timer (client shows timer; server validates last mine timestamp)
- Referral system (simple referral code)
- Admin panel to add/remove coins and view users