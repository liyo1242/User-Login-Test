import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions'; //actions/index => default
import requireAuth from 'components/requireAuth';

class CommentBox extends Component {

	state = { comment: '' };

	// component just rendered	

	handleChange = event => {
		this.setState({ comment: event.target.value })
	}

	handleSubmit = event => {
		event.preventDefault();

		//call an action creator
		this.props.saveComment(this.state.comment);

		this.setState({ comment: '' });
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<h4>Add a Comment</h4>
					<textarea onChange={this.handleChange} value={this.state.comment}/>
					<div>
						<button>Submit Comment</button>						
					</div>
				</form>
				<button className="fetch-comments" onClick={this.props.fetchComment}>Fetch Comment</button>
			</div>
		)
	}
}



export default connect(null, actions)(requireAuth(CommentBox));