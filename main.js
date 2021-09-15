function preload() {
    img = loadImage("")
}

function setup() {
    canvas = createCanvas(600, 400)
    canvas.center()
}

function draw() {
    image(img, 0, 0, 600, 400)
    fill("#FF0000")
    text("Dog", 35, 80)
    stroke("#FF0000")
    noFill()
    rect(30, 60, 400, 300)
    fill("#0000FF")
    text("Cat", 350, 120)
    stroke("#0000FF")
    noFill()
    rect(290, 100, 300, 200)

}