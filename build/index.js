

class PomodoroTimer extends React.Component {

	constructor() {
		super();
		this.state = {
			timeElapsed: 0
		};
	}
	totalTime(time1, time2) {
		return time1 + time2;
	}

	componentDidMount() {
		//console.log(new Date());
		this.interval = setInterval(this.elapseTime.bind(this), 1000);
		this.setState({ start: new Date() });
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	elapseTime() {
		var currentTime = new Date();

		//how much time has elapsed?
		var timeElapsed = Math.floor((new Date() - this.state.start) / 1000);

		this.setState({ timeElapsed: timeElapsed });

		if (this.state.timeElapsed >= this.props.workingTime * 60) {
			clearInterval(this.interval);
			alert("Take a break of 5 minutes");

			console.log(this.state.timeElapsed);
		}
	}

	render() {
		return React.createElement(
			"div",
			null,
			"This timer runs for ",
			this.props.workingTime,
			" minutes, followed by rest of ",
			this.props.restingTime,
			" minutes.",
			React.createElement("br", null),
			"For a total of ",
			this.totalTime(this.props.workingTime, this.props.restingTime),
			" minutes.",
			React.createElement("br", null),
			" You are this close to your break!",
			React.createElement("br", null),
			" ",
			React.createElement(
				"h1",
				null,
				Math.floor((this.props.workingTime * 60 - this.state.timeElapsed) / 60),
				"m ",
				(this.props.workingTime * 60 - this.state.timeElapsed) % 60,
				"s "
			)
		);
	}
}

ReactDOM.render(React.createElement(PomodoroTimer, { workingTime: 25, restingTime: 5 }), document.getElementById("app"));