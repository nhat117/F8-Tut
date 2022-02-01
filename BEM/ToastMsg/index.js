const success = {
    title: 'Success',
    message: 'Recconect Successfully',
    type: 'success',
    duration: 5000
};

const error = {
    title: 'Error',
    message: 'Recconect Error',
    type: 'warning',
    duration: 5000
};

function toast({title, message, type, duration}) {
    const main = document.getElementById('toast');
    if (main) {
        const toast = document.createElement('div');
        const icons = {
            success:'fas fa-check-circle',
            info:'fas fa-info-circle',
            warning:'fas fa-exclamation-circle',
            error: 'fas fa-exclamation-circle'
        }
        const icon = icons[type];
        const delay = (duration/1000).toFixed(2);
        toast.classList.add('toast',`toast--${type}`)
        toast.style.animation=`animation: slide-in-left ease .3s, fadeOut linear 1s ${delay}s forwards`;
        toast.innerHTML = `
         <div class="toast__icon">
            <i class="${icon}"></i>
        </div>
        <div class="toast__body">
            <h3 class="toast__title">${title}</h3>
            <p class="toast__msg">${message}</p>
        </div>
        <div class="toast__close">
            <i class="fas fa-times"></i>
        </div>
       `;
        let timeout = setTimeout(()=>{
            main.removeChild(toast);
        }, duration + 1000);
        
        toast.onclick =(e) =>{
            if(e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(timeout);
                console.log('cleared');
            }
        }
        main.appendChild(toast);
       
    }
}

const button = document.getElementsByClassName('btn--success');
button[0].addEventListener("click",()=>{toast(success);});
const button2 = document.getElementsByClassName('btn--warn');
button2[0].addEventListener("click",()=>{toast(error);});