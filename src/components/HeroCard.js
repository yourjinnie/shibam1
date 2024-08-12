import React, { useEffect, useRef, useState } from 'react';

const HeroCard = ({ number, label, plus=false }) => {
    const [count, setCount] = useState(0);
    const heroCardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    let start = 1;
                    const end = number;

                    if (start === end) return;

                    let current = start;
                    const incrementTime = 50; // Time in ms

                    const timer = setInterval(() => {
                        setCount(current);
                        if (current === end) {
                            clearInterval(timer);
                        }
                        current += 1;
                    }, incrementTime);

                    return () => clearInterval(timer);
                }
            },
            { threshold: 0.1 }
        );

        if (heroCardRef.current) {
            observer.observe(heroCardRef.current);
        }

        return () => {
            if (heroCardRef.current) {
                observer.unobserve(heroCardRef.current);
            }
        };
    }, [number]);

    return (
        <div className="heroCard" ref={heroCardRef}>
            <div className="cardBigText heroCardText font-face-futur-md-bt">
                <div>
                    <span>{count}</span> {plus ? "+" : ""}
                </div>
            </div>
            <div className="heroCardText heroPara font-face-futur-LT" style={{ color: 'white' }}>{label}</div>
        </div>
    );
};

export default HeroCard;
