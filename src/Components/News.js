import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './spinner'
import PropTypes from 'prop-types'
 
import InfiniteScroll from  'react-infinite-scroll-component'


export class News extends Component {
  static defaultProps={
    country:'in',
pageSize:8,
catgeory:'general'
  }
  static propTypes={
    country:PropTypes.string, 
    pageSize:PropTypes.number,
    catgeory:PropTypes.string,
  }
  capitalizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1)
  }

    constructor(props){
        super(props);
        
        
        this.state={
           articles: [],
           page:1,
           loading:false,
           totalResults:0

             
        }
        document.title= `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
    }
    async updateNews(){
      
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      
      let parsedData = await data.json()
      
      this.setState({
          articles: parsedData.articles,
          totalResults: parsedData.totalResults,
          loading: false
          
      })
      
  
 
  }
  async componentDidMount(){
    this.updateNews();
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b539e818961c4418aee642225a292e39&page=1&pagesize=${this.props.pageSize}`;
    // this.setState({loading:true});
    // let data = await fetch(url);
    // let parsedData = await data.json()
    // console.log(parsedData);
    // this.setState({ articles: parsedData.articles,totalResults:parsedData.totalResults,
    //   loading:false 
    // })
  }
     handleNextClick=async()=>{
      this.setState({page:this.state.page+1})
      this.updateNews();
      // if(!(this.state.page+1>Math.ceil (this.state.totalResults/this.props.pageSize)))
      // {
        
      // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b539e818961c4418aee642225a292e39&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
      // this.setState({loading:true});
      // let data = await fetch(url);
      // let parsedData = await data.json()
      // console.log(parsedData);
      
      // this.setState({
       
      //   page:this.state.page+1,
      //   articles: parsedData.articles,
      //   loading:false
      

      // })}


    }
     handlePrevClick=async()=>{
      this.setState({page:this.state.page-1})
      this.updateNews();
      // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b539e818961c4418aee642225a292e39&page=${this.state.page-1}&pagesize=${this.props.pageSize}`;
      // this.setState({loading:true});
      // let data = await fetch(url);
      // let parsedData = await data.json()
      // console.log(parsedData);
      
      // this.setState({
       
      //   page:this.state.page-1  ,
      //   articles: parsedData.articles,
      //   loading:false

      // })
      
    }
    fetchMoreData = async () => {
      this.setState({ page: this.state.page + 1 })
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json()
      this.setState({
          articles: this.state.articles.concat(parsedData.articles),
          totalResults: parsedData.totalResults,
          loading: false,
      })
  };
    


  render() {
    return (
      <div className="container ">
        <h1 className="text-center" style={{margin:'35px 0px'}} >Newsmonkey -Top  {this.capitalizeFirstLetter(this.props.category)} headlines</h1>
        
        {this.state.loading&&<Spinner/>}
        {/* <InfiniteScroll
                    dataLength={this.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.articles.length !== this.state.totalResults}
                    loader={<Spinner/>}
                />  */}
        
        <div className="row my-3">
        {this.state.articles.map((element)=>{
            return < div className='col-md-3'key={element.url}>
            <NewsItem title={element.title?element.title.slice(0,44):""} description={element.description?element.description.slice(0,87):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
        </div>
        })}
            
            
      </div>
      <div className="container d-flex justify-content-between my-3">
        <button disabled={this.state.page<=1} type='button ' className='btn btn-dark'onClick={this.handlePrevClick}>Previous</button>
        <button disabled={this.state.page+1>Math.ceil (this.state.totalResults/this.props.pageSize)}type='button' className='btn btn-dark'onClick={this.handleNextClick} >Next</button>
      </div>
      </div>
    )
  }
}

export default News
