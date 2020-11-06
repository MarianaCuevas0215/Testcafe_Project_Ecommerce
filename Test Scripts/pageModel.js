import { Selector } from 'testcafe';

class page {

    constructor () {
        //Home Page Module - Start
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

        //List of products - start
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









    }
}

export default new page();
