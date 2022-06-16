'use strict mode'

function h31() {
  setTimeout(() => {
    
 
    document.getElementById('dropdown1').style.display = 'inherit'
    document.getElementById('dropdown1').style.transition = '0.8s'
    document.getElementById('h31').style.color = 'blue'
  },  300);
  }
  function h01() {
    setTimeout(() => {
      
    
      document.getElementById('dropdown1').style.display = 'none'
      document.getElementById('h31').style.color = 'black'
    }, 4000);
  }
  function h32() {
    setTimeout(() => {
    document.getElementById('dropdown2').style.display = 'inherit'
    document.getElementById('dropdown2').style.transition = '0.3s'
    document.getElementById('h32').style.color = 'blue'
  }, 300);
  }
  function h02() {
    setTimeout(() => {
      document.getElementById('dropdown2').style.display = 'none'
      document.getElementById('h32').style.color = 'black'
    }, 4000);
  }
  function h33() {
    setTimeout(() => {
    document.getElementById('dropdown3').style.display = 'inherit'
    document.getElementById('dropdown3').style.transition = '0.3s'
    document.getElementById('h33').style.color = 'blue'
  }, 300);
  }
  function h03() {
    setTimeout(() => {
      document.getElementById('dropdown3').style.display = 'none'
      document.getElementById('h33').style.color = 'black'
    }, 4000);
  }
  function h34() {
    setTimeout(() => {
    document.getElementById('dropdown4').style.display = 'inherit'
    document.getElementById('dropdown4').style.transition = '0.3s'
    document.getElementById('h34').style.color = 'blue'
  }, 300);
  }
  function h04() {
    setTimeout(() => {
      document.getElementById('dropdown4').style.display = 'none'
      document.getElementById('h34').style.color = 'black'
    }, 4000);
  }
  function care() {
   care =  prompt('WOULD YOU LIKE TO GET IN TOUCH WITH OUR CUSTOMER SERVICE') 
   if(care ='yes'){
       alert('PLS WAIT AS SOMEONE WILL GET IN TOUCH WITH YOU SOON')
   }else{
alert('WHY YOU CON CLICK AM IN THE FIRST')
   }
  }
  function dark() {
      document.getElementById('body').style.backgroundColor ='black'
      document.getElementById('h31').style.color = 'white'
      document.getElementById('h32').style.color = 'white'
      document.getElementById('h33').style.color = 'white'
      document.getElementById('h34').style.color = 'white'
      document.getElementById('h35').style.color = 'white'
      document.getElementById('getstarted').style.color = 'white'
      document.getElementById('getstarted').style.border = 'white'
      document.getElementById('21').style.color = 'white'
      document.getElementById('22').style.color = 'white'
  }
  function light() {
    document.getElementById('body').style.backgroundColor ='white'
    document.getElementById('h31').style.color = 'black'
    document.getElementById('h32').style.color = 'black'
    document.getElementById('h33').style.color = 'black'
    document.getElementById('h34').style.color = 'black'
    document.getElementById('h35').style.color = 'black'
    document.getElementById('getstarted').style.color = 'blue'
  }