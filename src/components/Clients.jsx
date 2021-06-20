import React from 'react'
import '../styles/clients-styles.css'
import emily from '../assets/image-emily.jpg'
import thomas from '../assets/image-thomas.jpg'
import jennie from '../assets/image-jennie.jpg'

export default function Clients() {
  return (
    <section className="clients">
      <h1>Client testimonials</h1>
      <div className="clients-content">
        <div className="clients-opinions">
          <div>
            <img src={emily} />
            <cite className="clients-opinions-description">
              We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
            </cite>
            <p className="clients-opinions-name-position">
              <span>
                Emily R.
              </span>
              <sub>
                Marketing Director
              </sub>
            </p>
          </div>
          <div>
            <img src={thomas} />
            <cite className="clients-opinions-description">
              Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.
            </cite>
            <p className="clients-opinions-name-position">
              <span>
                Thomas S.
              </span>
              <sub>
                Chief Operating Officer
              </sub>
            </p>
          </div>
          <div>
            <img src={jennie} />
            <cite className="clients-opinions-description">
              Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
            </cite>
            <p className="clients-opinions-name-position">
              <span>
                Jennie F.
              </span>
              <sub>
                Business Owner
              </sub>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
