/*let menu = document.querySelector('.bars');
let navbar = document.getElementById('.navbar');
menu.onclick = () =>{
    menu.classList.toggle('svg');
    navbar.classList.toggle('active');
}*/

/*var myBtn = document.getElementsByClassName('active');
myBtn.addEventListener('click',function(event){
    window.location.href="about.html";
});
var btn = '.active';
$(btn).click(function(){
    window.location.href="about.html";
});*/
<script>
    const smallImages=document.querySelectorAll('image-container img');
    smallImages.forEach((image)=>{
        image.addEventListener('click',function(){
            const bigImage=document.getElementsByClassName('big-image');
            bigImage.src=this.src;
            smallImages .forEach((smallImage)=>{
                smallImage.classlist.remove('selected');

            });
            this.classlist.add('selected');
        });
    });

</script>