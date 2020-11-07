import { Selector } from 'testcafe';

class page {

    constructor () {
        
        //Verify that a user can create a new account.
        this.signin_link = Selector('a').withText('Sign in');
        this.emailAddress_input = Selector('#email_create');
        this.createAccount_btn = Selector('#SubmitCreate');
        this.title_rbtn = Selector('#id_gender2');
        this.firstName_input = Selector('#customer_firstname');
        this.lastName_input = Selector('#customer_lastname');
        this.email_input = Selector('#email');
        this.passwd_input = Selector('#passwd');
        this.dayBirth_dropdown = Selector('#days');
        this.dayBirth_value = Selector('#days > option:nth-child(3)');
        this.monthBirth_dropdown = Selector('#months');
        this.monthBirth_value = Selector('#months > option:nth-child(3)');
        this.yearBirth_dropdown = Selector('#years');
        this.yearBirth_value = Selector('#years > option:nth-child(22)');
        this.firstNameAddress_input = Selector('#firstname');
        this.lastNameAddress_input = Selector('#lastname');
        this.address_input = Selector('#address1');
        this.city_input = Selector('#city');
        this.state_dropdown = Selector('#id_state');
        this.state_value = Selector('#id_state > option:nth-child(51)');
        this.zip_input = Selector('#postcode');
        this.country_dropdown = Selector('#id_country');
        this.country_value = Selector('#id_country > option:nth-child(2)');
        this.phone_input = Selector('#phone_mobile');
        this.addressAlias_input = Selector('#alias');
        this.register_btn = Selector('#submitAccount');
        this.textInfoAccount_msg = Selector('#center_column > h1'); 

        //Verify that a user can login with an account created previously.
        this.email_account_input = Selector('#email');
        this.passwd_account_input = Selector('#passwd');
        this.signin_btn = Selector('#SubmitLogin');

        //Verify that a user can logout from his/her account.
        this.logout_link = Selector('a').withText('Sign out');  
        
        //Verify that a user can retrieve a password.
        this.forgotPass_link = Selector('#login_form > div > p.lost_password.form-group > a');
        this.retrievePass_btn = Selector('#form_forgotpassword > fieldset > p > button');
        this.alertSuccess_msg = Selector('#center_column > div > p');

        //Verify that a user can modify personal information.
        this.myPersonalInfo = Selector('#center_column > div > div:nth-child(1) > ul > li:nth-child(4) > a');
        this.fnamepersonalInfo_input = Selector('#firstname');
        this.lnamepersonalInfo_input = Selector('#lastname');
        this.emailpersonalInfo_input = Selector('#email');
        this.currentPassword_input = Selector('#old_passwd');
        this.newPassword_input = Selector('#passwd');
        this.confirmationPass_input = Selector('#confirmation');
        this.save_btn = Selector('#center_column > div > form > fieldset > div:nth-child(11) > button');
        this.alertSuccess_modifydata = Selector('#center_column > div > p');

        //Verify that a user can not login with invalid credentials.
        this.alertError_msg = Selector('#center_column > div.alert.alert-danger');
                        
        //Verify what elements exist on the header page.
        this.bannerResponsitive = Selector('#header > div.banner > div > div > a > img');
        this.shopPhone_text = Selector('#header > div.nav > div > div > nav > span');
        this.contactUs_link = Selector('a').withText('Contact us');
        this.signin_link = Selector('a').withText('Sign in');    
        
        //Verify that menus exist in home page.
        this.menuWomen = Selector('#block_top_menu > ul > li:nth-child(1) > a');
        this.menuDresses = Selector('#block_top_menu > ul > li:nth-child(2) > a');
        this.menuTtshirt = Selector('#block_top_menu > ul > li:nth-child(3) > a');

        //Verify that a user can access to the Sign in link.
        this.authenticationPage = Selector('#center_column > h1'); 

        //Verify that a user can send a message.
        this.customerServicePage = Selector('#center_column > h1').withText('CUSTOMER SERVICE - CONTACT US');
        this.csSubjectHeading_list = Selector('#id_contact');
        this.csSubjectHeading_op1 = Selector('#id_contact > option:nth-child(2)');
        this.csEmail_input = Selector('#email');
        this.csMessage_input = Selector('#message');
        this.csSend_btn = Selector('#submitMessage');
        this.csAlertSuccess = Selector('#center_column > p').withText('Your message has been successfully sent to our team.');

        //Verify that a user can search a key word using the search bar and get results.
        this.search_input = Selector('#search_query_top');
        this.search_btn = Selector('#searchbox > button');
        this.counter_label = Selector('#center_column > h1 > span.heading-counter')                
        
        //Verify that a user doesn't get results when a keyword is not entered.
        this.searchAlertWarning1 = Selector('#center_column > p').withText('Please enter a search keyword');

        //Verify when a user types a strange keyword.
        this.searchAlertWarning2 = Selector('#center_column > p').withText('No results were found for your search');

        //Verify that a user can apply different filters to search a t-shirt.
        this.categorynameTshirt = Selector('#center_column > div.content_scene_cat > div > div > span').withText('T-shirts');
        this.filtersizeS_checkbox = Selector('#layered_id_attribute_group_1');
        this.filtersizeM_checkbox = Selector('#layered_id_attribute_group_2');
        this.filtersizeL_checkbox = Selector('#layered_id_attribute_group_3');
        this.filtercolor1_checkbox = Selector('#layered_id_attribute_group_13');
        this.filtercolor2_checkbox = Selector('#layered_id_attribute_group_14');
        this.filtercompos_checkbox = Selector('#layered_id_feature_5');
        this.filterstyle_checkbox = Selector('#layered_id_feature_11');
        this.filterproper_checkbox = Selector('#layered_id_feature_17');
        this.filteravailab_checkbox = Selector('#layered_quantity_1');
        this.filterprice_slider = Selector('#layered_price_slider > a:nth-child(2)'); 
        this.pricerange_slider = Selector('#layered_price_range');

        //Verify that a user can apply different filters to search a blouse.
        this.submenuTops = Selector('#categories_block_left > div > ul > li:nth-child(1) > span');
        this.submenuBlouse = Selector('#categories_block_left > div > ul > li:nth-child(1) > ul > li.last > a');
        this.filtercolor3_checkbox = Selector('#layered_id_attribute_group_11');
        
        //Verify that a user can apply different filters to search a casual dress.
        this.submenuCasualDress = Selector('#categories_block_left > div > ul > li:nth-child(1) > a');
        this.filtersortby_drop = Selector('#selectProductSort');
        this.filtersortby_op1 = Selector('#selectProductSort > option:nth-child(3)');
        this.loader_icon = Selector('#center_column > ul > p > img');

        //Verify that a user can apply different filters to search a evening dress.
        this.submenuEveningDress = Selector('#categories_block_left > div > ul > li:nth-child(2) > a');
        this.quickView_img = Selector('#center_column > ul > li > div > div.left-block > div > a.product_img_link > img');

        //Verify that a user can apply different filters to search a summer dress.
        this.submenuSummerDress = Selector('#categories_block_left > div > ul > li.last > a');
        this.quickView_img2 = Selector('#center_column > ul > li.ajax_block_product.col-xs-12.col-sm-6.col-md-4.last-line.last-item-of-tablet-line.last-mobile-line > div > div.left-block > div > a.product_img_link > img');
        this.addCompare_btn = Selector('#center_column > ul > li.ajax_block_product.col-xs-12.col-sm-6.col-md-4.last-line.last-item-of-tablet-line.last-mobile-line.hovered > div > div.functional-buttons.clearfix > div.compare > a');
        this.compare_btn = Selector('#center_column > div:nth-child(5) > div > form > button');

        //Verify that user can buy a product without has an account created previously.
        this.quickView_img3 = Selector('#center_column > ul > li > div > div.left-block > div > a.product_img_link > img');
        this.addtoCart_btn = Selector('#center_column > ul > li > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default > span');
        this.alertSuccessadd = Selector('#layer_cart > div.clearfix > div.layer_cart_product.col-xs-12.col-md-6 > h2');
        this.proceedCheckout_btn = Selector('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > a');
        this.shoppingsummary_title = Selector('#cart_title');
        this.proceedCheckout_btn2 = Selector('#center_column > p.cart_navigation.clearfix > a.button.btn.btn-default.standard-checkout.button-medium');
        this.proceedCheckout_btn3 = Selector('#center_column > form > p > button').withText('Proceed to checkout')
        this.agreeTerms_checkbox = Selector('#cgv');
        this.proceedCheckout_btn4 = Selector('#form > p > button');
        this.paybank_opt1 = Selector('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
        this.confirmorder_btn = Selector('#cart_navigation > button');
        this.confirmation_msg = Selector('#center_column > div > p > strong');

        this.deleteProd_icon = Selector("#cart_quantity_down_5_19_0_403157 > span > i");
        this.alertSuccess_delete = Selector('#center_column > p');  

    }
}

export default new page();
