"use client";

export function QuickLinks() {
  return (
    <section className="education-quick-links" id="quick-links">
      <h2>Quick Links</h2>
      <div>
        {[
          "Find a Store",
          "Order Status",
          "Shopping Help",
          "Returns",
          "Your Saves",
        ].map((link) => (
          <a href="#products" key={link}>
            {link}
          </a>
        ))}
      </div>
    </section>
  );
}
