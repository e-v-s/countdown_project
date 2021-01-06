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
    let day = 20 - today.getDate();
    let hours = 24 - today.getHours();
    let minutes = 60 - today.getMinutes();
    let seconds = 60 - today.getSeconds();
    let timeLeft = {
      day, 
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
        <Countdown timeLeft={timeLeft} />
      }
      </div>
      <div className={css(style.footer)}>
        <div className={css(style.footerIcons)}>
          <a 
            className={css(style.link)} 
            href="#" 
            target="_blank" 
            rel="noreferrer">
            <img className={css(style.icon)} alt="facebook link" src={fbIcon} />
          </a>
          <a 
            className={css(style.link)} 
            href="#" 
            target="_blank" 
            rel="noreferrer">
            <img className={css(style.icon)} alt="pinterest link" src={pinterestIcon}></img>
          </a>
          <a 
            className={css(style.link)} 
            href="#" 
            target="_blank" 
            rel="noreferrer">
            <img className={css(style.icon)} alt="instagram link" src={instaIcon}></img>
          </a>
        </div>
        <div className={css(style.attribution)}>
          Challenge by <a className={css(style.link)} href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
          Coded by <a className={css(style.link)} href="#">Evs</a>.
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
    height: '680px',
    backgroundColor: 'hsl(235, 16%, 14%)',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    '@media only screen and (min-width: 376px)': {
      width: '100%',
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
    letterSpacing: '4px'
  },
  countdown: {
    display: 'flex',
    justifyContent: 'space-around',
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
      width: '100%',
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
