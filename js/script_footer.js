let canvas = document.getElementById("myCanvas")
let ctx = canvas.getContext("2d")
let footer = document.querySelector("footer")
canvas.width = footer.clientWidth
canvas.height = footer.clientHeight

let centerX = footer.clientWidth / 2
let centerY = footer.clientHeight / 2
let x = 0
let animationPaused = false



function packmanOpen() {
    ctx.beginPath() //Corps
    ctx.arc(40 + x, centerY, 18, 0, Math.PI * 2, true)
    ctx.fillStyle = "white"
    ctx.fill()

    ctx.beginPath() //Oeil
    ctx.arc(44 + x, 20, 2, 0, Math.PI * 2, true)
    ctx.fillStyle = "#24445C"
    ctx.fill()

    ctx.beginPath() //Bouche
    ctx.moveTo(40 + x, centerY)
    ctx.lineTo(70 + x, 10)
    ctx.lineTo(70 + x, 45)
    ctx.closePath()
    ctx.fillStyle = "#24445C"
    ctx.fill()

    ctx.beginPath() //pacGum tcheaté
    ctx.arc(57 + x, 28.5, 2, 0, Math.PI * 2, true)
    ctx.fillStyle = "white"
    ctx.fill()
}

function packmanClose(x) {
    ctx.beginPath() //Corps
    ctx.arc(40 + x, centerY, 18, 0, Math.PI * 2, true)
    ctx.fillStyle = "white"
    ctx.fill()

    ctx.beginPath() //Oeil
    ctx.arc(44 + x, 20, 2, 0, Math.PI * 2, true)
    ctx.fillStyle = "#24445C"
    ctx.fill()

    ctx.beginPath() //Bouche
    ctx.strokeStyle = "#24445C"
    ctx.lineWidth = 1
    ctx.moveTo(44 + x, centerY)
    ctx.lineTo(62 + x, centerY)
    ctx.stroke()
}

function pacGum(x, y) {
    ctx.beginPath()
    ctx.arc(x, centerY, 2, 0, Math.PI * 2, true)
    ctx.lineTo(x, centerY)
    ctx.closePath()
    ctx.fillStyle = "white"
    ctx.fill()
}

function linePacGum() {
    if (!animationPaused) {
        let x = 25
        let interval = 40

        while (x < 1900) {
            pacGum(x, centerY)
            x += interval
        }
    }
}

function clearPackman() {
    ctx.clearRect(0, 0, x + 30, canvas.height)
}

function drawClose() {
    clearPackman()
    packmanClose(x, centerY)
    x += 20
}

function drawOpen() {
    clearPackman()
    packmanOpen(x, centerY)
    x += 20
}

canvas.addEventListener("click", function() {
    animationPaused = !animationPaused
    if(!animationPaused) {
        movePack()
    }
})

function animateOpen() {
    if (animationPaused) {
        return
    }
    drawOpen() 
    if (x > canvas.width) {
        x = -40
    }
    setTimeout(function() {
        linePacGum()
    requestAnimationFrame(animateClose)
    }, 180)   
}

function animateClose() {
    if (animationPaused) {
        return
    }
    drawClose() 
    if (x > canvas.width) {
        x = -40
    }
    setTimeout(function() {
        linePacGum()
        requestAnimationFrame(animateOpen)
    }, 180)       
    }  

function movePack() {
    animateOpen()
}

movePack()




