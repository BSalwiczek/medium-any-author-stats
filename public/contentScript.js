/*global chrome*/
function getUsername() {
    return document.querySelector("link[id=feedLink]").getAttribute("href").split("/").at(-1);
}

function getMediumData(url, startFromPost, maxPaginationLimit) {
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

const username = getUsername();
getMediumData("https://medium.com/_/graphql", username, null, 25).then((data) => console.log(data));


chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        getMediumData(request.url, request.startFromPost, request.maxPaginationLimit)
        .then((response) => sendResponse(response));
        return true;
    }
);