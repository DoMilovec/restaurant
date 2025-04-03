// homepage.js
export function Homepage() {
    const homepage = document.createElement("div");
    homepage.innerHTML = `
        <h1 class='welcome-header'> Welcome to Our Restaurant </h1>
        <p class='welcome-text'>
Experience the perfect blend of flavor and ambiance at Restaurant. Our chefs craft mouthwatering dishes using the freshest ingredients, bringing you an unforgettable dining experience. Whether you're craving a cozy dinner, a lively brunch, or handcrafted cocktails, we've got you covered.</p>
    `;

    return homepage;
}