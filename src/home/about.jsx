import React from "react";

function About() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: "#d1e7f3", 
        padding: "60px 20px",
        color: "#2C3E50", 
        marginTop:"50px"
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontWeight: "bold", color: "#2C3E50" }}>About Us</h2>
        <p style={{ fontSize: "18px", marginTop: "10px", lineHeight: "1.6" }}>
          At <span style={{ fontWeight: "bold", color: "#2C3E50" }}>WorkSpace</span>, we are dedicated to providing flexible, comfortable, and affordable workspaces tailored to meet your needs. Whether you’re a freelancer, startup, or established business, we ensure that you have the perfect environment to focus, collaborate, and succeed.
        </p>
      </div>
      
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
          marginTop: "40px",
        }}
      >
        {/* Card 1 */}
        <div
          style={{
            backgroundColor: "#f0f8ff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3 style={{ color: "#2C3E50", marginBottom: "10px" }}>Who We Are</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            We are a team passionate about empowering individuals and organizations with innovative workspace solutions. Our goal is to create environments where work feels seamless and inspiring.
          </p>
        </div>

        {/* Card 2 */}
        <div
          style={{
            backgroundColor: "#f0f8ff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3 style={{ color: "#2C3E50", marginBottom: "10px" }}>Our Mission</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            To redefine workspaces by connecting professionals to vibrant locations that offer top-notch amenities, fostering collaboration and productivity.
          </p>
        </div>

        {/* Card 3 */}

        <div
          style={{
            backgroundColor: "#f0f8ff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3 style={{ color: "#2C3E50", marginBottom: "10px" }}>Our Services</h3>
          <ul style={{ fontSize: "16px", lineHeight: "1.6", paddingLeft: "20px" }}>
            <li>Affordable co-working spaces in prime locations</li>
            <li>Private offices tailored to your needs</li>
            <li>State-of-the-art meeting and event spaces</li>
          </ul>
        </div>

          {/* card 4 */}
        <div
          style={{
            backgroundColor: "#f0f8ff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3 style={{ color: "#2C3E50", marginBottom: "10px" }}>Why Choose Us</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            Our commitment to quality, affordability, and customer satisfaction sets us apart. Join us for a workspace that inspires growth and innovation.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
