(function ($) {

    if ('serviceWorker' in navigator && 'PushManager' in window) {
        var swRegistration = null;
        var applicationServerPublicKey = 'BBzu1u1A62jsT8EOjX8LipS5-4cbfx2hqbhK7fqoQt8YO0YIZaDbONBhz9IEcVrkIWX5X35Vws_nnBFG5Hnd2Bs';
        var isSubscribed = false;
        $(function () {

            $('.modal').modal();

            const pwa = $('#pwa-modal');
            if (pwa.length > 0) {
                setTimeout(function () {
                    if (!isSubscribed) {
                        pwa.modal('open');
                    }
                }, 5000);

                navigator.serviceWorker.register('/sw.js')
                    .then(function (swReg) {
                        swRegistration = swReg;
                        checkForExistingSubscription();
                    })
                    .catch(function (error) {
                        console.error('Service Worker Error', error);
                    });

                $('[data-id="confirm"]').on('click', function () {
                    subscribeUser();
                });
            }
        }); // end of document ready

        function subscribeUser() {
            const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
            swRegistration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: applicationServerKey
            })
                .then(function (subscription) {
                    console.log('User is subscribed.');
                    updateSubscriptionOnServer(subscription);
                })
                .catch(function (err) {
                    console.log('Failed to subscribe the user: ', err);
                });
        }

        function urlB64ToUint8Array(base64String) {
            const padding = '='.repeat((4 - base64String.length % 4) % 4);
            const base64 = (base64String + padding)
                .replace(/\-/g, '+')
                .replace(/_/g, '/');

            const rawData = window.atob(base64);
            const outputArray = new Uint8Array(rawData.length);

            for (let i = 0; i < rawData.length; ++i) {
                outputArray[i] = rawData.charCodeAt(i);
            }
            return outputArray;
        }

        function updateSubscriptionOnServer(subscription) {
            var http = new XMLHttpRequest();
            var url = "/apiroot/api/subscriptions/pwa";
            var params = JSON.stringify(subscription);
            http.open("POST", url, true);

            http.setRequestHeader("Content-type", "application/json");
            http.setRequestHeader("Authorization", "Bearer " + JSON.parse(document.getElementById('api-token').innerText));
            http.send(params);
        }

        function checkForExistingSubscription() {
            swRegistration.pushManager
                .getSubscription()
                .then(function (subscription) {
                    updateSubscriptionOnServer(subscription);

                    isSubscribed = !(subscription === null);
                    if (isSubscribed) {
                        console.log('User IS subscribed.');
                    } else {
                        console.log('User is NOT subscribed.');
                    }
                });
        }
    }
})(jQuery); // end of jQuery name space