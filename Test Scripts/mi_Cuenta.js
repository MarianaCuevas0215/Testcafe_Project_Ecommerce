import page from './pageModel';
import { data } from './data';
import {ClientFunction} from 'testcafe';

const getLocation = ClientFunction(() => document.location.href);

fixture ('My Account Module')
    .page('http://automationpractice.com');

test('Verify that a user can create a new account.', async t =>{
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
        .expect(page.textInfoAccount_msg.innerText).contains('MY ACCOUNT')      
        
} );

test('Verify that a user can login with an account created previously.', async t =>{
    await t 
        .click(page.signin_link)

    await t
        .typeText(page.email_account_input, data.emailValido, {speed: 0.01})
        .expect(page.email_account_input.value).eql(data.emailValido)
        .typeText(page.passwd_account_input, data.password, {speed: 0.01})
        .expect(page.passwd_account_input.value).eql(data.password)
        .click(page.signin_btn)

    await t
        .expect(getLocation()).contains(data.url_myAccount)
        .wait(1000)

} );

test('Verify that a user can logout from his/her account.', async t =>{
    await t 
        .click(page.signin_link)

    await t
        .typeText(page.email_account_input, data.emailValido, {speed: 0.01})
        .expect(page.email_account_input.value).eql(data.emailValido)
        .typeText(page.passwd_account_input, data.password, {speed: 0.01})
        .expect(page.passwd_account_input.value).eql(data.password)
        .click(page.signin_btn)

    await t
        .click(page.logout_link)

    await t
        .expect(getLocation()).contains(data.url_authentication) 

} );

test('Verify that a user can retrieve a password.', async t =>{

    await t 
        .click(page.signin_link)

    await t
        .click(page.forgotPass_link)

    await t
        .typeText(page.email_account_input, data.emailValido, {speed: 0.01})
        .expect(page.email_account_input.value).eql(data.emailValido)
        .click(page.retrievePass_btn)

    await t
        .expect(page.alertSuccess_msg.innerText).contains('A confirmation email has been sent to your address:', data.emailValido)
  

} );

test('Verify that a user can modify personal information.', async t =>{

await t 
    .click(page.signin_link)

await t
    .typeText(page.email_account_input, data.emailValido, {speed: 0.01})
    .expect(page.email_account_input.value).eql(data.emailValido)
    .typeText(page.passwd_account_input, data.password, {speed: 0.01})
    .expect(page.passwd_account_input.value).eql(data.password)
    .click(page.signin_btn)

await t
    .click(page.myPersonalInfo)

await t
    .expect(page.title_rbtn.checked).ok()
    .expect(page.fnamepersonalInfo_input.value).eql(data.firstName)
    .expect(page.lnamepersonalInfo_input.value).eql(data.lastName)
    .expect(page.emailpersonalInfo_input.value).eql(data.emailValido)  
    .typeText(page.currentPassword_input, data.password, {speed: 0.01})
    .typeText(page.newPassword_input, data.newpassword, {speed: 0.01})
    .typeText(page.confirmationPass_input, data.newpassword, {speed: 0.01})
    .expect(page.confirmationPass_input.value).eql(data.newpassword)
    .click(page.save_btn)

await t
    .expect(page.alertSuccess_modifydata.innerText).contains('Your personal information has been successfully updated.')

} );

test('Verify that a user can not login with invalid credentials.', async t =>{

await t 
    .click(page.signin_link)

await t
    .typeText(page.email_account_input, "error@testcafe.com", {speed: 0.01})
    .expect(page.email_account_input.value).notEql(data.emailValido)
    .typeText(page.passwd_account_input,"estoyaprendiendo", {speed: 0.01})
    .expect(page.passwd_account_input.value).notEql(data.password)
    .click(page.signin_btn)

await t
    .expect(page.alertError_msg.innerText).contains('Authentication failed.')

} );