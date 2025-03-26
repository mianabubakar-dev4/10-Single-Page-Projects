const images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"]; // Add your image paths
let currentIndex = 0;

document.getElementById("nextBtn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("sliderImage").src = images[currentIndex];
});

document.getElementById("prevBtn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById("sliderImage").src = images[currentIndex];
});
