document.addEventListener('click', () => {
    Notification.requestPermission().then( (status) => {
    if (status === 'denied') {
        //
    } else if (status === 'granted') {
        //
        console.log("test")
        const myNotification = new Notification('Hello World!');
    }
});
})