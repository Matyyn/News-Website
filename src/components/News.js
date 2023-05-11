import React, { useEffect,useState } from "react";
import Newsitems from "./Newsitems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import { camelCase } from 'lodash';
import Navbar from "./Navbar";

const News=(props)=>{
  // using useState here and constructor was used in class based
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, settotalResults] = useState(0)



  //function to update the content
  const updateNews =async() =>{
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    // using fetch api
    setLoading(true)
    props.setProgress(30);
    let data = await fetch(url);
    props.setProgress(50);
    let parsedata = await data.json();
    console.log(parsedata);
    props.setProgress(70);

    setArticles(parsedata.articles);
    settotalResults(parsedata.totalResults);
    setLoading(false);
    props.setProgress(100);
  }


  //previous button function
  // const handlePrevClick = async () => {
  //   setPage(page-1)
  //   updateNews();
  // };
  // //next button function

  // const handleNextClick = async () => {
    
  //   setPage(page+1)
  //   updateNews();
  // };


  const  fetchMoreData = async() => {
    
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1);
    // using fetch api
    let data = await fetch(url);
    let parsedata = await data.json();
    setArticles(articles.concat(parsedata.articles))
    settotalResults(parsedata.totalResults)
    
  };
  

  //component did mount is a life cycle component
  // async function can wait in its body for some time

  useEffect(() => {
    document.title = `${props.category}=DailyNews`;
    updateNews();
  }, [])
  const myWord = props.category
  const myCamelCaseWord = camelCase(myWord);
  
    return (
      // News items is used inside the news component
      <div className="container my-1" >
        <strong>
          <h4 style={{ textAlign: "center", textDecoration: "underline" ,fontWeight:'900' }}>
            Daily News -Top {props.category} Headlines
          </h4>
        </strong>

        {/*   show the spinner when there is loading */}
        {/* {loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner />}
        >
          <div className="container">
          <div className="row">
            {/* loop to iterate all the news */}
            {/* show loading when there is no content and still being fetched*/}
            {articles.map((element) => {
              return (
                <div className="col-md-4   " key={element.url}>
                  <Newsitems
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
                
              );
            })}
          </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={handlePrevClick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            disabled={
              page + 1 >
              Math.ceil(totalResults / props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
      </div>
    );
  }

// prop types are written in the end in the function based
//static default props
News.defaultProps = {
  country: "us",
  pageSize: 8,
  category: "general",
  setProgress:10
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  setProgress: PropTypes.number,
};
export default News;
