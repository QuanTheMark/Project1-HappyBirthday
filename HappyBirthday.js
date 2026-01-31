const container = document.getElementById("sparkles");

for (let i = 0; i < 50; i++) {
    const s = document.createElement("div");
    s.className = "sparkle";
    s.style.left = Math.random() * window.innerWidth + "px";
    s.style.top = Math.random() * window.innerHeight + "px";
    s.style.animationDelay = Math.random() * 2 + "s";
    document.body.appendChild(s);
}
/* FIREWORK */
function firework(x, y) {
    for (let i = 0; i < 50; i++) {
        const f = document.createElement("div");
        f.className = "firework";
        f.style.left = x + "px";
        f.style.top = y + "px";
        f.style.background = `hsl(${Math.random()*360},100%,60%)`;
        f.style.setProperty("--x", `${(Math.random()-0.5)*200}px`);
        f.style.setProperty("--y", `${(Math.random()-0.5)*200}px`);
        document.body.appendChild(f);
        setTimeout(() => f.remove(), 1000);
        
    }
    
}

setInterval(() => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    firework(x, y);
}, 500);


/* CLICK: PHÁO HOA*/
document.addEventListener("click", (e) => {
    firework(e.clientX, e.clientY);
});

/* ÂM THANH */
const bgm = document.getElementById("bgm");
document.addEventListener("click", () => {
    bgm.volume = 0.5;
    bgm.play();
    
}, { once: true });
