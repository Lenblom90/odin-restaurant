export default function menuPage() {
    const img = new Image();
    img.src = "../src/logo.jpeg";

    const h1 = document.createElement('h1');
    h1.innerHTML = "Menu";

    const p = document.createElement('p');
    p.innerHTML = "Braai chicken with your choice of nsima, rice or chips";

    const div = document.getElementById('content');

    div.appendChild(img);
    div.appendChild(h1);
    div.appendChild(p);
};

