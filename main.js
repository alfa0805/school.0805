let headermenyu = document.querySelector(".header__menyu");
let bars = document.querySelector(".header__bars");

bars.addEventListener('click', function(){
    headermenyu.classList.toggle("show")
    
})

let form = document.querySelector(".sletter__form");
let input = document.querySelector(".sletter__form-input");
let formbtn = document.querySelector(".sletter__form-btn");

formbtn.addEventListener('click' , function(e){
    e.preventDefault();
    if(input.value.trim() === ''){
       alert('Please enter a message');
       return;
     }
     let token = "7519624691:AAGw5kc72DDVM3fE1iv4t_vwfXvJqzo8mQM"
     let chatId = 1957552716;
     let url = `https://api.telegram.org/bot${token}/sendMessage`
     let text = `you email : ${input.value}` 
     fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: text,
        })
    }).then(()=>{
        formItem.reset()
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
          });
      }).catch(()=>{
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "error"
          });
      })
})

let headerbtn = document.querySelector(".header__block-btn");
headerbtn.addEventListener('click' , function(e){
    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "error"
      });
})
let asideleftbtn = document.querySelector(".aside__row-leftbtn");
asideleftbtn.addEventListener('click' , function(){
    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
})

let asiderightbtn = document.querySelector(".aside__row-rightbtn");
asiderightbtn.addEventListener('click' , function(){
    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
})
