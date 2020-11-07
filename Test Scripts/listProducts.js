//import { Selector } from 'testcafe';
import page from './pageModel';
//import { data } from './data';

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

test('Verify that a user can apply different filters to search a blouse.', async t =>{

    await t
        .click(page.menuWomen)
    
    await t
        .click(page.submenuTops)
        .click(page.submenuBlouse)
    await t
        .click(page.filtersizeL_checkbox)
        .expect(page.filtersizeL_checkbox.checked).ok()
        .click(page.filtercolor3_checkbox)
        .wait(2000)
        .expect(page.filtercolor3_checkbox.checked).notOk()
        .click(page.filtercompos_checkbox)
        .expect(page.filtercompos_checkbox.checked).ok()
        .click(page.filterstyle_checkbox)
        .expect(page.filterstyle_checkbox.checked).ok()
        .click(page.filteravailab_checkbox)
        .expect(page.filteravailab_checkbox.checked).ok()
        .click(page.filterprice_slider)
        .pressKey('right')
        .pressKey('right')
        .pressKey('right')
        .pressKey('right')
        .pressKey('right')
        .wait(2000) 
        .expect(page.pricerange_slider.innerText).contains('$26.10')
   
});

test('Verify that a user can apply different filters to search a casual dress.', async t =>{

    await t
        .click(page.menuDresses)
    
    await t
        .click(page.submenuCasualDress)
        
    await t
        .click(page.filtersizeM_checkbox)
        .expect(page.filtersizeM_checkbox.checked).ok()
        .wait(1000)
        .click(page.filtersortby_drop)
        .wait(1000)
        .click(page.filtersortby_op1)
        .expect(page.filtersortby_op1.innerText).contains("Highest first")
        
    await t
        .wait(2000)
        .expect(page.loader_icon.visible).ok()
    
});

test('Verify that a user can apply different filters to search a evening dress.', async t =>{

    await t
        .click(page.menuDresses)
    
    await t
        .click(page.submenuEveningDress)
        
    await t
        .click(page.filtersizeL_checkbox)
        .expect(page.filtersizeL_checkbox.checked).ok()              
        
    await t
        .click(page.quickView_img)
        .wait(3000)
    
});

test('Verify that a user can apply different filters to search a summer dress.', async t =>{

    await t
        .click(page.menuDresses)
    
    await t
        .click(page.submenuSummerDress)
        
    await t
        .hover(page.quickView_img2)
        .expect(page.compare_btn.checked).notOk()
        .expect(page.addCompare_btn.visible).ok() 
        .wait(1000)             
        .click(page.addCompare_btn)
    
});


