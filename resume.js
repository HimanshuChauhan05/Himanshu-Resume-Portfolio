// Get the top education item
const topEducation = document.getElementById('edu1');

// Using GSAP for animation of the top education item
gsap.to(topEducation, { opacity: 1, y: -50, duration: 1, ease: 'power2.out' });

// Using ScrollTrigger for animations of other education items
gsap.utils.toArray('.education:not(#edu1)').forEach(item => {
    ScrollTrigger.create({
        trigger: item,
        start: 'top 90%',
        end: '+=50',
        toggleActions: 'play none none none',
        // markers: true, // For debugging, you can remove this in the production code
        onEnter: () => {
            gsap.to(item, { opacity: 1, y: -50, duration: 1, ease: 'power2.out' });
        }
    });
});
