import React from 'react'

const Newsitems=(props)=> {  
    //props declared here
    let {title,description,imageUrl,newsUrl,author,date,source} = props;
    return (
      <div className='container my-3'>
        <div className="card" style={{width: "18rem"}}>
          {/* if image url is null then show this image */}
      <img src={!imageUrl?"https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image@2x.pnghttps://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image@2x.png":imageUrl} className="card-img-top" alt="No  Image found" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <span className="badge rounded-pill bg-danger">{source}</span>
        <p className="card-text">{description}</p>
        {/* _blank will open it in the new tab */}
        {/* this will show the authors info and date of news publishedAt */}
        <p className="card-text"><small className="text-muted">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
        <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
      </div>
    </div>
    </div>
    )
  }


export default Newsitems