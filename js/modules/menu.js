// ---------------------------- //
//             Menu             //
// ---------------------------- //
(function($) {
    var Menu = function(element, options) {
        this.menu = $(element);

        //Toggle button
        this.menuTrigger = $(".navbar-toggle");
        //All links
        this.menuLinks = this.menu.find(".nav-main-link");
        //Nav div
        this.mainNav = this.menu.find(".toplevel");

         // Default module configuration
        this.defaults = {
            classes: {
                states: {
                    active: 'is-active'
                }
            }
        };

        // Merge default classes with window.project.classes
        this.classes = $.extend(true, this.defaults.classes, (window.project ? window.project.classes : {}));

        // Merge default labels with window.project.labels
        this.labels = $.extend(true, this.defaults.labels, (window.project ? window.project.labels : {}));

        // Merge default config with custom config
        this.config = $.extend(true, this.defaults, options || {});

        this.init();
    };

    $.extend(Menu.prototype, {
        // Component initialization
        init: function() {
            // Bind events
            this.bindEvents();
        },
        bindEvents: function() {
            // Click events to toggle the menu on mobile
            this.menuTrigger.on('click', $.proxy(function(e) {
                this.mainNav.slideToggle();
                this.menuTrigger.toggleClass("is-active");
            }, this));
            // Click events to toggle the menu on mobile
            this.menuLinks.on('click', $.proxy(function(e) {
                if ($(window).width() <= 1024) {
                    this.mainNav.slideToggle();
                }
            }, this));
        },
    });

    $.fn.menu = function(options) {
        this.each($.proxy(function(index, element) {
            var $element = $(element);

            // Return early if this $element already has a plugin instance
            if ($element.data('menu')) return;

            // Pass options to plugin constructor
            var menu = new Menu(element, options);

            // Add every public methods to plugin
            for (var key in menu.publicMethods) {
                this[key] = menu.publicMethods[key];
            }

            // Store plugin object in this $element's data
            $element.data('menu', menu);
        }, this));

        return this;
    };
})(jQuery);
