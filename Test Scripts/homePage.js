import { Selector } from 'testcafe';
import page from './pageModel';
import { data } from './data';

fixture ('Home Page Module')
    .page('http://automationpractice.com/index.php');

test('Verify what elements exist on the header page.', async t =>{

    await t
        .expect(page.bannerResponsitive.exists).ok()
        .expect(page.shopPhone_text.exists).ok()
        .expect(page.contactUs_link.exists).ok()
        .expect(page.signin_link.exists).ok()       
   
});

test('Verify that menus exist in home page.', async t =>{

    await t
        .hover(page.menuWomen)
        .wait(3000)
        .expect(page.menuWomen.exists).ok()
        .hover(page.menuDresses)
        .wait(3000)
        .expect(page.menuDresses.exists).ok()
        .hover(page.menuTtshirt)
        .wait(3000)
        .expect(page.menuTtshirt.exists).ok()            

});

test('Verify that a user can access to the Sign in link.', async t =>{

    await t
        .click(page.signin_link)

    await t
        .expect(page.authenticationPage.exists).ok()
        .wait(3000)            

});

test('Verify that a user can send a message.', async t =>{

    await t
        .click(page.contactUs_link)

    await t
        .expect(page.customerServicePage.exists).ok()

    await t
        .click(page.csSubjectHeading_list)

    await t
        .click(page.csSubjectHeading_op1)
        .typeText(page.csEmail_input, data.emailValido, { speed: 0.01})
        .expect(page.csEmail_input.value).contains("dummy")   
        .typeText(page.csMessage_input, data.message, {speed: 0.01}) 
        .expect(page.csMessage_input.value).contains("I would like to know")

    await t
        .click(Selector('#fileUpload'))
        .expect(Selector('#fileUpload').visible).ok()
    await t
        .setFilesToUpload(Selector('#fileUpload'),'./Gatito.jpg')
        
    await t
        .wait(1000)
        .expect(Selector('#uniform-fileUpload > span.filename').innerText).contains('Gatito.jpg')
        .click(page.csSend_btn)
    
    await t
        .expect(page.csAlertSuccess.innerText).contains("has been successfully sent")
       
});

test('Verify that a user can search a key word using the search bar and get results.', async t =>{

    await t
        .click(page.signin_link)

    await t
        .typeText(page.search_input, data.keyword, {speed: 0.01}) 
        .expect(page.search_input.value).eql(data.keyword)   
        .click(page.search_btn)     
    
    await t
        .expect(page.counter_label.innerText).notEql({ a:"0 results have been found."}, 'There is results')

});

test('Verify that a user does not get results when a keyword is not entered.', async t =>{

    await t
        .click(page.signin_link)

    await t
        .click(page.search_btn)     
    
    await t
        .expect(page.counter_label.innerText).eql("0 results have been found.")
        .expect(page.searchAlertWarning1.innerText).contains('Please enter a search keyword');

});

test('Verify when a user types a strange keyword.', async t =>{

    await t
        .click(page.signin_link)

    await t
        .typeText(page.search_input, data.keywordError, {speed: 0.01}) 
        .expect(page.search_input.value).eql(data.keywordError)   
        .click(page.search_btn)    
    
    await t
        .expect(page.counter_label.innerText).eql("0 results have been found.")
        .expect(page.searchAlertWarning2.innerText).contains('No results were found for your search');    

});



