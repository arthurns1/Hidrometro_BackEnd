import cron from "node-cron";

export function intervalRequest(
    intervalo: string,
    url: string,
    body = {},
    method = "GET",
) {
    cron.schedule(intervalo, async () => {
        await fetch(url, {
            method: method,
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(body),
        });
    });
}
