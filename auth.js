   // ── TAB SWITCHING ──
  function switchTab(tab) {
    const tabs = document.querySelectorAll('.tab-btn');
    const loginPanel = document.getElementById('loginPanel');
    const signupPanel = document.getElementById('signupPanel');
    const successScreen = document.getElementById('successScreen');
 
    successScreen.classList.remove('show');
 
    if (tab === 'login') {
      tabs[0].classList.add('active');
      tabs[1].classList.remove('active');
      loginPanel.classList.add('active');
      signupPanel.classList.remove('active');
    } else {
      tabs[1].classList.add('active');
      tabs[0].classList.remove('active');
      signupPanel.classList.add('active');
      loginPanel.classList.remove('active');
    }
 
    clearErrors();
  }
 
  // ── PASSWORD VISIBILITY TOGGLE ──
  function togglePw(id, btn) {
    const input = document.getElementById(id);
    const isHidden = input.type === 'password';
    input.type = isHidden ? 'text' : 'password';
    btn.querySelector('svg').innerHTML = isHidden
      ? '<path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/>'
      : '<path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>';
  }
 
  // ── PASSWORD STRENGTH ──
  function checkStrength(val) {
    const wrap = document.getElementById('pwStrength');
    const label = document.getElementById('pwLabel');
    const bars = [document.getElementById('bar1'), document.getElementById('bar2'), document.getElementById('bar3')];
 
    if (!val) { wrap.style.display = 'none'; return; }
    wrap.style.display = 'block';
 
    let score = 0;
    if (val.length >= 8) score++;
    if (/[A-Z]/.test(val) && /[0-9]/.test(val)) score++;
    if (/[^A-Za-z0-9]/.test(val)) score++;
 
    bars.forEach(b => { b.className = 'pw-bar'; });
 
    if (score === 1) {
      bars[0].classList.add('weak');
      label.textContent = 'Weak';
    } else if (score === 2) {
      bars[0].classList.add('medium'); bars[1].classList.add('medium');
      label.textContent = 'Medium';
    } else {
      bars.forEach(b => b.classList.add('strong'));
      label.textContent = 'Strong';
    }
  }
 
  // ── SHOW ERROR ──
  function showError(id, msg) {
    const el = document.getElementById(id);
    el.textContent = msg;
    el.classList.add('show');
  }
 
  function clearErrors() {
    document.querySelectorAll('.error-msg').forEach(e => e.classList.remove('show'));
  }
 
  // ── FAKE LOADING ──
  function setLoading(btnId, on) {
    document.getElementById(btnId).classList.toggle('loading', on);
  }
 
  // ── LOGIN ──
  function handleLogin() {
    clearErrors();
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
 
    if (!email || !password) {
      showError('loginError', 'Please fill in all fields.');
      return;
    }
    if (!email.includes('@')) {
      showError('loginError', 'Please enter a valid email address.');
      return;
    }
 
    setLoading('loginBtn', true);
 
    // TODO: Replace with Firebase Auth signInWithEmailAndPassword()
    setTimeout(() => {
      setLoading('loginBtn', false);
      // Simulate success — Firebase will handle real auth
      document.getElementById('loginPanel').classList.remove('active');
      const success = document.getElementById('successScreen');
      document.getElementById('successTitle').textContent = 'Welcome back!';
      document.getElementById('successSub').textContent = 'You\'re signed in. Redirecting you to your quote request...';
      success.classList.add('show');
    }, 1500);
  }
 
  // ── SIGNUP ──
  function handleSignup() {
    clearErrors();
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('signupPassword').value;
    const terms = document.getElementById('terms').checked;
 
    if (!firstName || !lastName || !email || !password) {
      showError('signupError', 'Please fill in all fields.');
      return;
    }
    if (!email.includes('@')) {
      showError('signupError', 'Please enter a valid email address.');
      return;
    }
    if (password.length < 8) {
      showError('signupError', 'Password must be at least 8 characters.');
      return;
    }
    if (!terms) {
      showError('signupError', 'Please accept the Terms of Service to continue.');
      return;
    }
 
    setLoading('signupBtn', true);
 
    // TODO: Replace with Firebase Auth createUserWithEmailAndPassword()
    setTimeout(() => {
      setLoading('signupBtn', false);
      document.getElementById('signupPanel').classList.remove('active');
      document.getElementById('successScreen').classList.add('show');
    }, 1800);
  }