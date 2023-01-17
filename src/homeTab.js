export default function createPage() {
    const img = new Image();
    img.src = "../src/logo.jpeg";

    const h1 = document.createElement('h1');
    h1.innerHTML = "The golden dish";

    const p = document.createElement('p');
    p.innerHTML = "The golden dish is the best restaurant in Mangochi";

    const div = document.getElementById('content');

    div.appendChild(img);
    div.appendChild(h1);
    div.appendChild(p);
};

