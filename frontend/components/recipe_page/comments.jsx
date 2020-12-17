import React from 'react'

class Comments extends React.Component {
    render() {
        let { comments, addThisComment, deleteThisComment } = this.props
        return (
            <div>
                <h1 className="comments-header" >Cooking Notes</h1>
                <form className="comments-form" >
                    <input className="comments-input" type="text" placeholder="Share your notes with other cooks." />
                </form>
                <div className="comments-section-heading-container">
                    <div className="comments-section-heading">
                        <h1 className="comments-section-heading-title" >All <span className="comments-section-heading-number" >{comments.length}</span></h1>
                    </div>
                </div>
                {/* There aren't any notes here yet. Be the first to leave one. */}
            </div>
        )
    }
}

export default Comments