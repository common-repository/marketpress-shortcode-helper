
		window.send_to_editor( mp_shortcode_construct );
	
	function shortcodeOptions() {

			case 'mp_tag_cloud': 
			case 'mp_list_categories': 
			break;
			case 'mp_dropdown_categories': 
			case 'mp_popular_products': 
				var render_shortcode_options = "<label for=\"option_number\">Max number of products to display: </label><br/><br/><input id=\"option_number\" type=\"text\" />";    
			break;
			case 'mp_list_products': 
				var render_shortcode_options = "<label for=\"option_paginate\">Whether to paginate the product list. This is useful to only show a subset.</label><br/><br/><input type=\"radio\" name=\"option_paginate\" value=\"false\">False <input type=\"radio\" name=\"option_paginate\"  value=\"true\">True<br/><br/><label for=\"option_page\">The page number to display in the product list if \"paginate\" is set to true.</label><br/><br/><input id=\"option_page\" type=\"text\" /><br/><br/><label for=\"option_per_page\">How many products to display in the product list if \"paginate\" is set to true.</label><br/><br/><input id=\"option_per_page\" type=\"text\" /><br/><br/>What field to order products by.<br/><br/><input type=\"radio\" name=\"option_order_by\" value=\"title\" />Title <input type=\"radio\" name=\"option_order_by\"  value=\"date\" />Date <input type=\"radio\" name=\"option_order_by\" value=\"ID\" />ID <input type=\"radio\" name=\"option_order_by\" value=\"author\" />Author <input type=\"radio\" name=\"option_order_by\" value=\"price\" />Price <input type=\"radio\" name=\"option_order_by\" value=\"sales\" />Sales <input type=\"radio\" name=\"option_order_by\" value=\"rand\" />Random <br/><br/>Direction to order products by.<br/><br/><input type=\"radio\" name=\"option_order\" value=\"ASC\">ASC <input type=\"radio\" name=\"option_order\"  value=\"DESC\" />DESC <br/><br/><label for=\"option_category\">Limits list to a specific product category. Use the category Slug.</label><br/><br/><input id=\"option_category\" type=\"text\" /><br/><br/><label for=\"option_tag\">Limits list to a specific product tag. Use the tag Slug.</label><br/><br/><input id=\"option_tag\" type=\"text\" />";
			break;
			case 'mp_product': 
				var render_shortcode_options = "<label for=\"option_product_id\">The ID of the product: </label><br/><br/><input id=\"option_product_id\" type=\"text\" /><br/><br/>Whether to display the product title. <br/><br/><input type=\"radio\" name=\"option_title\" value=\"0\" />False <input type=\"radio\" name=\"option_title\" value=\"1\" />True<br/><br/>Whether and what type of content to display.<br/><br/><input type=\"radio\" name=\"option_content\" value=\"0\" />False <input type=\"radio\" name=\"option_content\" value=\"full\" />Full <input type=\"radio\" name=\"option_content\" value=\"excerpt\" />Excerpt<br/><br/>Whether and what context of image size to display.<br/><br/><input type=\"radio\" name=\"option_image\" value=\"0\" />False <input type=\"radio\" name=\"option_image\" value=\"single\" />Single <input type=\"radio\" name=\"option_image\" value=\"list\" />List<br/><br/>Whether to display the product meta (price, buy button).<br/><br/><input type=\"radio\" name=\"option_meta\" value=\"0\" />False <input type=\"radio\" name=\"option_meta\" value=\"1\" />True ";    
			break;
			case 'mp_product_image': 
				var render_shortcode_options = "<label for=\"option_product_id\">The ID of the product: </label><br/><br/><input id=\"option_product_id\" type=\"text\" /><br/><br/>What context for preset size options, default single.<br/><br/><input type=\"radio\" name=\"option_context\" value=\"list\" />List <input type=\"radio\" name=\"option_context\" value=\"single\" />Single <input type=\"radio\" name=\"option_context\" value=\"widget\" />Widget <br/><br/><label for=\"option_content\">Set a custom pixel width/height. If omitted defaults to the size set by \"context\".</label><br/><br/><input id=\"option_size\" type=\"text\" />";    
			break;
			case 'mp_buy_button': 
				var render_shortcode_options = "<label for=\"option_product_id\">The ID of the product: </label><br/><br/><input id=\"option_product_id\" type=\"text\" /><br/><br/>What context for display. Options are list or single, default single which shows all variations.<br/><br/><input type=\"radio\" name=\"option_context\" value=\"list\" />List <input type=\"radio\" name=\"option_context\" value=\"single\" />Single";    
			break;
			case 'mp_product_price': 
				var render_shortcode_options = "<label for=\"option_product_id\">The ID of the product: </label><br/><br/><input id=\"option_product_id\" type=\"text\" /><br/><br/><label for=\"option_label\">A label to prepend to the price. Defaults to \"Price: \"</label><br/><br/><input id=\"option_label\" type=\"text\" />";    
			break;
			case 'mp_product_meta': 
				var render_shortcode_options = "<label for=\"option_product_id\">The ID of the product: </label><br/><br/><input id=\"option_product_id\" type=\"text\" /><br/><br/><label for=\"option_label\">A label to prepend to the price. Defaults to \"Price: \"</label><br/><br/><input id=\"option_label\" type=\"text\" /><br/><br/>What context for display. Options are list or single, default single which shows all variations.<br/><br/><input type=\"radio\" name=\"option_context\" value=\"list\">List <input type=\"radio\" name=\"option_context\" value=\"single\" />Single ";    
			break;
			case 'mp_cart_link': 
				var render_shortcode_options = "Return clickable Link or URL: <br/><br/><input type=\"radio\" name=\"option_url\" value=\"true\" />Link <input type=\"radio\" name=\"option_url\" value=\"false\" />URL<br/><br/><label for=\"option_link_text\">Text to show in the link: </label><br/><br/><input id=\"option_link_text\" type=\"text\" />";
			break;
			case 'mp_store_link': 
				var render_shortcode_options = "Return clickable Link or URL: <br/><br/><input type=\"radio\" name=\"option_url\" value=\"true\" />Link <input type=\"radio\" name=\"option_url\" value=\"false\" />URL<br/><br/><label for=\"option_link_text\">Text to show in the link: </label><br/><br/><input id=\"option_link_text\" type=\"text\" />";   
			break;
			case 'mp_products_link': 
				var render_shortcode_options = "Return clickable Link or URL: <br/><br/><input type=\"radio\" name=\"option_url\" value=\"true\" />Link <input type=\"radio\" name=\"option_url\" value=\"false\" />URL<br/><br/><label for=\"option_link_text\">Text to show in the link: </label><br/><br/><input id=\"option_link_text\" type=\"text\" />";  
			break;
			case 'mp_orderstatus_link': 
				var render_shortcode_options = "Return clickable Link or URL: <br/><br/><input type=\"radio\" name=\"option_url\" value=\"true\" />Link <input type=\"radio\" name=\"option_url\" value=\"false\" />URL<br/><br/><label for=\"option_link_text\">Text to show in the link: </label><br/><br/><input id=\"option_link_text\" type=\"text\" />";
			
			case 'mp_store_navigation': 

		};
	};
	
	jQuery("#mp_shortcode_selector").change(shortcodeOptions);