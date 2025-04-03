// main.js
import { Homepage } from "./homepage.js";
import { menu } from "./menu.js";
import { Contact } from "./contact.js"
import "./style.css";
const homeBtn = document.querySelector('#home-btn');
const menuBtn = document.querySelector('#menu-btn');
const contactBtn = document.querySelector('#contact-btn');
const content = document.querySelector('#content');

document.addEventListener("DOMContentLoaded", () => {
    content.appendChild(Homepage());
});

homeBtn.addEventListener('click', (e) => {
    content.textContent = '';
    content.appendChild(Homepage());
})

menuBtn.addEventListener('click', (e) => {
    content.textContent = '';
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu");

    menu.forEach(category => {
        const categoryElement = document.createElement("div");
        categoryElement.classList.add("category");

        const categoryTitle = document.createElement("h2");
        categoryTitle.textContent = category.category;
        categoryElement.appendChild(categoryTitle);

        const itemList = document.createElement("ul");
        
        category.items.forEach(item => {
            const itemElement = document.createElement("li");
            itemElement.innerHTML = `<strong>${item.name}</strong> - ${item.price} <br> <small>${item.description}</small>`;
            itemList.appendChild(itemElement);
        });

        categoryElement.appendChild(itemList);
        menuContainer.appendChild(categoryElement);
    });

    content.appendChild(menuContainer);
})

contactBtn.addEventListener('click', (e) => {
    content.textContent = '';
    content.appendChild(Contact());
})