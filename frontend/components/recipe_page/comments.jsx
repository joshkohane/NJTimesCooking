import React from 'react';
import CommentItem from './comment_item';

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
        let { comments, updateThisComment, deleteThisComment, currentUser } = this.props
        return (
            <div>
                <h1 className="comments-header" >Cooking Notes</h1>
                <div className="comments-form-container" >
                    <form className={this.state.show ? "comments-form-open" : "comments-form"} onClick={this.state.show ? () => {} : this.getShow} >
                        <div className="comments-form-inner-container" >
                            <textarea className={this.state.show ? "comments-open-input" : "comments-input"} onChange={this.handleChange} value={this.state.input} placeholder="Share your notes with other cooks." ></textarea>
                            {this.state.show ? 
                                <div className="comments-form-btns" >
                                    <div className="comments-form-cancel" onClick={this.hideShow} >Cancel</div>
                                    <div className={this.state.input.length >= 5 ? "comments-form-note" : "comments-form-note-no"}
                                        onClick={this.state.input.length >= 5 ? this.handleSubmit : () => { }} >Add Note</div>
                                </div>
                            : ""
                            }
                        </div>
                    </form>
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
                            return <CommentItem key={idx} comment={comment} updateThisComment={updateThisComment} deleteThisComment={deleteThisComment} currentUser={currentUser} />
                        })}
                    </div>
                }
                </div>
            </div>
        )
    }
}

export default Comments