const image=document.querySelector('.profile img');
image.addEventListener('click',display);
function display(){
    image.src="https://avatars.dicebear.com/api/avataaars/bjhjhklgklglglglgblhgfcmkloigvcb.svg";
}
document.querySelector('.about i').addEventListener('click',change);
function change(){
    const setting=document.querySelector('.about .hContent');
    if(setting.style.display=="inline"){setting.style.display="none"}
    else{setting.style.display="inline"}
}