<?php
/**
 * Plugin Name: Join Our Community Block
 * Description: A custom Gutenberg block with collapsible accordion behavior.
 * Version: 1.0.0
 * Author: Your Name
 */

function join_our_community_block_register() {
    $dir = __DIR__;
    $asset_file = include( $dir . '/build/index.asset.php' );

    wp_register_script(
        'join-our-community-block-editor',
        plugins_url( 'build/index.js', __FILE__ ),
        $asset_file['dependencies'],
        $asset_file['version']
    );

    wp_register_style(
        'join-our-community-block-style',
        plugins_url( 'style.css', __FILE__ ),
        [],
        filemtime( $dir . '/style.css' )
    );

    wp_register_style(
        'join-our-community-block-editor-style',
        plugins_url( 'editor.css', __FILE__ ),
        [],
        filemtime( $dir . '/editor.css' )
    );

    wp_register_script(
        'join-our-community-block-frontend',
        plugins_url( 'accordion.js', __FILE__ ),
        [],
        filemtime( $dir . '/accordion.js' ),
        true
    );

    register_block_type( __DIR__, [
        'editor_script' => 'join-our-community-block-editor',
        'style' => 'join-our-community-block-style',
        'editor_style' => 'join-our-community-block-editor-style',
        'script' => 'join-our-community-block-frontend',
    ] );
}
add_action( 'init', 'join_our_community_block_register' );
