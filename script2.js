function changeBackgroundAndRedirect() {
    //фон сторінки
    var originalBackground = document.body.style.backgroundColor;
    //фон на червоний
    document.body.style.backgroundColor = "red";

    // Після 3 секунд повертає оригінальний фон
    setTimeout(function() {
        document.body.style.backgroundColor = originalBackground;
    }, 3000); 
    //  на іншу сторінку через 100 секунд
    setTimeout(function() {
        window.location.href = "page3.html";
    }, 100000); 
}
window.onload = changeBackgroundAndRedirect;







