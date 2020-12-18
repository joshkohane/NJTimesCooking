import React from 'react'

class Comments extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input: '',
            show: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getShow = this.getShow.bind(this);
        this.hideShow = this.hideShow.bind(this);
    }

    handleChange(e) {
        let newInput = e.target.value;
        this.setState({ input: newInput })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addThisComment(this.props.recipe.id, this.state.input)
        this.setState({ input: '' })
    }

    getShow(e) {
        this.setState({ show: true });
    }

    hideShow(e) {
        this.setState({ input: '', show: false })
    }

    render() {
        let { comments, addThisComment, deleteThisComment, currentUser } = this.props
        return (
            <div>
                <h1 className="comments-header" >Cooking Notes</h1>
                <div className="comments-form-container" >
                    {this.state.show ? 
                        <form className="comments-form-open" >
                            <div className="comments-form-inner-container" >
                                <textarea className="comments-open-input" onChange={this.handleChange} value={this.state.input} placeholder="Share your notes with other cooks." ></textarea>
                                <div className="comments-form-btns" >
                                    <div className="comments-form-cancel" onClick={this.hideShow} >Cancel</div>
                                    <div className={this.state.input.length >= 5 ? "comments-form-note" : "comments-form-note-no"} 
                                        onClick={this.state.input.length >= 5 ? this.handleSubmit : () => {} } >Add Note</div>
                                </div>
                            </div>
                        </form>
                    : 
                        <form className="comments-form" onClick={this.getShow} >
                            <input  className="comments-input" type="text" placeholder="Share your notes with other cooks." />
                        </form>
                    }
                </div>
                <div className="comments-section-heading-container">
                    <div className="comments-section-heading">
                        <h1 className="comments-section-heading-title" >All <span className="comments-section-heading-number" >{comments.length}</span></h1>
                    </div>
                </div>
                <div className="comments-section-comments-container" >
                {comments.length === 0 ? 
                    <p className="comments-section-no-comments" >There aren't any notes here yet. Be the first to leave one.</p>
                :
                    <div className="comments-section-comments" >
                        {comments.map((comment, idx) => {
                            // let date = new Date(comment.createdAt);
                            // debugger;
                            // let time = comment.time

                            // debugger;
                            return <div key={idx} className="comments-section-comment-outer-container" >
                                {currentUser && currentUser === comment.authorId ? 
                                    <span onClick={() => this.props.deleteThisComment(comment.id)} className="delete-comment-btn">&#x2715;</span>
                                : ''}
                                <div className="comments-section-image-container" >
                                    <img className="comments-section-image" src={window.tomato} alt="User Image"/>
                                </div>
                                <div className="comments-section-comment-container" >
                                    {/* <div>{Date.prototype.toTimeString(date)}</div> */}
                                    {/* <div>{Time.now.to_datetime(comment.createdAt)}</div> */}
                                    <div className="comments-section-comment-info">
                                        <div className="comments-section-comment-name" >{comment.authorFirstName}</div>
                                        <div className="comments-section-comment-time" >{comment.timestamp} ago</div>
                                    </div>
                                    <div className="comments-section-comment-text" >{comment.text}</div>
                                </div>
                            </div>
                        })}
                    </div>
                }
                </div>
            </div>
        )
    }
}

export default Comments