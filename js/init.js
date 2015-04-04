define(["underscore",
        "jquery",
        "backbone",
        "views/base",
        "views/record-list",
        "views/record-detail"
    ],
    function (_, $, Backbone, BaseView, RecordListView, RecordDetailView) {
        "use strict";
        var App = function (opts) {
            this.routes = {};
            this.routeViews = {};
            this.appRouter = null;
            this.defaultTarget = '.section-content';

            this.init = function (opts) {
                this.addListeners();
                this.buildViews(opts.pages);
                this.buildRoutes(opts.pages);
                var AppRouter = Backbone.Router.extend({
                    routes: this.routes
                });
                this.appRouter = new AppRouter();
                Backbone.history.start();
            };

            this.buildViews = function (pages) {
                var that = this;
                /* Dynamically builds Backbone Views from the config file */
                _.each(pages, function (page) {
                    var View = that.getView(page),
                        v; // = new View(page);
                    if (page.url) {
                        that.routeViews[page.url] = View; //v;
                    } else {
                        v = new View(page);
                        $(page.target || that.defaultTargets).html(v.el);
                    }
                });
            };

            this.getView = function (page) {
                switch (page.type) {
                case "list":
                    return RecordListView.extend(page);
                case "detail":
                    return RecordDetailView.extend(page);
                default:
                    return BaseView.extend(page);
                }
            };

            this.buildRoutes = function (pages) {
                var that = this;
                /* Dynamically builds Backbone Routes from the config file */
                _.each(pages, function (page) {
                    if (page.type == "detail") {
                        page.modelID = page.id;
                    }
                    that.routes[page.url] = function (id) {
                        that.loadView(page, id);
                    };
                });
            };

            this.loadView = function (page, id) {
                if (id) { page.modelID = id; }
                var view = new this.routeViews[page.url](page);
                $(page.target || this.defaultTarget).html(view.el);
                view.delegateEvents();
                this.addAnimation();
            };

            this.addAnimation = function () {
                $("#explore_section").addClass("showme");
            };

            this.addListeners = function () {
                var that = this;
                $('#close-project').click(function (e) {
                    $("#explore_section").removeClass("showme");
                    e.preventDefault();
                    that.appRouter.navigate('home', {trigger: true});
                });
            };

            //call init upon initialization:
            this.init(opts);
        };
        return App;
    });

