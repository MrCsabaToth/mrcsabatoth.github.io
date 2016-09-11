/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';





/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["/bower_components/app-layout/app-box/app-box.html","ed2950f30d2cddf8ee269d6e4b537600"],["/bower_components/app-layout/app-drawer-layout/app-drawer-layout.html","eb2105631837c109ac5265ca79937f9a"],["/bower_components/app-layout/app-drawer/app-drawer.html","bc8da1c8f75bb9a1f7b13f39ee9a2556"],["/bower_components/app-layout/app-grid/app-grid-style.html","d8f7b688a8bedeca447c7332e6a54ca1"],["/bower_components/app-layout/app-header-layout/app-header-layout.html","d2b8a2296564c08a28e39b0640da414b"],["/bower_components/app-layout/app-header/app-header.html","1063a6d965e79979402f8736b543aa2a"],["/bower_components/app-layout/app-layout.html","8c1748893c5a70c63a6cf83cc85fad1f"],["/bower_components/app-layout/app-scroll-effects/app-scroll-effects-behavior.html","75c6cd96562486865e681f0a07578d69"],["/bower_components/app-layout/app-scroll-effects/effects/blend-background.html","4723ce7f6429640a812ad866ddddb719"],["/bower_components/app-layout/app-scroll-effects/effects/parallax-background.html","391d025dcffee3f042c9d2bdd83be377"],["/bower_components/app-layout/app-scroll-effects/effects/waterfall.html","a21d6a2fc019eb59d10586aada74313e"],["/bower_components/app-layout/app-scrollpos-control/app-scrollpos-control.html","bc1ca312eb9192253e0c8a2a267eb45e"],["/bower_components/app-layout/app-toolbar/app-toolbar.html","eff35dece1ab70dd02fe4254c2459ffe"],["/bower_components/app-layout/helpers/helpers.html","95b52c0c05f77b65bc1b5dc0715d2495"],["/bower_components/app-localize-behavior/app-localize-behavior.html","9f3c59ea36dcb0bfb560dd6adf3d1372"],["/bower_components/app-route/app-location.html","52b3d8b5ecbb838b41bd9bd0ae556cca"],["/bower_components/app-route/app-route-converter-behavior.html","0e5b36ae9988a88bb30729fdb99a5d94"],["/bower_components/app-route/app-route.html","624ca199d36389f3db04597a593548ec"],["/bower_components/font-roboto/roboto.html","09500fd5adfad056ff5aa05e2aae0ec5"],["/bower_components/google-apis/google-maps-api.html","e4eb1641cec251f631cec2f569e8a551"],["/bower_components/google-apis/google-youtube-api.html","95c7667f30f21ec613a3ffd1f716832e"],["/bower_components/google-map/google-map-marker.html","ca5a1c5eb9de7974c926bcede0a6e9ae"],["/bower_components/google-map/google-map.html","665dbf603ee46bac6cb1922bca1b6b17"],["/bower_components/google-youtube/google-youtube.html","935cb26ee3600976ff55d57a3a8fe9c6"],["/bower_components/intl-messageformat/dist/intl-messageformat.min.js","6d09d1bd7317183aaa17fc78c1a8edd0"],["/bower_components/iron-a11y-announcer/iron-a11y-announcer.html","7fa51a3de8ea9987c430344fee81b55c"],["/bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html","b9a8e766d0ab03a5d13e275754ec3d54"],["/bower_components/iron-ajax/iron-ajax.html","d606b330d7bd040660a53a5cda7f8acf"],["/bower_components/iron-ajax/iron-request.html","c2d289c4b20653353cff315cf247a45e"],["/bower_components/iron-behaviors/iron-button-state.html","6565a80d1af09299c1201f8286849c3b"],["/bower_components/iron-behaviors/iron-control-state.html","1c12ee539b1dbbd0957ae26b3549cc13"],["/bower_components/iron-checked-element-behavior/iron-checked-element-behavior.html","6fd1055c2c04382401dc910a0db569c6"],["/bower_components/iron-dropdown/iron-dropdown-scroll-manager.html","70904f32a519b07ec427d1a9a0c71528"],["/bower_components/iron-dropdown/iron-dropdown.html","b6544377bc3e137268e63248b2eae70b"],["/bower_components/iron-fit-behavior/iron-fit-behavior.html","8d3799ca2f619ed4f31261bb03284671"],["/bower_components/iron-flex-layout/iron-flex-layout.html","f6d0b5075d5f70cac9b4bd66bd88c459"],["/bower_components/iron-form-element-behavior/iron-form-element-behavior.html","a64177311979fc6a6aae454cb85ea2be"],["/bower_components/iron-icon/iron-icon.html","51e788317085f7f9aa8041e81254c9fe"],["/bower_components/iron-iconset-svg/iron-iconset-svg.html","8fb45b1b4668dae069f5efb5004c2af4"],["/bower_components/iron-image/iron-image.html","7a4328f2e0a5499ef10d93f1b41dd969"],["/bower_components/iron-input/iron-input.html","3e393eda6c241be2817ce0acc512bcf6"],["/bower_components/iron-jsonp-library/iron-jsonp-library.html","2278dab473da8287511ea8f8eb30144d"],["/bower_components/iron-localstorage/iron-localstorage.html","acb3df7483568a40df937ed2eb161c3c"],["/bower_components/iron-location/iron-location.html","b999e8754a2e8fdde266884e47cefa04"],["/bower_components/iron-location/iron-query-params.html","065a00285a46f8483c74e363945499c9"],["/bower_components/iron-media-query/iron-media-query.html","7436f9608ebd2d31e4b346921651f84b"],["/bower_components/iron-menu-behavior/iron-menu-behavior.html","ebd9e4f4121fe7691f20f0656cb24e5d"],["/bower_components/iron-menu-behavior/iron-menubar-behavior.html","a0cc6674fc6d9d7ba0b68ff680b4e56b"],["/bower_components/iron-meta/iron-meta.html","dd4ef14e09c5771e70292d70963f6718"],["/bower_components/iron-overlay-behavior/iron-overlay-backdrop.html","77e57b30cac5c360d4a21f4fae2a6c33"],["/bower_components/iron-overlay-behavior/iron-overlay-behavior.html","d7b9e877877c2ca1156c4c9fdd775e16"],["/bower_components/iron-overlay-behavior/iron-overlay-manager.html","7f741ba06ffd837bf1697e8778b94731"],["/bower_components/iron-pages/iron-pages.html","08c5b7aacd9ef5fdb5ae583b47bd2df5"],["/bower_components/iron-resizable-behavior/iron-resizable-behavior.html","e93449ccd4312e4e30060c87bd52ed25"],["/bower_components/iron-scroll-target-behavior/iron-scroll-target-behavior.html","0185cbe8d7139c9e92af3a9af67feb17"],["/bower_components/iron-selector/iron-multi-selectable.html","46d6620acd7bad986d81097d9ca91692"],["/bower_components/iron-selector/iron-selectable.html","65b04f3f5f1b551d91a82b36f916f6b6"],["/bower_components/iron-selector/iron-selection.html","83545b7d1eae4020594969e6b9790b65"],["/bower_components/iron-selector/iron-selector.html","4d2657550768bec0788eba5190cddc66"],["/bower_components/iron-validatable-behavior/iron-validatable-behavior.html","02bf0434cc1a0d09e18413dea91dcea1"],["/bower_components/marked-element/marked-element.html","8ddb812fba9a26027a0e6ea04165d2d9"],["/bower_components/marked-element/marked-import.html","935603373e4046660d3944abb73939f1"],["/bower_components/marked/lib/marked.js","eb770edf3f9eec6adb25b8fe65e15312"],["/bower_components/neon-animation/animations/cascaded-animation.html","3a5a8c22afe014a904557b66938c44ba"],["/bower_components/neon-animation/animations/fade-in-animation.html","b814c818dbcffe2bb50563e1406497df"],["/bower_components/neon-animation/animations/fade-out-animation.html","44988226230af0e6d92f0988fc8688e2"],["/bower_components/neon-animation/animations/hero-animation.html","4feaf331f46d411ce9ad465da1dbb65e"],["/bower_components/neon-animation/animations/opaque-animation.html","8e2f63bbc648796f3ed96834a5553d07"],["/bower_components/neon-animation/animations/reverse-ripple-animation.html","1e08f758cb172f8fb19fabffc163a180"],["/bower_components/neon-animation/animations/ripple-animation.html","4d33252f387c84d0702efaaf510990b0"],["/bower_components/neon-animation/animations/scale-down-animation.html","e9cedffa151b388200cb2a610b2252fc"],["/bower_components/neon-animation/animations/scale-up-animation.html","20059304b9b7e9377379ad75110ef2fc"],["/bower_components/neon-animation/animations/slide-down-animation.html","31286bfe0b2cb6f28ef5e1f9d181f641"],["/bower_components/neon-animation/animations/slide-from-bottom-animation.html","12eea18013bf5b89c642fde725469a62"],["/bower_components/neon-animation/animations/slide-from-left-animation.html","cb18058340412077b0b0a8a7228a79a6"],["/bower_components/neon-animation/animations/slide-from-right-animation.html","79f28e3d4580cef016e6ae8c63384e98"],["/bower_components/neon-animation/animations/slide-from-top-animation.html","565391366846573f1725585d15b9baad"],["/bower_components/neon-animation/animations/slide-left-animation.html","a44c677c010daf7872b77f53bcd86e58"],["/bower_components/neon-animation/animations/slide-right-animation.html","b9908b67414ba0dfc7442eb1207d05fc"],["/bower_components/neon-animation/animations/slide-up-animation.html","bee63970c6ffc2706419533c9b2bd65e"],["/bower_components/neon-animation/animations/transform-animation.html","c64feaff2d50eb6f6633c644063c6aa3"],["/bower_components/neon-animation/neon-animatable-behavior.html","270f52231303cae4cb8e3fadb5a805c1"],["/bower_components/neon-animation/neon-animatable.html","9f08f804b30273de4024b18407ec2c40"],["/bower_components/neon-animation/neon-animated-pages.html","9b68e72c661e0c91e38dcaee8e0b374d"],["/bower_components/neon-animation/neon-animation-behavior.html","eb1cdd9cd9d780a811fd25e882ba1f8e"],["/bower_components/neon-animation/neon-animation-runner-behavior.html","782cac67e6cb5661d36fb32d9129ff03"],["/bower_components/neon-animation/neon-animation.html","64a31fddf24983589825e7f0feaedbb8"],["/bower_components/neon-animation/neon-animations.html","3b6524b3cc95f27b4b6d7821a7097137"],["/bower_components/neon-animation/neon-shared-element-animatable-behavior.html","d891492be81d44fcf6dfb54fd8d73ae2"],["/bower_components/neon-animation/neon-shared-element-animation-behavior.html","59b343c52eef4ff93901a3cba99577d6"],["/bower_components/neon-animation/web-animations.html","b310811179297697d51eac3659df7776"],["/bower_components/paper-behaviors/paper-button-behavior.html","edddd3f97cf3ea944f3a48b4154939e8"],["/bower_components/paper-behaviors/paper-checked-element-behavior.html","59702db25efd385b161ad862b8027819"],["/bower_components/paper-behaviors/paper-inky-focus-behavior.html","51a1c5ccd2aae4c1a0258680dcb3e1ea"],["/bower_components/paper-behaviors/paper-ripple-behavior.html","b6ee8dd59ffb46ca57e81311abd2eca0"],["/bower_components/paper-button/paper-button.html","2e9487e595d34734446ddde0a9206d9e"],["/bower_components/paper-card/paper-card.html","6e79435c062b00083f34d9b78f87e5c0"],["/bower_components/paper-checkbox/paper-checkbox.html","1526dae49c6f8cba9a6dffa3c9c64a90"],["/bower_components/paper-dialog-behavior/paper-dialog-behavior.html","b9cf5384b29cd12a724965080916b6f1"],["/bower_components/paper-dialog-behavior/paper-dialog-shared-styles.html","1d272748882199e0e9a9b3cdce6333cf"],["/bower_components/paper-fab/paper-fab.html","bdbcdcba723f04d28b53b0f230a3f87b"],["/bower_components/paper-icon-button/paper-icon-button-light.html","f09fd2130396720585a42cde6eebc1d4"],["/bower_components/paper-icon-button/paper-icon-button.html","4a5cbc3fe046e2c070d4bf34ec7463d6"],["/bower_components/paper-input/paper-input-addon-behavior.html","de7b482dc1fb01847efba9016db16206"],["/bower_components/paper-input/paper-input-behavior.html","3960579058d3ba0a74ae7b67b78f53c2"],["/bower_components/paper-input/paper-input-char-counter.html","c9e52a2d75b93ea3abd87022d87c0c6a"],["/bower_components/paper-input/paper-input-container.html","30c9bf04802e25615635266a453554c5"],["/bower_components/paper-input/paper-input-error.html","3cec14d4d86f4e4b5ad349ba8a2dac9f"],["/bower_components/paper-input/paper-input.html","4bbc643f60deb78d67fdc38be33e784d"],["/bower_components/paper-item/paper-icon-item.html","d9f23641c16cbcf83b20e3ba51de18e7"],["/bower_components/paper-item/paper-item-behavior.html","82636a7562fd8b0be5b15646ee461588"],["/bower_components/paper-item/paper-item-body.html","40b8696a53a6bde10f223f9cf798cfe6"],["/bower_components/paper-item/paper-item-shared-styles.html","389eedfc65ee58b1f0d67281d0bad1a1"],["/bower_components/paper-item/paper-item.html","5099885c3bd34e04df7796d48851c4a4"],["/bower_components/paper-material/paper-material-shared-styles.html","3a5f381dbdbdabbfd7c122e1c02a60e3"],["/bower_components/paper-material/paper-material.html","82c0fde850e52dc3bfdfc5efa34d5a15"],["/bower_components/paper-menu-button/paper-menu-button-animations.html","a6d6ed67a145ca00d4487c40c4b06273"],["/bower_components/paper-menu-button/paper-menu-button.html","ec30112b52c078cea77036957e295e14"],["/bower_components/paper-menu/paper-menu-shared-styles.html","d284d59303c2383edf6c626dd679302d"],["/bower_components/paper-menu/paper-menu.html","3d9cf400d7ee8753ab6d0cb6358bb711"],["/bower_components/paper-ripple/paper-ripple.html","30fa6456055a5725c6492f8e5a364f39"],["/bower_components/paper-scroll-header-panel/paper-scroll-header-panel.html","82ccdbd8bf98a2e1cafccd7ffac0f5f1"],["/bower_components/paper-spinner/paper-spinner-behavior.html","82e814c4460e8803f6f57cc457658adf"],["/bower_components/paper-spinner/paper-spinner-styles.html","41385e612365d851bb3c3611fc9bddb6"],["/bower_components/paper-spinner/paper-spinner.html","940e64bbde54dad918d0f5c0e247a8bd"],["/bower_components/paper-styles/color.html","c53abb41659bf242d420a7f93b977e91"],["/bower_components/paper-styles/default-theme.html","25d95202be2ff5b60f651924e66abed2"],["/bower_components/paper-styles/shadow.html","0db3ad33dddb4766c259232951ec158b"],["/bower_components/paper-styles/typography.html","3f95c68bcd0bd4710f3469c4900533d6"],["/bower_components/paper-tabs/paper-tab.html","d79000eb3d5fe30b93443b352289a4d3"],["/bower_components/paper-tabs/paper-tabs-icons.html","9fb57777c667562392afe684d85ddbe2"],["/bower_components/paper-tabs/paper-tabs.html","c90a99374bfeaa71721f0e1b915d5034"],["/bower_components/paper-toast/paper-toast.html","ce2270c5dfe0479d7e12749e38a71f4c"],["/bower_components/paper-toolbar/paper-toolbar.html","e54bc7361f1e80997c80621b908dafdd"],["/bower_components/paper-tooltip/paper-tooltip.html","157318f5da1818197de3793d07a94cea"],["/bower_components/polymer/polymer-micro.html","7739e37db5581472b91925e5fa9bde55"],["/bower_components/polymer/polymer-mini.html","9e9dfb157eae29a59c98343288d4d120"],["/bower_components/polymer/polymer.html","2dce719d53b7ea549067d3d21a2b2c29"],["/bower_components/promise-polyfill/Promise.js","5afb14fd81497aca81bf25929d65b02d"],["/bower_components/promise-polyfill/promise-polyfill-lite.html","06470312beff013fc54695e0bdda2cb3"],["/bower_components/time-elements/time-elements.js","a3f49327ed2412dc9044077500392a59"],["/bower_components/web-animations-js/web-animations-next-lite.min.js","04197e2ccec914fa460eef2ac140c853"],["/bower_components/webcomponentsjs/webcomponents-lite.min.js","f04ed23700daeb36f637bfe095960659"],["/data/blog.json","4e4cebc9fc00566321bccbee608f3136"],["/data/en/resources.json","f371e984d9943950fe3d8e6254086b7c"],["/data/hoverboard.config.json","8513f2ff07e5e4e68dcea68c1e9057f5"],["/data/partners.json","f3d909987002df460ec3217382f39c10"],["/data/posts/2016-08-22-valleydevfest-2016-announced.markdown","638efd598a8c872add68b582dc9026d9"],["/data/posts/code-of-conduct.markdown","fbc8756db0a14774a9e3f8dac06cdfcd"],["/data/schedule.json","77f8035425b957e4893593f336e55491"],["/data/sessions.json","5c87227067580efac259b3fd06ac3f13"],["/data/speakers.json","320e7889de27e5acf4356d788457a1ea"],["/data/team.json","82662a15b6593612b34352db7385a0bf"],["/data/tweets.json","d751713988987e9331980363e24189ce"],["/data/videos.json","78fe83e55a5db07e46a3ca8556ed8130"],["/images/backgrounds/closing.jpg","0d2666a42b5feb51dbddae4a6e76cf59"],["/images/backgrounds/coffee-break.jpg","283b8d543ba287acda89bade3e1a7eb4"],["/images/backgrounds/gdg-devfest-2015-146.jpg","813fc30b30d59d21ddc22b69a41735a7"],["/images/backgrounds/gdg-devfest-2015-223.jpg","3212e09ca20a637df1eb8d83517be450"],["/images/backgrounds/gdg-devfest-2015-418.jpg","d0d88b972e03e9166a31830482b1aa8c"],["/images/backgrounds/home.png","b57f40e281ba06760d073514bef2f1bb"],["/images/backgrounds/hub.jpg","f1db7c47dff6b3bc54c64f0db9d975d2"],["/images/backgrounds/location_donkeykong.jpg","bc24ee3c14e98efcb7208770ffc523b3"],["/images/backgrounds/location_geekwise.jpg","65e6fe59851a5992616260e5e291c2c3"],["/images/backgrounds/location_hall.jpg","c9e8c3abb0cff56a9eae8f105f04d899"],["/images/backgrounds/location_halo.jpg","7c63e17bdc5ec97ebb1644a13ed94474"],["/images/backgrounds/location_simcity.jpg","17f6919e4a0878ca5b098bbb871928b9"],["/images/backgrounds/location_zelda.jpg","d899f08e36710382666196b70fdbcffe"],["/images/backgrounds/lunch.jpg","1b7f9ec019a4391c25584c3bce7843d6"],["/images/backgrounds/morning.jpg","ee01e33624472918bb981c02b2c31855"],["/images/backgrounds/opening.jpg","3ebf00d4f85ca044eff1dc17ed56d034"],["/images/backgrounds/party.jpg","62bdfc8ded3b33861fecade528d92837"],["/images/backgrounds/registration.jpg","4afd4b01198cc95c2232e06dd35eb640"],["/images/favicon/favicon-72.png","8a50435f9af90132f255eb24018c68dc"],["/images/favicon/favicon.ico","b86585686052335d3f7ef73973e18aef"],["/images/favicon/favivon-32.png","a9509ca258731e12d52dd223ad1ba4c8"],["/images/gdg-logo.svg","a124fcbb532a30ad2342b16662695bdf"],["/images/logo-light.svg","75f45b80d3e64d114f910351b33f361d"],["/images/logo-white.svg","94f517204edbbc3da51c1d3bf616ea0d"],["/images/logo.svg","68a5eeb613ef13b8d6453ede61d86a65"],["/images/logos/GDG_Fresno.svg","631d893c2a531acf6754dd537d8ce41e"],["/images/logos/GDG_Modesto.png","aa03c13634e424df7d89cb0ba9285f00"],["/images/logos/GDG_Oakdale.svg","850a0c6e1bc0f9f2dcdd5bab3fe2ce06"],["/images/logos/GDG_Visalia.svg","ca0155603b1e05d5389f0c6c5ec022b3"],["/images/logos/Intel-logo.svg","bbc8a7b267246fe161b716c99e98dc1b"],["/images/logos/bitwise.png","07664bd54a5224927cfd915b2d334c87"],["/images/logos/fcc_logo_wordmark.png","1502957b4612f80cf6b987cd7001ef90"],["/images/logos/gdg-x.svg","f8fb99f2d34c78761130651f9d46c5ed"],["/images/logos/google.svg","888b314b2d82dac34ba4f7d1df8e0a84"],["/images/logos/ideaworks-logo-invert.png","e23b1b285bba43a9236868830b717286"],["/images/people/ahsen_baig.jpg","482d476cad98b3308a9c5a124e1a9b17"],["/images/people/alec_keyl.jpg","49db9886ba5d9901f02c930e8064b547"],["/images/people/csaba_toth.jpg","441743bdc1135ac51d2a06eaa1104ede"],["/images/people/james_duvall.jpg","2d8287435a520b42ddb835ddd6d753c9"],["/images/people/jim_hutton.jpg","52bba20c5da24269d5db710e585d7f7d"],["/images/people/justin_ribeiro.jpg","62d25148425acb3f5233dfff5ff14328"],["/images/people/mark_simonian.jpg","03140142a07d0fec3127cf7c0ef1bef8"],["/images/people/martin_omander.jpg","8542fff25cac23992a272574397389ae"],["/images/people/murat_yener.jpg","ede5914ef8bdcc2128d88ae9e7860f2f"],["/images/people/nancy_mohamed.jpg","18be2bd4af996f7b727423a18f8b6559"],["/images/people/paul_bakaus.jpg","dbdd0788f65da705817952e3ca6d6cd3"],["/images/people/rio_waller.jpg","6a068dd3bcc8ab70ab7ab1e86a6c9012"],["/images/people/sandeep_dinesh.jpg","86e69353e9ef75e9f19d98412a59750a"],["/images/posts/gdg-devfest-2015-6.jpg","26de22f7983bff2bb61e283ab5b2f1b1"],["/images/sessions/101.jpg","71c7734d9095c29bc070e0fdd4528d14"],["/images/sessions/102.jpg","6ac5d81906eda526a025cce493463ccf"],["/images/sessions/103.jpg","9e0cf4dd55bec21b8d44a07a6a0f3e94"],["/images/sessions/104.jpg","09208be4eaa8f825939f5ee17f6409ea"],["/images/sessions/105.jpg","b6f8b3a199802cf832aa4f5316b21845"],["/images/sessions/106.jpg","e594b24186b5fc90e725655238f50b3d"],["/images/sessions/107.jpg","54ce575ba73b475cc301f0f59745c58b"],["/images/social-share.png","79ca6494383081d924064ed71e116e70"],["/images/touch/homescreen-144.png","777fba2c9ab035808a6925ca611bc67f"],["/images/touch/homescreen-168.png","fc1f8e5f1a213ad6c2731c089fef3de1"],["/images/touch/homescreen-192.png","1775ae0aca4e1db5d5b1650a3b2c7eac"],["/images/touch/homescreen-256.png","c30a7a4972a7b4a5c0ad7c9572cb3e87"],["/images/touch/homescreen-48.png","0a740b7afb3040a80eb0622ee24b35ac"],["/images/touch/homescreen-72.png","8a50435f9af90132f255eb24018c68dc"],["/images/touch/homescreen-96.png","0f6e04240af1efb86d43d278564d46ac"],["/images/vrview/ic_info_outline_black_24dp.svg","80022862825d5aeebeb723ed70be8037"],["/images/vrview/loading.gif","d272eebff6ed1c0fb38bb4a900363520"],["/index.html","c01c2283e15c078740726317bb07481e"],["/manifest.json","aa8aac3245e786cbb7cef8ed7a64b1db"],["/scripts/bootstrap.js","2dc3ffa7c47badc81eada5030ea97fa6"],["/scripts/helper/deferred.js","00ad32e38a07f247290c2f67e536d711"],["/scripts/helper/elements.js","0ca8fba3ee9ce7cba1d836a0bed8afea"],["/scripts/helper/promise-polyfill.js","bce372630e22345ff83479f41c533046"],["/scripts/helper/service-worker-registration.js","2e10c2ced9d00afc996e1b9beb8f1cee"],["/scripts/helper/util.js","36c5192324d40e060799d58a38f96ef6"],["/scripts/helper/vrview-analytics.min.js","bf698965c508b87fa847bcd083104393"],["/scripts/helper/vrview.css","f4773175a63b4c56f05e34361824750f"],["/scripts/metrics.js","8623bff01545e628beb021b08b8afa31"],["/src/behaviors/localize-behavior.html","5c9051994ed4cb58f9ca0a2cfbf0c483"],["/src/behaviors/page-behavior.html","7a14e88bebe781a58ef61c15252a8e4d"],["/src/behaviors/share-behavior.html","cb664197f584d8b10b94d069c119214c"],["/src/behaviors/utils-behavior.html","2e544f9c4b49f3af3a1152174baa2916"],["/src/effects/fade-effect.html","8ee4b618e5e00c5b2c822a7bdddfa1b1"],["/src/elements/about-block.html","51e3b883bd86c9aa28cf5e33055ca5bc"],["/src/elements/animatable-content.html","eefc85f4b367f5276169a1a622c3a2d4"],["/src/elements/app-data.html","2d5850928498309e76a4f02486517899"],["/src/elements/call-to-action.html","73853a73764803563296bf9089ff41ec"],["/src/elements/drawer-block.html","f31d71a429f5fca27053fadbda3fbfc9"],["/src/elements/featured-people.html","90856919cc72b81a9b49f9e2ee9c3fda"],["/src/elements/featured-videos.html","4915efbd6ecd11bdbd6d7743eebc5083"],["/src/elements/footer-block.html","b64fabf7672265739f20a11273f3aec8"],["/src/elements/header-content.html","3a4c7c378734310bc7273d9300ec1fb8"],["/src/elements/latest-posts.html","1a13eafa0f25540df4b25e9fe76ca61a"],["/src/elements/logos-block.html","a1e5aecb2f31635e84dda54d775248e0"],["/src/elements/mailchimp-subscribe.html","fab801882025b1a9d4ef9847f1a6cd27"],["/src/elements/map-block.html","3f64e1ea8c0508a524921fc1b9157185"],["/src/elements/photo-block.html","f80ca07b769ca44e5fef1c6993e026b0"],["/src/elements/schedule-day.html","497f362f95aa1a757c2183e7be7a63d0"],["/src/elements/schedule-subnav.html","c0434bdfa31a2aa811d95a716bf81c86"],["/src/elements/session-details.html","4ddeabbff0e5f37e91166c7eb7e0afea"],["/src/elements/social-feed.html","951902689abaa06e47f9e9a3f46723ba"],["/src/elements/social-post.html","5d51d2ff72f4006cff63fbe262bb5aa1"],["/src/elements/speaker-details.html","b187afdc96c187597deb35f382d2ebcf"],["/src/elements/statistics-block.html","8b9758c0ba64ebcd24e2075557bc125e"],["/src/elements/ticket-element.html","b5c71dc01eef4f3e1d3f623746f4f3a7"],["/src/elements/tickets-block.html","c0b1192f87961569f26c950172642d0c"],["/src/elements/toast-element.html","47ae65f5c8907528a134d3ed6364d417"],["/src/elements/toolbar-block.html","b9743064e686c0132cdddf142111bac5"],["/src/elements/truncate-marked-text.html","f8b933d872155a7d75dc34ed5d9c951b"],["/src/elements/video-dialog.html","b09a93f3121f8b394f8b5476afbc5e77"],["/src/elements/vr-view.html","d6c054e6cb4f0921da3227f02a14d0f6"],["/src/hoverboard-app.html","3daab1aa351967877600aa3b7d779021"],["/src/js-wrappers/g-plusone.html","abcc292603de43782fa49f6fd952a4a6"],["/src/js-wrappers/time-element-wrapper.html","cc26ded5c3021fdfb09304414b2e0af1"],["/src/pages/blog-list.html","ed72d9f6f8b42641b1b3c073ca56b2f1"],["/src/pages/blog-page.html","8e7322adf87219ac6e6462f51f5461e6"],["/src/pages/cod-page.html","9638159168aa80d8d6537111a97c04df"],["/src/pages/home-page.html","9ea44fbfb6bd5e5ab6abbe5596f8a83a"],["/src/pages/post-page.html","09b41b7132b077b8bf4837deec108d5b"],["/src/pages/schedule-page.html","d3f1f0cbe7cbbbe704a691e5340657e3"],["/src/pages/speakers-page.html","1e4906fd64d5465dbebde0fb0015c96c"],["/src/pages/team-page.html","ca76eeb75cc688a5575769896d0f0f60"],["/src/styles/dialog-styles.html","7e366580f8ace2845d0297550a9801af"],["/src/styles/icons.html","bc6fc739ddabc1dce834e1d8c9df1a69"],["/src/styles/mixins.html","5e9fd71785b723f45e28fef871231e73"],["/src/styles/shared-styles.html","1235b0aa6f8b889ae02897eafedd720c"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1--' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + param;

    return urlWithCacheBusting.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    // Take a look at each of the cache names we expect for this version.
    Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
      return caches.open(cacheName).then(function(cache) {
        // Get a list of all the entries in the specific named cache.
        // For caches that are already populated for a given version of a
        // resource, there should be 1 entry.
        return cache.keys().then(function(keys) {
          // If there are 0 entries, either because this is a brand new version
          // of a resource or because the install step was interrupted the
          // last time it ran, then we need to populate the cache.
          if (keys.length === 0) {
            // Use the last bit of the cache name, which contains the hash,
            // as the cache-busting parameter.
            // See https://github.com/GoogleChrome/sw-precache/issues/100
            var cacheBustParam = cacheName.split('-').pop();
            var urlWithCacheBusting = getCacheBustedUrl(
              CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

            var request = new Request(urlWithCacheBusting,
              {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                  response);
              }

              console.error('Request for %s returned a response status %d, ' +
                'so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          }
        });
      });
    })).then(function() {
      return caches.keys().then(function(allCacheNames) {
        return Promise.all(allCacheNames.filter(function(cacheName) {
          return cacheName.indexOf(CacheNamePrefix) === 0 &&
            !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '/index.html';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted([], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});




