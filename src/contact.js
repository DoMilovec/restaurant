// contact.js
import googleMapsImage from './img/googleMaps.png'; // Adjust the path based on your project structure

export function Contact() {
    const contact = document.createElement("div");
    contact.innerHTML = `
        <section id="contact">
    <h2>Contact Us</h2>
    <p><strong>📍 Address:</strong> 123 Foodie Lane, Flavor Town, FT 56789</p>
    <p><strong>📞 Phone:</strong> (123) 456-7890</p>
    <p><strong>📧 Email:</strong> contact@madeuprestaurant.com</p>
    
    <h3>Find Us Here:</h3>
    `;
    const img = document.createElement('img');
    img.src = googleMapsImage;
    img.classList.add('googlePhoto');
    contact.appendChild(img);

    return contact;
}