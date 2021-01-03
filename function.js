function mousePressed() {
    for (let i = 0; i < questionPool.length; i++) {
        questions[i].clicked();
    }
}