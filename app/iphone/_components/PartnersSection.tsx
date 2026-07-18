"use client";

import { SectionHeading } from "./SectionHeading";

/**
 * Partner ecosystem section showing iPhone compatibility.
 * Tabbed interface for Mac, Apple Watch, and AirPods integration.
 */

/** Partner data with descriptions and images for each ecosystem pairing */
const partnerData = {
  mac: {
    label: "iPhone and Mac",
    copy: "With iPhone Mirroring, you can view your iPhone screen on your Mac and control it without picking up your phone. Continuity features also let you answer calls or messages right from your Mac. You can even copy images, video, or text from your iPhone and paste it all into a different app on your Mac. And with iCloud, you can access your files from either device.",
    image: "/images/iphone/ecosystem-mac.jpg",
  },
  watch: {
    label: "iPhone and Apple Watch",
    copy: "Pair iPhone with Apple Watch and get notifications, track activity, find your devices, and stay connected right from your wrist.",
    image: "/images/iphone/ecosystem-watch.jpg",
  },
  airpods: {
    label: "iPhone and AirPods",
    copy: "Set up AirPods with a tap. Automatic switching makes moving between your Apple devices feel effortless, while Personalized Spatial Audio surrounds you in sound.",
    image: "/images/iphone/ecosystem-airpods.jpg",
  },
} as const;

export function PartnersSection({
  activePartner,
  onPartnerChange,
}: {
  activePartner: string;
  onPartnerChange: (key: string) => void;
}) {
  const partnerContent = partnerData[activePartner as "mac" | "watch" | "airpods"];

  return (
    <section className="iphone-section iphone-partners-section">
      <SectionHeading title="Significant others." />
      <div className="iphone-partners iphone-reveal">
        <div className="iphone-partner-tabs">
          {([
            ["mac", "iPhone and Mac"],
            ["watch", "iPhone and Apple Watch"],
            ["airpods", "iPhone and AirPods"],
          ] as const).map(([key, label]) => (
            <div className="iphone-partner-group" key={key}>
              <button
                type="button"
                className={activePartner === key ? "is-active" : ""}
                aria-expanded={activePartner === key}
                onClick={() => onPartnerChange(key)}
              >
                <span>{label}</span>
                <span aria-hidden="true">{activePartner === key ? "⌃" : "⌄"}</span>
              </button>
              {activePartner === key && (
                <p className="iphone-partner-copy">{partnerContent.copy}</p>
              )}
            </div>
          ))}
        </div>
        <div className="iphone-partner-media" key={activePartner}>
          <img src={partnerContent.image} alt={partnerContent.label} />
        </div>
      </div>
    </section>
  );
}
