
function AboutMe() {
    return (
        <section className="about-me">
            <div className="left-sideview">
                <div className="profile">
                    <img
                        src="/images/personal-photo.jpeg"
                        alt="Bachelor Degree in Public Health"
                        className="profile-pic"
                    />
                    <div className="about-summary">
                        <h2>About Me</h2>
                        <p>
                            Innovative and detail-oriented, I am a Full Stack Developer with a robust background in managing and optimizing front and back-end interfaces.
                            My aim is to leverage my experience in patient care coordination to bring a unique perspective to development, combining technical expertise with strong organizational and communication skills.
                            I excel at building scalable and efficient applications while ensuring seamless user experiences. Adept at translating business requirements into technical solutions,
                            I am passionate about creating impactful software and driving continuous improvement in fast-paced environments.
                        </p>
                    </div>
                </div>
                <div className="left-bottom">
                    <div className="certificates">
                        <h3>Certifications and Degrees</h3>
                        <div className="certificates-images">
                            <img
                                src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/116529802"
                                alt="Certificate"
                                className="certificate"
                            />
                            {/* <img
                            src="https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/116529802"
                            alt="Badge"
                            className="badge"
                        /> */}
                            <img
                                src="/images/bachelor-degree.jpeg"
                                alt="Bachelor Degree in Public Health"
                                className="badge"
                            />
                        </div>
                    </div>



                    <div className="hobbies">
                        <h3>Hobbies and Interests</h3>
                        <ul>
                            <li>- Classic Literature</li>
                            <li>- Healthcare Innovation Podcasts</li>
                            <li>- Nutrition and Health</li>
                            <li>- Music Exploration</li>
                        </ul>
                    </div>
                </div>

            </div>
            {/* AREA FOR RIGHT SIDE TECH SKILLS */}
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