<?php 

function vl_blocks_instagram_callback( $attributes, $content ) {

	$access_token = isset(get_option('vl_blocks_options')['vl_blocks_instagram_access_token']) ? get_option('vl_blocks_options')['vl_blocks_instagram_access_token'] : '';
	$photo_count = 5;

	$json_link = "https://api.instagram.com/v1/users/self/media/recent/?";
	$json_link .="access_token={$access_token}&count={$photo_count}";
	$json = file_get_contents($json_link);
	$obj = json_decode(preg_replace('/("\w+"):(\d+)/', '\\1:"\\2"', $json), true);
	$feedObj = $obj['data'];

	function instaFeed($post){

		$embed_content_json = file_get_contents('https://api.instagram.com/oembed?url=' . $post['link']);
		$embed_content_array = json_decode(preg_replace('/("\w+"):(\d+)/', '\\1:"\\2"', $embed_content_json), true);

		return "<div class=\"vl-instagram__feed__post\">" .
      "<img src=" . $post['images']['standard_resolution']['url'] . " />" .
      "<div class=\"vl-instagram__embed__background\"></div> " .
      "<div class=\"vl-instagram__embed\">" . $embed_content_array['html'] . "  </div> ".
    "</div>";
	}

	// $instaReturn = array_map("instaFeed",$feedObj);

	$instaReturn = '';
	foreach ($feedObj as $post) {
		$instaReturn .= instaFeed($post);
	}

	$return = "<div class=\"vl-instagram__feed\">";
	$return .= $instaReturn;
	$return .= "</div>";

	return $return;
} 