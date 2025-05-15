<?php
/**
 * Plugin Name: Join Our Community Block
 * Description: A custom Gutenberg block with collapsible accordion behavior.
 * Version: 1.0.0
 * Author: Felipe Lemos
 */

defined( 'ABSPATH' ) || exit;

function join_our_community_block_register() {
    register_block_type( __DIR__ );
}
add_action( 'init', 'join_our_community_block_register' );
