function menuHandler() {
    const header = document.querySelector('.header');
    const menuBtn = document.querySelector('.js-mobile-menu');
    const headerState = header.clientHeight;
    menuBtn.addEventListener('click', () => {
        navHandler(header, headerState);
    })
    navBarButtonHandler(header);
}

function navHandler(header, headerState) {
    let isClose = header.clientHeight === headerState;
    if (isClose) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}

function navBarButtonHandler(header) {
    let menuItemBtns = document.querySelectorAll('.js-menu-btn[href*="#"]');
    for (const btn of menuItemBtns) {
        btn.addEventListener('click', (event) => {
            let isParentMenu = btn.nextElementSibling && btn.nextElementSibling.classList.contains('js-header-sub-nav');
            if (isParentMenu) {
                event.preventDefault();
            }
            header.style.height = null;
        })
    }
}

menuHandler();