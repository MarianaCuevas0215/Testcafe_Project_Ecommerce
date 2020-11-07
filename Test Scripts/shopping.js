import { selector } from 'testcafe';
import page from './pageModel';
import { data } from './data';
import {ClientFunction} from 'testcafe';

const getLocation = ClientFunction(() => document.location.href);

fixture ('Shopping process')
    .page('http://automationpractice.com/index.php');

test('Verify that user can buy a product without has an account created previously.', async t =>{

    await t
        .click(page.menuWomen)
    
    await t
        .click(page.submenuTops)
        .click(page.submenuBlouse)

    await t     
        .hover(page.quickView_img3)

    await t
        .click(page.addtoCart_btn)

    await t
        .expect(page.alertSuccessadd.innerText).contains('Product successfully added')
        .click(page.proceedCheckout_btn)

    await t
        .expect(page.shoppingsummary_title.innerText).contains('SHOPPING-CART SUMMARY')
        .click(page.proceedCheckout_btn2)
    
    await t
        .click(page.signin_link)

    console.log("Correo: ", data.email)

    await t
        .typeText(page.emailAddress_input, data.email, {speed:0.01})
        .click(page.createAccount_btn)

    await t
        .click(page.title_rbtn)
        .typeText(page.firstName_input, data.firstName, {speed:0.01})
        .expect(page.firstName_input.value).eql(data.firstName)
        .typeText(page.lastName_input, data.lastName, {speed:0.01})
        .expect(page.lastName_input.value).eql(data.lastName)
        .expect(page.email_input.value).contains(data.email)
        .expect(page.email_input.hasAttribute('readonly')).notOk()
        .typeText(page.passwd_input, data.password, {speed:0.01})
        .expect(page.passwd_input.value).eql(data.password)
        .click(page.dayBirth_dropdown)
        .click(page.dayBirth_value)
        .click(page.monthBirth_dropdown)
        .click(page.monthBirth_value)
        .click(page.yearBirth_dropdown)
        .click(page.yearBirth_value)
    
    await t
        .expect(page.firstNameAddress_input.value).eql(data.firstName)
        .expect(page.lastNameAddress_input.value).eql(data.lastName) 
        .typeText(page.address_input, data.address, {speed:0.01})
        .expect(page.address_input.value).contains(data.address)
        .typeText(page.city_input, data.city, {speed:0.01})
        .expect(page.city_input.value).contains(data.city)
        .click(page.state_dropdown)
        .click(page.state_value)
        .typeText(page.zip_input, data.postcode, {speed:0.01})
        .expect(page.zip_input.value).contains(data.postcode)
        .click(page.country_dropdown)
        .click(page.country_value)
        .typeText(page.phone_input, data.phone, {speed:0.01})
        .expect(page.phone_input.value).eql(data.phone)
        .expect(page.addressAlias_input.value).contains("My address")
        .typeText(page.addressAlias_input, "Mi casa", {replace: true})
        .expect(page.addressAlias_input.value).eql("Mi casa")
        .click(page.register_btn)       
    
    await t
        .click(page.proceedCheckout_btn2)
    
    await t
        .click(page.proceedCheckout_btn3)
    
    await t
        .click(page.agreeTerms_checkbox)
        .expect(page.agreeTerms_checkbox.checked).ok()
        .click(page.proceedCheckout_btn4)
    
    await t
        .click(page.paybank_opt1)

    await t
        .click(page.confirmorder_btn)
        .expect(page.confirmation_msg.innerText).contains('Your order on My Store is complete.')  
   
});

test('Verify that user can buy a product when has created an account previously.', async t =>{

    await t
        .click(page.menuWomen)
    
    await t
        .click(page.submenuTops)
        .click(page.submenuBlouse)

    await t     
        .hover(page.quickView_img3)

    await t
        .click(page.addtoCart_btn)

    await t
        .expect(page.alertSuccessadd.innerText).contains('Product successfully added')
        .click(page.proceedCheckout_btn)

    await t
        .expect(page.shoppingsummary_title.innerText).contains('SHOPPING-CART SUMMARY')
        .click(page.proceedCheckout_btn2)
    
    await t
        .typeText(page.email_account_input, data.emailValido, {speed: 0.01})
        .expect(page.email_account_input.value).eql(data.emailValido)
        .typeText(page.passwd_account_input, data.password, {speed: 0.01})
        .expect(page.passwd_account_input.value).eql(data.password)
        .click(page.signin_btn)   
         
    await t
        .click(page.proceedCheckout_btn3)
    
    await t
        .click(page.agreeTerms_checkbox)
        .expect(page.agreeTerms_checkbox.checked).ok()
        .click(page.proceedCheckout_btn4)
    
    await t
        .click(page.paybank_opt1)

    await t
        .click(page.confirmorder_btn)
        .expect(page.confirmation_msg.innerText).contains('Your order on My Store is complete.')  

  
});

test('Verify that a user can remove a product from the summary section.', async t =>{

    await t
        .click(page.menuWomen)
    
    await t
        .click(page.submenuTops)
        .click(page.submenuBlouse)

    await t     
        .hover(page.quickView_img3)

    await t
        .click(page.addtoCart_btn)

    await t
        .expect(page.alertSuccessadd.innerText).contains('Product successfully added')
        .click(page.proceedCheckout_btn)

    await t
        .expect(page.shoppingsummary_title.innerText).contains('SHOPPING-CART SUMMARY')
        .click(page.deleteProd_icon)
    
    await t
        .expect(page.alertSuccess_delete.innerText).contains('Your shopping cart is empty.')
});