import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['653025d72b595250d4dffd74ce91bf09'],
    table: 'sp_rel_widget_clone',
    data: {
        child: 'e53025d72b595250d4dffd74ce91bf04',
        cloned: '2024-10-22 13:17:56',
        last_validated: '2024-10-22 13:17:56',
        parent: 'd0009941eb103010ed7966d6475228c1',
        payload: `<?xml version="1.0" encoding="UTF-8"?><sp_widget><category>hr</category><client_script><![CDATA[function escHeaderController($rootScope, $scope, $window, spUtil, $location, $uibModal, cabrillo, $timeout, i18n, spContextManager, snAnalytics) {
    var c = this;

    // Events fired from/to $rootScope for responsive mobile view.
    c.SHOW_MOBILE_MEGA_MENU = 'showMobileMegaMenu';
    c.SHOW_MOBILE_MENU_ON_DESKTOP = 'showMobileMenuOnDesktop';
    c.TOGGLE_MOBILE_MENU_VISIBILITY = 'toggleMobileMenuVisibility';
    c.INITIAL_TIMEOUT = 500;
    $rootScope.isHeaderInMobileView = false;

    $('body').on('click', function(e) {
        $('[data-toggle=tooltip]').each(function() {
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.tooltip').has(e.target).length === 0) {
                $(this).tooltip('hide');
            }
        });
    });

    c.evaluateSearchWidgetVisibility = function() {
        if (c.data.hideSearchOnHomepage) {
            var currentUrl = $location.url();
            var params = $location.search();

            // hide on home page
            if ((params && params.id && params.id === c.data.dashboardSuffix) || (params && !params.id && currentUrl.includes(c.data.portalSuffix))) {
                $scope.showSearchBar = false;
                $scope.showViewAsHeader = false;
            } else
                $scope.showSearchBar = true;
            // show ViewAs header on viewAsPages  
            if ((params && params.id && currentUrl.includes("ec_view_as")))
                $scope.showViewAsHeader = true;
        }
    };

    c.evaluateExperienceFeedbackDrawerVisibility = function() {
        $scope.exFeedbackActive = c.data.exFeedbackActive;
        if (c.data.drawerV2Available && c.data.shouldRefreshDefnOnNavigation) {
            $scope.exFeedbackActive = true;
            c.data.exFeedbackActive = true;
        } else {
            var pageID = $location.search().id;
            var currentPage = pageID ? pageID : c.data.homepageDisplayValue;
            if (c.data.isDrawerConfigured) {
                var showOnAllPages = c.data.widgetData.showOnAllPages === '1';
                var currentPageIncluded = c.data.widgetData.includedPages.length && c.data.widgetData.includedPages.includes(currentPage);
                var currentPageExcluded = c.data.widgetData.excludedPages.length && c.data.widgetData.excludedPages.includes(currentPage);
                if ((showOnAllPages && currentPageExcluded) || (!showOnAllPages && !currentPageIncluded)) {
                    $scope.exFeedbackActive = false;
                    c.data.exFeedbackActive = false;
                } else {
                    $scope.exFeedbackActive = true;
                    c.data.exFeedbackActive = true;
                }
            }
        }
    };

    function addDeferScript(src, callback) {
        var s = document.createElement('script');
        s.setAttribute('src', src);
        s.setAttribute('defer', true);
        s.onload = callback;
        document.body.appendChild(s);
    }

    if (c.data.isPersonalizedAnswer) {
        addDeferScript("/scripts/app-ex-integrated-answers-components/app-ex-integrated-answers-components.min.js");
    }

    $scope.$on('sp_loading_indicator', function(e, value) {
        $scope.loadingIndicator = value;
        // Evaluate search bar visibility once the page has completed loading.
        if (!value) {
            c.evaluateSearchWidgetVisibility();
            c.evaluateExperienceFeedbackDrawerVisibility();
        }
    });

    /*
    Finds the header seismic component sn-search-combobox
    as it has a shadow dom, hence direct access to the input button is not available
    So accessing the nested desktop search box component, and then setting the value
    of the input control based on query passed
    */
    function setSearchBoxValue(query) {
        var headerSearchBox = document.querySelector("sn-search-combobox");
        if (headerSearchBox) {
            var desktopSearchBox = headerSearchBox.shadowRoot.querySelector("sn-search-combobox-desktop");
            if (desktopSearchBox) {
                if (desktopSearchBox.shadowRoot.querySelector("input").value != query)
                    desktopSearchBox.shadowRoot.querySelector("input").value = query;
            }
        }
    }

    /*
    Checks if showSearchBar is visible and sets the correct value from query
    $timeout is only used so that current digest cycle completes, there is no hardcoded delay added
    */
    $scope.$watch('showSearchBar', function() {
        $timeout(function() {
            try {
                if ($scope.showSearchBar && $scope.query && $scope.query != '' && $scope.newUrlId !== $scope.oldUrlId) {
                    setSearchBoxValue($scope.query);
                }
            } catch (e) {}
        });
    })

    $scope.showSearchBar = true;
    $scope.userID = $scope.user.sys_id;
    $scope.todosPopupId = c.data.isMobile ? '#popup_todos_mobile' : '';
    $scope.casesPopupId = c.data.isMobile ? '#popup_cases_mobile' : '';
    $scope.popupType = c.data.isMobile ? 'collapse' : 'dropdown';
    $scope.expanded = false;
    $scope.isMobileViewOnDesktopExpanded = false;
    $scope.loadingIndicator = $rootScope.loadingIndicator;
    $scope.cartItemCount = 0;

    /* Below 2 scope variables (showMobileMenuOnDesktop, showMobileMegaMenu) have counterparts in EC Navigation widget also.
     So whenever we set these variables, make sure to emit an event on rootScope to update them in the former widget as well. */

    // Determines whether to show mobile view on desktop due to oveflow of items in sub navigation bar of header.
    $scope.showMobileMenuOnDesktop = false;
    // Used to hide global navigation tools on mobile while showing mega menu topics in right panel.
    $scope.showMobileMegaMenu = false;

    c.todoCountTranslation = i18n.format(c.data.todoCountLabel, String(c.data.todoCount));
    c.toursTranslation = "\${Tours}";

    c.MOBILE_DEVICE_SCREEN_WIDTH = 767;
    $scope.mobileDevice = $scope.mobileDevice || c.data.isMobile || ($window.innerWidth <= c.MOBILE_DEVICE_SCREEN_WIDTH);

    if (cabrillo.isNative())
        $scope.isViewNative = true;

    $scope.navEvent = function(event, hrefParam) {
        var JOURNEYS_HREF = "?id=jny_journeys";
        if (hrefParam === JOURNEYS_HREF) {
            var payload = {};
            payload.name = "Navigate to Journey's home";
            payload.data = {};
            payload.data["Entry point"] = "Header";
            snAnalytics.addEvent(payload);
        }
    };

    // initially for first load, if the calculated width is in mobile view then update
    // isHeaderInMobileView so that Employee Center Navigation widget also goes into mobile mode
    $scope.$watch("mobileDevice", function() {
        $rootScope.isHeaderInMobileView = $scope.mobileDevice;
        $rootScope.$broadcast('isHeaderInMobileView', $scope.mobileDevice);
        if (!$scope.mobileDevice) {
            updateClassesOnWishlistElement('remove');
        }
    });

    $scope.$watch('isMobileViewOnDesktopExpanded', function(oldVal, newVal) {
        if (oldVal && !newVal) {
            $timeout(c.registerClickEventHanlderOnCart, c.INITIAL_TIMEOUT);
        }
    });

    c.registerClickEventHanlderOnCart = function() {
        $('a#cart-dropdown').on('click', function(event) {
            if ($window.innerWidth > c.MOBILE_DEVICE_SCREEN_WIDTH && $scope.isMobileViewOnDesktopExpanded) {
                $location.search({
                    id: 'sc_cart'
                });
                $scope.toggleMobileMenuVisibility();
            }
        });
    }

    $scope.$on("$sp.service_catalog.cart.count", function($evt, count) {
        $scope.cartItemCount = count;
    });

    $scope.$on("$locationChangeSuccess", function(event, data) {
        if (c.data.isMobile) {
            if ($('div#popup_todos_mobile').is(":visible"))
                $('li > a#todos_popup').click();
            else if ($('div#popup_cases_mobile').is(":visible"))
                $('li > a#cases_popup').click();
        } else {
            $('li.open > a#cases_popup').click();
            $('li.open > a#todos_popup').click();
        }

        // when location changes and have a query parameter in url, refresh the search bar so that changes will reflect
        //DEF0353060 : regression due to reload of typeahead widget, now setting search box value
        try {
            scope.query = new URL(newUrl).searchParams.get("q");
            $scope.oldUrlId = new URL(oldUrl).searchParams.get("id");
            $scope.newUrlId = new URL(newUrl).searchParams.get("id");
            if ($scope.query && $scope.query != '' && $scope.newUrlId !== $scope.oldUrlId) {
                setSearchBoxValue($scope.query);
            }
        } catch (e) {}
    });

    c.processWatchers = function(watcher) {
        setTimeout($scope.reloadHeader, 20);
    };

    /* Record Watchers */
    if (c.data.recordWatchers && c.data.recordWatchers.length > 0) {
        angular.forEach(c.data.recordWatchers, function(watcher) {
            spUtil.recordWatch($scope, watcher.table, watcher.filter, c.processWatchers);
        });
    }

    $scope.reloadHeader = function(actionName) {
        c.data.action = actionName || c.data.ACTION_TODO_COUNT;
        if (c.data.action == c.data.ACTION_TODO_COUNT)
            c.server.get({
                action: c.data.action
            }).then(function(resp) {
                c.data.todoCount = resp.data.todoCount;
                c.todoCountTranslation = i18n.format(c.data.todoCountLabel, String(c.data.todoCount));
            });
        else
            c.server.update();
    };

    $scope.openLogin = function() {
        $scope.modalInstance = $uibModal.open({
            templateUrl: 'modalLogin',
            scope: $scope
        });
    };

    $rootScope.$on("update.searchpage", function(e, searchPage) {
        $scope.searchPage = searchPage;
    });

    $rootScope.$on('sp.avatar_changed', function() {
        $scope.userID = '';
        $timeout(function() {
            $scope.userID = $scope.user.sys_id;
        });
    });

    $rootScope.$on(c.SHOW_MOBILE_MENU_ON_DESKTOP, function(event, showMobileMenuOnDesktop) {
        if (!(showMobileMenuOnDesktop || $scope.mobileDevice) && $scope.showMobileMenuOnDesktop) {
            $scope.isMobileViewOnDesktopExpanded = false;
        }
        $scope.showMobileMenuOnDesktop = showMobileMenuOnDesktop || $scope.mobileDevice;
    });

    $rootScope.$on(c.SHOW_MOBILE_MEGA_MENU, function(event, showMobileMegaMenu) {
        $scope.showMobileMegaMenu = showMobileMegaMenu;
        if ($scope.mobileDevice) {
            updateClassesOnWishlistElement('add');
        }
    });

    function updateClassesOnWishlistElement(action) {
        var wishListDesktopElement = document.getElementById("wishlist-menu-wrapper");
        updateClassOnElement(wishListDesktopElement, action, 'hidden-sm');
        updateClassOnElement(wishListDesktopElement, action, 'hidden-md');

        if (wishListDesktopElement) {
            var wishListMobileElement = wishListDesktopElement.nextElementSibling;
            updateClassOnElement(wishListMobileElement, action, 'visible-sm');
            updateClassOnElement(wishListMobileElement, action, 'visible-md');
        }
    }

    function updateClassOnElement(element, action, className) {
        if (element) {
            if (action == 'add') {
                element.classList.add(className);
            } else if (action == 'remove') {
                element.classList.remove(className);
            }
        }
    }

    $timeout(function() {
        $scope.calulatedNavbarWidth();
        resizeObserverForTopNav();
    }, c.INITIAL_TIMEOUT);

    function resizeObserverForTopNav() {
        var headerSearch = document.querySelector(".header-search");
        var navbarBrand = document.querySelector(".navbar-brand-logo > img");
        var navbarRight = document.querySelector(".navbar-right > div");
        //fix for firefox/chrome on cmd + text zoom increase
        if (window.ResizeObserver) {
            var resizeObserver = new ResizeObserver(function(entries) {
                if (entries) {
                    $scope.calulatedNavbarWidth();
                }
            });

            if (headerSearch)
                resizeObserver.observe(headerSearch);

            if (navbarBrand)
                resizeObserver.observe(navbarBrand);

            if (navbarRight)
                resizeObserver.observe(navbarRight);
        }
    }

    $scope.toggleMobileMenuVisibility = function(event) {
        if (event) {
            event.stopPropagation();
        }
        $('.sub-navbar-overflow-entry-button').tooltip('hide');
        $scope.isMobileViewOnDesktopExpanded = !$scope.isMobileViewOnDesktopExpanded;
        $scope.expanded = false;
        $scope.showMobileMegaMenu = false;
        $rootScope.$emit(c.SHOW_MOBILE_MEGA_MENU, false);
    };

    $rootScope.$on(c.TOGGLE_MOBILE_MENU_VISIBILITY, function() {
        $scope.toggleMobileMenuVisibility();
    });

    $scope.handleMobileViewClick = function(event) {
        // only stop propagation for navigation menu items
        if ($(event.target).hasClass('mobile-navigation-menu-item') || $(event.target).parents('.mobile-navigation-menu-item').length || $(event.target).hasClass('back-container'))
            event.stopPropagation();
        else if ($(event.target).text().trim() != c.toursTranslation) {
            // Stop propagation for menu items eg. My Requests etc
            if (!($(event.target).parents('.main-header-item').length))
                event.stopPropagation();
        }
    };

    $scope.isHomepage = function() {
        if (!$scope.page.id)
            return true;

        if ($scope.page.id == $scope.portal.homepage_dv)
            return true;

        return false;
    };

    c.evaluateSearchWidgetVisibility();

    //remove nested ul to fix screen reader issue
    $timeout(function() {
        var cartToursWrapper = $('.navbar-header .v' + scope.data.top.menu.sys_id);

        if (!cartToursWrapper.length)
            return;

        var menu = cartToursWrapper.parent().parent();
        var menuItems = cartToursWrapper.children();
        menu.append(menuItems);
        cartToursWrapper.parent().remove();
    }, 1000);

    $scope.$on('sn_lp.giveFeedbackModalOpen', function() {
        $scope.toggleMobileMenuVisibility();
    });
}]]></client_script><controller_as>c</controller_as><css>@mixin -link-hover {
  cursor: pointer;
  background-color: darken($navbar-inverse-bg, 5%);
  border-radius: $border-radius-base;
  color: $navbar-inverse-link-hover-color;
}

@mixin -link-focus {
  outline: 1.5px solid $navbar-inverse-link-color;
  border: none;
  border-radius: $border-radius-base;
  box-shadow: inset 0 0 0 0.1rem #fff;
  background-color: darken($navbar-inverse-bg, 10%);
  color: $navbar-inverse-link-hover-color;
}

@mixin -link-decoration {
  text-decoration: underline;
  text-decoration-color: $navbar-inverse-link-color;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-underline-offset: 2px;
}

@mixin -focus-visible-mouse-ua {
  border: none;
  outline: none;
  box-shadow: none;
}

@mixin -focus-visible-keyboard-ua {
  outline: 1.5px solid $navbar-inverse-link-color;
  border: none;
  border-radius: $border-radius-base;
  box-shadow: inset 0 0 0 0.1rem #fff;
}

.header-item {
  text-decoration: none;
  color: $navbar-inverse-link-color;
  padding: $sp-space--md;
  display:list-item;
}

.loading-indicator {
  padding-top: $sp-space--xl;
  margin-top: $sp-space--xxs;
}

.header-menu {
  display: flex;
  flex-direction: row;
  line-height: 3.7;
}

.gt-menu-item&gt;a {
  text-decoration: none;
  color: $navbar-inverse-link-color;
  padding: 19px 10px;
}

.more-menu-position {
  position: relative;
}

.navbar-inverse {
  margin-bottom: 0px;
  border-radius: 0px;
  background-color: $navbar-inverse-bg;
  position: relative;

  .navbar-header {
    &amp;.nav-container {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: end;

      .sub-navbar-overflow-entry-button {
        position: relative;
        float: right;
        margin: 1.3rem 1.5rem 1.3rem 0;
        padding: .9rem 1rem;
        background-color: transparent;
        background-image: none;
        border: .1rem solid transparent;
        border-radius: .4rem;
        border-color: rgba(255, 255, 255, .25);

        .label {
          float: right;
          margin-right: -.5rem;
          margin-top: -.7rem;
          padding: .2em .5em .2em;
        }

        .label-as-badge {
          font-size: 1.2rem;
          position: relative;
          top: -$sp-space--xxs;
          left: $sp-space--xxs;
          padding: $sp-space--xxs 5px;
          margin-left: 0;
          background-color: $btn-danger-bg;
          color: $text-white;
        }

        .icon-bar {
          display: block;
          width: 2.2rem;
          height: .2rem;
          border-radius: .1rem;
          background-color: #fff;
        }

        .icon-bar+.icon-bar {
          margin-top: .4rem;
        }

        &amp;.close-icon-visible {
          margin-bottom: 0;
          padding: 0.6rem 1rem;
        }

        .fa.fa-close {
          vertical-align: -6%;
          font-size: 20px;
          width: 22px;
          color: $navbar-inverse-link-color;
        }
      }
    }

    .gt-menu-item&gt;a,
    .gt-menu-item&gt;div&gt;ul&gt;li&gt;a,
    .navbar-nav&gt;li&gt;a {
      &amp;:hover {
        @include -link-hover;
      }

      &amp;:focus {
        @include -link-focus;
      }

      &amp;:focus:not(:focus-visible) {
        @include -focus-visible-mouse-ua;
      }

      &amp;:focus-visible {
        @include -focus-visible-keyboard-ua;
      }
    }

    .mobile-view-on-desktop {
      top: 60px;
      position: absolute;
      right: 0;
      z-index: 1001; // keep it bigger than 1000 - DEF0360746
      min-height: 600px;
      max-width: 400px;
      background-color: $navbar-inverse-bg;
      box-shadow: 5px 5px 5px $navbar-inverse-link-color;
      
      .mobile-view-navbar {
        list-style: none;
        padding: 0 8px;
        margin: 0;
        display: flex;
        flex-direction: column;
        border-top: 1px solid darken($navbar-inverse-link-color, 45%);

        .main-header-items {
          padding-inline-start: 0.4rem !important;
          padding-inline-end: 0.4rem !important;
          list-style: none;
          padding-top: 11px;
          margin: 0;
          display: flex;
          flex-direction: column;

          &amp;&gt;li&gt;div&gt;ul {
            width: 100%;

            &amp;&gt;li, &amp;&gt;div&gt;a {
              width: 100%;

              &amp;&gt;a&gt;span {

                &amp;:hover {
                  @include -link-hover;
                }

                &amp;:focus {
                  @include -link-focus;
                }

                &amp;:focus:not(:focus-visible) {
                  @include -focus-visible-mouse-ua;
                }

                &amp;:focus-visible {
                  @include -focus-visible-keyboard-ua;
                }
              }
            }
          }

          &amp;&gt;li&gt;a, &amp;&gt;ul&gt;li&gt;a, &amp;&gt;div&gt;a {
            display: block;
            padding: $sp-space--md;

            &amp;:hover {
              @include -link-hover;

              &amp;&gt;a {
                color: $navbar-inverse-link-hover-color;
              }
            }

            &amp;:focus {
              @include -link-focus;
            }

            &amp;:focus:not(:focus-visible) {
              @include -focus-visible-mouse-ua;
            }

            &amp;:focus-visible {
              @include -focus-visible-keyboard-ua;
            }

            // Cart, tours, and Wishlist (Mobile View)
            .nav.navbar-nav {
              display: flex;
              flex-direction: column;
            }
          }
        }

        .mobile-mega-menu-entry {
          margin: 0 -8px;
        }

        .separator {
          margin: 20px -8px;
          border-top: 1px solid darken($navbar-inverse-link-color, 30%);
        }

        li&gt;a {
          color: $navbar-inverse-link-color;

          &amp;:hover,
          &amp;:focus {
            color: #fff !important;
            background-color: transparent;
          }

          &amp;:focus {
            box-shadow: inset 0 0 0 0.1rem #fff;
            outline: 1.5px solid $navbar-inverse-link-color;
            border: none;
            border-radius: 4px;
          }

          &amp;:focus:not(:focus-visible) {
            border: none;
            outline: none;
            box-shadow: none;
          }

          &amp;:focus-visible {
            box-shadow: inset 0 0 0 0.1rem #fff;
            outline: 1.5px solid $navbar-inverse-link-color;
            border: none;
            border-radius: 4px;
          }
        }

        li.user-name {
          margin: 0 0.4rem 0 0.4rem;

          &amp;&gt;a {
            display: block;
            padding: 0 $sp-space--md;
            height: $sp-space--xl * 2;

            &amp;&gt;span.navbar-avatar {
              line-height: $sp-space--sm * 7;
            }

            &amp;&gt;span:not(.navbar-avatar) {
              line-height: 4.5rem;
            }
          }

          &amp;:hover {
            @include -link-hover;

            &amp;&gt;a {
              color: $navbar-inverse-link-hover-color;
            }
          }

          &amp;:focus {
            @include -link-focus;
          }

          &amp;:focus:not(:focus-visible) {
            @include -focus-visible-mouse-ua;
          }

          &amp;:focus-visible {
            @include -focus-visible-keyboard-ua;
          }
        }
      }

      .impersonate-and-logout {
        div&gt;ul&gt;li:first-child {
          &amp; &gt; a#profile-dropdown {
            display: none;
          }

          ul.dropdown-menu {
            width: 400px;
            display: block;
            z-index: inherit;
            background-color: $navbar-inverse-bg;
            box-shadow: none;
            border-radius: 0;
            padding-left: 2px;
            padding-bottom: 16px;

            li&gt;a {
              margin: 0 $sp-space--md 0 $sp-space--md;
              padding: $sp-space--md;

              &amp;:hover {
                @include -link-hover;

                &amp;&gt;a {
                  color: $navbar-inverse-link-hover-color;
                }
              }

              &amp;:focus {
                @include -link-focus;

                &amp;&gt;a {
                  border: none;
                  box-shadow: none;
                }
              }

              &amp;:focus:not(:focus-visible) {
                @include -focus-visible-mouse-ua;
              }

              &amp;:focus-visible {
                @include -focus-visible-keyboard-ua;
              }
            }

            li:first-child {
              display: none;
            }
          }
        }

        div&gt;ul&gt;li&gt;a {
          margin: 0 $sp-space--md 0 $sp-space--md;
          padding: $sp-space--md;

          &amp;:hover {
            @include -link-hover;

            &amp;&gt;a {
              color: $navbar-inverse-link-hover-color;
            }
          }

          &amp;:focus {
            @include -link-focus;

            &amp;&gt;a {
              border: none;
              box-shadow: none;
            }
          }

          &amp;:focus:not(:focus-visible) {
            @include -focus-visible-mouse-ua;
          }

          &amp;:focus-visible {
            @include -focus-visible-keyboard-ua;
          }
        }
      }
      
      .navbar-nav {
        li {
          width: 100%;
        }
      }

      .dropdown-menu {
        position: relative;
        width: 100%;
      }
      
      .empty-dropdown {
        margin-top: $sp-space--lg;
      }
      
    }

    .mobile-view-on-desktop.search-visible {
      top: 113px;
      position: absolute;
      right: 0;
      width: 100%;
      /* To prevent Mega menu panel in hamburger view from growing beyond footer */
      max-height: 100vh;
      overflow-y: auto;
      z-index: 1001; // keep it bigger than 1000 - DEF0360746
      padding: 10px 0px;
      margin-bottom: 10px;
    }

    .navbar-brand {
      margin: 0;
      margin-right: auto;
      height: 60px;
      padding: $sp-logo-margin-y 0px 10px $sp-logo-margin-x;

      img,
      span {
        margin: 0;
        display: block;
        max-height: $sp-logo-max-height;
        max-width: $sp-logo-max-width;
        position: relative;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
      }
    }

    .navbar-right .dropdown-menu&gt;li&gt;a {
      &amp;:hover {
        @include -link-hover;
        @include -link-decoration;
      }

      &amp;:focus {
        @include -link-focus;
        @include -link-decoration;
      }

      &amp;:focus:not(:focus-visible) {
        @include -focus-visible-mouse-ua;
      }

      &amp;:focus-visible {
        @include -focus-visible-keyboard-ua;
      }
    }
  }

  .dropdown-menu&gt;li&gt;a {
    color: $navbar-inverse-link-color;
  }

  .dropdown-toggle:focus {
    outline: thin dotted;
    outline: 5px auto -webkit-focus-ring-color;
  }

  .sub-navbar {
    background-color: $sp-navbar-divider-color;
    border: none;
    width: 100%;

    #cart-dropdown,
    #wishlist-menu {
      display: none;

      ~* {
        display: none !important;
      }
    }

    .navbar-nav&gt;li&gt;a[href="?id=sc_cart"],
    .navbar-nav&gt;li&gt;a[href="?id=sc_wishlist"] {
      display: none !important;
    }

    .gtd-dropdown-container {
      display: none;
    }

    .open&gt;a,
    .open&gt;a:focus {
      background-color: darken($sp-navbar-divider-color, 8%);
    }

    #cart-dropdown {
      display: none;

      :after {
        content: "\\f0d7";
        vertical-align: baseline;
        width: auto;
        height: auto;
        border: none;
        margin-left: 5px !important;
        display: inline-block;
        font: normal normal normal 14px/1 FontAwesome;
        font-size: inherit;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
    }

    .dropdown-menu {
      background-color: $sp-navbar-divider-color;

      &gt;li&gt;a:hover,
        &gt;li&gt;a:focus {
          background-color: darken($sp-navbar-divider-color, 8%);
      }
    }
  }

  .dropdown-menu {
    background-color: rgba($navbar-inverse-bg, 0.97);
    border: none;

    &amp;.case-menu {
      right: 0;
      left: auto;
      padding: 0;
      width: 450px;
      background: $color-lightest;
      overflow-y: hidden;
    }
  }

  &gt;.open&gt;a:hover,
    &gt;.open&gt;a:focus {
      background-color: darken($navbar-invese-bg, 8%);
  }

  .fa-caret-down {
    vertical-align: middle;
    margin-top: 2px;
  }

  .caret:before {
    content: "\\f0d7";
  }

  .caret {
    vertical-align: baseline;
    width: auto;
    height: auto;
    border: none;
    margin-left: 5px !important;
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .label-as-badge {
    font-size: 1.2rem;
    position: relative;
    top: -$sp-space--sm;
    left: -$sp-space--xxs;
    padding: 1px 5px;
    margin-left: 0;
    background-color: $btn-danger-bg;
    color: $text-white;
  }

  .navbar {
    transition: 250ms opacity ease-in-out;
    -webkit-transition: 250ms opacity ease-in-out;
    border: 0;
  }

  .navbar-fade {
    opacity: 0.4;
  }

  .navbar-collapse {
    padding-right: 0px;
  }

  .case-menu {
    div#widget-tabs-2 {
      border: none;

      &gt;.panel-heading {
        border: none;
        border-bottom: 1px solid $border;
      }
    }
  }

  ul.nav.navbar-nav {

    // Hiding the loading indicator from Header Menu base system widget
    div.header-loader {
      display: none;
    }

    li.sp-loading-indicator {
      padding-top: $sp-space--sm * 3;
      margin-top: $sp-space--xxs;
    }
  }

  #more-items-dropdown {
    overflow: visible;
  }

  .cart-dropdown,
  .wishlist-menu,
  .gtd-dropdown-container .empty-dropdown {
    width: 350px;
    padding: 0;
    z-index: 1000;
    border-top-left-radius: 4px !important;
    border-top-right-radius: 4px !important;

    ul {
      max-height: 300px;
      overflow: auto;
    }

    .subtotal {
      display: block;
    }

    .item-image {
      padding: 0;
      margin: 0;
      text-align: center;
      max-width: 100%;
      height: auto;
    }

    label,
    p {
      padding: 0;
      margin: 0;
    }

    .media {
      padding: 0;
      margin: 0;
    }

    .media-left&gt;a {
      display: block;
      width: 48px;
      max-width: 48px;
    }

    .media-body {
      label {
        font-weight: bold;
      }
    }

    li.media {
      border-top: 1px solid #cccccc;
      padding: 1rem;
    }

    .panel {
      margin: 0;
    }

    .panel .panel-body {
      padding: 0;
    }

    .btn-clear {
      color: #333;
      background-color: #fff;
    }

    p.quantity-price {
      padding-top: 0.5rem;

      span {
        color: $text-muted;
        padding-right: 0.5rem;
      }
    }

    .align-right {
      text-align: right;
    }
  }


  .item-added-tooltip,
  wishlist-item-added-tooltip {
    width: 184px;
    font-size: 14px;
  }

  .gtd-dropdown-container {
    .empty-tour-content {
      text-align: center;
      margin: 40px 20px;
    }

    .dropdown-menu li {
      a {
        cursor: pointer;
      }

      min-width: 20em;
    }

    .label-as-badge {
      width: 12px;
      height: 12px;
      display: inline-block;
      padding: 0px;
      padding-top: 2px;
    }

    .badge-container {
      display: inline-block;
      width: 12px;
    }
  }

}

.header-group {
  display: flex;
  flex-direction: row;
}

@media screen and (min-width: 768px) {
  .navbar-inverse {
    .navbar-right&gt;.navbar-nav&gt;div {
      float: left;
    }

    .navbar-right {
      display: flex;
      flex-direction: row-reverse;
      margin-right: 10px;

      &gt;ul {
        display: -webkit-box;
        display: -moz-box;
        display: box;

        -moz-box-orient: horizontal;
        box-orient: horizontal;
        -webkit-box-orient: horizontal;
      }

      .navbar-nav&gt;li&gt;a {
        padding-right: 10px;
        padding-left: 10px;
      }
    }

    .navbar-avatar {
      margin-top: -7px;
    }

    a#todos_popup {
      padding-left: 0px;
    }

    .navbar-nav .open .dropdown-menu&gt;li&gt;a {
      margin: 0 $sp-space--sm 0 $sp-space--sm;
      padding: 10px 20px;
    }

    .navbar-header {
      position: relative;

      .dropdown-toggle {
        height: 60px;
      }
    }

    .temp-mobile {
      display: inline-block;
    }

    .sub-navbar {
      display: flex;
      padding-left: 0;
    }

    .sub-navbar--mobile-view {
      .navigation--xs {
        display: none;
      }
    }
  }
}

.header-search-mobile {
  margin: 1.3rem 1rem;
  width: 100%;
}

// Search bar styles in the header (Should always be in the center)
.header-search {
  margin: 1.3rem 1rem;
  width: 100%;
  max-width: 600px;
  min-width: 250px;

  @media (max-width: 1920px) and (min-width: 1441px) {
    max-width: 600px;
  }

  @media (max-width: 1440px) and (min-width: 1025px) {
    max-width: 450px;
  }

  @media (max-width: 1024px) and (min-width: 768px) {
    max-width: 350px;
  }
}

@media all and (-ms-high-contrast: none),
  (-ms-high-contrast: active) {
    .navbar-inverse {
      .mobile-top-navigation {
        .mobile-view-on-desktop {
          .main-header-items {
            padding-left: .4rem;
          }
        }
      }
    }
}

@media (min-width : 320px) and (max-width : 767px) {
  .navbar-inverse {
    .dropdown-menu.case-menu {
      width: 100%;
    }

    .navbar-toggle {
      border-color: rgba(255, 255, 255, .25);
    }

    .navbar-toggle:focus {
      -webkit-box-shadow: 0rem 0rem 0.5rem #1f8476
    }

    .navbar-nav {
      display: block;
      margin: 0;

      .open .dropdown-menu&gt;li&gt;a {
        padding: 5px 30px;
      }
    }

    .sub-navbar {
      padding: 0px 0px;
    }

    .upper-collapse {
      width: 100%;
      padding-bottom: 0px;
    }

    .navbar-collapse {
      padding-top: 0px;
      padding-left: 0px;
      overflow: hidden;

      ul {
        margin: 0;
      }
    }

    .navbar-header.nav-container {
      .mobile-view-on-desktop {
        min-width: 100%;
        // max-width: 100%; is needed for 400% zoom-level in WCAG resolution
        max-width: 100%;

        .impersonate-and-logout {
          div&gt;ul&gt;li:first-child {
            &amp; &gt; a{
                display: block;
            }
          }
        }
      }

      &gt;ul {
        display: inline-block;
        padding: 10px 10px 0 0;
        float: right;
        margin: 0;
      }

      &gt;li {
        display: inline-block;
      }
    }

    .height-adjust {
      padding: 10px 0px;
      margin-bottom: 10px;
    }

    .popup-edit {
      background: $color-lightest;
      position: fixed;
      top: 0;
      height: 100%;
      margin-top: 0;
      max-height: 100%;
      width: 100%
    }

    .navbar-collapse-label {
      float: right;
      margin-right: -5px;
      margin-top: -7px;
    }

    button&gt;span.label {
      padding: .2em .5em .2em;
    }
  }
}</css><data_table>sp_instance</data_table><demo_data/><description/><docs/><field_list/><has_preview>false</has_preview><id>employee-center-header</id><internal>false</internal><link><![CDATA[function escHeaderLink(scope, element, attrs, controller) {
    $(element).on('click', 'a.navbar-brand', function (e) {
        scope.expanded = false;
    });
    //defaults for calulating width of components
    var DEFAULT_RIGHT_NAVIGATION_SIZE = 400;
    var DEFAULT_LOGO_SIZE  = 300;

    //added these to scope so that these can be potentially used in controller
    scope.navbarRightSize = 0;
    scope.navbarRightFinalSize = 0
    scope.navbarRightTop = 0;
    scope.navbarSearchSize = 0;
    scope.navbarSearchFinalSize = 0
    scope.navbarSearchTop = 0;
    scope.navLogoFinalSize = 0;

    $(element).on('click.nav', '.navbar-collapse.in', function (e) {
        var target = $(e.target);
        if (target.is('a') && !target.hasClass("dropdown-toggle") && target.siblings('.dropdown-menu').length == 0) {
            // collapse mobile nav if clicked an anchor that isn't a dropdown toggle
            scope.expanded = false;
            return;
        }

        // if neither target nor parent is an anchor or the parent anchor is a dropdown-toggle, do nothing
        if (!target.parent().is('a') || target.parent().hasClass("dropdown-toggle") || target.parent().siblings('.dropdown-menu').length > 0)
            return;

        // collapse mobile nav if target is part of a submenu
        if (target.parents("ul.dropdown-menu").length > 0) {
            scope.expanded = false;
            return;
        }

        // collapse mobile nav is target is part of the dropdown
        if (target.parents("div.navbar-collapse").length > 0)
            scope.expanded = false;
    });
    $(element).on('keydown', '.dropdown-menu > .header-menu-item', function (e) {
        var target = e.target;
        if (target.localName === 'a') {
            if (e.keyCode === 37 || e.keyCode === 39) {
                e.preventDefault();
                $(target).parents('li').removeClass('open');
                $(target).parents('li').find('a').focus();
            } else if (e.keyCode === 9) {
                $(target).parents('li').removeClass('open');
            }
        }
    });

  $('body').click(function (event) {
      if ($(event.target).text().trim() != controller.toursTranslation && scope.isMobileViewOnDesktopExpanded)
        scope.toggleMobileMenuVisibility();
   });

  // Closing mobile navigation menu after hitting Tab key on Logout option to focus on next DOM element on the page.
  $(document).on('keydown', '.impersonate-and-logout > div > ul > li > a[href*="logout"]', function (keyDownEvent) {
     var TAB_KEY_VALUE = 'Tab';

     if (keyDownEvent.key === TAB_KEY_VALUE  && !keyDownEvent.shiftKey && scope.mobileDevice) {
        scope.$applyAsync(function () {
         scope.toggleMobileMenuVisibility();
        });
     }
  });

  // this is for the fact that the impersonate and logout widget has hardcoded mobile size, and for screen width
  // greater than 767 pixel, the impersonate and dropdown li has tabindex -1, hence handling that case to close menu.
  $(document).on('keydown', '.impersonate-and-logout > div > ul > li', function (keyDownEvent) {
    var TAB_KEY_VALUE = 'Tab';
    var dropdownItems = $('.impersonate-and-logout > div > ul > li > a + ul > li > a');
    if (dropdownItems.length > 0) {
    //Close mega menu only if focus is at the last element of the menu and tab key is entered
        if (document.activeElement === dropdownItems[dropdownItems.length - 1]) {
            if (keyDownEvent.key === TAB_KEY_VALUE  && !keyDownEvent.shiftKey && (scope.mobileDevice || scope.showMobileMenuOnDesktop)) {
                scope.$applyAsync(function() {
                    scope.toggleMobileMenuVisibility();
               });
            }
        }
    }
  });

  // Helper function to handle the arrow key navigation in the header
	function handleKeyPressEvents(e) {
		var target = e.target;
		var querySelector;
		if($(this).hasClass('gt-menu-item'))
			querySelector = 'li.gt-menu-item';

		// Only Side arrow keys should work for gt-menu-item and only vertical arrow keys should work for header-nav-item
		if(querySelector === 'li.gt-menu-item' && !(e.keyCode === 37 || e.keyCode === 39 || e.keyCode === 9))
				return;
		else if($(this).parents('.header-nav-item').length !== 0 && !(e.keyCode === 38 || e.keyCode === 40))
				return;

		//desktop view prework
		var currentMenuItem = $(target).parents('li');
		var parentUL = currentMenuItem.parents('ul');
		var allMenuItems = parentUL.children(querySelector);
		var firstMenuItem = allMenuItems.first();
		var lastMenuItem = allMenuItems.last();
		var menuItemToFocus;

		if(querySelector === 'li.gt-menu-item') {
			if(e.keyCode === 9) {
				$(target).parents('li').removeClass('open');
				return;
			}
			else {
				e.preventDefault();
				currentMenuItem.removeClass('open');
			}
		}

		//mobile view navigation prework
		var items = [];
		var selectors = [];
		selectors.push('li.main-header-item>a'); //main header items -> Employee Center Header widget
		if(scope.exFeedbackActive)
			selectors.push('li.main-header-item>div>a.experience-feedback-header-item'); //Experience Feedback Header widget mobile menu item
		selectors.push('li.header-menu-item>a#tour-dropdown'); // Tour drop down -> EC Menu widget
		selectors.push('li.user-name>a'); // User Name -> Employee Center Header widget
		selectors.push('.impersonate-and-logout > div > ul > li > a + ul > li > a'); // Logout/Impersonate -> Profile with Drop Down widget
		selectors.push('.impersonate-and-logout li.visible-xs-block>a');
		for (var i = 0; i < selectors.length; i++) {
		    //Dont include hidden profile button
			if(selectors[i] === '.impersonate-and-logout > div > ul > li > a + ul > li > a'){
				items.push($(selectors[i]).slice(1).get());
			}
			else{
				items.push($(selectors[i]).get());
			}
		}
		items = [].concat.apply([], items);

		//mobile view navigation starts
		if ($(target).parents('.header-nav-item').length) {
			var index = items.indexOf($(':focus').get(0));
			if (e.keyCode === 40) {
				e.preventDefault();
				index = index + 1;
			}
			else if(e.keyCode === 38) {
				e.preventDefault();
				if (index === 0) {
					$('.mega-menu-item').filter(':visible').last().focus();
				}
				index = index - 1;
			}
			if (index < items.length && index >= 0)
				items[index].focus();
		} //else if desktop view
		else if (target.localName === 'a') {
			if(e.keyCode === 37) {
				var previousMenuItem = currentMenuItem.prevAll(querySelector);
				currentMenuItem.prevAll(querySelector).first();
				//enable circular navigation
				menuItemToFocus = previousMenuItem.length ? previousMenuItem : lastMenuItem;
				menuItemToFocus.find('a').focus();
			} else if(e.keyCode === 39) {
				var nextMenuItem = currentMenuItem.nextAll(querySelector).first();
				//enable circular navigation
				menuItemToFocus = nextMenuItem.length ? nextMenuItem : firstMenuItem;
				menuItemToFocus.find('a').focus();
			}
		}
	}

	// Handler to focus the first element of More Items dropdown on pressing Space/Enter/Down Arrow key.
	$(element).on('keydown', '#more-items-button', function(e) {
		if(e.keyCode === 32 || e.keyCode === 13 || e.keyCode === 40) {
			e.preventDefault();
			var target = e.target;
			var moreItemsDropdown = '#more-items-dropdown';
			$(target).click();
			$(moreItemsDropdown).find('li.header-menu-item a:first').focus();
		}
	});

	// Capturing the arrow key navigation in mega menu for both desktop and mobile view
	$(element).on('keydown','.gt-menu-item, .header-nav-item', handleKeyPressEvents);

  /*
   * this is the method, which calculates the navbar component total width,
   * the main logic is that when the navbar wraps for text zoom or for normal case,
   * the top increases from 0, and then the mobile view is triggered.
   * It also takes care of edge cases, with and without the searchbar
  */
  scope.calulatedNavbarWidth = function(inDigest) {
    //if the text zoom level is less than 100% then falling back to normal mobileDevice calculation
    
    var WINDOW_WIDTH = window.innerWidth;
    var DEFAULT_SEARCH_SIZE;
    if (WINDOW_WIDTH > 1440) {
      DEFAULT_SEARCH_SIZE = 600;
    } else if (WINDOW_WIDTH > 1024 && WINDOW_WIDTH < 1441) {
      DEFAULT_SEARCH_SIZE = 450;
    } else if (WINDOW_WIDTH > 768 && WINDOW_WIDTH < 1025) {
      DEFAULT_SEARCH_SIZE = 350;
    } else {
      DEFAULT_SEARCH_SIZE = 250;
    }

    var currentFontSize  = parseInt($('body').css('font-size'));
    var constantOffset = 50;
    var flexOffsetWidth = constantOffset * (currentFontSize / 16);
    if(currentFontSize < 16) {
      scope.$apply(function() {
        scope.mobileDevice = controller.data.isMobile || (window.innerWidth <= controller.MOBILE_DEVICE_SCREEN_WIDTH);
      });
      return;
    }
    var headerSearch = angular.element(".header-search");
    var navbarBrand = angular.element(".navbar-brand-logo > img");
    var navbarRight = angular.element(".navbar-right > div");
    var totalNavbarSize = 0;
    if(headerSearch && headerSearch.length >= 1 && scope.navbarSearchTop == 0) {
      var tempSearchSize = scope.navbarSearchSize;
      scope.navbarSearchSize = headerSearch[headerSearch.length - 1].offsetWidth
      scope.navbarSearchTop = headerSearch[headerSearch.length - 1].clientTop;
      if(headerSearch[headerSearch.length - 1].clientTop > 0) {
        scope.navbarSearchFinalSize = tempSearchSize !== 0 ? tempSearchSize : DEFAULT_SEARCH_SIZE;
      }
      else {
        scope.navbarSearchFinalSize = scope.navbarSearchSize;
      }
    }
    if(navbarBrand && navbarBrand.length >= 1)
      scope.navLogoFinalSize = navbarBrand[navbarBrand.length - 1].offsetWidth;
    if(navbarRight && navbarRight.length >= 1 && scope.navbarRightTop == 0) {
      var tempSize = scope.navbarRightSize;
      scope.navbarRightSize = navbarRight[navbarRight.length - 1].offsetWidth
      scope.navbarRightTop = navbarRight[navbarRight.length - 1].clientTop;
      if(navbarRight[navbarRight.length - 1].clientTop > 0) {
        scope.navbarRightFinalSize = tempSize !== 0 ? tempSize : DEFAULT_RIGHT_NAVIGATION_SIZE;
      }
      else {
        scope.navbarRightFinalSize = scope.navbarRightSize;
      }
    }
    totalNavbarSize += scope.navLogoFinalSize !== 0 ? scope.navLogoFinalSize : DEFAULT_LOGO_SIZE;
    totalNavbarSize += scope.navbarSearchFinalSize !== 0 ? scope.navbarSearchFinalSize : DEFAULT_SEARCH_SIZE;
    totalNavbarSize += scope.navbarRightFinalSize !== 0 ? scope.navbarRightFinalSize : DEFAULT_RIGHT_NAVIGATION_SIZE;
    //if it has gone to two lines, simply go for mobileView
    var navBarFitsInViewport = (totalNavbarSize > (window.innerWidth - flexOffsetWidth));
    if(inDigest) {
      scope.mobileDevice = navBarFitsInViewport || controller.data.isMobile || (window.innerWidth <= controller.MOBILE_DEVICE_SCREEN_WIDTH);
    }
    else {
      scope.$apply(function () {
        // update current scope based on the new innerWidth and let angular update the view.
        scope.mobileDevice = navBarFitsInViewport || controller.data.isMobile || (window.innerWidth <= controller.MOBILE_DEVICE_SCREEN_WIDTH);
      });
    }
  }


   $(window).resize(function(e) {
    if(e.type == 'resize') {
      scope.calulatedNavbarWidth();
    }
  });

   // This helper returns a function, that, as long as it continues to be invoked, will not
   // be triggered. The function will be called after it stops being called for
   // N milliseconds. If \`immediate\` is passed, trigger the function on the
   // leading edge, instead of the trailing.
   function debounce(func, wait, immediate) {
      var timeout;
      return function () {
         var context = this,
            args = arguments;
         var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
         };
         var callNow = immediate && !timeout;
         clearTimeout(timeout);
         timeout = setTimeout(later, wait);
         if (callNow) func.apply(context, args);
      };
   }
}]]></link><name>Employee Center Header</name><option_schema/><public>false</public><roles/><script><![CDATA[(function() {
    function isImpersonating() {
        if (gs.getCurrentScopeName() == "rhino.global")
            return GlideImpersonate().isImpersonating();
        return gs.getSession().isImpersonating();
    }

    /**
     * Conditionaly looks for EXfeedbackUtil script include to support compatibility with older versions of store app
     */
    function getFeedbackUtil(portalId) {

        var feedbackUtilGr = new GlideRecord('sys_script_include');
        feedbackUtilGr.addQuery('sys_id', '2d6125cf777331105e82756f1b5a9965');
        feedbackUtilGr.query();
        if (feedbackUtilGr.hasNext())
            return new sn_ex_sp_pro.ExFeedbackPortalUtil(portalId);

        feedbackUtilGr = new GlideRecord('sys_script_include');
        feedbackUtilGr.addQuery('sys_id', '67ad9f6aeb313110f3da2ff2a252288e');
        feedbackUtilGr.query();
        if (feedbackUtilGr.hasNext())
            return new sn_ex_sp_pro.ExFeedbackUtil(portalId);
    }

    var isPerfWidgetEnabled = (isImpersonating() || gs.hasRole('admin')) && gs.getProperty("sn_ex_sp_perf_tools.enable_perf_widget", 'true') == 'true';
    if (isPerfWidgetEnabled)
        data.perfWidget = $sp.getWidget('performance_indicator');

    data.ACTION_TODO_COUNT = 'update_todo_count';
    data.ACTION_LOAD_CASES = 'load_cases';
    data.isMobile = gs.isMobile();
    data.isFavoritesEnabled = $sp.getValue('enable_favorites') == 'true';
    data.isPersonalizedAnswer = GlidePluginManager().isActive("com.sn_app_ex_integrated_answers");

    //Initialize menu objects
    data.sub = {};
    data.top = {};
    var menu = $sp.getValue("sp_rectangle_menu");
    data.sub.menu = $sp.getWidgetFromInstance(menu);
    data.escNavigation = $sp.getWidget("employee-center-navigation");

    //Copy sub menu to top menu, we want cart up top and menu items in the sub nav
    data.top.menu = JSON.parse(JSON.stringify(data.sub.menu));

    var configOptions = JSON.parse((data.top.menu && data.top.menu.options && data.top.menu.options.widget_parameters) || '{}');

    data.moreItemsSysId = (configOptions.enable_more_items && configOptions.enable_more_items.sysId) || '';
    data.hideSearchOnHomepage = configOptions.exclude_search_on_homepage ? configOptions.exclude_search_on_homepage.value : false;
    data.showRequests = configOptions.enable_requests ? configOptions.enable_requests.value : true;
    data.showTodos = configOptions.enable_tasks ? configOptions.enable_tasks.value : true;

    data.todoCount = 0;
    data.todoCountLabel = '';

    //Load To-dos count
    if ((!input || input.action == data.ACTION_TODO_COUNT) && data.showTodos) {
        var myTodosCountObject = new sn_hr_sp.todoPageUtils().getMyTodosCount(false, false, true);
        data.mobileViewTodoCount = myTodosCountObject.todoCount;
        data.todoCount = (myTodosCountObject.todoCount > 9) ? '9+' : myTodosCountObject.todoCount;

        data.todoCountLabel = gs.getMessage("{0} to-dos remaining");
        data.recordWatchers = myTodosCountObject.recordWatchers;

        // avoid consecutive calls 
        if (input)
            return;
    }

    data.isHrCoreActive = GlidePluginManager().isActive("com.sn_hr_core");
    if (data.isHrCoreActive && gs.getProperty('sn_hr_core.esc.create_hrprofile.override', 'true') === "true") {
        // HR Profile
        var hrProfileGr = new GlideRecord('sn_hr_core_profile');
        hrProfileGr.addQuery('user', gs.getUserID());
        hrProfileGr.setLimit(1);
        hrProfileGr.query();
        if (!hrProfileGr.hasNext() && gs.getUserID() && new GlideRecord('sys_user').get(gs.getUserID())) {
            hrProfileGr.setValue('user', gs.getUserID());
            hrProfileGr.insert();
        }
    }

    // check for listening posts voluntary feedback
    data.voluntarySurveyIsActive = false;
    data.isListeningPostsActive = GlidePluginManager().isActive("sn_lp");
    if (data.isListeningPostsActive) {
        var pulseUtils = new sn_lp.PulseUserCriteriaEvaluation();
        data.voluntarySurvey = pulseUtils.getActiveVoluntarySurvey && pulseUtils.getActiveVoluntarySurvey();

        if (data.voluntarySurvey && data.voluntarySurvey.next()) {
            data.voluntarySurveyIsActive = true;
        }
    }

    function checkDrawerV2Availability() {
        var ga = new GlideAggregate('sp_widget');
        ga.addQuery("sys_id", "0ed0a9f34302c210d06729f026b8f272");
        ga.addAggregate('COUNT');
        ga.query();
        var count = 0;
        if (ga.next()) {
            count = ga.getAggregate('COUNT');
        }
        return count > 0;
    }

    // check for experience feedback
    function experienceFeedbackCheck() {
        data.exFeedbackActive = false;
        data.isDrawerConfigured = false;
        var portalId = $sp.getPortalRecord().sys_id;
        var isECProActive = GlidePluginManager().isActive("sn_ex_sp_pro");
        var pageId = $sp.getParameter("id");

        if (!pageId)
            pageId = $sp.getDisplayValue('homepage').toString();

        data.drawerV2Available = checkDrawerV2Availability();
        var feedbackUtil = getFeedbackUtil(portalId);

        if (isECProActive) {
            if (data.drawerV2Available && feedbackUtil.shouldRefreshDefnOnNavigation()) {
                data.shouldRefreshDefnOnNavigation = true
                data.isDrawerConfigured = true;
                data.drawerV2Available = true;
                data.modalWidget = $sp.getWidget('experience-feedback-wrapper');
                data.headerFeedbackWidget = $sp.getWidget('experience-feedback-header-wrapper');

            } else {
                data.shouldRefreshDefnOnNavigation = false;
                data.exFeedbackActive = false;
                if (feedbackUtil) {
                    var feedbackConfig = feedbackUtil.getFeedbackConfig(portalId);
                    var feedbackDefinitionGr = feedbackUtil.getFeedbackDefinitionForDrawer(pageId);
                    if (feedbackConfig && feedbackDefinitionGr) {
                        data.isDrawerConfigured = true;
                        data.widgetData = feedbackUtil.getDrawerWidgetData(feedbackConfig, feedbackDefinitionGr);
                        data.modalWidget = $sp.getWidget('experience-feedback-drawer', data.widgetData);
                        data.headerFeedbackWidget = $sp.getWidget('experience-feedback-header-item', data.widgetData);
                    }
                    data.homepageDisplayValue = $sp.getDisplayValue('homepage').toString();
                }
            }
        }
    }
    experienceFeedbackCheck();

    // populate the 'data' object
    data.link = '?id=hri_user_profile&sys_id=' + gs.getUserID();

    // Defines the support queue ID that will be linked to by the Live Chat link in header
    data.login_page = $sp.getValue('login_page');

    //Fetching My Items menu item sys_id
    var subMenu = data.sub.menu;
    var moreItems;
    if (subMenu && subMenu.data) {
        subMenu.data.replace = true;
        // Hide login if menu already has link to login
        data.hasLogin = false;
        var subMenuDataItems = (subMenu.data.menu && subMenu.data.menu.items) || [];
        for (var i in subMenuDataItems) {
            var item = subMenuDataItems[i];
            if (item.sys_id === data.moreItemsSysId)
                moreItems = item;
            if (item.type === 'page' && item.sp_page === data.login_page)
                data.hasLogin = true;
        }
    }

    if (moreItems && moreItems.items) {
        data.moreItems = moreItems.items;
    } else if (moreItems && moreItems.scriptedItems && moreItems.scriptedItems.items) {
        data.moreItems = moreItems.scriptedItems.items;
    }

    if (moreItems && data.moreItems && moreItems.label) {
        // Removing items with no label
        data.moreItems = data.moreItems.filter(function(moreItem) {
            return moreItem.label;
        });

        // Truncating label of items exceeding 60 character limit
        data.moreItems.forEach(function(moreItem) {
            moreItem.shortLabel = (moreItem.label.length > 60) ? (moreItem.label.substring(0, 60) + '...') : moreItem.label;
        });
    }

    if (data.hideSearchOnHomepage) {
        data.homepage = $sp.getValue('homepage');
        var gr = new GlideRecord('sp_page');
        gr.get(data.homepage);
        data.dashboardSuffix = gr.getValue("id");
        data.portalSuffix = $sp.getPortalRecord().getDisplayValue("url_suffix");
    }

    data.showMoreItems = (moreItems && moreItems.label && data.moreItems && configOptions.enable_more_items) ? (data.moreItems.length > 0 && configOptions.enable_more_items.value) : false;
    if (data.showMoreItems)
        data.moreItemsTitle = data.moreItems.length === 1 ? data.moreItems[0].shortLabel : moreItems.label;

    // Analytics
    data.analyticsSupportEnabled = new GlidePluginManager().isActive('com.sn_content_analytics') && new GlidePluginManager().isActive('com.sn_content_delivery') && !sn_cd.cd_ContentDelivery.isContentPreview($sp);

    //Clean up items that don't belong
    if (subMenu) {
        if (subMenu.data) {
            subMenu.data.cartWidget = {};
            subMenu.data.showTours = false;
        }
        if (subMenu.options) {
            subMenu.options.enable_cart = false;
        }
    }
    if (data.top.menu && data.top.menu.data && data.top.menu.data.menu && data.top.menu.data.menu.items)
        data.top.menu.data.menu.items = [];

    var typeAheadOptions = {};
    typeAheadOptions.refresh_page_on_search_submission = false;
    typeAheadOptions.title = gs.getMessage("Search");
    if ($sp.isAISearchEnabled())
        typeAheadOptions.disable_all_suggestions = ($sp.getParameter('disableAllSuggestions') == 'true');

    data.typeahead = $sp.getWidget('typeahead-search', typeAheadOptions);
    data.loginWidget = $sp.getWidgetFromInstance('login-modal');
    data.avatarDropDown = $sp.getWidget('profile-with-drop-down', {
        "profile_url": data.link,
        "show_xs_avatar": false
    });
})();]]></script><servicenow>false</servicenow><sys_class_name>sp_header_footer</sys_class_name><sys_created_by>admin</sys_created_by><sys_created_on>2021-05-21 18:13:05</sys_created_on><sys_customer_update>false</sys_customer_update><sys_id>d0009941eb103010ed7966d6475228c1</sys_id><sys_mod_count>1323</sys_mod_count><sys_name>Employee Center Header</sys_name><sys_package display_value="Employee Center" source="sn_ex_sp">4249e63a28d54d61bb6fbf61fd86cccb</sys_package><sys_policy/><sys_replace_on_upgrade>false</sys_replace_on_upgrade><sys_scope display_value="Employee Center">4249e63a28d54d61bb6fbf61fd86cccb</sys_scope><sys_update_name>sp_header_footer_d0009941eb103010ed7966d6475228c1</sys_update_name><sys_updated_by>admin</sys_updated_by><sys_updated_on>2024-06-18 08:50:51</sys_updated_on><template><![CDATA[<!-- Nav bar menu items starts-->
<nav class="navbar-inverse" aria-label="Primary" role="navigation" ng-if="!showViewAsHeader">

  <!-- Piece above searchbar -->
  <div class="clearfix">
    <div class="navbar-header nav-container">

      <!-- Logo -->
      <a class="navbar-brand" ng-if="::!portal.logo" href="?id={{::portal.homepage_dv}}" aria-label="{{::portal.title}}"><span>{{::portal.title}}</span></a>
	    <a class="navbar-brand navbar-brand-logo"
           ng-if="::portal.logo" href="?id={{::portal.homepage_dv}}"
           aria-label="{{::portal.title}} - \${Home Page}"
           data-toggle="tooltip"
           data-placement="bottom"
           data-title="{{::portal.title}} - \${Home Page}">
        <img ng-src="{{::portal.logo}}" alt="{{::portal.title}} - \${Home Page}"/>
      </a>

      <!-- Search Bar Desktop -->
      <div ng-class="mobileDevice ? 'header-search-mobile' : 'header-search'" ng-show="showSearchBar && !mobileDevice">
        <sp-widget widget="data.typeahead"></sp-widget>
      </div>

      <!-- Mobile Navigation View -->
      <div class="mobile-top-navigation" ng-if="showMobileMenuOnDesktop || mobileDevice">
        <!-- Toggle Button (Hamburger Menu for Mobile View) -->
        <button type="button" 
                class="sub-navbar-overflow-entry-button"
                ng-class="isMobileViewOnDesktopExpanded ? 'close-icon-visible' : ''"
                aria-label="{{isMobileViewOnDesktopExpanded ? '\${Hide menu}' : '\${Show menu}'}}" 
                aria-expanded="{{isMobileViewOnDesktopExpanded}}" 
                data-toggle="tooltip"
                data-placement="auto bottom"
                data-original-title="{{isMobileViewOnDesktopExpanded ? '\${Hide Menu}' : '\${Show Menu}'}}"
                ng-click="toggleMobileMenuVisibility($event)">
          <div ng-if="!isMobileViewOnDesktopExpanded">
	     <!-- showing count as '9+' when the count is more than '9' -->
             <span class="label label-as-badge label-primary">{{((data.mobileViewTodoCount + cartItemCount) > 9) ? '9+' : (data.mobileViewTodoCount + cartItemCount) }}</span>
             <span class="icon-bar"></span>
             <span class="icon-bar"></span>
             <span class="icon-bar"></span>
          </div>
          <i class="fa fa-close" ng-if="isMobileViewOnDesktopExpanded"></i>
        </button>

        <div class="mobile-view-on-desktop"
             ng-class="mobileDevice && showSearchBar ? 'search-visible' : ''"
             ng-show="isMobileViewOnDesktopExpanded"
             ng-click="handleMobileViewClick($event)"
             role="presentation">
            <div class="height-adjust">
               <ul class="mobile-view-navbar">
                 <!-- Mega Menu & Login functionality (Mobile View) -->
                 <li class="mobile-mega-menu-entry">
                    <sp-widget widget="data.escNavigation"></sp-widget>
                    <ul ng-if="::(!user.logged_in && page.id != portal.login_page_dv && !data.hasLogin)" class="nav navbar-nav">
                       <li><a href ng-click="openLogin()">\${Login}</a></li>
                    </ul>
                 </li>
                 <li>
                   <div class="main-header-items header-nav-item" ng-if="!showMobileMegaMenu">
                     <div class="main-header-item" ng-if="data.showTodos">
                       <a class="header-item" href="?id=hrm_todos_page" id="todos_mobile" aria-label="\${My Tasks}, {{c.todoCountTranslation}}">
                         <span ng-bind-html="'\${My Tasks}'" aria-hidden="true"></span>
                         <span ng-show="data.todoCount" class="label label-as-badge label-primary">{{data.todoCount}}</span>
                       </a>
                     </div>
                     <div class="main-header-item" ng-if="data.showRequests">
                       <a class="header-item" href="?id=my_requests" id="requests_mobile" aria-label="\${My Requests}">
                        <span ng-bind-html="'\${My Requests}'" aria-hidden="true"></span>
                        <span ng-show="data.requestCount" class="label label-as-badge label-primary">{{data.requestCount}}</span>
                       </a>
                     </div>
                     <div class="main-header-item" ng-if="data.isFavoritesEnabled">
                       <a class="header-item" href="?id=favorites_list" id="favorites_mobile" aria-label="\${My Favorites}">
                        <span ng-bind-html="'\${My Favorites}'" aria-hidden="true"></span>
                       </a>
                     </div>
                     <!-- Experience Feedback Header Menu item widget -->
                     <div class="main-header-item" ng-if="showMobileMenuOnDesktop && exFeedbackActive">
                       <sp-widget widget="data.headerFeedbackWidget"></sp-widget>
                     </div>
                     <div class="main-header-item" ng-if="data.showMoreItems" ng-repeat="item in data.moreItems">
                       <a ng-if="item.label !== item.shortLabel"
                          href="{{item.href}}"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          data-original-title="{{item.label}}"
                          aria-label="{{item.label}}"
                          class="header-item">
                          <span ng-bind-html="item.shortLabel" aria-hidden="true"></span>
                       </a>
                       <a ng-if="item.label === item.shortLabel"
                          href="{{item.href}}"
                          aria-label="{{item.label}}"
                          class="header-item">
                          <span ng-bind-html="item.shortLabel" aria-hidden="true"></span>
                       </a>
                     </div>
                     <!-- Cart, tours, and Wishlist (Mobile View) -->
                     <div>
                        <sp-widget widget="data.top.menu" id="menu_item"></sp-widget>
                     </div>
                   </div>
                 </li>
                 <li class="separator" ng-if="!showMobileMegaMenu"></li>
                 <li class="m-l-sm main-header-item" ng-if="c.data.voluntarySurveyIsActive">
                   <widget id="listening_posts_give_feedback_mega_menu"></widget>
                 </li>
                 <li class="separator" ng-if="!showMobileMegaMenu && c.data.voluntarySurveyIsActive"></li>
                 <!-- User Profile -->
                 <li class="m-t-sm m-b-sm header-nav-item user-name" ng-if="!showMobileMegaMenu">
                    <a href="{{data.link}}" ng-class="getClass(data.link)" aria-label="{{user.name}} \${profile}">
                      <span class="navbar-avatar"><sn-avatar class="avatar-small-medium" show-presence="false" primary="user.sys_id" /></span>
                      <span>{{user.name}}</span>
                    </a>
                 </li>
               </ul>
               <!-- Avatar (User profile Dropdown) with only Impersonate & Logout options -->
               <div class="impersonate-and-logout header-nav-item" ng-if="!showMobileMegaMenu">
                 <sp-widget widget="data.avatarDropDown"></sp-widget>
               </div>
          </div>
        </div>
      </div>

      <div ng-class="mobileDevice ? 'header-search-mobile' : 'header-search'" ng-show="showSearchBar && mobileDevice">
        <sp-widget widget="data.typeahead"></sp-widget>
      </div>
      
      <!-- Header Navbar -->
      <div ng-if="!(showMobileMenuOnDesktop || mobileDevice)" class="navbar-right">
        <div class="height-adjust header-group">
          <div class="nav navbar-nav header-menu" aria-label="\${Header menu}">
            <div class="hidden-xs sp-loading-indicator la-sm loading-indicator" role="presentation" ng-class="{'invisible': !loadingIndicator}">
               <div></div>
               <div></div>
               <div></div>
            </div>
            <div class="gt-menu-item" ng-if="data.showTodos">
              <a href="?id=hrm_todos_page" ng-class="getClass('?id=hrm_todos_page')" id="todos_link"  aria-label="\${My Tasks}, {{c.todoCountTranslation}}">
                <span ng-bind-html="'\${My Tasks}'"></span>
                <span ng-show="data.todoCount" class="label label-as-badge label-primary">{{data.todoCount}}</span>
              </a>
            </div>
            <div class="gt-menu-item" ng-if="data.showRequests">
              <a href="?id=my_requests" id="cases_popup" aria-label="\${My Requests}"> <!-- TODO: Link for requests -->
                <span ng-bind-html="'\${My Requests}'" aria-hidden="true"></span>
                <span ng-show="data.requestCount" class="label label-as-badge label-primary">{{data.requestCount}}</span>
              </a>
            </div>
            <div class="gt-menu-item" ng-if="data.isFavoritesEnabled">
               <a href="?id=favorites_list" id="favorites" aria-label="\${My favorites}"> 
                 <span ng-bind-html="'\${My Favorites}'" aria-hidden="true"></span>
           	   </a>         
            </div>
            <div class="gt-menu-item more-menu-position" id="more-items" ng-if="data.showMoreItems">
              <a ng-if="(data.moreItems.length === 1) && (data.moreItems[0].label !== data.moreItems[0].shortLabel)"
                 href="{{data.moreItems[0].href}}"
                 target="{{data.moreItems[0].url_target}}"
                 data-toggle="tooltip"
                 data-placement="bottom"
                 data-original-title="{{data.moreItems[0].label}}"
                 aria-label="{{data.moreItems[0].label}}">
                <span ng-bind-html="data.moreItemsTitle" aria-hidden="true"></span>
              </a>
              <a ng-if="(data.moreItems.length === 1) && (data.moreItems[0].label === data.moreItems[0].shortLabel)"
                 href="{{data.moreItems[0].href}}"
                 target="{{data.moreItems[0].url_target}}"
                 ng-click="navEvent($event, data.moreItems[0].href)"
                 aria-label="{{data.moreItems[0].label}}">
                <span ng-bind-html="data.moreItemsTitle" aria-hidden="true"></span>
              </a>
              <a href
                 ng-if="data.moreItems.length > 1"
                 id="more-items-button"
                 aria-haspopup="true"
                 data-toggle="dropdown"
                 data-target="more-items-dropdown"
                 data-placement="bottom"
                 aria-label="{{data.moreItemsTitle}}" role="button">
                <span ng-bind-html="data.moreItemsTitle" aria-hidden="true"></span>
                <span class="fa collapse-margin m-l-xs fa-caret-down"></span>
              </a>
              <ul id="more-items-dropdown" ng-if="data.moreItems.length > 1" class="dropdown-menu"
                  aria-label="{{data.moreItemsTitle}}">
                <li role="presentation"
                    ng-repeat="item in data.moreItems"
                    class="ng-scope dropdown-menu-line header-menu-item">
                  <a ng-if="item.label !== item.shortLabel"
                     href="{{item.href}}"
                     target="{{item.url_target}}"
                     data-toggle="tooltip"
                     data-placement="bottom"
                     data-original-title="{{item.label}}"
                     aria-label="{{item.label}}">
                    <span ng-bind-html="item.shortLabel" aria-hidden="true"></span>
                  </a>
                  <a ng-if="item.label === item.shortLabel"
                     href="{{item.href}}"
                     target="{{item.url_target}}"
                     aria-label="{{item.label}}">
                    <span ng-bind-html="item.shortLabel" aria-hidden="true"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <!-- Avatar and its drop down (Desktop) -->
          <div class="avatar-drop-down gt-menu-item" role="presentation">
            <sp-widget widget="data.avatarDropDown" id="avatar_drop_down" ></sp-widget>
          </div>
          <!-- Cart, tours, and Wishlist -->
          <div class="gt-menu-item" role="presentation">
            <sp-widget widget="data.top.menu" id="menu_item"></sp-widget>
          </div>
        </div>
      </div>
    </div>
    
    <!-- LP Voluntary Feedback Widget-->
    <div ng-if="!(showMobileMenuOnDesktop || mobileDevice) && c.data.voluntarySurveyIsActive">
      <widget id="listening_posts_voluntary_feedback"></widget>
    </div>
    
    <!-- Experience Feedback Widget-->
    <div ng-if="!(showMobileMenuOnDesktop || mobileDevice) && exFeedbackActive">
      <sp-widget widget="data.modalWidget"></sp-widget>
    </div>
    
  </div>
  
  <!-- Sub Navbar on Desktop -->
  <div class="navbar-collapse sub-navbar clearfix collapse collapsed hidden-xs"
       ng-class="{ 'in': expanded, 'collapsed': !expanded, 'sub-navbar--mobile-view': showMobileMenuOnDesktop }">
    <div>
      <sp-widget widget="data.escNavigation"></sp-widget>
      <ul ng-if="::(!user.logged_in && page.id != portal.login_page_dv && !data.hasLogin)" class="nav navbar-nav">
        <li><a href ng-click="openLogin()">\${Login}</a>
        </li>
      </ul>

    </div>
  </div>

  <!-- Analytics -->
  <div ng-if="data.analyticsSupportEnabled">
    <widget id="cda-site-analytics" options="{'enable_logging': false}"></widget>
  </div>
</nav>


<nav class="navbar-inverse" aria-label="Primary" role="navigation" ng-if="showViewAsHeader">
    <div class="clearfix">
      <div class="navbar-header nav-container">

      <!-- Logo -->
        <a class="navbar-brand" ng-if="::!portal.logo" href="?id=ec_view_as_search&viewAs=true" aria-label="\${Employee Center View As Home}"><span>\${Employee Center View As Home}</span></a>
        <a class="navbar-brand navbar-brand-logo "
           ng-if="::portal.logo" href="?id=ec_view_as_search&viewAs=true"
           aria-label="{{::portal.title}}\${ - View As Home Page}"
           data-toggle="tooltip"
           data-placement="bottom"
           data-title="{{::portal.title}}\${ - View As Home}">
        <img ng-src="{{::portal.logo}}" alt="{{::portal.title}}\${ - View As Home Page}"/>
      </a>
      </div>
  </div>
</nav>


<sp-widget widget="c.data.perfWidget"></sp-widget>]]></template></sp_widget>`,
    },
})
