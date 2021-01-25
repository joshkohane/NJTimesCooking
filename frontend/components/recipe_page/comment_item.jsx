import React from 'react';

class CommentItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            commentText: this.props.comment.text,
            className: "modal-save-background-closed"
        }

        this.toggleModal = this.toggleModal.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        let newName = (this.state.className === "modal-save-background") ? "modal-save-background-closed" : "modal-save-background"
        this.setState({ className: newName })
    }

    toggleEdit() {
        this.setState({ edit: !this.state.edit })
    }

    handleChange(e) {
        this.setState({ commentText: e.target.value })
    }

    handleSubmit(e) {
        e.stopPropagation();
        this.props.updateThisComment(this.props.comment.id, this.state.commentText)
        this.setState({ edit: false })
    }

    render() {
        let { comment, deleteThisComment, currentUser } = this.props;
        return (
            <div className="comments-section-comment-outer-container" >
                <div className={this.state.className} onClick={this.toggleModal} >
                    <div className="modal-save-child" onClick={e => e.stopPropagation()}>
                        <span className="close-modal-btn" onClick={this.toggleModal} >&#x2715;</span>
                        <div className="modal-save-body">
                            <p className="modal-image-text">Are you sure you want to remove this comment?</p>
                            <div className="modal-save-btns">
                                <button type="button" onClick={this.toggleModal} className="modal-save-no">NO</button>
                                <button type="button" onClick={() => deleteThisComment(comment.id)} className="modal-save-yes">YES</button>
                            </div>
                        </div>
                    </div>
                </div>
                {currentUser && currentUser === comment.authorId ?
                    <div>
                        <span onClick={this.toggleModal} className="delete-comment-btn">&#x2715;</span>
                        <i className="fas fa-pencil-alt update-comment-btn" onClick={this.toggleEdit} ></i>
                    </div>
                    : ''}
                <div className="comments-section-image-container" >
                    <img className="comments-section-image" src={window.tomato} alt="User Image" />
                </div>
                <div className="comments-section-comment-container" >
                    <div className="comments-section-comment-info">
                        <div className="comments-section-comment-name" >{comment.authorFirstName}</div>
                        <div className="comments-section-comment-time" >{comment.timestamp} ago</div>
                    </div>
                    {this.state.edit 
                    ? 
                        <form className="edit-comment-form" onSubmit={this.handleSubmit} >
                            <textarea type="text" 
                                value={this.state.commentText} 
                                onChange={this.handleChange}
                                className="edit-comment-input"
                            ></textarea>
                            <div className="comments-form-btns" >
                                <div className="comments-form-cancel" onClick={this.toggleEdit} >Cancel</div>
                                <div className={this.state.commentText.length >= 5 ? "comments-form-note" : "comments-form-note-no"}
                                    onClick={this.state.commentText.length >= 5 ? this.handleSubmit : () => { }} >Edit Note</div>
                            </div>
                        </form>
                    :
                        <div className="comments-section-comment-text" >{comment.text}</div>
                    }
                </div>
            </div>
        )
    }
}

export default CommentItem;