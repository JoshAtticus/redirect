const redirects = {
    "*": "https://image.thum.io/get/*"
};

const hash = location.href.split("#")[1] || location.href.split("?")[1];

const heading = (t) => document.querySelector('#heading').innerText = t;
const text = (t) => document.querySelector('#text').innerText = t;

if (hash in redirects) {
    heading("You are being redirected to");
    text(redirects[hash]);
    setTimeout(() => location.href = redirects[hash], 500)
} else {
    heading("404, Not Found");
    text("The requested page was not found.")
    document.title = "404, Not Found";
}
