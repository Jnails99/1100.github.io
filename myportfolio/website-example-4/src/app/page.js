"use client";

import ParallaxImage from "./ParallaxImage";
import { ReactLenis } from "@studio-freight/react-lenis";

export default function Home() {
  return (
    <ReactLenis root>
      <div className="app">
        <section className="hero">
          <div className="img">
            <ParallaxImage src="/portraits/portrait1.jpg" alt="" />
          </div>

          <div className="nav">
            <p>Tour</p>
            <p>Updates</p>
            <p>Contact</p>
            <p>Merch</p>
          </div>
        </section>

        <section className="projects">
          <div className="img">
            <ParallaxImage src="/portraits/portrait10.jpg" alt="" />
          </div>

          <div className="projects-brief">
            <p>
              If you are a music artist or even a producer I can create Website to show your work. But 
              this can be a website for a portfolio or any other businesses.
            </p>
          </div>

          <div className="col projects-cover">
            <div className="img">
              <ParallaxImage src="/portraits/portrait4.jpg" alt="" />
            </div>
          </div>

          <div className="col projects-list">
            <div className="project">
              <h1>Luv Me</h1>
              <p>Apple Music / Spotify / YouTube</p>
            </div>
            <div className="project">
              <h1>So Fine</h1>
              <p>Apple Music / Spotify / YouTube</p>
            </div>
            <div className="project">
              <h1>Fading Memories</h1>
              <p>Apple Music / Spotify / YouTube</p>
            </div>
            <div className="project">
              <h1>Good Bye</h1>
              <p>Apple Music / Spotify / YouTube</p>
            </div>
          </div>
        </section>

        <section className="about">
          <div className="col intro">
            <p>Introduction</p>
            <p>
              This will be the 'about' section for you brand.
            </p>
          </div>
          <div className="col portrait">
            <div className="portrait-container">
              <div className="img">
                <ParallaxImage src="/portraits/portrait7.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="banner">
          <div className="img">
            <ParallaxImage src="/portraits/portrait9.jpg" alt="" />
          </div>

          <div className="banner-copy">
            <p>Be the</p>
            <h1>First to know</h1>
            <p>
              Want to hear the latest news on my upcoming music releases,
              touring, and merch?
            </p>
            <button>Join the newsletter</button>
          </div>
        </section>

        <section className="footer">
          <div className="col">
            <p>Instagram / Tiktok / Discord</p>

            <div className="footer-links">
              <p>Menu</p>
              <h1>Tour</h1>
              <h1>Updates</h1>
              <h1>Merch</h1>
              <h1>Contact</h1>
            </div>

            <p>&copy; Designed by @shedesignswebs</p>
          </div>
          <div className="col">
            <p>
              Join the newsletter <br />
              <button>Subscribe</button>
            </p>

            <div className="shop">
              <div className="img">
                <ParallaxImage src="/portraits/portrait8.jpg" alt="" />
              </div>
            </div>

            <p>Spotify / Apple Music / Youtube</p>
          </div>
        </section>
      </div>
    </ReactLenis>
  );
}
