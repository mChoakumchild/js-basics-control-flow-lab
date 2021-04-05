function scuberGreetingForFeet(a){
  let b;
  if (a<400) {
    b = 'This one is on me!';

  } else if (a>2000 && a<2500) {
    b = 'I will gladly take your thirty bucks.';
    
  } else if (a > 2500) {
    b = 'No can do.';
  }
  return b;
}

function ternaryCheckCity(a){
const b = 'Ok, sounds good.';
const c = 'No go.';
return ((a == 'NYC') ? b: c);
  
}

function switchOnCharmFromTip(a){
  
  switch(a){
    case 'generous':
      return'Thank you so much.';
      break;
    case 'not as generous':
      return'Thank you.';
      break;
    default:
      return'Bye.';
      break;

  }
  
}