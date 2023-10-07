let nam = document.getElementById("name")
let btn = document.getElementById("submit")
let cmt = document.getElementById("comments")
let res = document.getElementById("result")
let sub = document.getElementById("em")

btn.addEventListener('click', (ev) => {
    nameChecker(ev)
})

function nameChecker(ev) {
    if (nam.value == "") {
        ev.preventDefault()
        nam.style.border = "1px solid red"
        res.innerText = "Oh ho!, You've missed to fill your name!"
        res.style.color = "red"
    }
    else if (nam.value.length > 20) {
        ev.preventDefault()
        nam.style.border = "1px solid red"
        res.innerText = "The name is big enough!"
        res.style.color = "red"
    } else {
        nam.style.border = "initial"
        ev.preventDefault()
        emailChecker(ev)
    }
}

function emailChecker(ev) {
    if (sub.value == "") {
        ev.preventDefault()
        em.style.border = "1px solid red"
        res.innerText = "Oh ho!, You've missed to fill your email!"
        res.style.color = "red"
    } else if (!sub.value.includes("@")) {
        ev.preventDefault()
        em.style.border = "1px solid red"
        res.innerText = "Oh ho!, You've email does not includes an '@' symbol!"
        res.style.color = "red"
    } else if (!sub.value.includes(".")) {
        ev.preventDefault()
        em.style.border = "1px solid red"
        res.innerText = "Oh ho!, You've email does not includes a '.' symbol!"
        res.style.color = "red"
    } else {
        em.style.border = "initial"
        ev.preventDefault()
        commentChecker(ev)
    }
}

function commentChecker(ev) {
    if (cmt.value == "") {
        ev.preventDefault()
        cmt.style.border = "1px solid red"
        res.innerText = "If you have anything feel free to say, or just type hi!"
        res.style.color = "red"
    } else {
        cmt.style.border = "initial"
        res.innerText = ""
        btn.submit()
    }
}