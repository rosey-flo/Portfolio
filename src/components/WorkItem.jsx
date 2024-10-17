function WorkItem(props) {
    const imageObj = {
      backgroundImage: `linear-gradient(180deg, rgba(89,53,22,0.35477941176470584) 59%, rgba(158,145,127,0.2847514005602241) 82%), url(${props.data.staticImage})`
    }
    
  
    return (
      <>
        <article className="work-item" style={imageObj}>
          <h4 className="text-center">{props.data.title}</h4>
          <p>{props.data.description}</p>
          <p className="technologies">{props.data.technologies}</p>
          <div className="site-image">
                <div className="screenshot-container">
                    <img src={props.data.image} alt={`${props.data.title} screenshot`} className="screenshot" />
                    <a className="live-site-link" href={props.data.liveSite} target="_blank">
                        <img className="live-site-logo" src="./images/live-site-logo.jpeg" alt="web-icon" />
                    </a>
                </div>
            </div>
        </article>
      </>
    )
  }
  
  export default WorkItem