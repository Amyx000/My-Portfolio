import React, { useState } from "react";
import "./Content.css"
import { gsap } from "gsap"
import { useRef } from "react";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaTwitter, FaGithub } from "react-icons/fa"
import { projects } from "../projectdata"

function Content() {
    const ref = useRef()
    gsap.registerPlugin(ScrollTrigger)
    const [card, Setcard] = useState({"ind":"","class":"panel-hover"})
    const [formdata, Setformdata] = useState({
        "email": "",
        "msg": ""
    })

    useEffect(() => {
        const element = ref.current
        gsap.fromTo(
            element.querySelector(".div1"),
            {
                
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
               
            },
            {
                x: 0,
                scale:1.5,
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
        if (e.target.innerHTML === "Contact") {
            window.scrollTo({
                bottom: 0, top: document.body.scrollHeight, behavior: "smooth"
            });
        } else {
            ref.current.querySelector(".projmain").scrollIntoView({ behavior: "smooth" })
        }
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
       await window.Email.send({
            SecureToken: process.env.REACT_APP_SEC_TOKEN,
            To: process.env.REACT_APP_EMAIL,
            From: formdata.email,
            Subject: "MSG from Portfolio",
            Body: formdata.msg
        }).then(
            message => alert(message)
        );
        Setformdata({
            "email": "",
            "msg": ""
        })
    }
    const handleChange = (e) => {
        const { name, value } = e.target
        Setformdata({ ...formdata, [name]: value })
    }

    return (
        <>
            <div ref={ref}>
                <div className="header">
                    <div style={{ "cursor": "pointer" }} onClick={(e) => scrollFunc(e)}>Project</div>
                    <div style={{ "cursor": "pointer" }} onClick={(e) => scrollFunc(e)}>Contact</div>
                </div>

                <div className="div1">Hello, I'm Arman</div>
                <div className="div2">A Full Stack Developer</div>
                <div className="div3">
                    I use MERN stack technology to create my projects. I am facinated
                    by vanilla CSS more than any frameworks, because I love to
                    create my own styles. I use React.js for all of my frontend part.
                </div>

                <div className='projmain'>
                    {projects.map((item, index) => {
                        return (
                            <div className='panel' key={index}>
                                <div onMouseEnter={() => Setcard({"ind":index,"class":"panel-hover-open"})} onMouseLeave={() => Setcard({"ind":"","class":"panel-hover"})} onTouchStart={() => Setcard({"ind":index,"class":"panel-hover-open"})} onTouchEnd={() => Setcard({"ind":"","class":"panel-hover"})}>
                                    <img src={item.img} alt=""></img>
                                    <div className="panel-head">{item.name}</div>
                                    <div className={card.ind!==index?"panel-hover":card.class}>
                                        <div className="panel-head">{item.name}</div>
                                        <div>{item.des}</div>
                                        <a className="panel-link" href={item.url} target={"_blank"} rel={"noreferrer noopener"}>Checkout</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="connect">
                    <div className="connect-head" style={{ "fontSize": "3rem" }}>Connect with me</div>
                    <div style={{ "display": "flex", "justifyContent": "center", "gap": "20px" }}>
                        <a style={{ "color": "white" }} href="https://twitter.com/Armankazi111" target={"_blank"} rel="noreferrer noopener"><FaTwitter style={{ "fontSize": "3rem" }} /></a>
                        <a style={{ "color": "white" }} href="https://github.com/Amyx000" target={"_blank"} rel="noreferrer noopener"><FaGithub style={{ "fontSize": "3rem" }} /></a>
                    </div>
                    <div className="connect-mail">
                        <div><span>MAILBOX</span></div>
                        <form onSubmit={handleSubmit}>
                            <input value={formdata.email} onChange={handleChange} name="email" type={"email"} placeholder="Email" required />
                            <input value={formdata.msg} onChange={handleChange} name="msg" type={"text"} placeholder="Message" required style={{ "height": "100px" }} />
                            <input type={"submit"} value="Send" />
                        </form>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Content;
