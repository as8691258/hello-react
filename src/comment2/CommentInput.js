import React, { Component } from 'react'

class CommentInput extends Component{

    constructor(){
        super();
        this.state={
            username:'',
            content:''
        };
    }

    componentDidMount(){
        this.textarea.focus()
    }

    componentWillMount(){
        this._loadUsername()
    }


    handleUsernameChange (event) {
        this.setState({
            username: event.target.value
        })
    }

    handleContentChange (event) {
        this.setState({
            content: event.target.value
        })
    }


    handleSubmit () {

        if(this.props.onSubmit){
            this.props.onSubmit({
                username: this.state.username,
                content: this.state.content,
            })

            this.setState({ content: '' })
        }
    }

    handleUsernameBlur(event){
        this._setUserName(event.target.value)
    }

    _loadUsername () {
        const username = localStorage.getItem("userName");
        if(username){
            this.setState({username})
        }
    }

    _setUserName(userName){

        localStorage.setItem("userName",userName)
    }



    render(){
        return(
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input onBlur={this.handleUsernameBlur.bind(this)}
                            value={this.state.username}
                            onChange={this.handleUsernameChange.bind(this)} />
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
            <textarea
                ref={(textara)=>this.textarea = textarea}
                value={this.state.content}
                onChange={this.handleContentChange.bind(this)} />
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button
                        onClick={this.handleSubmit.bind(this)}>
                        发布
                    </button>
                </div>
            </div>
        )
    }
}


export default CommentInput