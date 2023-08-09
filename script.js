// gsap.from("header",{
//     y:"-100",
//     // duation:2,
//     delay:2,
//     scale:.4,rotate:360,yoyo:true
// })
// // grap.from("  .navbar .nav-logo ",{
// //     y:-300,
// //     delay:2,
// //     // stagger:.5
// // })

// ANIMATION START FROM HERE
let tl = gsap.timeline();
tl.from(".navbar .nav-logo,.navbar .nav-add,.navbar .nav-search ,.navbar .nav-signin,.navbar .nav-return, .navbar .nav-cart", {
    y: -100,
    delay: 2,
    stagger: .5
})
tl.from(".pannel", {
    y: 100,
    opacity: 0, scale: .4
})
tl.from(".hero-section ", {
    scale: .2,
    opacity: 0,
    // scrollTrigger: {
    //     trigger: ".hero-section",
    //     scroller: "body",
    //     // markers: true,
    //     start: "top 30%",
    //     end: "top -40%",
    //     scrub: 2,
    //     // pin: true
    // }

}).from(".hero-msg  p", {
    opacity: 0,
    y: 200,
})
tl.from(".shop-section .box", {
    opacity: 0,
    x: -100,
    stagger: .7,
    rotate: 120,
    scale: .5,
    // scrollTrigger: {
    //     trigger: ".shop-section",
    //     scroller: "body",
    //     // markers: true,
    //     start: "top 30%",
    //     end: "top -300%",
    //     scrub: 2,
    //     pin: true
    // }

})
tl.from("footer .foot-panel1", {
    opacity: 0,
    y: -500,
    // scrollTrigger: {
    //     trigger: "hero-section",
    //     scroller: "body",
    //     markers: true,
    //     start: "bottom 20%",
    //     end: "top -200%",
    //     scrub: 2,
    //     // pin: true
    // }

}).from(".foot-panel2 p", {
    opacity: 0,
    y: -100
})
    .from(".foot-panel2 ul a", {
        opacity: 0,
        x: -100,
        stagger: .3
    })

tl.from(" .foot-panel3", {
    opacity: 0,
    y: -109,
    scale: 0
}).from(" .foot-panel4", {
    scale: 0,
    opacity: 0,
    transform: "translateY(100%)",
}).from(".foot-panel4 .pages a ", {
    opacity: 0,
    y: -100,
    fontSize:"20px",
    stagger: 1
})
// .from(".navbar .nav-add",{
//        y: -100,
// })
// .from(".navbar .nav-search",{
//        y: -100,
// })
// .from(".navbar .nav-signin",{
//        y: -100,
// })
// .from(".navbar .nav-return",{
//        y: -100,
// })
// .from(".navbar .nav-cart",{
//        y: -100,
// })