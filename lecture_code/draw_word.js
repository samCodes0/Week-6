let canvas = document.querySelector('#canvas');
let context = canvas.getContext('2d');

let input = document.querySelector('#image-text');
input.disabled = true;

let image = new Image();
image.src = 'underwater.jpg';

image.addEventListener('load', function(){
    context.drawImage(image, 0, 0);
    input.disabled = false;
});

input.addEventListener('input', function() {
    let text = this.value;
    context.font = '40px courier';
    context.drawImage(image, 0, 0);
    context.fillText(text, 100, 30);
})
