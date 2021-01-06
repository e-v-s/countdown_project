import React from 'react';

function Countdown(props) {
  return (
		<>
		{
			Object.keys(props.timeLeft).map(key => {
				return (
					<div className={props.card}>
						{
							props.timeLeft[key].toString().length === 2 ? <div className={props.number}>{props.timeLeft[key]}</div> : <div className={props.number}>0{props.timeLeft[key]}</div>
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
