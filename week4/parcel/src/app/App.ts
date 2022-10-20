const HelloFromTheTypeScriptSide = (message: string) => {
    message.toUpperCase();
    return message;
}

console.log(HelloFromTheTypeScriptSide("Hello World"));