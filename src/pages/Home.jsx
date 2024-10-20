
import WorkItem from '../components/WorkItem.jsx';

const apps = [
  {
    title: 'Art Nook',
    description: 'A collaborative MERN stack, application designed as a social media platform where artists can showcase their creativity.',
    staticImage: '/images/portfolio_ss.png',
    image: '/images/art-nook.jpeg',
    technologies: 'JS| React | GraphQL | MongoDB | Apollo Server/Client | Cloudinary',
    liveSite: 'https://art-nook-1.onrender.com/'
  },
  {
    title: 'My Tech Blog',
    description: 'A blog style design that utilizes CRUD and user authentication to allow registered users to create, edit and delete posts.',
    staticImage: '/images/portfolio_ss.png',
    image: '/images/tech-blog.jpeg',
    technologies: 'JS | Postgres | Sequelize | Sessions | CSS ',
    liveSite: 'https://tech-blog-l5xe.onrender.com'
  },
  {
    title: 'Weather Dashboard',
    description: 'An application allowing a user to select a city and get the current weather with data that was extracted the the API Open Weather Map.',
    staticImage: '/images/portfolio_ss.png',
    image: '/images/weather-dahsboard.jpeg',
    technologies: 'HTML | CSS | JS | JQuery | Web API',
    liveSite: 'https://rosey-flo.github.io/Weather-Dashboard/'
  },
  {
    title: 'Kanban Task Board',
    description: 'An single-page organizational web application to track to-do list user activities.',
    staticImage: '/images/portfolio_ss.png',
    image: '/images/kanban-board.jpeg',
    technologies: 'Node.js | CSS | JS | HTML',
    liveSite: 'https://rosey-flo.github.io/Task-Board/'
  }
]

function Home() {
  // Loop over the apps array and convert each object into a <WorkItem /> component tag
  const workItems = apps.map((workItemObj, index) => {
    return <WorkItem key={index} data={workItemObj} />
  })

  return (
    <>
      <section className="home-hero column align-center">
        <img src="/images/mosaic.jpg" alt="ceiling mosaic" />
        <p className="overlay">Full Stack Developer</p>

        <h1 className="text-center">Projects</h1>
      </section>

      <div className="project-container">
        {/* <h2>Completed Projects:</h2> */}
        <section className="work">
          {workItems}
        </section>
      </div>
    </>
  )
}

export default Home