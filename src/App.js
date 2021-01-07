import React, { useState, useEffect } from 'react';
import { css, StyleSheet } from 'aphrodite';

import Countdown from './components/countdown.js';

import backgroundFooter from './images/pattern-hills.svg';
import background from './images/bg-stars.svg';
import fbIcon from './images/icon-facebook.svg';
import pinterestIcon from './images/icon-pinterest.svg';
import instaIcon from './images/icon-instagram.svg';

function App() {
  const calculateTimeLeft = () => {
    let today = new Date();
    let days = 20 - today.getDate();
    let hours = 24 - today.getHours();
    let minutes = 60 - today.getMinutes();
    let seconds = 60 - today.getSeconds();
    let timeLeft = {
      days, 
      hours, 
      minutes, 
      seconds
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className={"App" && css(style.page)}>
      <h1 className={css(style.title)}>We're launching soon</h1>
      <div className={css(style.countdown)}>
      {
        timeLeft.day === 0 ? 
        <p>é hoje</p> : 
        <Countdown timeLeft={timeLeft} card={css(style.card)} text={css(style.text)} numbers={css(style.numbers)} number={css(style.number)} dotLeft={css(style.dotLeft)} dotRight={css(style.dotRight)} />
      }
      </div>
      <div className={css(style.footer)}>
        <div className={css(style.footerIcons)}>
          <a 
            className={css(style.link)} 
            href="www.facebook.com" 
            target="_blank" 
            rel="noreferrer">
            <img className={css(style.icon)} alt="facebook link" src={fbIcon} />
          </a>
          <a 
            className={css(style.link)} 
            href="www.pinterest.com" 
            target="_blank" 
            rel="noreferrer">
            <img className={css(style.icon)} alt="pinterest link" src={pinterestIcon}></img>
          </a>
          <a 
            className={css(style.link)} 
            href="instagram" 
            target="_blank" 
            rel="noreferrer">
            <img className={css(style.icon)} alt="instagram link" src={instaIcon}></img>
          </a>
        </div>
        <div className={css(style.attribution)}>
          Challenge by <a className={css(style.link)} href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
          Coded by <a className={css(style.link)} href="www.github.com/e-v-s">Evs</a>.
        </div>
      </div>
    </div>
  );
}

const style = StyleSheet.create({
  page: {
    backgroundImage: `url(${background})`,
    backgroundSize: 'auto 70%',
    backgroundRepeat: 'no-repeat',
    minHeight: '688px',
    backgroundColor: 'hsl(235, 16%, 14%)',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    '@media only screen and (min-width: 376px)': {
      backgroundSize: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'left bottom',
      minHeight: '800px',
    }
  },
  title: {
    paddingTop: '180px',
    color: 'hsl(0, 0%, 100%)',
    textAlign: 'center',
    width: '80%',
    margin: '0 auto',
    fontFamily: `'Red Hat Text', sans-serif`,
    textTransform: 'uppercase',
    fontSize: '24px',
    letterSpacing: '4px',
    '@media only screen and (min-width: 376px)': {
      paddingTop: '166px',
      paddingBottom: '40px'
    }
  },
  countdown: {
    display: 'flex',
    justifyContent: 'space-evenly',
    '@media only screen and (min-width: 376px)': {
      width: '70%',
      margin: '0 auto',
      marginTop: '-80px'
    }
  },
  card: {
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80px',
  },
  numbers: {
    width: '80px',
    height: '70px',
    textAlign: 'center',    
    fontSize: '42px',    
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '1px solid transparent',
    borderCollapse: 'separate',
    background: 'linear-gradient(180deg, hsl(236, 21%, 20%) 50%, hsl(236, 21%, 26%) 50%)',
    opacity: 'linear-gradient(180deg, 0.8, 0)',
    borderRadius: '4px',
    '-webkit-box-shadow': '0px 4px 0px 0px hsl(234, 17%, 12%)',
    '@media only screen and (min-width: 376px)': {
      width: '142px',
      height: '138px',
      fontSize: '84px',
      '-webkit-box-shadow': '0px 8px 0px 0px hsl(234, 17%, 12%)'
    }
  },
  number: {
    color: 'hsl(345, 95%, 68%)',
    background: '-webkit-linear-gradient(90deg, hsl(345, 95%, 68%) 50%, hsl(345, 95%, 68%, 0.7) 50%)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    fontFamily: `'Red Hat Text', sans-serif`,
    fontWeight: '700',
  },
  dotLeft: {
    marginTop: '-44px',
    marginLeft: '-10px',
    color: 'hsl(235, 16%, 14%)',
    fontSize: '70px'
  },
  dotRight: {
    marginTop: '-44px',
    marginRight: '-10px',
    color: 'hsl(235, 16%, 14%)',
    fontSize: '70px'
  },
  text: {
    fontFamily: `'Red Hat Text', sans-serif`,
    textTransform: 'uppercase',
    fontWeight: '700',
    fontSize: '8px',
    color: 'hsl(237, 18%, 59%)',
    letterSpacing: '2px',
    '@media only screen and (min-width: 376px)': {
      fontSize: '10px',
      letterSpacing: '6px',
      paddingTop: '4px'
    }
  },
  footer: {
    backgroundImage: `url(${backgroundFooter})`,
    backgroundSize: 'auto 100%',
    height: '180px',
    backgroundPosition: '84%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    '@media only screen and (min-width: 376px)': {
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%',
      backgroundPosition: 'left top'
    }
  },
  footerIcons: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '20px',
    width: '100%',
  },
  icon: {
    color: 'hsl(237, 18%, 59%)',
    margin: '10px',
    ':hover': {
      filter: 'invert(67%) sepia(61%) saturate(4696%) hue-rotate(309deg) brightness(99%) contrast(99%)',
    }
  },
  attribution: {
    width: '375px',
    color: 'hsl(237, 18%, 59%)',
    textAlign: 'center',
  },
  link: {
    color: 'hsl(237, 18%, 59%)',
    ':hover': {
      color: 'hsl(345, 95%, 68%)',
    }
  }
});

export default App;
