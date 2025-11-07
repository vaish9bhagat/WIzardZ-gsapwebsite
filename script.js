function page1Animation() {
    const tl = gsap.timeline();

    tl.from("nav h1 , h4 , nav button", {
        y: -40,
        opacity: 0,
        duration: 1,
        stagger: .15


    })
    tl.from("nav h1 i", {
        rotate: 360,
        duration: 1

    }, "-=1")
    tl.from(".page1-center-right h1,.page1-center-right p , .page1-center-right button", {
        x: -100,
        opacity: 0,
        duration: 1,
        stagger: .20

    })
    tl.from(".page1-center-left img", {
        x: 100,
        opacity: 0,
        duration: .4
    }, "-=1")
    tl.from(".page1-bottam img", {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: .15
    }, "-=1.5")
}

function page2Animation() {
    const tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page2",
            scroller: "body",
            markers: false,
            start: "top 30%",
            end: "top -30%",
            scrub: 2
        }
    });

    tl2.from(".page2-top h1,.page2-top p", {
        x: -10,
        opacity: 0,
        duration: 1
    })
    tl2.from(".left1", {
        x: -100,
        opacity: 0,
        duration: 2
    }, "anim")
    tl2.from(".right1", {
        x: 100,
        opacity: 0,
        duration: 2
    }, "anim2")
    tl2.from(".left2", {
        x: -100,
        opacity: 0,
        duration: 2
    }, "anim2")
    tl2.from(".right2", {
        x: 100,
        opacity: 0,
        duration: 2
    }, "anim")

    tl2.from(".page2-secondbottam-left div h1 , .page2-secondbottam-left button", {
        x: -30,
        opacity: 0,
        duration: 1,

    })
}

function page3Animation() {
    const tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".bottam",
            scroller: "body",
            markers: false,
            start: "top 70%",
            end: "top 20%",
            scrub: 2
        }
    })
    tl3.from(".page3-bottam h1 ,.page3-bottam p",{
        x:-40,
        opacity:0,
        duration:.6

    })
    tl3.from(".bottamdiv", {
        y: 30,
        opacity: 0,
        duration: .4
    })
}

page1Animation()
page2Animation()
page3Animation()