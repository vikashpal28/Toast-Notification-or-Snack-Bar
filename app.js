let toastBox = document.getElementById('toastBox');
let successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully Submitted';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Fixed the error';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid inout, check again';

function showtoast(Msg){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = Msg;
    toastBox.appendChild(toast);

    if(Msg.includes('error')){
        toast.classList.add('error');
    }

    if(Msg.includes('Invalid')){
        toast.classList.add('invalid');
    }

    setTimeout(()=>{
        toast.remove();
    },6000);
}