import React from 'react';
import post3 from './../../../img/post-3.jpg';
import { Link } from 'react-router-dom';
import { articles } from '../../../actions';


class Article extends React.Component{
    render(){
        const data = this.props.articles;
        if(!data) return <div>Loading....</div>
        console.log("this is props",this.props);    
        // console.log('route',this.props.match.params.id)
        return(
            <React.Fragment>
                {  (data) ?  
                        data.map((article,index )=>{
                            return (
                            <div key={index} className="col-md-4">
                                <div className="post">
                                    <Link className="post-img" to="/blog"><img src={post3} alt="" /></Link>
                                    <div className="post-body">
                                        <div className="post-meta">
                                            <Link className="post-category cat-1" to="/blog">{article.category}</Link>
                                            <span className="post-date">{article.createdAt}</span>
                                        </div>
                                        <h3 className="post-title"><Link to={'/blog/'+article._id}>{article.title}</Link></h3>
                                    </div>
                                </div>
                            </div>
                            );
                        })
                    : 'not yet loaded'}
            </React.Fragment>
        );
    }
}


export default Article;