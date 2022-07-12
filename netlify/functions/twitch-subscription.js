exports.handler = async (event) => {
    const { headers = [] } = event;

    const type = headers['twitch-eventsub-message-type'] || 'no type';
    const eventType = headers['twitch-eventsub-subscription-type'];


    if (type !== 'notification' || eventType !== 'channel.subscribe') {
        return { statusCode: 200, body: '' };
    }
    
    
    console.log({ headers: event.headers, body: event.body} )

    // Requests are now valid.
    // Insert code here if you want to get fun with it.

    const { event: twitchEvent } = JSON.parse(event.body);
    const user = twitchEvent.user_name

    console.log('${user} just subscribed!');

    return {
        statusCode: 200,
        body: '',
    };
};