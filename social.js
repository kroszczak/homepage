x = document.querySelectorAll('.link');

colors = ["#4267B2" , "#282828", "#ccc", "#464646"];
images = ['facebook.png','youtube.png', 'github.png', 'gmail.png']
links = [ 'https://www.facebook.com/', 'https://www.youtube.com/?gl=PL', 'https://github.com/kroszczak', 'https://mail.google.com/mail/u/0/']

for(let i = 0; i < 4; i++){
    
    x[i].style.backgroundColor = colors[i];
    x[i].innerHTML = `<a href = "${links[i]}" target = "_blank"> <img src = "images/${images[i]}"/> </a>`;
}