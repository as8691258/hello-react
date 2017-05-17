import React, { Component ,PropTypes} from 'react'

 class Comment extends  Component{
     static propTypes = {
         comment: PropTypes.object.isRequired
     }
     static defaultProps = {
         comment: {
             username:'',
             content:''
         }
     }


     render(){
        return(
            <div className='comment'>
                <div className='comment-user'>
                    <span>{this.props.comment.username} </span>：
                </div>
                <p>{this.props.comment.content}</p>
            </div>
        )
    }
 }

 export  default  Comment;