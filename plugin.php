<?php
/**
 * Plugin Name: Gutenberg Block: Static JSX Example
 * Description: My Custom Gutenberg Block.
 * Author: Janki Moradiya
 * Version: 1.0.0
 */

/**
 * Enqueue the block's assets for the editor.
 *
 */
function my_custom_block_register_block() {
	wp_register_script( 
        'my-custom-block-script', 
        plugins_url( 'js/block.build.js', __FILE__ ), 
        array( 'wp-blocks', 'wp-element', 'wp-editor' )
    );

	/*wp_register_style(
		'my-custom-block-editor-style', 
        plugins_url( 'css/editor.css', __FILE__ ), 
        array( 'wp-edit-blocks' )
	); */

	register_block_type( 'myguten-block/custom-block', array(
		'editor_script' => 'my-custom-block-script',
		'editor_style' => 'my-custom-block-editor-style',
	) );
}
add_action( 'init', 'my_custom_block_register_block' );
