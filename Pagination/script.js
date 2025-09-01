let nxtBtn = document.querySelector('.next');
let prvBtn = document.querySelector('.prev');
let pages = document.querySelectorAll('.page');
nxtBtn.addEventListener('click', function () {
    let activePage = document.querySelector('.active');
    let nextPage = activePage.nextElementSibling;
    if (nextPage) {
        activePage.classList.remove('active');
        nextPage.classList.add('active');
    }
})
prvBtn.addEventListener('click', function () {
    let activePage = document.querySelector('.active');
    let prevPage = activePage.previousElementSibling;
    if (prevPage) {
        activePage.classList.remove('active');
        prevPage.classList.add('active');
    }
})
pages.forEach(function (page) {
    page.addEventListener('click', function () {
        let activePage = document.querySelector('.active');
        activePage.classList.remove('active');
        page.classList.add('active');
    })
})