"use client";
import { useEffect, useRef } from "react";
import lottie from "lottie-web";

export default function Preloader({ onComplete }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      path: "/lottie/preloader-logo.json",
    });

    anim.addEventListener("complete", () => {
      setTimeout(() => {
        onComplete();
      }, 500);
    });

    return () => anim.destroy();
  }, [onComplete]);

  return (
    <div className="preloader-wrapper">
      <div className="preloader-lottie" ref={containerRef}></div>
      <style jsx>{`
        .preloader-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: #ffffff;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }

        .preloader-lottie {
          width: 80vw;
          max-width: 400px;
          height: auto;
        }

        @media (max-width: 480px) {
          .preloader-lottie {
            width: 90vw;
            max-width: 300px;
            margin-bottom: 225px;
          }
        }

        @media (min-width: 768px) {
          .preloader-lottie {
            width: 60vw;
            max-width: 350px;
          }
        }

        @media (min-width: 1024px) {
          .preloader-lottie {
            width: 400px;
            max-width: 400px;
          }
        }
      `}</style>
    </div>
  );
}
