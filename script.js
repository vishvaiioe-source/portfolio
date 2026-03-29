// Animate skill bars when they appear in viewport
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

// GA event for Resume Download
const resumeLink = document.getElementById("resume-download");

if (resumeLink) {  // make sure the button exists
    resumeLink.addEventListener("click", () => {
        gtag('event', 'download', {
            'event_category': 'Resume',
            'event_label': 'Resume Downloaded',
            'value': 1
        });
        console.log("Resume download tracked in GA");
    });
}