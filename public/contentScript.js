/*global chrome*/
function getUsername() {
    return document.querySelector("link[id=feedLink]")?.getAttribute("href")?.split("/")?.at(-1);
}

function getMediumData(username, url, startFromPost, maxPaginationLimit) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify([{
            operationName: "UserProfileQuery", 
            variables: {
                homepagePostsFrom: startFromPost,
                homepagePostsLimit: maxPaginationLimit, 
                includeDistributedResponses: true, 
                username: username
            }, 
            // eslint-disable-next-line no-undef
            query: getQuery()
        }])})
        .then((content) => content.json());
}

chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        const username = getUsername();
        getMediumData(username, request.url, request.startFromPost, request.maxPaginationLimit)
        .then((response) => sendResponse(response));
        return true;
    }
);