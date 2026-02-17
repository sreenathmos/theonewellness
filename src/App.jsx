import React from "react";

export default function App() {
  return (
    <div style={styles.page}>
      <style>{`
        /* DESKTOP GRID LOGIC (since we flattened the section) */
        @media (min-width: 769px) {
          header {
            display: none !important;
          }
          .logo-circle {
            display: flex !important;
          }
          .services-grid {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            grid-template-areas: 
              "left description"
              "left right";
            gap: 60px !important;
          }
          .left-services { grid-area: left; }
          .brand-description { grid-area: description; }
          .right-services { grid-area: right; }
        }

        @media (max-width: 768px) 
        {
          /* CENTER CONTACT ROWS ON MOBILE */
.footer-grid > div:first-child > div {
  justify-content: center !important;
  text-align: center !important;
}

.footer-grid > div:first-child > div p {
  text-align: center !important;
}
          header {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
          }
          .header-logo {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
          }
          .hero-section {
            height: 230px !important; /* shorter hero so text comes closer */
            margin-bottom: 0 !important; /* minimal gap below photo */
          }
          .logo-circle {
            display: flex !important;
            visibility: visible !important;
            opacity: 1 !important;
            width: 120px !important;
            height: 120px !important;
            top: 20px !important;
            left: 0 !important;
            transform: none !important;
            z-index: 10 !important;
          }
          .image-circle {
            width: 250px !important;
            height: 250px !important;
            top: -50px !important;
            right: -50px !important;
            left: auto !important;
            transform: none !important;
            z-index: 1 !important;
          }
          .main-container {
            padding: 40px 20px !important;
            max-width: 100% !important;
          }
          .services-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 30px !important;
          }
          .brand-description {
            order: 1 !important;
            margin-bottom: 20px !important;
          }
          .left-services {
            order: 2 !important;
          }
          .right-services {
            order: 3 !important;
          }
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
        }
      `}</style>
      <main style={styles.container} className="main-container">
        {/* HEADER LOGO */}
        <header style={styles.header}>
          <img
            src="/logo-secondary.png"
            alt="The One Wellness"
            style={styles.headerLogo}
            className="header-logo"
          />
        </header>

        {/* HERO */}
        <section style={styles.hero} className="hero-section">
          <div style={styles.heroCircles}>
            <div
              style={{ ...styles.circle, ...styles.logoCircle }}
              className="logo-circle"
            >
              <img
                src="/logo-secondary.png"
                alt="The One Wellness"
                style={styles.circleImage}
              />
            </div>

            <div
              style={{ ...styles.circle, ...styles.imageCircle }}
              className="image-circle"
            >
              <img src="/IMG_0313.JPG" alt="" style={styles.circleImage} />
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section style={styles.servicesGrid} className="services-grid">
          {/* LEFT COLUMN SERVICES */}
          <div className="left-services">
            <Service
              title={
                <>
                  Preventive
                  <br />
                  Wellness
                </>
              }
              iconSrc="/Wellness.png"
              text="Our preventive wellness experiences focus on understanding your body’s rhythm, easing stress before it takes root and following habits that keep you centered every day."
              iconStyle={{ width: 110, height: 110 }}
            />

            <Service
              title={
                <>
                  Lifestyle
                  <br />
                  Wellbeing
                </>
              }
              iconSrc="/Wellbeing.png"
              text="Our lifestyle wellbeing offerings help you weave wellness into your routine through mindful movement, nourishing habits and gentle self-connection."
              iconStyle={{ width: 110, height: 110 }}
            />

            <Service
              title={
                <>
                  Holistic
                  <br />
                  Healing
                </>
              }
              iconSrc="/Healing.png"
              text="Healing isn’t about fixing, it’s about returning to harmony. These sessions blend modern techniques with traditional practices to bring gentle alignment and lasting calm."
              iconStyle={{ width: 110, height: 110 }}
            />
          </div>

          {/* BRAND DESCRIPTION */}
          <div className="brand-description">
            <p style={styles.brandText}>
              At The ONE Wellness, we believe care shouldn’t begin with illness,
              it should begin with awareness. Our spaces are designed to help
              you pause before burnout, reset before exhaustion and breathe
              before your body reminds you to. Each experience combines the
              precision of modern wellness science with the gentle rhythms of
              nature, helping you heal from the inside out.
            </p>
          </div>

          {/* RIGHT COLUMN SERVICES */}
          <div className="right-services">
            <Service
              title={
                <>
                  Restorative
                  <br />
                  Therapy
                </>
              }
              iconSrc="/Restorative.png"
              text="Each ritual is designed to soothe tension, awaken the senses and leave the body deeply renewed. From aromatic blends to slow, sensory movements, it’s calm and rejuvenating."
              iconStyle={{ width: 110, height: 110 }}
            />

            <Service
              title={
                <>
                  Functional
                  <br />
                  Therapy
                </>
              }
              iconSrc="/Funcational.png"
              text="A holistic approach to physical wellness designed to optimize how your body moves and recovers. It blends advanced recovery modalities to support systemic health, performance and longevity."
            />
          </div>
        </section>

        {/* FOOTER */}
        <footer style={styles.footer} className="footer-grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <p>+91 75 59 00 44 11</p>
              <a href="tel:+917559004411" style={styles.callButton}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </a>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <p>info@theonewellness.co.in</p>
              <a
                href="mailto:info@theonewellness.co.in"
                style={styles.callButton}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
            {/* <p>www.theonewellness.co.in</p> */}
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <p>@the_one_wellness</p>
              <a
                href="https://www.instagram.com/the_one_wellness/"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.instagramButton}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>

            <div
              style={{
                marginTop: 20,
                display: "flex",
                flexDirection: "row",
                gap: 10,
                flexWrap: "wrap",
              }}
            >
              <a
                href="https://wa.me/917559004411"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.actionButton}
              >
                CHAT ON WHATSAPP
              </a>
              <a
                href="/The One Wellness_E_ Brochure_.pdf"
                download="The_One_Wellness_Brochure.pdf"
                style={styles.actionButton}
              >
                DOWNLOAD BROCHURE
              </a>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 15,
              justifyContent: "flex-end",
            }}
          >
            <a
              href="https://maps.app.goo.gl/sraZPFsbeVzXDpLF7"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.mapButton}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </a>
            <div style={{ textAlign: "right" }}>
              <p>
                <strong>The ONE Wellness</strong>
              </p>
              <p>Sarovaram Bio Park Rd, Near Galaxy Eleve Maison,</p>
              <p>Eranhipaalam, Calicut, Kerala 673020</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

/* ================= SERVICE COMPONENT ================= */

function Service({ title, text, iconSrc, iconStyle }) {
  return (
    <div style={styles.service}>
      <div style={styles.serviceGrid}>
        <div style={styles.iconColumn}>
          <img
            src={iconSrc}
            alt=""
            style={{ ...styles.serviceIcon, ...iconStyle }}
          />
        </div>

        <div>
          <h3 style={styles.serviceTitle}>{title}</h3>
          <p style={styles.serviceText}>{text}</p>
        </div>
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#113B24",
    color: "#E9CEA7",
    fontFamily: "Corbel, 'Trebuchet MS', Arial, sans-serif",
  },

  container: {
    maxWidth: 1300,
    margin: "0 auto",
    padding: "80px 100px",
  },

  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
    padding: "20px 0",
    width: "100%",
    position: "relative",
    zIndex: 100,
  },

  headerLogo: {
    maxWidth: 300,
    height: "auto",
    objectFit: "contain",
    display: "block",
  },

  /* HERO */
  /* HERO */
  hero: {
    marginBottom: 50,
    height: 500, // Fixed height for absolute positioning
    position: "relative",
  },

  heroCircles: {
    width: "100%",
    height: "100%",
    position: "relative",
  },

  circle: {
    borderRadius: "50%",
    overflow: "hidden",
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  logoCircle: {
    width: 380,
    height: 380,
    top: 50,
    left: 0,
    zIndex: 2,
  },

  imageCircle: {
    width: 750,
    height: 750,
    top: -200,
    right: -200, // Pull outside the container edge visually
    zIndex: 1,
  },

  circleImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  /* SERVICES */
  servicesGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 60,
    alignItems: "start",
  },

  service: {
    marginBottom: 5,
  },

  serviceGrid: {
    display: "grid",
    gridTemplateColumns: "80px 1fr",
    gap: 20,
    alignItems: "center", // THIS centers icon to title+text block
  },

  iconColumn: {
    display: "flex",
    justifyContent: "center",
  },

  serviceIcon: {
    width: 55,
    height: 55,
    objectFit: "contain",
  },

  serviceTitle: {
    fontSize: 26,
    fontFamily: "Shippori Antique B1, serif",
    marginBottom: 12,
  },

  serviceText: {
    fontSize: 16,
    lineHeight: 1.8,
    textAlign: "justify",
  },

  brandText: {
    fontSize: 17,
    lineHeight: 1.9,
    marginBottom: 10,
  },

  /* FOOTER */
  footer: {
    marginTop: 60,
    paddingTop: 30,
    borderTop: "1px solid rgba(233,206,167,0.4)",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 100,
    fontSize: 15,
  },

  footerLine: {
    width: 120,
    height: 2,
    backgroundColor: "#E9CEA7",
    marginBottom: 25,
  },

  instagramButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
    borderRadius: "50%",
    border: "1px solid #E9CEA7",
    color: "#E9CEA7",
    transition: "all 0.3s ease",
  },

  actionButton: {
    display: "inline-block",
    padding: "10px 20px",
    backgroundColor: "#ffffff",
    border: "1px solid #ffffff",
    color: "#113B24",
    textDecoration: "none",
    borderRadius: "5px",
    fontSize: "14px",
    textAlign: "center",
    width: "fit-content",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
  },

  mapButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    borderRadius: "50%",
    border: "1px solid #E9CEA7",
    color: "#E9CEA7",
    transition: "all 0.3s ease",
    flexShrink: 0,
  },

  callButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
    borderRadius: "50%",
    border: "1px solid #E9CEA7",
    color: "#E9CEA7",
    transition: "all 0.3s ease",
  },
};
