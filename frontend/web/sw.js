self.addEventListener('push', function (event) {
    console.log('[Service Worker] Push Received.');
    console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

    try {
        var payload = JSON.parse(event.data.text());

        switch (payload.type) {
            case 'item-select':
            case 'item-unselect':
            case 'item-buy':
            case 'item-unbuy':
                sendMessage(payload.type, payload.id);
                break;
        }
    } catch (e) {
        // silently fail
        console.log(e);
    }

    // const title = payload.title;
    // const options = {
    //     body: payload.msg,
    //     icon: payload.icon,
    //     badge: payload.icon
    // };
    //
    // event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', function (event) {
    event.notification.close();
});

function sendMessage(message, payload) {
    clients.matchAll()
        .then(function (clients) {
            clients.forEach(function (client) {
                sendMessageToClient(client, message, payload);
            })
        })
}
function sendMessageToClient(client, message, payload) {
    return new Promise(function (resolve, reject) {
        var msg_chan = new MessageChannel();

        msg_chan.port1.onmessage = function (event) {
            if (event.data.error) {
                reject(event.data.error);
            } else {
                resolve(event.data);
            }
        };

        client.postMessage(JSON.stringify({type: message, payload: payload}), [msg_chan.port2]);
    });
}