vElements = document.querySelectorAll("video");
for (let i = 1; i < vElements.length; i++) {
    let video = document.getElementById(i).firstElementChild;
    video.addEventListener('loadedmetadata', function () {
        let vLength = video.duration;
        //   console.log(vLength + ' seconds \n');
        document.getElementById(i).lastElementChild.innerHTML = format(vLength);
    });
}

function format(s) {
    var m = Math.floor(s / 60);
    m = (m >= 10) ? m : "0" + m;
    s = Math.floor(s % 60);
    s = (s >= 10) ? s : "0" + s;
    return m + ":" + s;
}
