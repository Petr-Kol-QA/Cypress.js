describe('Проверка покупки нового аватара', function () {

    it('end 2 end тест для покупки нового аватара тренеру', function () {
         cy.visit('https://pokemonbattle-stage.ru/'); //Войти на сайт https://pokemonbattle-stage.ru
         cy.get('#k_email').type('USER_LOGIN'); //Ввели верный логин
         cy.get('#k_password').type('USER_PASSWORD'); //Ввести верный пароль
         cy.get('.MuiButton-root').click(); //Нажать кнопку "Войти"
         cy.wait(2000);

         cy.get('.header_card_trainer').click(); //Кликнуть на аватар тренера в верхнем правом углу 
         cy.wait(2000);
         cy.get('[data-qa="shop"]').click(); //Кликнуть по кнопке "Смена аватара"
         cy.get(':nth-child(6) > .shop__button').click(); // Нажат кнопку "Купить" на выбранном аватаре 
         cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('5555555544444442'); //Ввести номер карты
         cy.get(':nth-child(1) > .style_1_base_input').type('05/26'); //Ввести дату срока действия карты
         cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125'); //Ввести код card_cvv
         cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('petr kolesnik'); //Ввести имя и фамилию владельца карты
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); //Нажать кнопку "Оплатить"
         cy.wait(2000);
         cy.get('.style_1_base_input').type('56456'); //Ввести код из сообщения, пришедшего на телефон
         cy.wait(2000);
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();

         cy.get('.payment_status_top_title').contains('Покупка прошла успешно').should('be.visible'); // Проверить наличие и видимоста текста об успешной покупки пользователем

        })
 }) 