const jsConfetti = new JSConfetti();
setTimeout(() => {
    jsConfetti.addConfetti();
    setTimeout(() => {
        jsConfetti.addConfetti();
        setTimeout(() => {
            jsConfetti.addConfetti();
        }, 1000);
    }, 1000);
}, 1000);