'use strict mode'

function h31() {
    document.getElementById('dropdown1').style.display = 'inherit'
    document.getElementById('dropdown1').style.transition = '0.8s'
    document.getElementById('h31').style.color = 'blue'
  }
  function h01() {
      document.getElementById('dropdown1').style.display = 'none'
      document.getElementById('h31').style.color = 'black'
  }
  function h32() {
    document.getElementById('dropdown2').style.display = 'inherit'
    document.getElementById('dropdown2').style.transition = '0.3s'
    document.getElementById('h32').style.color = 'blue'
  }
  function h02() {
      document.getElementById('dropdown2').style.display = 'none'
      document.getElementById('h32').style.color = 'black'
  }
  function h33() {
    document.getElementById('dropdown3').style.display = 'inherit'
    document.getElementById('dropdown3').style.transition = '0.3s'
    document.getElementById('h33').style.color = 'blue'
  }
  function h03() {
      document.getElementById('dropdown3').style.display = 'none'
      document.getElementById('h33').style.color = 'black'
  }
  function h34() {
    document.getElementById('dropdown4').style.display = 'inherit'
    document.getElementById('dropdown4').style.transition = '0.3s'
    document.getElementById('h34').style.color = 'blue'
  }
  function h04() {
      document.getElementById('dropdown4').style.display = 'none'
      document.getElementById('h34').style.color = 'black'
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
  }
  function light() {
    document.getElementById('body').style.backgroundColor ='white'
    document.getElementById('h31').style.color = 'black'
    document.getElementById('h32').style.color = 'black'
    document.getElementById('h33').style.color = 'black'
    document.getElementById('h34').style.color = 'black'
    document.getElementById('h35').style.color = 'black'
    document.getElementById('getstarted').style.color = 'blue'
    document.getElementById('getstarted').style.border = 'blue'
  }