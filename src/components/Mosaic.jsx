import React from 'react'
import '../styles/mosaic-styles.css'

export default function Mosaic() {
  return (
    <section className="mosaic">
        <div className="mosaic-brand">
          <h2>Transform your<br/>brand</h2>
          <p>
            We are a full-service creative agency specializing in helping brands grow fast.
            Engage your clients through compeling visuals that do most of the marketing for you.
          </p>
          <h4>
            Learn more
          </h4>
        </div>
        <div className="mosaic-transform" />
        <div className="mosaic-stand-out" />
        <div className="mosaic-stand">
          <h2>Stand out to the right<br/>audience</h2>
          <p>
            Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.
          </p>
          <h4>
            Learn more
          </h4>
        </div>
        <div className="mosaic-graphic-design">
          <div className="mosaic-graphic-design-content">
            <h4>Graphic Design</h4>
            <span>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential client's attention.</span>
          </div>
        </div>
        <div className="mosaic-photography">
          <div className="mosaic-photography-content">
            <h4>Photography</h4>
            <span>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</span>
          </div>
        </div>
    </section>
  )
}
