import React from "react";
import Navbar from "./Navbar";
import CountSection from "./countSection";
import Footer from "./Footer";

function About() {
    const videoId = "OiU4gXpFiJY";
    const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&controls=0&mute=1`;
    return (
        <div>
            <Navbar />
            <CountSection />
            <div className="video-background">
                <iframe
                    src={videoUrl}
                    title="About video"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                />
            </div>
            <div className="fancy-words-container">
                <h2 className="fancy-words-header">
                    Experience personalized learning at its finest with our AI-powered
                    teacher
                </h2>
                <p className="fancy-words-text">
                    Harness the power of AI to solve your homework problems with ease. Say
                    goodbye to endless hours of studying and struggling with homework –
                    our AI teacher is here to help. Our revolutionary AI technology
                    provides a unique and effective approach to learning. Don't just
                    learn – engage with our intelligent, cutting-edge AI teacher and
                    experience the difference. Boost your academic success with the most
                    advanced homework-solving technology on the market. Whether you're a
                    student struggling with homework or an educator looking to
                    incorporate AI technology, our AI teacher has everything you need.
                    Our AI teacher is your one-stop solution for conquering even the most
                    challenging academic tasks. From physics to history and everything in
                    between, our AI teacher has you covered. Join the future of education
                    and experience the power of AI with our cutting-edge teacher
                    application.
                </p>
            </div>

            <style jsx>{`
        .fancy-words-container {
          color: #fff;
          font-family: "Arial", sans-serif;
          text-align: center;
          padding: 100px;
          margin-top: 40px;
        }
        .fancy-words-header {
          font-size: 36px;
          font-weight: bold;
          text-transform: uppercase;
          margin-bottom: 30px;
          font-family: "Roboto Slab", serif;
        }
        .fancy-words-text {
          font-size: 24px;
          font-style: italic;
          line-height: 1.5;
          margin-bottom: 0;
        }
        .video-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }
        .video-background iframe {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
      `}</style>
            <Footer />
        </div>
    );
}

export default About;
