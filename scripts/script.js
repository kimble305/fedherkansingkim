// JavaScript Document
console.log("nike");

let currentIndex = 0;
let slidesToShow = 4; 3
let touchStartX;

function handleResponsiveSlides() {
    const wrapper = document.querySelector('.carousel-wrapper');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    if (window.innerWidth < 960) {
        slidesToShow = 1; 
    } else if (window.innerWidth < 1200) {
        slidesToShow = 2; 
    } else if (window.innerWidth < 1450) {
        slidesToShow = 3;
    } else {
        slidesToShow = 4; 
        wrapper.style.flex = '0 0 100%'; 
    }

    if (currentIndex >= totalItems - slidesToShow) {
        currentIndex = totalItems - slidesToShow;
    } else if (currentIndex < 0) {
        currentIndex = 0;
    }

    const translateValue = -currentIndex * (100 / slidesToShow) + '%';
    wrapper.style.transform = 'translateX(' + translateValue + ')';
}

function showSlide(index) {
    currentIndex = index;
    handleResponsiveSlides();
}

function nextSlide() {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    if (currentIndex < totalItems - slidesToShow) {
        showSlide(currentIndex + 1);
    } else {
        showSlide(0);
    }
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function handleTouchStart(event) {
    touchStartX = event.touches[0].clientX;
}

function handleTouchMove(event) {
    const sensitivity = 50; 
    const delta = touchStartX - event.touches[0].clientX;

    if (delta > sensitivity) {
        nextSlide();
        touchStartX = event.touches[0].clientX; 
    } else if (delta < -sensitivity) {
        prevSlide();
        touchStartX = event.touches[0].clientX;
    }
}

function handleTouchEnd() {
}

function initTouchEvents() {
    const wrapper = document.querySelector('.carousel-wrapper');
    wrapper.addEventListener('touchstart', handleTouchStart, false);
    wrapper.addEventListener('touchmove', handleTouchMove, false);
    wrapper.addEventListener('touchend', handleTouchEnd, false);
}

function init() {
    handleResponsiveSlides();
    if (window.innerWidth <= 960) {
        initTouchEvents();
    }
}

init();

// Nike Dunk SB's

let currentIndex2 = 0;
    let touchStartX2;

    function showSlide2(index) {
        const wrapper2 = document.querySelector('.carousel-wrapper2');
        const items = document.querySelectorAll('.carousel-item2');
        const totalItems = items.length;
        let slidesToShow = 3; 

        if (window.innerWidth < 960) {
            slidesToShow = 1; 
        } else if (window.innerWidth < 1200) {
            slidesToShow = 2; 
        } else if (window.innerWidth < 1450) {
            slidesToShow = 3; 
        }

        if (index >= totalItems) {
            currentIndex2 = 0;
        } else if (index < 0) {
            currentIndex2 = totalItems - slidesToShow;
        } else {
            currentIndex2 = index;
        }

        const translateValue = -currentIndex2 * (100 / slidesToShow) + '%';
        wrapper2.style.transform = 'translateX(' + translateValue + ')';
    }

    function nextSlide2() {
        const items = document.querySelectorAll('.carousel-item2');
        const totalItems = items.length;
        let slidesToShow = 3; 

       
        if (window.innerWidth < 960) {
            slidesToShow = 1; 
        } else if (window.innerWidth < 1200) {
            slidesToShow = 2; 
        } else if (window.innerWidth < 1450) {
            slidesToShow = 3;
        }

        if (currentIndex2 < totalItems - slidesToShow) {
            showSlide2(currentIndex2 + 1);
        } else {
            showSlide2(0);
        }
    }

    function prevSlide2() {
        showSlide2(currentIndex2 - 1);
    }

    function handleTouchStart2(event) {
        touchStartX2 = event.touches[0].clientX;
    }

    function handleTouchMove2(event) {
        const sensitivity = 50; 
        const delta = touchStartX2 - event.touches[0].clientX;

        if (delta > sensitivity) {
            nextSlide2();
            touchStartX2 = event.touches[0].clientX; 
        } else if (delta < -sensitivity) {
            prevSlide2();
            touchStartX2 = event.touches[0].clientX; 
        }
    }

    function handleTouchEnd2() {
        
    }

    function initTouchEvents2() {
        const wrapper2 = document.querySelector('.carousel-wrapper2');
        wrapper2.addEventListener('touchstart', handleTouchStart2, false);
        wrapper2.addEventListener('touchmove', handleTouchMove2, false);
        wrapper2.addEventListener('touchend', handleTouchEnd2, false);
    }

    function init2() {
        showSlide2(currentIndex2);
        if (window.innerWidth <= 960) {
            initTouchEvents2();
        }
    }

    
    init2();

    // Ontdek onze iconen

    let currentIndex3 = 0;
    let slidesToShow3 = 4; 
    let touchStartX3;

    function handleResponsiveSlides3() {
        const wrapper3 = document.querySelector('.carousel-wrapper3');
        const items3 = document.querySelectorAll('.carousel-item3');
        const totalItems3 = items3.length;

        
        if (window.innerWidth < 960) {
            slidesToShow3 = 1; 
        } else if (window.innerWidth < 1200) {
            slidesToShow3 = 2; 
        } else if (window.innerWidth < 1450) {
            slidesToShow3 = 3; 
        }

        if (currentIndex3 >= totalItems3) {
            currentIndex3 = 0;
        } else if (currentIndex3 < 0) {
            currentIndex3 = totalItems3 - slidesToShow3;
        }

        const translateValue = -currentIndex3 * (100 / slidesToShow3) + '%';
        wrapper3.style.transform = 'translateX(' + translateValue + ')';
    }

    function showSlide3(index) {
        handleResponsiveSlides3();
        currentIndex3 = index;
        handleResponsiveSlides3();
    }

    function nextSlide3() {
        const items3 = document.querySelectorAll('.carousel-item3');
        const totalItems3 = items3.length;

        if (currentIndex3 < totalItems3 - slidesToShow3) {
            showSlide3(currentIndex3 + 1);
        } else {
            showSlide3(0);
        }
    }

    function prevSlide3() {
        showSlide3(currentIndex3 - 1);
    }

    function handleTouchStart3(event) {
        touchStartX3 = event.touches[0].clientX;
    }

    function handleTouchMove3(event) {
        const sensitivity = 50; 
        const delta = touchStartX3 - event.touches[0].clientX;

        if (delta > sensitivity) {
            nextSlide3();
            touchStartX3 = event.touches[0].clientX; 
        } else if (delta < -sensitivity) {
            prevSlide3();
            touchStartX3 = event.touches[0].clientX; 
        }
    }

    function handleTouchEnd3() {
        
    }

    function initTouchEvents3() {
        const wrapper3 = document.querySelector('.carousel-wrapper3');
        wrapper3.addEventListener('touchstart', handleTouchStart3, false);
        wrapper3.addEventListener('touchmove', handleTouchMove3, false);
        wrapper3.addEventListener('touchend', handleTouchEnd3, false);
    }

    function init3() {
        handleResponsiveSlides3();
        if (window.innerWidth <= 960) {
            initTouchEvents3();
        }
    }

    
    init3();

    // Trending deze week

    let currentIndex4 = 0;
    let slidesToShow4 = 3; 
    let touchStartX4;

    function handleResponsiveSlides4() {
        const wrapper4 = document.querySelector('.carousel-wrapper4');
        const items4 = document.querySelectorAll('.carousel-item4');
        const totalItems4 = items4.length;

        
        if (window.innerWidth < 960) {
            slidesToShow4 = 1; 
        } else if (window.innerWidth < 1200) {
            slidesToShow4 = 2; 
        } else if (window.innerWidth < 1450) {
            slidesToShow4 = 3; 
        }

        if (currentIndex4 >= totalItems4) {
            currentIndex4 = 0;
        } else if (currentIndex4 < 0) {
            currentIndex4 = totalItems4 - slidesToShow4;
        }

        const translateValue = -currentIndex4 * (100 / slidesToShow4) + '%';
        wrapper4.style.transform = 'translateX(' + translateValue + ')';
    }

    function showSlide4(index) {
        handleResponsiveSlides4();
        currentIndex4 = index;
        handleResponsiveSlides4();
    }

    function nextSlide4() {
        const items4 = document.querySelectorAll('.carousel-item4');
        const totalItems4 = items4.length;

        if (currentIndex4 < totalItems4 - slidesToShow4) {
            showSlide4(currentIndex4 + 1);
        } else {
            showSlide4(0);
        }
    }

    function prevSlide4() {
        showSlide4(currentIndex4 - 1);
    }

    function handleTouchStart4(event) {
        touchStartX4 = event.touches[0].clientX;
    }

    function handleTouchMove4(event) {
        const sensitivity = 50; 
        const delta = touchStartX4 - event.touches[0].clientX;

        if (delta > sensitivity) {
            nextSlide4();
            touchStartX4 = event.touches[0].clientX; 
        } else if (delta < -sensitivity) {
            prevSlide4();
            touchStartX4 = event.touches[0].clientX; 
        }
    }

    function handleTouchEnd4() {
        
    }

    function initTouchEvents4() {
        const wrapper4 = document.querySelector('.carousel-wrapper4');
        wrapper4.addEventListener('touchstart', handleTouchStart4, false);
        wrapper4.addEventListener('touchmove', handleTouchMove4, false);
        wrapper4.addEventListener('touchend', handleTouchEnd4, false);
    }

    function init4() {
        handleResponsiveSlides4();
        if (window.innerWidth <= 960) {
            initTouchEvents4();
        }
    }

    
    init4();
