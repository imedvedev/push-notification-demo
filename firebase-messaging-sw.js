importScripts('https://www.gstatic.com/firebasejs/5.8.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.8.3/firebase-messaging.js');

firebase.initializeApp({
    messagingSenderId: '525340006745' // troque pelo seu sender id 
});

const messaging = firebase.messaging();

messaging.onMessage(function(payload) {
    console.log('Message received. ', payload);
    // ...
  });
  
console.log(messaging);
messaging.setBackgroundMessageHandler(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notification = JSON.parse(payload.data.notification);
    // Customize notification here
    const notificationTitle = notification.title;
    const notificationOptions = {
        body: notification.body,
        icon: notification.icon
    };

    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});