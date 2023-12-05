const accordionBtns = document.querySelectorAll('.accordion-btn');

accordionBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        this.classList.toggle('active');
        const accordionDescription = this.nextElementSibling;
        const plus = this.querySelectorAll('.plus');
        const minus = this.querySelectorAll('.minus');

        if(accordionDescription.style.maxHeight) {
            accordionDescription.style.maxHeight = null;
            plus[0].style.display = 'block';
            minus[0].style.display = 'none';
        } else {
            accordionDescription.style.maxHeight = accordionDescription.scrollHeight + 'px';
            plus[0].style.display = 'none';
            minus[0].style.display = 'block';
        }
    })
})