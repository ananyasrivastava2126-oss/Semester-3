// function signup(){
//     console.log("welcome")
//     sendConfirmationEmail()
//     sendNotification()
// }
// function sendConfirmationEmail(){
//     console.lo("Email send");
// }
// function sendNotification(){
//     console.log("send notification")
// }
// signup()
import EventEmitterfrom from "node:events";

// emitter.on("orderplaced",()=>{
//     console.log("order placed")
// })
// emitter.emit("orderPlaced")

// import EventEmitter from "node:events";

// const emitter = new EventEmitter

const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

function signUp(user) {
    console.log('Welcome', user.name);
    sendCommitment(user);
    sendNotification(user);
    // Emit a `login` event after signup
    eventEmitter.emit('login', user);
}

function sendCommitment(user) {
    console.log('email sent to', user.email);
}

function sendNotification(user) {
    console.log('notification sent to', user.name);
}

// Listen for `login` events
// eventEmitter.on('login', (user) => {
//     console.log('login event received for', user.name);
// });
// emitter.on("order placed",()=>{
//     console.log("Confirmation details send")
// })
// emitter.on("order placed", ()=>{
//     console.log("inventory updated")
// })
// emitter.emit("order placed")
eventEmitter.once('login', (user) => {
    console.log('login event received for', user.name);
});
emitter.once("order placed",()=>{
    console.log("Confirmation details send")
})
emitter.on("order placed", ()=>{
    console.log("inventory updated")
})
emitter.emit("order placed")

import { EventEmitter } from "node:stream";

class FileUpHolder extends EventEmitter{
    upload(filename){
        console.log("fileupload",)
    }
}