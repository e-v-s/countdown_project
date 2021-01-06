import React from 'react';

function Countdown(props) {
  return (
		<>
		{
			Object.keys(props.timeLeft).map(key => {
				return (
					<div className={props.card}>
						{
							props.timeLeft[key].toString().length === 2 ? 
							<div className={props.numbers}>
								<span className={props.dotLeft}>.</span>
								<p className={props.number}>{props.timeLeft[key]}</p>
								<span className={props.dotRight}>.</span>
							</div> : 
							<div className={props.numbers}>
								<span className={props.dotLeft}>.</span>
								<p className={props.number}>0{props.timeLeft[key]}</p>
								<span className={props.dotRight}>.</span>
							</div>
						}
						<p className={props.text}>{key}</p>
					</div>
				)
			})
		}
		</>
	)
}
	
export default Countdown;
