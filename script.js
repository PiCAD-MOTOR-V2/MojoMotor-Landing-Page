// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetElement = document.querySelector(this.getAttribute('href'));
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });

        // Update active link
        updateActiveLink(this);
    });
});

function updateActiveLink(activeLink) {
    document.querySelectorAll('.navbar a').forEach(link => {
        link.classList.remove('active');
    });
    activeLink.classList.add('active');
}

let currentSectionId = '';

document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const footer = document.querySelector('footer');
    

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight) {
            currentSectionId = section.getAttribute('id');
        }
    });

    // Check if the footer is in view
    const footerTop = footer.getBoundingClientRect().top + window.scrollY;
    if (window.scrollY >= footerTop - 100 && window.scrollY < footerTop + footer.offsetHeight) {
        currentSectionId = 'footer'; // Use a specific ID or handle as needed
    }

    // Update active link based on the section or footer
    document.querySelectorAll('.navbar a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSectionId)) {
            link.classList.add('active');
        }
    });
});

    document.querySelectorAll('.navbar a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSectionId)) {
            link.classList.add('active');
        }
    });
    


// Initialize active link based on current scroll position
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('section').forEach(section => {
        if (window.scrollY >= section.offsetTop - 100 && window.scrollY < section.offsetTop + section.offsetHeight) {
            updateActiveLink(document.querySelector(`a[href="#${section.getAttribute('id')}"]`));
        }
    });
});



let autoSlide;
const radios = document.querySelectorAll('input[type=radio]');
let currentIndex = 0;


// Expand card to full screen on click
// const cacards = document.querySelectorAll('.cacard');

// const cacontainer = document.getElementById('cacontainer');

// console.log(cacontainer);
// cacards.forEach((cacard, index) => {
//   cacard.addEventListener('click', () => {
//     // Add the active class to expand the clicked card
//     cacard.classList.add('active');

    
//     // Create the close button
//     const closeButton = document.createElement('button');
//     closeButton.textContent = 'X';
//     closeButton.classList.add('close-btn');
    
//     // Append the close button to the card
//     cacard.appendChild(closeButton);
    
//     // Stop auto-transition when a card is clicked
//     clearInterval(autoSlide);
    
//     // Close the card on button click
//     closeButton.addEventListener('click', () => {
//         console.log(cacard.className);
//       cacard.classList.remove('active');
//       console.log(cacard.classList);
//       closeButton.remove();
//       startAutoSlide();
//     });
//   });
// });

// Restart auto slide after closing the card
function startAutoSlide() {
  autoSlide = setInterval(() => {
    radios[currentIndex].checked = true;
    currentIndex = (currentIndex + 1) % radios.length;
  }, 2500); // 3 seconds
}

startAutoSlide();
