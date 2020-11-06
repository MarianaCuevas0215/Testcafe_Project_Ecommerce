import { Selector } from 'testcafe';
import page from './pageModel';
import { data } from './data';

fixture ('List of Products Module')
    .page('http://automationpractice.com/index.php');

test('Verify that a user can apply different filters to search a t-shirt.', async t =>{

    await t
        .click(page.menuTtshirt)
    
    await t
        .click(page.filtersizeS_checkbox)
        .expect(page.filtersizeS_checkbox.checked).ok()
        .click(page.filtercolor2_checkbox)
        .wait(2000)
        .expect(page.filtercolor2_checkbox.checked).notOk()
        .click(page.filtercompos_checkbox)
        .expect(page.filtercompos_checkbox.checked).ok()
        .click(page.filterstyle_checkbox)
        .expect(page.filterstyle_checkbox.checked).ok()
        .click(page.filterprice_slider)
        .pressKey('right')
        .pressKey('right')
        .pressKey('right')
        .pressKey('right')
        .pressKey('right')
        .wait(2000) 
        .expect(page.pricerange_slider.innerText).contains('$16.05')
   
});