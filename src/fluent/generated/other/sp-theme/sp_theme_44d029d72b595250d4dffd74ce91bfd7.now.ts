import { SPTheme } from '@servicenow/sdk/core'

SPTheme({
    $id: Now.ID['44d029d72b595250d4dffd74ce91bfd7'],
    name: 'Visitor Theme',
    customCss: `//=catalog\r
      $border-bg-transparent :transparent\r
      $align-left : left;\r
      $font-weight-base : 400;\r
      $font-weight-md : ceil(($font-weight-base * 1.25));//500\r
      $font-weight-lg : ceil(($font-weight-base * 1.5));//600\r
      $font-weight-xl : ceil(($font-weight-base * 1.75));//700\r
      $border-style-solid : solid;\r
      $box-size-border: border-box;\r
      $border-width-xs : 1px;\r
      $border-width-small : 2px;\r
      $border-rad-md : 6px;\r
\r
      //=walkup\r
      $width-full : 100%;\r
      $padding-base : 0;\r
      $padding-left-base : 0;\r
      $margin-min : 0;\r
      $margin-top-base : 0;\r
      $margin-bottom-base : 0;\r
\r
      //=New Variables\r
      //== Alignment\r
      $align-center :           center;\r
      $align-left :             left;\r
\r
      //== Display\r
      $display-d1 :             flex;\r
\r
      //==Text color\r
      $text-primary:                          #181A1F; //$text-color --now-color_text--primary\r
      $text-secondary:                        #474D5A; //--now-color_text--secondary\r
      $text-tertiary:                         #656E81; //$text-muted --now-color_text--tertiary\r
      $text-white:                            #ffffff; //--now-color--neutral-0\r
\r
      //==Backgrounds\r
      $background-primary:                    #ffffff; //--now-color_background--primary\r
      $background-secondary:                  #f6f6f8; //--now-color_background--secondary\r
      $background-tertiary:                   #F0F1F5; //--now-color_background--tertiary\r
\r
      //==borders\r
      $border-primary:                        #8790A1; //--now-color_border--primary\r
      $border-secondary:                      #ACB2BE; //--now-color_border--secondary\r
      $border-tertiary:                       #DADDE2; //--now-color_border--tertiary\r
      $border-width-xs :                      1px;\r
      $border-width-small :                   2px;\r
      $border-style-solid :                   solid;\r
      $border-bg-transparent :                transparent;\r
\r
      //==colors for selected\r
      $select-primary: 	                    #007b58; //--now-color_selection--primary-2\r
      $select-primary-lighter: 	            #D7EBE5; //--now-color_selection--primary-0\r
      $select-primary-darker: 	            #003929; //--now-color_selection--primary-4\r
\r
      //==Primary color \r
      $brand-primary-darkest:                 #1D1E46; //--now-color--primary-3\r
      $brand-primary-darker:                  #333579; //--now-color--primary-2\r
      $brand-primary-lighter:                 #8789D2; //--now-color--interactive-1\r
      $brand-primary-lightest:                #D1D2EE; //--now-color--primary-0\r
      $brand-primary-opacity:				 #E3E4F2; //--now-color--primary-0 (with opacity 0.5)\r
\r
      //==Brand Darker colors\r
      $brand-danger-darker:                   #CC293C!default; //--now-color_alert--critical-3\r
      $brand-warning-darker:                  #AFA400!default; //--now-color_alert--warning-3\r
      $brand-moderate-darker:                 #6B52C4!default; //--now-color_alert--moderate-3 \r
      $brand-low-darker:                      #6E6F78!default; //--now-color_alert--low-3 \r
      $brand-success-darker:                  #3B7F00!default; //--now-color_alert--positive-3\r
      $brand-info-darker:                     #297CB2!default; //--now-color_alert--info-3\r
\r
      $sp-space--xxs:                         2px;\r
      $sp-space--xs:     	                    4px;\r
      $sp-space--sm:     	                    8px;\r
      $sp-space--md:    	                    12px; \r
      $sp-space--lg:     	                    16px;\r
      $sp-space--xl:		                    24px;\r
      $sp-space--xxl: 	                    32px;\r
      $sp-space--3xl: 	                    40px;\r
\r
      $sp-panel-box-shadow:                   0 4px 8px 0 rgba(23,40,52,0.08);\r
\r
      //==Subnav background-color\r
      $sp-nav-subnav:                         $sp-navbar-divider-color;\r
\r
      //==End new variables ----/\r
\r
\r
      // Define NavBar\r
      $sp-navbar-height: 		                60px;\r
      $sp-navbar-divider-color:               #333579 !default; //--now-color_chrome--divider-10\r
      $sp-navbar-inverse-bg:                  $navbar-inverse-bg !default;\r
      $navbar-inverse-bg:                     #181826 !default; //--now-color_chrome--brand-10\r
      $navbar-inverse-link-color:             #DADDE2 !default; //--now-color--neutral-2\r
      $navbar-inverse-link-hover-color:       #ffffff !default; //--now-color--neutral-0\r
      $sp-logo-margin-x: 		                6px !default;\r
      $sp-logo-margin-y:		                6px !default;\r
      $sp-tagline-color:		                $text-color !default;\r
\r
      // Define Body\r
      $body-bg:								              $background-secondary!default;\r
      $sp-body-bg:			                    $background-secondary; \r
      $table-hover:                         #e6f2ee; //--now-color_surface--brand-1\r
\r
      $text-color:							            $text-primary!default;\r
      $text-muted:							            $text-tertiary!default;\r
\r
      //## Gray and brand colors for use across Bootstrap.\r
      $gray-base:                             #000000; //--now-color--neutral-21\r
      $gray-darker:                           #181A1F; //--now-color--neutral-18\r
      $gray-dark:                             #282C33; //--now-color--neutral-16\r
      $gray:                                  #4f5664; //--now-color--neutral-11\r
      $gray-light:                            #656E81; //--now-color--neutral-9\r
      $gray-lighter:                          #F6F6F8; //--now-color--neutral-1\r
\r
      $brand-primary:                         #4f52bd!default; //--now-color--primary-1\r
      $brand-danger:                          #E42338!default; //--now-color_alert--critical-2\r
      $brand-warning:                         #F0E000!default; //--now-color_alert--warning-2\r
      $brand-moderate:                        #8B6BFF!default; //--now-color_alert--moderate-2 NEW\r
      $brand-low:                            	#9698A4!default; //--now-color_alert--low-2 NEW\r
      $brand-success:                         #51ae00!default; //--now-color_alert--positive-2\r
      $brand-info:                            #38aaf4!default; //--now-color_alert--info-2\r
\r
      $primary:                               $brand-primary;\r
      $warning:                               $brand-warning;\r
      $success:                               $brand-success;\r
      $info:                                  $brand-info;\r
      $danger:                                $brand-danger;\r
      $error:                                 $danger;\r
\r
      $color-darkest:                         #181A1F; //--now-color--neutral-18\r
      $color-darker: 	                        #474D5A; //--now-color--neutral-12\r
      $color-dark:                            #575F6E; //--now-color--neutral-10\r
      $color-disabled:                        #9AA1AF; //--now-color--neutral-6\r
      $color-light:                           #BDC2CB; //--now-color--neutral-4\r
      $color-lighter:                         #F0F1F5; //--now-color--neutral-2\r
      $color-lightest:                        #ffffff; //--now-color--neutral-0\r
      $color-accent:                          #007b58; //--now-color_selection--primary-2\r
      $color-accent-light:                    #51A58D; //--now-color_selection--primary-1\r
      $color-accent-lightest:                 #D7EBE5; //--now-color_selection--primary-0\r
\r
      $border:                                $border-tertiary;\r
      $panel-primary:                         $border;\r
\r
      $overdue:                               $brand-danger;\r
      $due-today:                             $brand-warning;\r
      $due-later:                             $brand-success;\r
      $complete:                              $brand-low;\r
      $in-progress:                           $brand-success;\r
\r
      $color-blue-lightest:                   #D9F4F9; //--now-color_grouped--blue-0\r
      $color-blue-light:                      #A0E3EF; //--now-color_grouped--blue-1\r
      $color-blue-dark:                       #3A7782; //--now-color_grouped--blue-4\r
      $color-grey:                            #C6CBCB; //--now-color_grouped--gray-1\r
      $color-green-dark:                      #1C4122; //--now-color_grouped--green-5\r
\r
      $progress-bar:                          $brand-primary;\r
\r
      //define service portal preview outline highlighting\r
      $preview-outline:                       #1A4E70; //--now-color_alert--info-4\r
      $preview-outline-text-color:            #ffffff; //--now-color--neutral-0\r
\r
\r
\r
      ////Bootstrap variable\r
\r
      //** Global textual link color.\r
      $link-color:                            #3c59e7; //--now-color--link-2\r
      $link-hover-color:                      #263994; //--now-color--link-3\r
\r
      //== Typography\r
      $font-family-sans-serif:                "Lato", sans-serif;\r
\r
      $font-size-base:                        16px; \r
      $font-size-3xl:                         ceil(($font-size-base * 2.25)); // 36px New\r
      $font-size-xxl:                         ceil(($font-size-base * 1.875)); // 30px  New\r
      $font-size-xl:                          ceil(($font-size-base * 1.5)); // 24px New\r
      $font-size-large:                       ceil(($font-size-base * 1.25)); // 20px  \r
      $font-size-md:                          $font-size-base;  // 16px New\r
      $font-size-small:                       ceil(($font-size-base * 0.875)); // 14px\r
      $font-size-xs:                          ceil(($font-size-base * 0.75)); // 12px New \r
\r
      $font-size-h1:                          ceil(($font-size-base * 2)); // 32px \r
      $font-size-h2:                          ceil(($font-size-base * 1.5)); // 24px \r
      $font-size-h3:                          ceil(($font-size-base * 1.25)); // 20px \r
      $font-size-h4:                          ceil(($font-size-base * 1.125)); // 18px \r
      $font-size-h5:                          $font-size-base; \r
      $font-size-h6:                          ceil(($font-size-base * 0.875)); // 14px  \r
\r
      $line-height-base:                      1.4;\r
\r
      $headings-font-family:                  'Lato', sans-serif;\r
      $headings-font-weight:                  600;\r
      $font-weight-base : 400;\r
      $headings-line-height:                  1.1;\r
\r
      //== Components\r
      //\r
      $padding-base-vertical:                 6px;\r
      $padding-base-horizontal:               $sp-space--lg;\r
\r
      $padding-large-vertical:                $sp-space--sm;\r
      $padding-large-horizontal:              $sp-space--xl;\r
\r
      $padding-small-vertical:                $sp-space--xs;\r
      $padding-small-horizontal:              $sp-space--md;\r
\r
      $padding-xs-vertical:                   $sp-space--xs;\r
      $padding-xs-horizontal:                 $sp-space--sm;\r
\r
      $border-radius-base:                    4px;\r
      $border-radius-large:                   8px;\r
      $border-radius-small:                   2px;\r
\r
      //== Global color for active items (e.g., navs or dropdowns).\r
      $component-active-color:                $text-white; \r
      $component-active-bg:                   $select-primary;\r
\r
\r
      //== Tables\r
      //\r
      $table-cell-padding:                    $sp-space--sm;\r
      $table-condensed-cell-padding:          $sp-space--xs;\r
\r
      $table-bg:                              transparent; \r
      $table-bg-accent:                       $background-secondary; \r
      $table-bg-hover:                        $background-tertiary; \r
      $table-border-color:                    $border-tertiary; \r
\r
      //== Buttons\r
      //\r
      $btn-font-weight:                       600;\r
\r
      $btn-default-color:                     $brand-primary;\r
      $btn-default-bg:                        $background-primary; \r
      $btn-default-border:                    $brand-primary;\r
\r
      $btn-primary-color:                     $text-white; \r
      $btn-primary-bg:                        $brand-primary;\r
      $btn-primary-border:                    $brand-primary;\r
\r
      $btn-success-color:                     $text-white;\r
      $btn-success-bg:                        #3B7F00; //--now-color_alert--positive-3\r
      $btn-success-border:                    $btn-success-bg;\r
\r
      $btn-info-color:                        $text-primary; \r
      $btn-info-bg:                           #8CCEF9; //--now-color_alert--info-1\r
      $btn-info-border:                       $btn-info-bg;\r
\r
      $btn-warning-color:                     $text-primary; \r
      $btn-warning-bg:                        #F6ED6C; //--now-color_alert--warning-1\r
      $btn-warning-border:                    $btn-warning-bg;\r
\r
      $btn-danger-color:                      $text-white; \r
      $btn-danger-bg:                         #CC293C; //--now-color_alert--critical-3\r
      $btn-danger-border:                     $btn-danger-bg;\r
\r
      $btn-link-disabled-color:               $text-muted;\r
\r
      // Allows for customizing button radius independently from global border radius\r
      $btn-border-radius-base:                $border-radius-base;\r
      $btn-border-radius-large:               $border-radius-base;\r
      $btn-border-radius-small:               $border-radius-base;\r
\r
\r
      //== Forms\r
      //\r
      $input-bg:                              $background-primary; \r
      $input-bg-disabled:                     $background-secondary; \r
      $input-color:                           $text-primary; \r
      $input-border:                          $border-primary; \r
\r
      $input-border-focus:                    #3c59e7; //--now-color--focus-2\r
      $input-color-placeholder:               $text-tertiary; \r
\r
      $form-group-margin-bottom:              $sp-space--lg;\r
      $label-margin-bottom:                   $sp-space--xs;\r
      $margin-base :                          6px;\r
      $legend-color:                          $text-secondary;\r
      $legend-border-color:                   $border-tertiary; \r
\r
      //** Background color for textual input addons\r
      $input-group-addon-bg:                  $background-secondary; \r
      $input-group-addon-border-color:        $input-border;\r
\r
\r
      //== Dropdowns\r
      //\r
      $dropdown-bg:                           $background-primary; \r
      $dropdown-border:                       $border-tertiary; \r
      $dropdown-fallback-border:              $border-tertiary; \r
      $dropdown-divider-bg:                   $dropdown-border;\r
\r
      $dropdown-link-color:                   $text-primary; \r
      $dropdown-link-hover-color:             $text-primary; \r
      $dropdown-link-hover-bg:                $background-secondary; \r
\r
      $dropdown-link-active-color:            $component-active-color;\r
      $dropdown-link-active-bg:               $component-active-bg;\r
      $dropdown-link-disabled-color:          $text-muted;\r
\r
      $dropdown-header-color:                 $text-muted;\r
\r
\r
      //== Grid system\r
      //\r
      $grid-gutter-width:                     32px;\r
\r
\r
      //== Navbar\r
      //\r
      $navbar-height:                             $sp-navbar-height;\r
      //=== Inverted navbar\r
      // Reset inverted navbar basics\r
      $navbar-inverse-color:                      #F0F1F5 !default; //--now-color--neutral-2\r
      $navbar-inverse-bg:                         #181826 !default; //--now-color_chrome--brand-10\r
      $navbar-inverse-border:                     #0a090f !default; //--now-color_chrome--divider-10\r
\r
      // Inverted navbar links\r
      $navbar-inverse-link-color:                 #F0F1F5 !default; //--now-color--neutral-2\r
      $navbar-inverse-link-hover-color:           #ffffff !default; //--now-color--neutral-0\r
      $navbar-inverse-link-hover-bg:              transparent !default;\r
      $navbar-inverse-link-active-color:          $navbar-inverse-link-hover-color !default;\r
      $navbar-inverse-link-active-bg:             #0a090f; //--now-color_chrome--divider-10\r
      $navbar-inverse-link-disabled-color:        #DADDE2; //--now-color--neutral-3\r
      $navbar-inverse-link-disabled-bg:           transparent; \r
\r
      // Inverted navbar brand label\r
      $navbar-inverse-brand-color:                $navbar-inverse-link-color;\r
      $navbar-inverse-brand-hover-color:          $navbar-inverse-link-hover-color;\r
      $navbar-inverse-brand-hover-bg:             transparent; \r
\r
\r
      //== Navs\r
      //\r
      $nav-link-padding:                          $sp-space--sm $sp-space--lg;\r
      $nav-link-hover-bg:                         $background-secondary;\r
      $nav-disabled-link-color:                   $text-muted;\r
      $nav-disabled-link-hover-color:             $text-muted;\r
\r
      //== Tabs\r
      $nav-tabs-border-color:                     transparent; \r
      $nav-tabs-link-hover-border-color:          transparent;\r
      $nav-tabs-active-link-hover-bg:             $select-primary;\r
      $nav-tabs-active-link-hover-color:          $text-white; \r
      $nav-tabs-active-link-hover-border-color:   $select-primary;\r
      $nav-tabs-justified-link-border-color:            transparent; \r
      $nav-tabs-justified-active-link-border-color:     $select-primary;\r
      $tab-width-base :                                130px;\r
\r
      //== Pills\r
      $nav-pills-border-radius:                   $border-radius-base !default;\r
      $nav-pills-active-link-hover-bg:            $select-primary; \r
      $nav-pills-active-link-hover-color:         $text-white; \r
\r
\r
      //== Pagination\r
      //\r
      $pagination-color:                          $link-color;\r
      $pagination-bg:                             $background-primary; \r
      $pagination-border:                    	    $border-tertiary; \r
\r
      $pagination-hover-color:                    $link-hover-color;\r
      $pagination-hover-bg:                       $background-secondary; \r
      $pagination-hover-border:                   $border-secondary; \r
\r
      $pagination-active-color:                   $text-white; \r
      $pagination-active-bg:                      $brand-primary;\r
      $pagination-active-border:                  $brand-primary;\r
\r
      $pagination-disabled-color:                 $text-muted;\r
      $pagination-disabled-bg:                    $background-primary; \r
      $pagination-disabled-border:                $border-tertiary; \r
\r
\r
      //== Pager\r
      //\r
      $pager-border-radius:                       $sp-space--lg;\r
\r
      //== Form states and alerts\r
      //\r
      $state-success-text:                        $text-primary;\r
      $state-success-bg:                          #D2EABC; //--now-color_alert--positive-0\r
      $state-success-border:                      $brand-success;\r
\r
      $state-info-text:                           $text-primary;\r
      $state-info-bg:                             #CBE9FC; //--now-color_alert--info-0\r
      $state-info-border:                         $brand-info;\r
\r
      $state-warning-text:                        $text-primary;\r
      $state-warning-bg:                          #FBF7BC; //--now-color_alert--warning-0\r
      $state-warning-border:                      $brand-warning;\r
\r
      $state-danger-text:                         $text-primary;\r
      $state-danger-bg:                           #FFCCD2; //--now-color_alert--critical-0\r
      $state-danger-border:                       $brand-danger;\r
\r
      //== Popovers\r
      //\r
      $popover-bg:                                $background-primary;\r
      $popover-border-color:                      $border-tertiary;\r
      $popover-fallback-border-color:             $border-tertiary;\r
      $popover-title-bg:                          $background-secondary;\r
\r
\r
      //== Labels\r
      //\r
      $label-default-bg:                          #C2C4CA; //--now-color_alert--low-1\r
      $label-primary-bg:                          $brand-primary-lightest;\r
      $label-success-bg:                          $state-success-bg;\r
      $label-info-bg:                             $state-info-bg;\r
      $label-warning-bg:                          $state-warning-bg;\r
      $label-danger-bg:                           $state-danger-bg;\r
      $label-color:                               $text-primary; \r
      $label-link-hover-color:                    $text-primary; \r
\r
\r
      //== Modals\r
      //\r
      $modal-inner-padding:                       $sp-space--lg;\r
      $modal-title-padding:                       $sp-space--lg;\r
      $modal-content-bg:                          $background-primary; \r
      $modal-content-border-color:                $border-tertiary; \r
      $modal-content-fallback-border-color:       $border-tertiary; \r
\r
      $modal-backdrop-bg:                         $gray-base; \r
      $modal-backdrop-opacity:                    .5 !default;\r
      $modal-header-border-color:                 $border-tertiary; \r
      $modal-footer-border-color:                 $modal-header-border-color !default;\r
\r
      //== Alerts\r
      //\r
      $alert-padding:                             $sp-space--lg;\r
      $alert-success-bg:            				      $state-success-bg;\r
      $alert-success-text:          				      $state-success-text;\r
      $alert-success-border:        				      $state-success-border;\r
\r
      $alert-info-bg:               				      $state-info-bg;\r
      $alert-info-text:             				      $state-info-text;\r
      $alert-info-border:           				      $state-info-border;\r
\r
      $alert-warning-bg:            				      $state-warning-bg;\r
      $alert-warning-text:          				      $state-warning-text;\r
      $alert-warning-border:        				      $state-warning-border;\r
\r
      $alert-danger-bg:             				      $state-danger-bg;\r
      $alert-danger-text:           				      $state-danger-text;\r
      $alert-danger-border:         				      $state-danger-border;\r
\r
      //== Progress bars\r
      //\r
      $progress-bg:                               $background-tertiary; \r
      $progress-bar-color:                        $text-white; \r
\r
      //== List group\r
      //\r
      $list-group-bg:                             $background-primary; \r
      $list-group-border:                         $border-tertiary; \r
      $list-group-hover-bg:                       $background-secondary; \r
      $list-group-active-color:                   $component-active-color;\r
      $list-group-active-bg:                      $component-active-bg;\r
      $list-group-active-border:                  $list-group-active-bg;\r
      $list-group-active-text-color:              $list-group-active-color;\r
      $list-group-disabled-color:                 $text-tertiary; \r
      $list-group-disabled-bg:                    $background-secondary; \r
      $list-group-disabled-text-color:            $list-group-disabled-color;\r
\r
      $list-group-link-color:                     $text-primary; \r
      $list-group-link-hover-color:               $list-group-link-color;\r
      $list-group-link-heading-color:             $text-primary; \r
\r
      //== Panels\r
      //\r
      $panel-bg:                                  $background-primary!default; \r
      $panel-body-padding:                        $sp-space--lg $sp-space--xl;\r
      $panel-heading-padding:                     $sp-space--xl;\r
      $panel-border-radius:                       $border-radius-large;\r
\r
      //** Border color for elements within panels\r
      $panel-inner-border:                        $border-tertiary; \r
      $panel-footer-bg:                           $background-secondary; \r
\r
      $panel-default-text:                        $text-primary;\r
      $panel-default-border:                      $border-tertiary; \r
      $panel-default-heading-bg:                  $background-secondary; \r
\r
      $panel-primary-text:                        $text-white; \r
\r
      //== Thumbnails\r
      //\r
      $thumbnail-padding:                         $sp-space--xs;\r
      $thumbnail-border:                          $border;\r
      $thumbnail-caption-padding:                 $sp-space--sm;\r
\r
      //== Wells\r
      //\r
      $well-bg:                                   $body-bg;\r
      $well-border:                               $border;\r
\r
      //== Badges\r
      //\r
      $badge-color:                               $text-white; \r
      $badge-link-hover-color:                    $text-white; \r
      $badge-bg:                                  $gray-light;\r
      $badge-active-color:                        $link-color;\r
      $badge-active-bg:                           $background-primary;\r
      $badge-width-base :  50px;\r
      $badge-height-base : 50px\r
\r
      //== Breadcrumbs\r
      //\r
      $breadcrumb-padding-vertical:               $sp-space--sm;\r
      $breadcrumb-padding-horizontal:             $sp-space--lg;\r
      $breadcrumb-bg:                             $body-bg;\r
      $breadcrumb-color:                          $text-tertiary;\r
      $breadcrumb-active-color:                   $text-primary;\r
\r
      //== Carousel\r
      //\r
      $carousel-indicator-active-bg:              $brand-primary; \r
\r
      //== Code\r
      //\r
      $code-color:                                #cd293c; //--now-color_alert--critical-3\r
      $code-bg:                                   $background-tertiary; \r
\r
      $kbd-color:                                 $text-white; \r
      $kbd-bg:                                    $gray-dark;\r
\r
      $pre-bg:                                    $background-secondary; \r
      $pre-color:                                 $gray-dark;\r
      $pre-border-color:                          $border-tertiary; \r
\r
      //== Type\r
      //\r
      $abbr-border-color:                         $border-tertiary;\r
      $headings-small-color:                      $text-muted;\r
      $blockquote-small-color:                    $text-muted;\r
      $blockquote-border-color:                   $border-tertiary;\r
      $page-header-border-color:                  $border-tertiary;\r
      $hr-border:                                 $border-tertiary;\r
\r
      $sp-b-border-color:	                        $border;\r
      $panel-default-border:                      $border;\r
\r
      //sc help icon color\r
      $sc-field-error-color: 		                  $text-secondary;\r
\r
      //define La Jolla variable that is used for KB Star colors\r
      $fav-star-color: $brand-warning;\r
      $fav-star-color-off: #ffffff;\r
      $fav-star-outline-color: darken($brand-warning, 30%);\r
      $fav-star-outline: -1px 0 $fav-star-outline-color, 0 1px $fav-star-outline-color, 1px 0$fav-star-outline-color, 0 -1px $fav-star-outline-color;\r
\r
\r
      //==AI Search\r
      $now-sp-font-family-sans-serif: 'Lato', sans-serif;\r
      $now-sp-tabs--selected--color: $select-primary;\r
      $now-sp-tabs--color--hover: $select-primary;\r
      $now-sp-tabs--border-color: $sp-b-border-color;\r
      $now-sp-tabs--selected--background-color: $select-primary;\r
      \r
      $form-textbox-button-height: 36px;\r
\r
      //==Chat\r
      $sp-agent-chat-bg: $brand-primary;\r
      // Form error label overrides\r
      .sc-field-error-label {\r
        color: $text-white;\r
      }\r
      .portal-header-bg{\r
          background: linear-gradient(60deg, #6150dd 0%, #6d4fd4 20%, #5363dd 50%, #3655e9 75%, #8f36f1 100%);\r
      }\r
	  \r
      \r
      .checkbox-container .form-group {\r
           margin-top: 30px !important;\r
           margin-bottom: 4px !important;\r
      }\r
      \r
      .employee-center-navigation .main-menu {\r
           background-color: #1b1d42 !important;\r
           border-bottom: .1rem solid #494949 !important;\r
      }`,
    header: 'e53025d72b595250d4dffd74ce91bf04',
    fixedHeader: false,
    fixedFooter: false,
    cssIncludes: [
        {
            order: 1,
            include: 'ddc1925b1bb8f85047582171604bcb1b',
        },
        {
            order: 100,
            include: '6647ce25730130106d1f57903bf6a7d4',
        },
        {
            order: 100,
            include: 'd7002466b7d130101ff9047f7e11a916',
        },
        {
            order: 100,
            include: '51309ed71bb8f85047582171604bcb9d',
        },
        {
            order: 100,
            include: '53c9835477621110cca8ddad7c5a993b',
        },
        {
            order: 100,
            include: 'db2d210d6126b010f877257db5dedbcd',
        },
        {
            order: 100,
            include: '73001ed71bb8f85047582171604bcbde',
        },
        {
            order: 100,
            include: 'c0809985772211109033bfeacf5a997f',
        },
        {
            order: 100,
            include: '557f971c1b59fc108d16ca64604bcb95',
        },
        {
            order: 100,
            include: '9fe3ee021bd1741047582171604bcb84',
        },
        {
            order: 100,
            include: 'dcdaa43d1b1df01047582171604bcb57',
        },
        {
            order: 100,
            include: '150937ef1b783c5047582171604bcba5',
        },
        {
            order: 100,
            include: 'b9f837ef1b783c5047582171604bcbac',
        },
        {
            order: 100,
            include: '203b09ce1b5d341047582171604bcb88',
        },
        {
            order: 100,
            include: 'adecac151b49f0108d16ca64604bcb0a',
        },
    ],
    jsIncludes: [
        {
            order: 100,
            include: 'd2d028b5eb621110191f2ff2a25228a1',
        },
    ],
})
