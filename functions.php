<?php

function reactwpstarter_scripts() {
  wp_enqueue_script( 'reactwpstarter_bundlejs', get_template_directory_uri() . '/build/bundle.js', array(), '20150908', true );

}
add_action( 'wp_enqueue_scripts', 'reactwpstarter_scripts' );
