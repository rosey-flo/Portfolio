
function AboutMe() {
    return (
        <section className="about-me">
            <div>
                <div className="about-summary">
                    <h2>About Me</h2>
                    <p>
                        Innovative and detail-oriented Full Stack Developer with a robust background in managing and optimizing front and back-end interfaces.
                        Leveraging experience in patient care coordination, I bring a unique perspective to development, combining technical expertise with strong organizational and communication skills.
                        I excel at building scalable and efficient applications while ensuring seamless user experiences. Adept at translating business requirements into technical solutions,
                        I am passionate about creating impactful software and driving continuous improvement in fast-paced environments.
                    </p>
                </div>
                <div className="certificates">
                    <h3>Certifications</h3>
                    <div className="certificates-images">
                        <img
                            src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/116529802"
                            alt="Certificate"
                            className="certificate"
                        />
                        <img
                            src="https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/116529802"
                            alt="Badge"
                            className="badge"
                        />
                    </div>
                </div>
            </div>
            <div className="technical-skills">
                <h3>Technical Skills</h3>
                <h4>Softwares/Platforms</h4>
                <ul>
                    <li>DBeaver</li>
                    <li>Insomnia</li>
                    <li>Visual Studio Code</li>
                    <li>Render</li>
                </ul>
                <h4>Programming Languages</h4>
                <ul>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>SQL</li>
                    <li>Python</li>
                </ul>
                <h4>Frameworks & Technologies</h4>
                <ul>
                    <li>React.js</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MERN Stack</li>
                    <li>Progressive Web Applications (PWAs)</li>
                    <li>User Authentication</li>
                    <li>API Interactions</li>
                    <li>AJAX</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>Git</li>
                </ul>
            </div>
        </section>
    );
}

export default AboutMe;