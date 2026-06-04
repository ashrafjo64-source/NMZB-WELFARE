const testimonials = [
'★★★★★ <br> "Excellent service and very affordable insurance."',
'★★★★★ <br> "The medical card coverage helped my family a lot."',
'★★★★★ <br> "Fast claim approval and friendly customer support."',
'★★★★★ <br> "Highly recommended for family protection."'
];

let index = 0;

setInterval(() => {

index++;

if(index >= testimonials.length){
    index = 0;
}

document.getElementById("testimonial").innerHTML =
testimonials[index];

},3000);