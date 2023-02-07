setTimeout(() => {
    const slider = document.getElementById('planets');
   
    let mouseDown = false;
    let startX, scrollLeft;

    let dragInit = function (e) {
        mouseDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    };
    let dragStop = function (event) {
        mouseDown = false;
    };

    slider.addEventListener('mousemove', (e) => {
    e.preventDefault();
    if(!mouseDown) { return; }
    const x = e.pageX - slider.offsetLeft;
    const scroll = x - startX;
    slider.scrollLeft = scrollLeft - scroll;
    });

    slider.addEventListener('mousedown', dragInit, false);
    slider.addEventListener('mouseup', dragStop, false);
    slider.addEventListener('mouseleave', dragStop, false);
}, 100)


export default function getRandomDate() {

    let day = Math.floor(Math.random() * 30)
    let month = Math.floor(Math.random() * 11);
    let year = Math.floor(Math.random() * 2000);

    return `${year}-${month}-${day}`;

}