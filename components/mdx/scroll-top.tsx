"use client"

import React , {useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollTop = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 150) {
                setShow(true);
            } else {
                setShow(false);
            }
        });
    }, []);
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        show && (
            <button 
                aria-label="Scroll to top"
                className="rounded-md border bg-background p-2 shadow-sm"
                onClick={scrollTop}
                style={{
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                    cursor: "pointer",
                    zIndex: 100,
                }}
            >
                <ArrowUp />
            </button>
        )
    );
};

export default ScrollTop;