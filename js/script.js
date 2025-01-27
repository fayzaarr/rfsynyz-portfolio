// Data for the charts
const chartsData = [
    {
        title: "UI/UX",
        data: [
            { label: "Figma", value: 89 },
            { label: "Adobe Illustrator", value: 45 },
            { label: "Canva", value: 90 },
            // { label: "Affinity Designer", value: 34 }
        ]
    },
    {
        title: "Frontend",
        data: [
            { label: "HTML", value: 88 },
            { label: "CSS", value: 83 },
            { label: "JavaScript", value: 65 },
            { label: "Git & Github", value: 56 },
            { label: "React", value: 45 },
            { label: "Vue", value: 54 },
            { label: "VS Code", value: 87 }
        ]
    },
    {
        title: "ML & DL",
        data: [
            { label: "Python", value: 78 },
            { label: "TensorFlow", value: 74 },
            { label: "PyTorch", value: 34 },
            { label: "Google Colab", value: 89 },
            { label: "Pycharm", value: 82 }
        ]
    }
];

// Target the container
const chartsContainer = document.querySelector('.charts-container');

// Render charts dynamically
chartsData.forEach(chart => {
    const chartDiv = document.createElement('div');
    chartDiv.classList.add('chart');

    const chartTitle = document.createElement('div');
    chartTitle.classList.add('chart-title');
    chartTitle.textContent = chart.title;
    chartDiv.appendChild(chartTitle);

    chart.data.forEach(item => {
        const barContainer = document.createElement('div');
        barContainer.classList.add('bar-container');

        const barLabel = document.createElement('div');
        barLabel.classList.add('bar-label');
        barLabel.textContent = item.label;

        const barWrapper = document.createElement('div');
        barWrapper.classList.add('bar-wrapper');

        const barFill = document.createElement('div');
        barFill.classList.add('bar-fill');
        barFill.style.setProperty('--fill-width', `${item.value}%`);
        barFill.setAttribute('data-value', item.value);

        barWrapper.appendChild(barFill);
        barContainer.appendChild(barLabel);
        barContainer.appendChild(barWrapper);
        chartDiv.appendChild(barContainer);
    });

    chartsContainer.appendChild(chartDiv);
});

// Intersection Observer for animating bars
document.addEventListener("DOMContentLoaded", () => {
    const bars = document.querySelectorAll(".bar-fill");

    const observerOptions = {
        root: null, // viewport
        threshold: 0.2, // Bar should be at least 20% visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const fillWidth = bar.getAttribute("data-value");

                // Reset the animation by removing and re-adding the class
                bar.style.animation = 'none';
                bar.offsetHeight; // Trigger reflow to reset animation
                bar.style.animation = 'fillBar 1.5s ease-out forwards'; // Reapply the animation

                // Set the fill width
                bar.style.setProperty("--fill-width", `${fillWidth}%`);
                
                // Uncomment if you want to stop observing the bar after it's animated
                // observer.unobserve(bar);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    bars.forEach(bar => {
        observer.observe(bar);
    });
});

// JavaScript: Toggle Hamburger Menu
const hamburgerMenu = document.getElementById("hamburgerMenu");
const navMenu = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav a"); // Ambil semua link di navbar

// Fungsi toggle untuk menu
hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active"); // Toggle animasi hamburger menu
    navMenu.classList.toggle("show"); // Toggle visibility navbar
});

// Fungsi untuk menutup menu ketika link diklik
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        hamburgerMenu.classList.remove("active"); // Hilangkan animasi hamburger
        navMenu.classList.remove("show"); // Tutup navbar
    });
});



// Fungsi untuk menyesuaikan tinggi .rounded dengan tinggi .kotak
function adjustRoundedHeight() {
    const rounded = document.querySelector('.rounded');
    const kotak = document.querySelector('.kotak');

    if (rounded && kotak) {
        rounded.style.height = `${kotak.offsetHeight + 50}px`; // Tinggi + margin tambahan
    }
}

// Panggil fungsi saat halaman dimuat dan saat ukuran layar berubah
window.addEventListener('load', adjustRoundedHeight);
window.addEventListener('resize', adjustRoundedHeight);

// Efek muncul border bawah saat scroll
const mainHeader = document.querySelector('.mainHeader');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        mainHeader.classList.add('scroll-border');  // Menambahkan border bawah saat scroll
    } else {
        mainHeader.classList.remove('scroll-border');  // Menghapus border bawah saat scroll kembali ke atas
    }
});

