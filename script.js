const unreads = document.querySelectorAll(".unread");

const unreadMark = document.querySelector(".unreadMark");
const dotMark = document.querySelector(".dotMark");
const unreadAngela = document.querySelector(".unreadAngela");
const dotAngela = document.querySelector(".dotAngela");
const unreadJacob = document.querySelector(".unreadJacob");
const dotJacob = document.querySelector(".dotJacob");

const markReadAll = document.querySelector(".mark");
const notifCounts = document.querySelector(".counts");

var counts = unreads.length;
notifCounts.innerHTML = counts;

unreadMark.addEventListener("click", function(){
    unreadMark.classList.remove("unread");
    unreadMark.classList.remove("unreadMark");
    dotMark.classList.add("dot-hide");
    counts -= 1;
    notifCounts.innerHTML = counts;
    eraseCounts();
}, {once: true});

unreadAngela.addEventListener("click", function(){
    unreadAngela.classList.remove("unread");
    unreadAngela.classList.remove("unreadAngela");
    dotAngela.classList.add("dot-hide");
    counts -= 1;
    notifCounts.innerHTML = counts;
    eraseCounts();
}, {once: true});

unreadJacob.addEventListener("click", function(){
    unreadJacob.classList.remove("unread");
    unreadJacob.classList.remove("unreadJacob");
    dotJacob.classList.add("dot-hide");
    counts -= 1;
    notifCounts.innerHTML = counts;
    eraseCounts();
}, {once: true});


markReadAll.addEventListener("click", function(){
    unreadMark.classList.remove("unread");
    unreadMark.classList.remove("unreadMark");
    dotMark.classList.add("dot-hide");

    unreadAngela.classList.remove("unread");
    unreadAngela.classList.remove("unreadAngela");
    dotAngela.classList.add("dot-hide");

    unreadJacob.classList.remove("unread");
    unreadJacob.classList.remove("unreadJacob");
    dotJacob.classList.add("dot-hide");

    counts -= unreads.length;
    console.log(counts);
    eraseCounts();
}, {once: true});


function eraseCounts(){
    if(counts <= 0){
        notifCounts.style.display = "none";
    }
}