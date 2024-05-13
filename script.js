function userDialog() {
    var name = prompt("Введи своє ім'я:");
    var age;
    
    //поки користувач не введе число продовжуємо перекидувати його на форму заповненн даниї
    while (true) {
        var ageInput = prompt("Введи свій вік:");

        // Перевірка для числа тобто чи введене число а не літера
        age = parseInt(ageInput);
        if (!isNaN(age)) {
            break; //якщо вік введено коректно то виходжу
        }
        
        alert("Будь ласка, введи число для віку.");
    }
    
    var isConfirmed = confirm("Привіт, " + name + "! ти " + (age >= 18 ? "повнолітній" : "неповнолітній") + ". Підтверджуєш цю інформацію?");
    
    if (!isConfirmed) {
        userDialog(); // це якщо користувач натиснув відмінити
        return;
    }
    
    developerInfo(prompt("Введи своє прізвище:"), name, age);
}

//вивід інформації про розробника
function developerInfo(lastName, firstName, age, position = "Розробник") {
    alert("Інформація про розробника:\nПрізвище: " + lastName + "\nІм'я: " + firstName + "\nВік: " + age + "\nПосада: " + position);
}

//виклик функція для спілкування з юзером
userDialog();

