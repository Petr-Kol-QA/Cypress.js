describe('Проверка авторизации', function () {

   it('1. Верный логин и верный пароль', function () {
       cy.visit('https://login.qa.studio/'); //Зашли на сайт
       cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки "Восстановить пароль"

       cy.get('#mail').type('german@dolnikov.ru'); //Ввели верный логин
       cy.get('#pass').type('iLoveqastudio1'); //Ввели верный пароль
       cy.get('#loginButton').click(); //Нажать "Войти"

       cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авторизации вижу текст
       cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
       cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
      })

      it('2. Проверка логики восстановления пароля', function () {
       cy.visit('https://login.qa.studio/'); //Зашли на сайт
       cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки "Восстановить пароль"

       cy.get('#forgotEmailButton').click(); //Нажать "Восстановить пароль"
       cy.get('#mailForgot').type('german@dolnikov.ru'); //Ввести почту для всстановления пароля
       cy.get('#restoreEmailButton').click(); //Нажать на кнопку "Отправить код"

       cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //Проверяю на совпадение текст
       cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
       cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
      })


    it('3. Верный логин и неверный пароль', function () {
       cy.visit('https://login.qa.studio/'); //Зашли на сайт
       cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки "Восстановить пароль"

       cy.get('#mail').type('german@dolnikov.ru'); //Ввели верный логин
       cy.get('#pass').type('iLoveqastudio7'); //Ввели неверный пароль
       cy.get('#loginButton').click(); //Нажать "Войти"

       cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авторизации вижу текст
       cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
       cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
      })

      it('4. Неправильный логин и верный пароль', function () {
       cy.visit('https://login.qa.studio/'); //Зашли на сайт
       cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки "Восстановить пароль"

       cy.get('#mail').type('germannn@dolnikov.ru'); //Ввели неправильный логин
       cy.get('#pass').type('iLoveqastudio1'); //Ввели верный пароль
       cy.get('#loginButton').click(); //Нажать "Войти"

       cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авторизации вижу текст
       cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
       cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
      })
    
    it('5. Проверка, что в логине есть @', function () {
       cy.visit('https://login.qa.studio/'); //Зашли на сайт
       cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки "Восстановить пароль"

       cy.get('#mail').type('germandolnikov.ru'); //Ввели логин без @
       cy.get('#pass').type('iLoveqastudio1'); //Ввели верный пароль
       cy.get('#loginButton').click(); //Нажать "Войти"

       cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю, что после авторизации вижу текст
       cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
       cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
      })

    it('6. Проверка на приведение к строчным буквам в логине', function () {
       cy.visit('https://login.qa.studio/'); //Зашли на сайт
       cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки "Восстановить пароль"

       cy.get('#mail').type('GerMan@Dolnikov.ru'); //Ввели верный логин с применением прописных букв
       cy.get('#pass').type('iLoveqastudio1'); //Ввели верный пароль
       cy.get('#loginButton').click(); //Нажать "Войти"

       cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авторизации вижу текст
       cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
       cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
      })
      
})



// npx cypress run --spec cypress/e2e/login.cy.js --browser chrome



