window.onload = function () {
    let iframe

    iframe = document.createElement("iframe");
    iframe.id = "loading"
    iframe.src = "loading.html"
    iframe.title = "Loading"
    iframe.style.display = "none"
    document.querySelector("body").prepend(iframe);

    iframe.onload = function () {
        iframe.style.display = "block"
    }

    setTimeout(() => {
        iframe = document.createElement("iframe");
        iframe.id = "login"
        iframe.src = "login.html"
        iframe.title = "Login"
        document.querySelector("body").prepend(iframe);

        iframe.onload = function () {
            document.querySelector("#loading").remove()
        }
    }, 5000);
};
