export default {
  PORT: 1337,
  APP_NAME: 'Zomato',
  PASSWORD_HASH_ROUNDS: 10,
  // TODO: Make sure client can never see this secret
  JWT_SECRET: 'QWERTYUIOP~!@#$%^&*()_+ASDFGHJKL:"~!@#$%^&*()_+ZXCVBNM<>?~!@#$%^&*()_+"',
  JWT_EXPIRES_IN: '30 days',
  GMAPS_KEY: 'AIzaSyDYek1irsaM7LLfDaYgF7EhSsdKImeHd8c',
  URLS: [
    { title: 'About', url: '/about' },
    { title: 'Search', url: '/search' },
    { title: 'Dashboard', url: '/dashboard' },
    { title: 'Contact', url: '/contact' },
  ],
  // TODO: base64 or location expected
  FAVICON: 'https://tkruger4.files.wordpress.com/2010/11/logo-2_21.jpg', 
};
