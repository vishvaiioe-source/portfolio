// Animate skill bars when they appear in viewport
const skillBars = document.querySelectorAll('.skill-bar');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.width = entry.target.style.getPropertyValue('--width');
        }
    });
}, {threshold:0.5});

skillBars.forEach(bar => observer.observe(bar));