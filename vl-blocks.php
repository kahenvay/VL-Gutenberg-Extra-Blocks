<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://visual-legion.com
 * @since             1.0.0
 * @package           Vl_Blocks
 *
 * @wordpress-plugin
 * Plugin Name:       VL Gutenberg Extra Blocks
 * Plugin URI:        https://github.com/kahenvay/VL-Gutenberg-Extra-Blocks.git
 * Description:       This is a short description of what the plugin does. It's displayed in the WordPress admin area.
 * Version:           1.0.0
 * Author:            Ulysse Coates
 * Author URI:        https://visual-legion.com
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       vl-blocks
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define( 'VL_GUTENBERG_EXTRA_BLOCKS_VERSION', '1.0.0' );

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-vl-blocks-activator.php
 */
function activate_vl_blocks() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-vl-blocks-activator.php';
	Vl_Blocks_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-vl-blocks-deactivator.php
 */
function deactivate_vl_blocks() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-vl-blocks-deactivator.php';
	Vl_Blocks_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_vl_blocks' );
register_deactivation_hook( __FILE__, 'deactivate_vl_blocks' );


/**
* Settings Page
*/

require_once 'settings.php';

/**
* Gutenberg Blocks
*/

/*Toggle*/

require_once 'php-renders/toggle-block-render.php';

function vl_blocks_my_register_toggle() {

  // Register our block script with WordPress
  wp_register_script(
    'vl-blocks-toggle-js',
    plugins_url('/blocks/dist/blocks.build.js', __FILE__),
    array('wp-blocks', 'wp-element')
  );

  // Register our block's base CSS  
  wp_register_style(
    'vl-blocks-toggle-style',
    plugins_url( '/blocks/dist/blocks.style.build.css', __FILE__ ),
    array( 'wp-blocks' )
  );
  
  // Register our block's editor-specific CSS
  wp_register_style(
    'vl-blocks-toggle-edit-style',
    plugins_url('/blocks/dist/blocks.editor.build.css', __FILE__),
    array( 'wp-edit-blocks' )
  );  
  
  // Enqueue the script in the editor
  register_block_type('vl-blocks/toggle', array(
  	// 'render_callback' => 'vl_blocks_toggle_callback',
    'editor_script' => 'vl-blocks-toggle-js',
    'editor_style' => 'vl-blocks-toggle-edit-style',
    'style' => 'vl-blocks-toggle-style'
  ));
}

add_action('init', 'vl_blocks_my_register_toggle');


/*Twitter*/

require_once 'php-renders/twitter-block-render.php';

function vl_blocks_my_register_twitter() {

  // Register our block script with WordPress
  wp_register_script(
    'vl-blocks-twitter-js',
    plugins_url('/blocks/dist/blocks.build.js', __FILE__),
    array('wp-blocks', 'wp-element')
  );

  // Register our block's base CSS  
  wp_register_style(
    'vl-blocks-twitter-style',
    plugins_url( '/blocks/dist/blocks.style.build.css', __FILE__ ),
    array( 'wp-blocks' )
  );
  
  // Register our block's editor-specific CSS
  wp_register_style(
    'vl-blocks-twitter-edit-style',
    plugins_url('/blocks/dist/blocks.editor.build.css', __FILE__),
    array( 'wp-edit-blocks' )
  );  
  
  // Enqueue the script in the editor
  register_block_type('vl-blocks/twitter', array(
    // 'render_callback' => 'vl_blocks_twitter_callback',
    'editor_script' => 'vl-blocks-twitter-js',
    'editor_style' => 'vl-blocks-twitter-edit-style',
    'style' => 'vl-blocks-twitter-style'
  ));
}

add_action('init', 'vl_blocks_my_register_twitter');


/* Instagram */

require_once 'php-renders/instagram-block-render.php';

function vl_blocks_my_register_instagram() {

  // Register our block script with WordPress
  wp_register_script(
    'vl-blocks-instagram-js',
    plugins_url('/blocks/dist/blocks.build.js', __FILE__),
    array('wp-blocks', 'wp-element')
  );
 
  // // and enqueue frontend?
  if (isset(get_option('vl_blocks_options')['vl_blocks_instagram_access_token'])) {
    //addings instagram settings
    wp_localize_script( 'vl-blocks-instagram-js', 'access_token', get_option('vl_blocks_options')['vl_blocks_instagram_access_token'] );
  } else {
    wp_localize_script( 'vl-blocks-instagram-js', 'access_token', null );
  }
  

  // Register our block's base CSS  
  wp_register_style(
    'vl-blocks-instagram-style',
    plugins_url( '/blocks/dist/blocks.style.build.css', __FILE__ ),
    array( 'wp-blocks' )
  );
  
  // Register our block's editor-specific CSS
  wp_register_style( 
    'vl-blocks-instagram-edit-style',
    plugins_url('/blocks/dist/blocks.editor.build.css', __FILE__),
    array( 'wp-edit-blocks' )
  );  
  
  // Enqueue the script in the editor
  register_block_type('vl-blocks/instagram', array(
    // 'render_callback' => 'vl_blocks_instagram_callback',
    'editor_script' => 'vl-blocks-instagram-js',  
    'editor_style' => 'vl-blocks-instagram-edit-style',
    'style' => 'vl-blocks-instagram-style' 
  ));

  
}

add_action('init', 'vl_blocks_my_register_instagram');

/**
* Shared script until I find out how to add components to frontend
*/

function vl_accordion_adding_shared_scripts() {
 
wp_register_script('vl_accordion_shared_scripts', plugins_url('shared/shared.js', __FILE__), array('jquery'),'1.1', true);

// if (isset(get_option('vl_blocks_options')['vl_blocks_instagram_access_token'])) {
//   //addings instagram settings
//   wp_localize_script( 'vl_accordion_shared_scripts', 'access_token', get_option('vl_blocks_options')['vl_blocks_instagram_access_token'] );
// } else {
//   wp_localize_script( 'vl_accordion_shared_scripts', 'access_token', null );
// }
 
wp_enqueue_script('vl_accordion_shared_scripts');
}
  
add_action( 'wp_enqueue_scripts', 'vl_accordion_adding_shared_scripts' ); 
add_action( 'admin_enqueue_scripts', 'vl_accordion_adding_shared_scripts' );

// function vl_accordion_jsforwpblocks_scripts() {
//   // Make paths variables so we don't write em twice ;)
//   $sharedBlockPath = '/blocks/dist/blocks.build.js';
//   // Enqueue frontend and editor JS
//   wp_enqueue_script(
//     'vl-blocks-toggle-js',
//     plugins_url( $sharedBlockPath, __FILE__ ),
//     [  'wp-blocks', 'wp-element', 'wp-components', 'wp-i18n', 'wp-editor' ],
//     filemtime( plugin_dir_path( __FILE__ ) . $sharedBlockPath )
//   );
// }

// // Hook scripts function into block editor hook
// add_action( 'enqueue_block_assets', 'vl_accordion_jsforwpblocks_scripts' ); 

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-vl-blocks.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_vl_blocks() {

	$plugin = new Vl_Blocks();
	$plugin->run();

}
run_vl_blocks();
