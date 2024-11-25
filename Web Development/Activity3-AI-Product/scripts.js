let currentIndex = 1;
const items = document.querySelectorAll('.carousel-item');
console.log(items.length)
const totalItems = items.length;

function updateCarousel() {
    items.forEach((item, index) => {
        console.log(item)
        console.log(index )
        console.log(currentIndex)
        
        item.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
    });
}

document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? totalItems - 1 : currentIndex - 1;
    console.log(currentIndex , 'prev');
    updateCarousel();
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex === totalItems - 1) ? 0 : currentIndex + 1;
    updateCarousel();
});


document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message!');
});

const stats = [
    'AI adoption grew 60% in 2023.',
    'Over 80% of companies use AI for decision-making.',
    'AI market size is expected to reach $1.5 trillion by 2030.',
];
let statIndex = 0;

function updateStats() {
    document.getElementById('aiStats').innerText = stats[statIndex];
    statIndex = (statIndex + 1) % stats.length;
}

setInterval(updateStats, 3000);
updateStats();
updateCarousel();
