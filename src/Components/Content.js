import React from "react";
import "./Content.css"
import { gsap } from "gsap"
import { useRef } from "react";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaTwitter, FaGithub } from "react-icons/fa"

function Content() {
    const ref = useRef()
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        const element = ref.current
        gsap.fromTo(
            element.querySelector(".div1"),
            {
                x: 1000
            },
            {
                x: 0,
                scrollTrigger: {
                    trigger: element.querySelector(".div1"),
                    pin: element.querySelector(".div1"),
                    start: "top top",
                    end: "bottom center",
                    scrub: true
                }
            }
        )
    }, [])

    useEffect(() => {
        const element = ref.current
        gsap.fromTo(
            element.querySelector(".div2"),
            {
                x: -1000,
            },
            {
                x: 0,
                scrollTrigger: {
                    trigger: element.querySelector(".div2"),
                    pin: element.querySelector(".div2"),
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            }
        )
    }, [])

    useEffect(() => {
        const element = ref.current
        gsap.fromTo(
            element.querySelector(".div3"),
            {
                x: 1000,
            },
            {
                x: 0,
                scrollTrigger: {
                    trigger: element.querySelector(".div3"),
                    pin: element.querySelector(".div3"),
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            }
        )
    }, [])

    useEffect(() => {
        const element = ref.current
        let sections = gsap.utils.toArray(".panel")
        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: element.querySelector(".projmain"),
                pin: true,
                //   pinSpacing:false,
                scrub: 1,
                snap: 1 / (sections.length - 1),
                // base vertical scrolling on how wide the container is so it feels more natural.
                end: () => "+=" + element.querySelector(".projmain").offsetWidth
            }
        });
    }, [])

    useEffect(() => {
        const element = ref.current
        gsap.fromTo(
            element.querySelector(".connect"),
            {
                x: -1000,
            },
            {
                x: 0,
                scrollTrigger: {
                    trigger: element.querySelector(".connect"),
                    pin: element.querySelector(".connect"),
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            }
        )
    }, [])

    const scrollFunc = (e) => {
        if(e.target.innerHTML==="Contact"){
            window.scrollTo({
                bottom:0, top:document.body.scrollHeight, behavior: "smooth"
            });
        }else{
        ref.current.querySelector(".projmain").scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <>
            <div ref={ref}>
                <div className="header">
                    <div style={{"cursor":"pointer"}} onClick={(e)=>scrollFunc(e)}>Project</div>
                    <div style={{"cursor":"pointer"}} onClick={(e)=>scrollFunc(e)}>Contact</div>
                </div>

                <div className="div1">Hello, I'm Arman</div>
                <div className="div2">A Full Stack Developer</div>
                <div className="div3">
                    I used MERN stack technology to create my projects. I am more facinated
                    by CSS, I use vanilla CSS more than any frameworks, because I love to
                    create my own CSS. I use React for all of my frontend part.
                </div>

                <div className='projmain'>
                    <div className='panel'>Project 1</div>
                    <div className='panel'>Project 2</div>
                    <div className='panel'>Project 3</div>
                    <div className='panel'>Project 4</div>
                </div>

                <div className="connect">
                    <div className="connect-head" style={{ "fontSize": "3rem" }}>Connect with me</div>
                    <div style={{"display":"flex","justifyContent":"center","gap":"20px"}}>
                        <a style={{ "color": "white" }} href="https://twitter.com/Armankazi111" target={"_blank"} rel="noreferrer noopener"><FaTwitter style={{ "fontSize": "3rem" }} /></a>
                        <a style={{ "color": "white" }} href="https://github.com/Amyx000" target={"_blank"} rel="noreferrer noopener"><FaGithub style={{ "fontSize": "3rem" }} /></a>
                    </div>
                    <div className="connect-mail">
                        <div><span>MAILBOX</span></div>
                        <form>
                            <input type={"email"} placeholder="Email" />
                            <input type={"text"} placeholder="Message" style={{ "height": "100px" }} />
                            <input type={"submit"} value="Send" />
                        </form>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Content;