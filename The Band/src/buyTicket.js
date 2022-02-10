function purchase() {
    const buyBtns = document.querySelectorAll('.js-buy-ticket');
    for (const buyBtn of buyBtns) {
        buyBtn.addEventListener('click', () => {
            modalDisplay();
        });
    }
}

function modalDisplay() {
    const modal = document.querySelector('.js-modal');
    modal.classList.add('open');
    modalCloseButtonHandler(modal);
}

function modalCloseButtonHandler(modal) {
    const modalButton = document.querySelector('.js-modal-close');
    const modalContainer = document.querySelector('.js-modal-container')
    modal.addEventListener('click', () => {modal.classList.remove('open');});
    modalButton.addEventListener('click', () => {
        modal.classList.remove('open');
    });
    modalContainer.addEventListener('click', (event) => {
        event.stopPropagation();
    })
}

purchase();
