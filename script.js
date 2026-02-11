const overlay = document.getElementById("fullscreenOverlay");
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", async () => {
    // request fullscreen on the body
    if (document.body.requestFullscreen) {
        await document.body.requestFullscreen();
    } else if (document.body.webkitRequestFullscreen) { // Safari
        await document.body.webkitRequestFullscreen();
    }

    // hide overlay
    overlay.style.display = "none";

    // now start your main app
    thing();
});


function thing() {
    let text = document.getElementsByTagName("h1")[1];
    let yes = document.getElementById("yesBtn");
    let no = document.getElementById("noBtn");

    let noClicks = 0;

    yes.addEventListener("click", () => {
        text.textContent = "YAAAYY <333";
        yes.style.display = "none";
        no.style.display = "none";
        document.getElementsByTagName("img")[0].style.display = "none";

        let waguri = document.createElement("img");
        waguri.setAttribute("src", "./assets/kaoruko-waguri-kaoruko.gif");
        document.getElementsByClassName("container")[0].appendChild(waguri);
    });

    no.addEventListener("click", () => {
        noClicks++;

        if (noClicks === 1) {
            no.textContent = "Are you sure";
        } else if (noClicks === 2) {
            document.documentElement.style.setProperty('--bg-color', 'black');
            text.textContent = "Is that so...";
            text.style.color = "white";

            yes.style.display = "none";
            no.style.display = "none";
            document.getElementsByTagName("img")[0].style.display = "none";

            setTimeout(() => {
                let youWillPayText = document.createElement("h1");
                youWillPayText.textContent = "You will pay for this!";
                youWillPayText.style.color = "white";
                youWillPayText.style.marginTop = "20px";

                document.getElementsByClassName("container")[0].appendChild(youWillPayText);

                setTimeout(() => {
                    let deletingText = document.createElement("h1");
                    deletingText.textContent = "Deleting ./System32 in 3";
                    deletingText.style.color = "white";
                    deletingText.style.marginTop = "20px";

                    document.getElementsByClassName("container")[0].appendChild(deletingText);

                    setTimeout(() => {
                        deletingText.textContent = "Deleting ./System32 in 3...2";

                        setTimeout(() => {
                            deletingText.textContent = "Deleting ./System32 in 3...2...1";

                            setTimeout(() => {
                                for (let element of document.getElementsByClassName("container")[0].children) {
                                    element.style.display = "none";
                                }

                                blue();
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1500);


            }, 1500);

        }
    });
}


function blue() {

    let baka = new Audio('./assets/baka-cirno.mp3');

    // wipe the page
    document.body.innerHTML = "";
    document.body.style.margin = "0";
    document.documentElement.style.setProperty('--bg-color', '#0078D7');
    document.body.style.color = "white";
    document.body.style.fontFamily = "Segoe UI, Arial, sans-serif";

    // main container
    let screen = document.createElement("div");
    screen.style.padding = "80px";
    screen.style.maxWidth = "900px";

    // big sad face
    let face = document.createElement("div");
    face.textContent = ":(";
    face.style.fontSize = "120px";
    face.style.marginBottom = "40px";

    // main text
    let title = document.createElement("div");
    title.textContent = "Your PC ran into a problem and needs to restart.";
    title.style.fontSize = "32px";
    title.style.marginBottom = "20px";

    let subtitle = document.createElement("div");
    subtitle.textContent =
        "We're just collecting some error info, and then we'll restart for you.";
    subtitle.style.fontSize = "20px";
    subtitle.style.marginBottom = "40px";

    // fake progress
    let progress = document.createElement("div");
    progress.textContent = "0% complete";
    progress.style.fontSize = "18px";
    progress.id = "progress";

    // stop code
    let stopCode = document.createElement("a");
    stopCode.textContent = "Stop code: VALENTINE_REJECTION_ERROR";
    stopCode.setAttribute("href", "https://youtu.be/dQw4w9WgXcQ?si=nPFgqb5u6RoFABMd")
    stopCode.style.fontSize = "14px";
    stopCode.style.marginTop = "40px";
    stopCode.style.opacity = "0.8";

    screen.appendChild(face);
    screen.appendChild(title);
    screen.appendChild(subtitle);
    screen.appendChild(progress);
    screen.appendChild(stopCode);

    document.body.appendChild(screen);

    // fake progress increase
    let percent = 0;
    let interval = setInterval(() => {

        if (percent == 100) {
            progress.textContent = "Restarting...";
            baka.play();

            setTimeout(() => {
                percent = 0;
            }, 1000);
        } else {
            percent++;
            progress.textContent = percent + "% complete";
        }
    }, 100);
}
