// Firebase Cloud Messaging 서비스워커
// 앱이 꺼져있거나 백그라운드에 있을 때도 푸시 알림을 받기 위해 필요합니다.
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyD_eYNKzfa-aT41E3Dqt_HyJc6UeSR5ErA",
  authDomain: "songmath.firebaseapp.com",
  projectId: "songmath",
  storageBucket: "songmath.firebasestorage.app",
  messagingSenderId: "936295436575",
  appId: "1:936295436575:web:d1e201508719850cfbe02a"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || '송우찬수학학원';
  const body = payload.notification?.body || '';
  self.registration.showNotification(title, {
    body,
    icon: '/icon-192.png'
  });
});
