function toggleColor() {
    var body = document.querySelector('body');
    var currentColor = body.style.backgroundColor;
    var newColor = generateRandomColor();

    // Se a cor atual for a mesma que a nova cor gerada, gere uma nova cor
    while (currentColor === newColor) {
        newColor = generateRandomColor();
    }

    body.style.backgroundColor = newColor;
}

function generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Iniciar mudança de cor automaticamente a cada 5 segundos
setInterval(toggleColor, 1000);
