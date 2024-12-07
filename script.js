document.addEventListener("DOMContentLoaded", () => {
    const gardenBuilder = document.getElementById("garden-builder");

    const plantImages = [
        "Images/SunflowerSketch.png",
        "Images/BushSketch.png",
        "Images/LilacSketch.png",
    ];

    gardenBuilder.addEventListener("click", (e) => {
        if (e.target.closest("header")) return;

        const x = e.clientX;
        const y = e.clientY;

        const plant = document.createElement("img");
        plant.src = plantImages[Math.floor(Math.random() * plantImages.length)];
        plant.classList.add("plant");
        plant.style.left = `${x}px`;
        plant.style.top = `${y}px`;

        gardenBuilder.appendChild(plant);

        plant.addEventListener("click", (event) => {
            event.stopPropagation();
            plant.remove();
        });
    });
});
