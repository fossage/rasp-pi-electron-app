import {x} from '../core/elements';
import {getRandom} from '../utils/number-utils'

function runAllDots(){
  dotRunner(50, 355);
  dotRunner(205, 375);
  dotRunner(383, 390);
  dotRunner(550, 410);
  dotRunner(715, 428);
}

function runDot(xfrom, xto, time){
  let dot1 = x.div.setStyles({
    border: '1px solid RGB(216, 254, 254)',
    borderRadius: '8px',
    backgroundColor: 'RGB(216, 254, 254)',
    boxShadow: '3px 3px 32px 3px RGB(216, 254, 254)',
    position: 'absolute'
  });
  
  document.body.appendChild(dot1);
  TweenMax.fromTo(dot1, time, {
    y: 280, 
    x: xfrom,
    height: 20, 
    width: 20, 
    borderRadius: 12
  }, 
  {
    y: 2,
    x: xto, 
    height: 1, 
    width: 1,  
    borderRadius: 6,
    onComplete: () => { dot1.setStyles({display: 'none'}); document.body.removeChild(dot1);}
  });
}

function runAll(){
  dotRunner(-25, 335);
  dotRunner(165, 352);
  dotRunner(358, 366);
  dotRunner(550, 380);
  dotRunner(740, 400);
}

function dotRunner(xfrom, xto) {
  let num = getRandom(2, 10) * 1000;
  let num2 = getRandom(8, 22);
  let clear = setTimeout(() => {
    runDot(xfrom, xto, num2);
    clearTimeout(clear);
  }, num);
}

export let dots = () => {
  runAll();

  setInterval(() => {
    runAll();
  }, 10000);
}