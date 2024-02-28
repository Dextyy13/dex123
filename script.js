let navbar = document.querySelector('.navbar')

document.querySelector('#menu-bar').onclick = () =>{
    navbar.classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    navbar.classList.remove('active');
}

window.onscroll = () =>{

    navbar.classList.remove('active');

    if(Window.scrollY > 100){
        document.querySelector('header').classList.add('active');
    }else{
        document.querySelector('header').classList.remove('active');
    }
    
}

let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-sun');
    if(themeToggler.classList.contains('fa-sun')){
        document.querySelector('body').classList.add('active');
    }else{
        document.querySelector('body').classList.remove('active');
    }
}

document.querySelectorAll('.small-image-1').forEach(images =>{
    images.onclick = () =>{
        document.querySelector('.big-image-1').src = images.getAttribute('src');
    }
});

document.querySelectorAll('.small-image-2').forEach(images =>{
    images.onclick = () =>{
        document.querySelector('.big-image-2').src = images.getAttribute('src');
    }
});

document.querySelectorAll('.small-image-3').forEach(images =>{
    images.onclick = () =>{
        document.querySelector('.big-image-3').src = images.getAttribute('src');
    }
});

let countDate = new Date('jan, 2024 00:00:00').getTime();

function countDown(){

    let now = new Date().getTime();
    gap = now - countDate;

    let seconds = 1000;
    let minutes = seconds * 60;
    let hours = minutes * 60;
    let day = hours * 24;

    let d = Math.floor(gap / (day));
    let h = Math.floor((gap % (day)) / (hours));
    let m = Math.floor((gap % (hours)) / (minutes));
    let s = Math.floor((gap % (minutes)) / (seconds));

    document.getElementById('days').innerText = d;
    document.getElementById('hours').innerText = h;
    document.getElementById('minutes').innerText = m;
    document.getElementById('seconds').innerText = s;

}

setInterval(function(){
    countDown()
},1000);

var swiper = new Swiper(".product-slider", {
    slidesPerview: 3,
    loop:true,
    spaceBetween: 10,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
       0: {
            slidesPerview: 1,
       },
       550: {
        slidesPerview: 2,
       },
       800: {
        slidesPerview: 3,
       },
       1000: {
        slidesPerview: 3,
       }
    },
});

var swiper = new Swiper(".review-slider", {
    slidesPerview: 3,
    loop:true,
    spaceBetween: 10,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
       0: {
            slidesPerview: 1,
       },
       550: {
        slidesPerview: 2,
       },
       800: {
        slidesPerview: 3,
       },
       1000: {
        slidesPerview: 3,
       }
    },
});

function toggleForm(formId) {
    document.getElementById('login-form').style.display = formId === 'login-form' ? 'block' : 'none';
    document.getElementById('register-form').style.display = formId === 'register-form' ? 'block' : 'none';
}

function checkPassword() {
    var storedPassword = localStorage.getItem("password");
    var enteredPassword = document.getElementById("password").value;

    if (!storedPassword) {
        // Prompt user to set a password for the first time
        var newPassword = prompt("Set your password:");
        localStorage.setItem("password", newPassword);
        alert("Password set successfully. Please enter your password again to unlock.");
    } else {
        // Check entered password against stored password
        if (enteredPassword === storedPassword) {
            window.location.href = '1.html'; // Replace with the actual filename of your unlocked page
        } else {
            alert('Incorrect password. Please try again.');
        }
    }
}


let add = document.querySelector('.add')

document.querySelector('#wanwan').onclick = () =>{
    add.classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    add.classList.remove('active');
}

window.onscroll = () =>{

    add.classList.remove('active');

    if(Window.scrollY > 100){
        document.querySelector('wanwan').classList.add('active');
    }else{
        document.querySelector('wanwan').classList.remove('active');
    }
    
}


















