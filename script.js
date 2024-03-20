function revealToSpan(){
    document.querySelectorAll(".reveal")
    .forEach(element => {
        // create two spans 
        var parent = document.createElement("span")
        var child = document.createElement("span")

        // give parent and child their classes
        parent.classList.add("parent");
        child.classList.add("child");

        // giving element content to child 
        // hey... i am himanshu is now in child 
        child.innerHTML = element.innerHTML;

        // putting child inside parent
        // e.g 
        // <span class="parent">
            /* <span class="child">Design portfolio</span> */
        // </span>
        parent.appendChild(child);

        // now doing inner html of h1 that is element blank
        element.innerHTML = "";

        // here putting parent span into element thsi is h1
        element.appendChild(parent);
    });
}

revealToSpan();

var tl = gsap.timeline();


tl.from(".child span", {
    x: 100,
    // delay: 1,
    duration: 2,
    stagger: 0.1,
    ease: Power3.easeInOut
})

.to(".parent .child", {
    y: "-100%",
    duration: 1,
    ease: Circ.easeInOut
})


.to("#loader", {
    height: 0,
    duration: 0.5,
    ease: Circ.easeInOut
})

.to("#green", {
    top:0,
    height: "100%",
    duration: 0.5,
    delay:-0.5,
    ease: Circ.easeInOut
})


.to("#green", {
    height: 0,
    duration: 0.5,
    delay:-0.25,
    ease: Circ.easeInOut
})

tl.from(" .nav .port",{
    y : -50,
    opacity: 0,
    duration: 0.2,
    delay: 0.5
})

tl.from(" .nav li",{
    y : -50,
    opacity: 0,
    duration: 0.2,
    delay: 0.5,
    stagger: 0.05
})

tl.from(".dev h1",{
    y : -50,
    opacity:0,
    duration:0.5,
    // stagger:0.2
})

tl.from(".dev p",{
    y : 100,
    opacity:0,
    duration:0.5,
    // stagger:0.2
})

tl.from(".devinfo img",{
    y : 50,
    opacity:0,
    // rotate : 90,
    duration:1.5,
    // stagger:0.2
})

tl.from(".explore button",{
    x : -50,
    opacity:0,
    rotate : 90,
    duration:1,
    // stagger:0.2
})




