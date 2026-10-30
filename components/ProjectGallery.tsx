"use client";

import { useEffect, useRef, useState, type KeyboardEvent, type TouchEvent } from "react";

type ProjectGalleryProps = {
    images: string[];
    title: string;
};

export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
    const [index, setIndex] = useState(0);
    const touchStartX = useRef<number | null>(null);
    const total = images.length;

    const thumbsRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const list = thumbsRef.current;
        const active = list?.querySelector<HTMLElement>("button.active");
        if (!list || !active) return;

        list.scrollTo({
            left: active.offsetLeft - list.clientWidth / 2 + active.clientWidth / 2,
            behavior: "smooth",
        });
    }, [index]);

    const go = (n: number) => setIndex((n + total) % total);

    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowLeft") go(index - 1);
        if (e.key === "ArrowRight") go(index + 1);
    };

    const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
        if (touchStartX.current === null) return;
        const diff = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(diff) > 50) go(diff > 0 ? index - 1 : index + 1);
        touchStartX.current = null;
    };

    return (
        <div
            className="gallery"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            aria-roledescription="carousel"
            aria-label={`Imágenes de ${title}`}
        >
            <div
                className="gallery-viewport"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <div
                    className="gallery-track"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {images.map((src, i) => (
                        <div className="gallery-slide" key={src}>
                            <img
                                src={src}
                                alt={`${title} - imagen ${i + 1} de ${total}`}
                                loading={i === 0 ? "eager" : "lazy"}
                            />
                        </div>
                    ))}
                </div>

                {total > 1 && (
                    <>
                        <button
                            className="gallery-btn prev"
                            onClick={() => go(index - 1)}
                            aria-label="Imagen anterior"
                        >
                            <ion-icon name="chevron-back-outline"></ion-icon>
                        </button>
                        <button
                            className="gallery-btn next"
                            onClick={() => go(index + 1)}
                            aria-label="Imagen siguiente"
                        >
                            <ion-icon name="chevron-forward-outline"></ion-icon>
                        </button>

                        <span className="gallery-counter">
                            {index + 1} / {total}
                        </span>
                    </>
                )}
            </div>

            {total > 1 && (
                <ul className="gallery-thumbs" ref={thumbsRef} >
                    {images.map((src, i) => (
                        <li key={src}>
                            <button
                                className={i === index ? "active" : ""}
                                onClick={() => go(i)}
                                aria-label={`Ver imagen ${i + 1}`}
                            >
                                <img src={src} alt="" loading="lazy" />
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}