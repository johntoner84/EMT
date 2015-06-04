require([
	'site_script',
	'vmp_article',
	'sharing_widget',
	'todays_stories_pager'
], function(Site_Script, Vmp_Article, Sharing_Widget, Todays_Stories_Pager){
	var App = Backbone.View.extend({
		el : $('.article-single-page-container'),

		initialize : function(){
			this.setVariables();
		},

		setVariables : function(){
			this.site_script = new Site_Script();

			this.vmp_article = new Vmp_Article();

			// article nav socials
			this.article_share_widget_el = this.$('.article-header-share-widget');

			//article bottom nav socials
			this.article_share_bottom_widget_el = this.$('.article-bottom-share-widget');

			this.article_share_widget = new Sharing_Widget({
				el : this.article_share_widget_el
			});

			this.article_share_widget = new Sharing_Widget({
				el : this.article_share_bottom_widget_el
			});
		},

	});

	var Article_Todays_Stories_Pager = Todays_Stories_Pager.extend({
		el : $('.article-todays-stories')
	});

	$(function(){
		var app = new App(),
		article_todays_story_pager = new Article_Todays_Stories_Pager();
	});
});
