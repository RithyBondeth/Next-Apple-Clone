"use client";

import { lineup } from "@/utils/constants/iphone";
import { RailControls } from "./RailControls";
import { SectionHeading } from "./SectionHeading";

export function LineupSection() {
  return (
    <section className="iphone-section iphone-lineup-section" id="lineup">
      <SectionHeading title="Explore the lineup." link="Compare all models" />
      <div className="iphone-rail iphone-lineup-rail" id="lineup-rail">
        {lineup.map((phone, index) => (
          <article
            className="iphone-lineup-card iphone-reveal"
            style={{ transitionDelay: `${Math.min(index, 3) * 70}ms` }}
            key={phone.name}
          >
            <div className="iphone-lineup-image">
              <img src={phone.image} alt={phone.name} />
            </div>
            <div className="iphone-swatches" aria-label="Available colors">
              {phone.colors.map((color) => (
                <span
                  style={{ backgroundColor: color }}
                  key={color}
                  aria-hidden="true"
                />
              ))}
            </div>
            {phone.new && <p className="iphone-new">New</p>}
            <h3>{phone.name}</h3>
            <p className="iphone-lineup-tagline">{phone.tagline}</p>
            <p className="iphone-lineup-price">{phone.price}</p>
            <div className="iphone-lineup-actions">
              <a className="button-primary" href="#why-buy">
                Learn more
              </a>
              <a href="#why-buy">Buy <span aria-hidden="true">›</span></a>
            </div>
          </article>
        ))}
      </div>
      <RailControls target="lineup-rail" label="iPhone lineup" />
    </section>
  );
}
