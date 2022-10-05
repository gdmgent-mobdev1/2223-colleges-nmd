const hasPermisson = async () => {
  const permission = await Notification.requestPermission();
  return permission === 'granted';
};

const showNotification = async () => {
  // check if we have notification permission
  const hasPermission = await hasPermisson();
}


new Notification('Hello World!');

new Notification('Hello World!', { body: 'What a nice day!'});

new Notification('Hello World!', { body: 'What a nice day!', icon: '/user/ahs/webapis/images/img.png'});