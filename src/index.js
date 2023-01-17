import homeTab from './homeTab.js';
import contactTab from "./contactTab.js";
import menuTab from './menuTab.js';

const content = document.getElementById('content');

const header = document.createElement('header');
const nav = document.createElement('nav');
const navItems = ['Home','Contact','Menu'];
const tabFunctions = [homeTab,contactTab,menuTab]
for (let i = 0; i < navItems.length; i++) {
    const item = navItems[i];
    const li = document.createElement('li');
    li.textContent = item;
    li.addEventListener('click', () => {
        const pageContent = document.getElementById('content');
        while(pageContent.firstChild){
            pageContent.removeChild(pageContent.firstChild);
        }
        tabFunctions[i]();
    })
    nav.appendChild(li);
}
header.appendChild(nav);
content.before(header);


