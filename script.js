const redirects = {
    "scratch": "https://scratch.mit.edu/users/JoshAtticus/"
    "github": "https://github.com/JoshAtticus"
    "osmanic-github": "https://github.com/OSMANiCTeam"
    "osmanic-website": "https://home.osmanic.co"
    "foto": "https://foto.osmanic.co"
    "osmanic-prototypes": "https://prototypes.osmanic.co"
};

const hash = location.href.split("#")[1] || location.href.split("?")[1];

const heading = (t) => document.querySelector('#heading').innerText = t;
const text = (t) => document.querySelector('#text').innerText = t;

if (hash in redirects) {
    heading("You are being redirected to");
    text(redirects[hash]);
    setTimeout(() => location.href = redirects[hash], 500)
} else {
    heading("Invalid link");
    text("The link doesn't appear to be valid")
    document.title = "Invalid Link";
}
