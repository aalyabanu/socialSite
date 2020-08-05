import React from 'react';
import './App.scss';
import Scard from './Scard';

class View extends React.Component {

  buildPosts() {
    return this.props.posts.map((current,i) => (
      <Scard key={i} postId={current.postid} id={current.id} img={current.img} text={current.text} likes={current.likes} likeaction={this.props.likeaction} loves={current.loves} loveaction={this.props.loveaction} />
    )
    )
  }

  render() {
    return (
      <>
        <div>
          {this.buildPosts()}
        </div>
       
      </>
    );
  }
}

export default View;
