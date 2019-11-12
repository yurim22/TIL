import React, { Component } from 'react';
import './CreateForm.css';

class CreateForm extends Component {
	state = {
		input: ''
	};

	handleChange = e => {
		this.setState({
			//앞으로 바뀔 input의 값은 e.target.value에 있다
			input: e.target.value
		});
	};

	handleSubmitt = e => {
		//Form Submit은 페이지를 새로고침을 트리거하는데
		// 이를 방지해준다.
		e.preventDefault();
    this.props.onSubmit(this.state.input);
    this.setState({ input: '' });
	};

	render() {
		return (
			<form className="CreateForm" onSubmit={this.handleSubmitt}>
				<input placeholder="오늘은 뭐해야해?" onChange={this.handleChange} value={this.state.input} />
				<button type="submit">등록</button>
			</form>

		);
	}
}

export default CreateForm;

