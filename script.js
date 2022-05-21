const redirects = {
    "scratch": "https://scratch.mit.edu/users/JoshAtticus/"
    "github": "https://github.com/JoshAtticus"
    "osmanic-github": "https://github.com/OSMANiCTeam"
    "osmanic-website": "https://home.osmanic.co"
    "foto": "https://foto.osmanic.co"
    "osmanic-prototypes": "https://prototypes.osmanic.co"
    "sgsiirboe": "https://www.ebay.com.au/itm/153621995225?hash=item23c4959ed9:g:pdYAAOSwYUZdGX4G&amdata=enc%3AAQAHAAAA8PeBZsuZpIKxjQSaZsiC2oZKh%2FVFdzDQQHQIJ1DH7wPBGTVxUHpYGFcjqfbu6ZLdUcTvSDl6nc61GLzws7yViP27pWGrpxjYit0arCLaqfV3wdJnp66uYTL%2BPh58QgZnK7WMygZPMvGY%2B3cUkP4MheJW9PXXTyxo5W%2Fi8l3YyM98yIc1iqms9lq0LjeTYWtp5Ml6yiUwlF67ahRhKgRMNddShlOfqy0tHuLpk%2F0RGQc%2FtIFINUqbyiDwNG%2FY3i%2F1yyCYnHOaaWduVFv5iCRzH0A8cebMejAJSu3xrbqoMB%2BX9UEDFPQ1utIwcHhkh0ST2A%3D%3D%7Ctkp%3ABFBMkNDj5pxg&frcectupt=true"
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
