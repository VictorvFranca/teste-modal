const modal = document.querySelector('.container');
const btn_close = document.querySelector('[btn-close]');
const btn_open = document.querySelector('[btn-open]');



const onOpen = () =>{
	modal.classList.add('active');
}

const onClose = () =>{
	modal.classList.remove('active');
}

btn_open.addEventListener('click',onOpen);

btn_close.addEventListener('click',onClose);
