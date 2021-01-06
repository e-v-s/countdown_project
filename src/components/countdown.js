import React from 'react';

function Countdown(props) {
  return (
		<>
			<div>
				{props.timeLeft.day}
				<p>Days</p>
			</div>
			<div>
				{props.timeLeft.hours}
				<p>Hours</p>
			</div>
			<div>
				{props.timeLeft.minutes}
				<p>Minutes</p>	
			</div>
			<div>
				{props.timeLeft.seconds}
				<p>Seconds</p>
			</div>
		</>
	)
}

export default Countdown;
