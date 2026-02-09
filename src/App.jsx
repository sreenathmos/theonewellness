import React from "react";

export default function OneWellnessLanding() {
  return (
    <div style={styles.page}>
      <div style={styles.overlay}>
        <div style={styles.container}>

          <h1 style={styles.logo}>THE ONE WELLNESS</h1>
          <p style={styles.tagline}>FIND YOUR CALM EVERYDAY</p>

          <p style={styles.intro}>
            At ONE WELLNESS, care doesn’t begin with illness — it begins with awareness.
            Our space is designed to help you pause before burnout, reset before exhaustion,
            and reconnect with your natural rhythm.
          </p>

          <div style={styles.status}>
            <div style={styles.statusText}>
              <strong>We’re Live Offline</strong><br />
              Our wellness center is now open.<br /><br />
              <strong>Website Under Development</strong><br />
              We’ll be online soon.
            </div>
            <div style={styles.statusActions}>
              <a
                href="https://wa.me/917559004411"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.statusButton}
              >
                Chat on WhatsApp
              </a>
              <a href="tel:+917559004411" style={styles.statusButtonSecondary}>
                Call Us
              </a>
            </div>
          </div>

          <div style={styles.grid}>
            <div style={styles.card}>
              <h3>Preventive Wellness</h3>
              <p>Understanding your body’s rhythm and easing stress before it takes root.</p>
            </div>
            <div style={styles.card}>
              <h3>Lifestyle Wellbeing</h3>
              <p>Mindful movement, nourishing habits, and gentle self-connection.</p>
            </div>
            <div style={styles.card}>
              <h3>Restorative Therapy</h3>
              <p>Slow, sensory rituals that soothe tension and deeply renew the body.</p>
            </div>
            <div style={styles.card}>
              <h3>Functional Therapy</h3>
              <p>Optimizing movement, recovery, and long-term vitality.</p>
            </div>
          </div>

          <div style={styles.contact}>
            <p>
              <strong>Address</strong><br />
              ONE WELLNESS, Sarovaram Bio Park Rd,<br />
              Near Galaxy Eleve Maison,<br />
              Eranhipaalam, Calicut
            </p>

            <p>
              <strong>WhatsApp</strong><br />
              +91 75 59 00 44 11
            </p>

            <a
              href="https://wa.me/917559004411"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.button}
            >
              Chat on WhatsApp
            </a>

            <div style={styles.linksRow}>
              <a
                href="https://www.instagram.com/the_one_wellness/"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.link}
              >
                Instagram
              </a>
              <a
                href="https://maps.app.goo.gl/rLM1dthFbLfePceF7"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.link}
              >
                Google Maps
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#0f3b2e",
    backgroundImage: "url('/LOG08752.JPG')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    fontFamily: "Poppins, sans-serif",
  },
  overlay: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    padding: "50px 20px",
    color: "#f4f1e8",
    backgroundColor: "rgba(15, 59, 46, 0.65)",
  },
  container: {
    maxWidth: 960,
    width: "100%",
  },
  logo: {
    fontSize: 42,
    letterSpacing: 1,
    marginBottom: 6,
  },
  tagline: {
    marginBottom: 30,
    opacity: 0.9,
  },
  intro: {
    maxWidth: 680,
    lineHeight: 1.7,
    marginBottom: 30,
  },
  status: {
    backgroundColor: "rgba(255,255,255,0.06)",
    padding: 22,
    borderRadius: 14,
    marginBottom: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
    flexWrap: "wrap",
  },
  statusText: {
    minWidth: 220,
    flex: "1 1 320px",
  },
  statusActions: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    alignItems: "flex-end",
  },
  statusButton: {
    display: "inline-block",
    padding: "12px 26px",
    backgroundColor: "#f4f1e8",
    color: "#0f3b2e",
    textDecoration: "none",
    borderRadius: 30,
    fontWeight: 500,
    whiteSpace: "nowrap",
  },
  statusButtonSecondary: {
    display: "inline-block",
    padding: "10px 24px",
    backgroundColor: "transparent",
    color: "#f4f1e8",
    textDecoration: "none",
    borderRadius: 30,
    fontWeight: 500,
    whiteSpace: "nowrap",
    border: "1px solid rgba(244,241,232,0.65)",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 20,
    marginBottom: 40,
  },
  card: {
    backgroundColor: "rgba(255,255,255,0.05)",
    padding: 18,
    borderRadius: 12,
  },
  contact: {
    borderTop: "1px solid rgba(255,255,255,0.25)",
    paddingTop: 30,
  },
  linksRow: {
    marginTop: 18,
    display: "flex",
    gap: 16,
    flexWrap: "wrap",
  },
  link: {
    color: "#f4f1e8",
    textDecoration: "underline",
    fontWeight: 500,
  },
  button: {
    display: "inline-block",
    marginTop: 20,
    padding: "12px 26px",
    backgroundColor: "#f4f1e8",
    color: "#0f3b2e",
    textDecoration: "none",
    borderRadius: 30,
    fontWeight: 500,
  },
};




