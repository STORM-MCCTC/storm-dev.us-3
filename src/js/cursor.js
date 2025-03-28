
let cursorFrames = [
    "../src/cur/pixil-frame-0.png",
    "../src/cur/pixil-frame-1.png",
    "../src/cur/pixil-frame-2.png",
    "../src/cur/pixil-frame-3.png",
    "../src/cur/pixil-frame-4.png",
    "../src/cur/pixil-frame-5.png",
    "../src/cur/pixil-frame-6.png",
    "../src/cur/pixil-frame-7.png",
    "../src/cur/pixil-frame-8.png",
    "../src/cur/pixil-frame-9.png",
    "../src/cur/pixil-frame-10.png",
    "../src/cur/pixil-frame-11.png",
    "../src/cur/pixil-frame-12.png",
    "../src/cur/pixil-frame-13.png"
];

    let frameIndex = 0;

    function animateCursor() {
        document.documentElement.style.cursor = `url('${cursorFrames[frameIndex]}'), auto`;

        frameIndex = (frameIndex + 1) % cursorFrames.length;
    }

    setInterval(animateCursor, 250);