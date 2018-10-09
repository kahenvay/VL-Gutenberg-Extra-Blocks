<?php
/**
 * @internal never define functions inside callbacks.
 * these functions could be run multiple times; this would result in a fatal error.
 */

// TODO MAKE MORE LILE MY THEMES SETTINGS
// VALIDATOR FUNCTIONS FOR EACH TYPE OF INPUTS


function vl_blocks_validate_options($input) {
 // Create our array for storing the validated options
    $output = array();
     
    // Loop through each of the incoming options
    foreach( $input as $key => $value ) {
         
        // Check to see if the current option has a value. If so, process it.
        if( isset( $input[$key] ) &&  $input[$key] != '') {
         
            // Strip all HTML and PHP tags and properly handle quoted strings
            $output[$key] = strip_tags( stripslashes( $input[ $key ] ) );
             
        } 
        //shouldn't it not save the empty fields?
         
    } // end foreach
     
    return $output;
}

 
/**
 * custom option and settings
 */
function vl_blocks_settings_init() {
 // register a new setting for "vl_blocks" page
 register_setting( 'vl_blocks', 'vl_blocks_options', 'vl_blocks_validate_options' );
 
 // register a new section in the "vl_blocks" page
 add_settings_section(
 'vl_blocks_section_developers',
 __( 'VL Instagram Settings', 'vl_blocks' ),
 'vl_blocks_section_developers_cb',
 'vl_blocks'
 );
 
 // register a new field in the "vl_blocks_section_developers" section, inside the "vl_blocks" page
 add_settings_field(
 'vl_blocks_instagram_access_token', // as of WP 4.6 this value is used only internally
 // use $args' label_for to populate the id inside the callback
 __( 'Access Token', 'vl_blocks' ),
 'vl_blocks_instagram_access_token_cb',
 'vl_blocks',
 'vl_blocks_section_developers',
 [
 'label_for' => 'vl_blocks_instagram_access_token',
 'class' => 'vl_blocks_row',
 'vl_blocks_instagram_access_token_custom_data' => 'custom',
 ]
 );
}
 
/**
 * register our vl_blocks_settings_init to the admin_init action hook
 */
add_action( 'admin_init', 'vl_blocks_settings_init' );
 
/**
 * custom option and settings:
 * callback functions
 */
 
// developers section cb
 
// section callbacks can accept an $args parameter, which is an array.
// $args have the following keys defined: title, id, callback.
// the values are defined at the add_settings_section() function.
function vl_blocks_section_developers_cb( $args ) { 
 ?>
 <p id="<?php echo esc_attr( $args['id'] ); ?>"><?php _e( 'Since 2016, to be able to show your instagram media, you need to register as a developer to generate a token. This token only gives access to view your media and public information. The token does <b>not give any access or allow any action</b>. <br/> <br/> To start the process, register as a developer <a href="https://www.instagram.com/developer/register/">HERE</a>. <br/><br/>Then you need to create a Client ID with a callback. Fill in the fields with any information, this doesn\'t matter too much <i>but</i> do make sure you use this url <b>https://visual-legion.com/instagram-callback/</b> and this redirect uri <b>https://visual-legion.com/instagram-callback/</b> for the rest to work. We\'ve prepared these for easy use. Create your Client ID <a href="https://www.instagram.com/developer/clients/register/">HERE</a>. <br/> <br/> Once you\'ve done that, you need to copy paste your Client ID and Client Secret to generate your access token <a href="https://visual-legion.com/instagram-callback/">HERE</a>. (You can see your client secret by clicking on manage client) <br/> <br/> You should now have your access token, please copy and paste it below', 'vl_blocks' ); ?></p> 
 <?php
}


 
// pill field cb
 
// field callbacks can accept an $args parameter, which is an array.
// $args is defined at the add_settings_field() function.
// wordpress has magic interaction with the following keys: label_for, class.
// the "label_for" key value is used for the "for" attribute of the <label>.
// the "class" key value is used for the "class" attribute of the <tr> containing the field.
// you can add custom key value pairs to be used inside your callbacks.
function vl_blocks_instagram_access_token_cb( $args ) {
 // get the value of the setting we've registered with register_setting()
 $options = get_option( 'vl_blocks_options' );
 // output the field
 ?>

<input type="text" id="<?php echo esc_attr( $args['label_for'] ); ?>" data-custom="<?php echo esc_attr( $args['vl_blocks_instagram_access_token_custom_data'] ); ?>" name="vl_blocks_options[<?php echo esc_attr( $args['label_for'] ); ?>]" value="<?php echo isset( $options[ $args['label_for'] ] ) ? ( ( $options[ $args['label_for'] ]) ) : ( '' ); ?>">

 <p class="description">
 <?php esc_html_e( 'Please enter your access token', 'vl_blocks' ); ?>
 </p>
 <?php
}

// print_r(get_option('vl_blocks_options')['vl_blocks_instagram_access_token']);
 
/**
 * top level menu
 */
function vl_blocks_options_page() {
 // add top level menu page
 add_menu_page(
 'VL Blocks',
 'VL Blocks',
 'manage_options',
 'vl_blocks',
 'vl_blocks_options_page_html'
 );
}
 
/**
 * register our vl_blocks_options_page to the admin_menu action hook
 */
add_action( 'admin_menu', 'vl_blocks_options_page' );
 
/**
 * top level menu:
 * callback functions
 */
function vl_blocks_options_page_html() {
 // check user capabilities
 if ( ! current_user_can( 'manage_options' ) ) {
 return;
 }
 
 // add error/update messages
 
 // check if the user have submitted the settings
 // wordpress will add the "settings-updated" $_GET parameter to the url
 if ( isset( $_GET['settings-updated'] ) ) {
 // add settings saved message with the class of "updated"
 add_settings_error( 'vl_blocks_messages', 'vl_blocks_message', __( 'Settings Saved', 'vl_blocks' ), 'updated' );
 }
 
 // show error/update messages
 settings_errors( 'vl_blocks_messages' );
 ?>
 <div class="wrap">
 <h1><?php echo esc_html( get_admin_page_title() ); ?></h1>
 <form action="options.php" method="post">
 <?php
 // output security fields for the registered setting "vl_blocks"
 settings_fields( 'vl_blocks' );
 // output setting sections and their fields
 // (sections are registered for "vl_blocks", each field is registered to a specific section)
 do_settings_sections( 'vl_blocks' );
 // output save settings button
 submit_button( 'Save Settings' );
 ?>
 </form>
 </div>
 <?php
}