export default function contactPage() {
    const img = new Image();
    img.src = "../src/logo.jpeg";

    const h1 = document.createElement('h1');
    h1.innerHTML = "Contact";

    const p = document.createElement('p');
    p.innerHTML = "For reservations and enquiries please contact 099 12345678";

    const div = document.getElementById('content');

    div.appendChild(img);
    div.appendChild(h1);
    div.appendChild(p);
};

