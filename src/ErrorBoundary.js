import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
	constructor(props) {
		super(props)
		this.state = {
			hasError: false
		}
	}
	async componentDidCatch(error, info) {
		this.setState({
			hasError: true
		})
	}
	render() {
		if (this.state.hasError) {
			return (
				<div>
					Error catched by error boundary of react 16
				</div>
			)
		}
		return this.props.children
	}
}