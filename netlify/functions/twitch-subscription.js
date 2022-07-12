exports.handler = async (event) => {
    const { headers = [] } event;

    const type = headers['twitch_eventsub-message-type'] ?? 'no type';

    return {
        statusCode: 200,
        body: JSON.stringify({
            type,
            message: 'ok',
        }),
    };
};