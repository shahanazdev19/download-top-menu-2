import React, { useState } from 'react';
import Logo from '../Logo';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  faFacebookF , } from '@fortawesome/free-brands-svg-icons';
import {FaFacebookF, FaInstagram} from 'react-icons/fa'
import image1 from '../../images/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg';
import image2 from '../../images/concept-open-magic-book-pages-water-land-small-child-fantasy-nature-learning-copy-space-166401875.jpg';
import image3 from '../../images/gettyimages-844226534-612x612.jpg';
import image4 from '../../images/MtFuji-GettyImages-959111140.jpg';
import image5 from '../../images/pexels-photo-1172064.jpeg';
import Login from '../../pages/Login';

const NavbarMenu = () => {

  return (
   <div>
     <div id="top-bar" className="et-top-bar top-bar">
	<div className="container">
			<div className="topbar-items topbar-left">
				<ul className="social-icons top-bar-social-icons">
          <li>
            <a href="https://www.facebook.com/GalleryBangladeshFB/" target="_blank" data-toggle="tooltip" data-placement="left" title="facebook"><FaFacebookF/></a>
          </li>
          <li>
            <a href="https://www.instagram.com/gallerybangladesh_insta/" target="_blank" data-toggle="tooltip" data-placement="left" title="instagram"><FaInstagram/></a>
          </li>
        </ul>
        <ul id="menu-top-bar" className="et-top-menu">
          <li id="menu-item-6762" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-861 current_page_item menu-item-6762">
            <a href="/home" aria-current="page">Home</a>
          </li>
          <li id="menu-item-6763" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6763"><a href="https://gallerybangladesh.com/about-us/">About Us</a></li>
          <li id="menu-item-6535" className="menu-item menu-item-type-post_type menu-item-object-page current-page-ancestor menu-item-6535"><a href="https://gallerybangladesh.com/artist/">Artist</a></li>
          <li id="menu-item-6384" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6384"><a href="https://gallerybangladesh.com/vendor-register/">Vendor Registration</a></li>
          <li id="menu-item-3051" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3051"><a href="https://gallerybangladesh.com/wishlist-2/">Wishlist</a></li>
        </ul>			
      </div>
			<div className="topbar-items topbar-right">
			</div>					
	</div>    
  <div className="page-wrapper-inner">		
    <header id="header" className="header site-header header-v1 mobile-logo-center top-padding-menu">

        <div className="header-main header-section menu-center ">
        <div className="header-contents container">
          <div className="header-left-items header-items">					
              <div className="logo-holder">
                <Logo/>                
              </div>
          </div>
    <div className="header-center-items header-items top-bar-menu">
              
    <nav id="primary-menu" className="main-navigation navigation">
      <ul id="menu-main" className="primary-menu et-header-menu">
        <li id="menu-item-6288" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-6288 menu-item-mega-parent ">
          <a href="https://gallerybangladesh.com/product-category/calligraphy/">Calligraphy</a>
        <ul className="sub-menu">
          <li id="menu-item-7086" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-7086 mega-menu-title"><a href="https://gallerybangladesh.com/product-category/calligraphy/subject-calligraphy/">Subject</a>
          <ul className="sub-menu">
            <li id="menu-item-6875" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6875 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/calligraphy/subject-calligraphy/arabic/">Arabic</a></li>
            <li id="menu-item-6876" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6876 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/calligraphy/subject-calligraphy/bangla/">Bangla</a></li>
            <li id="menu-item-6877" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6877 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/calligraphy/subject-calligraphy/english/">English</a></li>
          </ul>
        </li>
          <li id="menu-item-6308" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-6308 mega-menu-title"><a href="https://gallerybangladesh.com/product-category/calligraphy/medium/">Medium</a>
          <ul className="sub-menu">
            <li id="menu-item-6879" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6879 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/drawing/medium-drawing/acrylic/">Acrylic</a></li>
            <li id="menu-item-6880" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6880 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/drawing/medium-drawing/oil-paint/">Oil Paint</a></li>
            <li id="menu-item-6881" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6881 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/calligraphy/medium/pastel/">Pastel</a></li>
            <li id="menu-item-6311" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6311 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/calligraphy/medium/ink/">Ink</a></li>
            <li id="menu-item-6758" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6758 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/calligraphy/medium/digital/">Digital</a></li>
          </ul>
        </li>
        </ul>
      </li>
      <li id="menu-item-7089" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-7089 menu-item-mega-parent "><a href="https://gallerybangladesh.com/product-category/painting/">Painting</a>
        <ul className="sub-menu">
          <li id="menu-item-7096" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-7096 mega-menu-title"><a href="https://gallerybangladesh.com/product-category/calligraphy/subject-calligraphy/">Subject</a>
          <ul className="sub-menu">
            <li id="menu-item-6889" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6889 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/drawing/subject-drawing/still-life/">Still Life</a></li>
            <li id="menu-item-6890" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6890 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/drawing/subject-drawing/nature/">Nature</a></li>
            <li id="menu-item-7090" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7090 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/drawing/subject-drawing/botanical/">Botanical</a></li>
            <li id="menu-item-7091" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7091 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/drawing/subject-drawing/landscape-subject-drawing/">Landscape</a></li>
            <li id="menu-item-7092" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7092 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/painting/subject-painting/floral-subject-painting/">Floral</a></li>
            <li id="menu-item-7093" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7093 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/painting/subject-painting/fantasy-subject-painting/">Fantasy</a></li>
            <li id="menu-item-7094" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7094 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/drawing/subject-drawing/people-subject-drawing/">People</a></li>
            <li id="menu-item-7095" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7095 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/drawing/subject-drawing/culture/">Culture</a></li>
          </ul>
        </li>
          <li id="menu-item-7088" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-7088 mega-menu-title"><a href="https://gallerybangladesh.com/product-category/drawing/style-drawing/">Style</a>
          <ul className="sub-menu">
            <li id="menu-item-7097" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7097 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/drawing/style-drawing/fine-art-style-drawing/">Fine Art</a></li>
            <li id="menu-item-7098" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7098 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/drawing/style-drawing/pop-art-style-drawing/">Pop Art</a></li>
            <li id="menu-item-6882" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6882 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/drawing/style-drawing/contemporary/">Contemporary</a></li>
            <li id="menu-item-6883" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6883 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/drawing/style-drawing/conceptual/">Conceptual</a></li>
            <li id="menu-item-6884" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6884 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/drawing/style-drawing/modern-style-drawing/">Modern</a></li>
            <li id="menu-item-6885" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6885 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/drawing/style-drawing/surrealism/">Surrealism</a></li>
            <li id="menu-item-6886" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6886 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/drawing/style-drawing/minimalism/">Minimalism</a></li>
          </ul>
        </li>
          <li id="menu-item-6891" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-6891 mega-menu-title"><a href="https://gallerybangladesh.com/product-category/drawing/medium-drawing/">Medium</a>
          <ul className="sub-menu">
            <li id="menu-item-6892" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6892 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/drawing/medium-drawing/acrylic/">Acrylic</a></li>
            <li id="menu-item-6893" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6893 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/drawing/medium-drawing/oil-paint/">Oil Paint</a></li>
            <li id="menu-item-6894" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6894 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/painting/medium-painting/watercolor/">Watercolor</a></li>
            <li id="menu-item-6895" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6895 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/calligraphy/medium/pastel/">Pastel</a></li>
            <li id="menu-item-6896" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6896 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/painting/medium-painting/gouache/">Gouache</a></li>
            <li id="menu-item-6897" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6897 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/drawing/medium-drawing/ink-medium-drawing/">Ink</a></li>
            <li id="menu-item-6898" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6898 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/painting/medium-painting/wax/">Wax</a></li>
            <li id="menu-item-6899" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6899 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/drawing/medium-drawing/alternative/">Alternative</a></li>
            <li id="menu-item-6900" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6900 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/drawing/medium-drawing/mixed/">Mixed</a></li>
          </ul>
        </li>
        </ul>
      </li>
      <li id="menu-item-6901" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-6901 menu-item-mega-parent "><a href="https://gallerybangladesh.com/product-category/drawing/">Drawing</a>
      <ul className="sub-menu">
        <li id="menu-item-6902" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-6902 mega-menu-title"><a href="https://gallerybangladesh.com/product-category/calligraphy/subject-calligraphy/">Subject</a>
        <ul className="sub-menu">
          <li id="menu-item-6903" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6903 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/drawing/subject-drawing/abstract-subject-drawing/">Abstract</a></li>
          <li id="menu-item-6904" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6904 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/drawing/subject-drawing/still-life/">Still Life</a></li>
          <li id="menu-item-6905" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6905 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/drawing/subject-drawing/botanical/">Botanical</a></li>
          <li id="menu-item-6906" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6906 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/painting/subject-painting/nature-subject-painting/">Nature</a></li>
          <li id="menu-item-6907" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6907 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/painting/subject-painting/landscape-subject-painting/">Landscape</a></li>
          <li id="menu-item-6909" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6909 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/drawing/subject-drawing/people-subject-drawing/">People</a></li>
          <li id="menu-item-6910" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6910 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/painting/subject-painting/tradition-subject-painting/">Tradition</a></li>
          <li id="menu-item-6911" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6911 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/drawing/subject-drawing/culture/">Culture</a></li>
        </ul>
      </li>
        <li id="menu-item-6912" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-6912 mega-menu-title"><a href="https://gallerybangladesh.com/product-category/drawing/style-drawing/">Style</a>
        <ul className="sub-menu">
          <li id="menu-item-6913" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6913 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/drawing/style-drawing/fine-art-style-drawing/">Fine Art</a></li>
          <li id="menu-item-6914" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6914 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/drawing/style-drawing/pop-art-style-drawing/">Pop Art</a></li>
          <li id="menu-item-6916" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6916 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/drawing/style-drawing/conceptual/">Conceptual</a></li>
          <li id="menu-item-6917" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6917 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/drawing/style-drawing/contemporary/">Contemporary</a></li>
          <li id="menu-item-6918" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6918 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/drawing/style-drawing/minimalism/">Minimalism</a></li>
          <li id="menu-item-6919" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6919 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/drawing/style-drawing/surrealism/">Surrealism</a></li>
          <li id="menu-item-6920" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6920 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/sculpture/style-sculpture/realism/">Realism</a></li>
        </ul>
      </li>
        <li id="menu-item-6921" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-6921 mega-menu-title"><a href="https://gallerybangladesh.com/product-category/drawing/medium-drawing/">Medium</a>
        <ul className="sub-menu">
          <li id="menu-item-6923" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6923 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/drawing/medium-drawing/pencil-medium-drawing/">Pencil</a></li>
          <li id="menu-item-6924" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6924 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/drawing/medium-drawing/charcoal-medium-drawing/">Charcoal</a></li>
          <li id="menu-item-6925" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6925 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/drawing/medium-drawing/ink-medium-drawing/">Ink</a></li>
          <li id="menu-item-6926" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6926 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/calligraphy/medium/pastel/">Pastel</a></li>
          <li id="menu-item-6927" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6927 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/drawing/medium-drawing/acrylic/">Acrylic</a></li>
          <li id="menu-item-6928" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6928 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/painting/medium-painting/oil-paint-medium-painting/">Oil Paint</a></li>
          <li id="menu-item-6929" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6929 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/drawing/medium-drawing/water-color/">Water Color</a></li>
        </ul>
      </li>
      </ul>
      </li>
      <li id="menu-item-6930" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-6930 menu-item-mega-parent "><a href="https://gallerybangladesh.com/product-category/photography/">Photography</a>
      <ul className="sub-menu">
        <li id="menu-item-6932" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-6932 mega-menu-title"><a href="https://gallerybangladesh.com/product-category/calligraphy/subject-calligraphy/">Subject</a>
        <ul className="sub-menu">
          <li id="menu-item-6933" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6933 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/drawing/subject-drawing/abstract-subject-drawing/">Abstract</a></li>
          <li id="menu-item-6934" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6934 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/drawing/subject-drawing/still-life/">Still Life</a></li>
          <li id="menu-item-6935" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6935 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/drawing/subject-drawing/nature/">Nature</a></li>
          <li id="menu-item-6936" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6936 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/drawing/subject-drawing/landscape-subject-drawing/">Landscape</a></li>
          <li id="menu-item-6937" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6937 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/photography/subject-photography/wild-life/">Wild Life</a></li>
          <li id="menu-item-6939" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6939 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/drawing/subject-drawing/culture/">Culture</a></li>
          <li id="menu-item-6940" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6940 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/photography/subject-photography/tradition/">Tradition</a></li>
        </ul>
      </li>
        <li id="menu-item-6941" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-6941 mega-menu-title"><a href="https://gallerybangladesh.com/product-category/drawing/style-drawing/">Style</a>
        <ul className="sub-menu">
          <li id="menu-item-6942" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6942 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/drawing/style-drawing/fine-art-style-drawing/">Fine Art</a></li>
          <li id="menu-item-6943" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6943 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/drawing/style-drawing/contemporary/">Contemporary</a></li>
          <li id="menu-item-6944" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6944 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/drawing/style-drawing/contemporary/">Contemporary</a></li>
          <li id="menu-item-6945" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6945 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/drawing/style-drawing/conceptual/">Conceptual</a></li>
          <li id="menu-item-6946" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6946 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/photography/styke/street/">Street</a></li>
          <li id="menu-item-6947" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6947 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/photography/styke/black-white/">Black &amp; White</a></li>
          <li id="menu-item-6948" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6948 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/photography/styke/manipulation/">Manipulation</a></li>
        </ul>
      </li>
        <li id="menu-item-6949" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-6949 mega-menu-title"><a href="https://gallerybangladesh.com/product-category/drawing/medium-drawing/">Medium</a>
        <ul className="sub-menu">
          <li id="menu-item-6953" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6953 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/calligraphy/medium/digital/">Digital</a></li>
          <li id="menu-item-6952" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6952 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/photography/medium-photography/photo-paper/">Photo Paper</a></li>
          <li id="menu-item-6951" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6951 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/photography/medium-photography/polaroid/">Polaroid</a></li>
        </ul>
      </li>
      </ul>
      </li>
      <li id="menu-item-7120" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-7120"><a href="https://gallerybangladesh.com/product-category/prints/">Prints</a>
      <ul className="sub-menu">
        <li id="menu-item-7118" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7118"><a href="https://gallerybangladesh.com/product-category/prints/illustration/">Illustration</a></li>
        <li id="menu-item-7115" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7115"><a href="https://gallerybangladesh.com/product-category/painting/">Painting</a></li>
        <li id="menu-item-7116" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7116"><a href="https://gallerybangladesh.com/product-category/drawing/">Drawing</a></li>
        <li id="menu-item-7117" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7117"><a href="https://gallerybangladesh.com/product-category/calligraphy/">Calligraphy</a></li>
        <li id="menu-item-7119" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7119"><a href="https://gallerybangladesh.com/product-category/prints/photography-prints/">Photography</a></li>
        <li id="menu-item-7816" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7816"><a href="https://gallerybangladesh.com/product-category/prints/quotes/">Quotes</a></li>
      </ul>
      </li>
      <li id="menu-item-6958" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-6958 menu-item-mega-parent "><a href="https://gallerybangladesh.com/product-category/sculpture/">Sculpture</a>
      <ul className="sub-menu">
        <li id="menu-item-6959" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-6959 mega-menu-title"><a href="https://gallerybangladesh.com/product-category/calligraphy/subject-calligraphy/">Subject</a>
        <ul className="sub-menu">
          <li id="menu-item-6960" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6960 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/drawing/subject-drawing/abstract-subject-drawing/">Abstract</a></li>
          <li id="menu-item-6963" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6963 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/drawing/subject-drawing/still-life/">Still Life</a></li>
          <li id="menu-item-6962" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6962 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/drawing/subject-drawing/religious/">Religious</a></li>
          <li id="menu-item-6965" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6965 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/photography/subject-photography/architecture/">Architecture</a></li>
          <li id="menu-item-6961" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6961 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/sculpture/subject-sculpture/memento/">Memento</a></li>
          <li id="menu-item-6966" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6966 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/photography/subject-photography/wild-life/">Wild Life</a></li>
        </ul>
      </li>
        <li id="menu-item-6967" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-6967 mega-menu-title"><a href="https://gallerybangladesh.com/product-category/drawing/style-drawing/">Style</a>
        <ul className="sub-menu">
          <li id="menu-item-6968" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6968 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/drawing/style-drawing/fine-art-style-drawing/">Fine Art</a></li>
          <li id="menu-item-6969" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6969 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/drawing/style-drawing/contemporary/">Contemporary</a></li>
          <li id="menu-item-6970" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6970 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/drawing/style-drawing/conceptual/">Conceptual</a></li>
          <li id="menu-item-6971" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6971 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/sculpture/subject-sculpture/geometric/">Geometric</a></li>
          <li id="menu-item-6972" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6972 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/drawing/style-drawing/minimalism/">Minimalism</a></li>
          <li id="menu-item-6973" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6973 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/photography/subject-photography/portraiture/">Portraiture</a></li>
        </ul>
      </li>
        <li id="menu-item-6974" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-6974 mega-menu-title"><a href="https://gallerybangladesh.com/product-category/drawing/medium-drawing/">Medium</a>
        <ul className="sub-menu">
          <li id="menu-item-6975" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6975 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/jewelry/material/clay/">Clay</a></li>
          <li id="menu-item-6976" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6976 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/jewelry/material/stone/">Stone</a></li>
          <li id="menu-item-6977" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6977 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/jewelry/material/wood/">Wood</a></li>
          <li id="menu-item-6978" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6978 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/handicraft/paper/">Paper</a></li>
          <li id="menu-item-6979" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6979 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/sculpture/medium-sculpture/cement/">Cement</a></li>
          <li id="menu-item-6981" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6981 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/handicraft/metal/">Metal</a></li>
          <li id="menu-item-6982" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6982 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/handicraft/marbel/">Marbel</a></li>
          <li id="menu-item-6984" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6984 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/drawing/medium-drawing/alternative/">Alternative</a></li>
          <li id="menu-item-6985" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6985 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/drawing/medium-drawing/mixed/">Mixed</a></li>
        </ul>
      </li>
      </ul>
      </li>
      <li id="menu-item-6986" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-6986"><a href="https://gallerybangladesh.com/product-category/folk-art/">Folk Art</a>
      <ul className="sub-menu">
        <li id="menu-item-6987" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6987"><a href="https://gallerybangladesh.com/product-category/folk-art/terracotta/">Terracotta</a></li>
        <li id="menu-item-6988" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6988"><a href="https://gallerybangladesh.com/product-category/folk-art/phad-painting/">Phad Painting</a></li>
        <li id="menu-item-6990" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6990"><a href="https://gallerybangladesh.com/product-category/folk-art/nakshikantha/">Nakshikantha</a></li>
        <li id="menu-item-6989" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6989"><a href="https://gallerybangladesh.com/product-category/folk-art/pot-chitra/">Pot Chitra</a></li>
      </ul>
      </li>
      <li id="menu-item-6991" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-6991"><a href="https://gallerybangladesh.com/product-category/fashion/">Fashion</a>
      <ul className="sub-menu">
        <li id="menu-item-6993" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6993"><a href="https://gallerybangladesh.com/product-category/fashion/saree/">Saree</a></li>
        <li id="menu-item-6992" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6992"><a href="https://gallerybangladesh.com/product-category/fashion/salwar-kamij/">Salwar Kamij</a></li>
        <li id="menu-item-6994" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6994"><a href="https://gallerybangladesh.com/product-category/fashion/punjabi/">Punjabi</a></li>
        <li id="menu-item-6995" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6995"><a href="https://gallerybangladesh.com/product-category/fashion/kurta/">Kurta</a></li>
        <li id="menu-item-6996" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6996"><a href="https://gallerybangladesh.com/product-category/fashion/shwal/">Shwal</a></li>
      </ul>
      </li>
      <li id="menu-item-6997" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-6997 menu-item-mega-parent "><a href="https://gallerybangladesh.com/product-category/jewelry/">Jewelry</a>
      <ul className="sub-menu">
        <li id="menu-item-6998" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-6998 mega-menu-title"><a href="https://gallerybangladesh.com/product-category/drawing/style-drawing/">Style</a>
        <ul className="sub-menu">
          <li id="menu-item-6999" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-6999 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/jewelry/style-jewelry/eattings/">Earrings</a></li>
          <li id="menu-item-7000" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7000 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/jewelry/style-jewelry/necklaces/">Necklaces</a></li>
          <li id="menu-item-7003" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7003 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/jewelry/style-jewelry/lockets-pendants/">Lockets &amp; Pendants</a></li>
          <li id="menu-item-7001" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7001 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/jewelry/style-jewelry/bangles-bracelets/">Bangles &amp; Bracelets</a></li>
          <li id="menu-item-7002" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7002 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/jewelry/style-jewelry/nose-pins/">Nose Pins</a></li>
        </ul>
      </li>
        <li id="menu-item-7004" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-7004 mega-menu-title"><a href="https://gallerybangladesh.com/product-category/jewelry/material/">Material</a>
        <ul className="sub-menu">
          <li id="menu-item-7005" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7005 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/jewelry/material/clay/">Clay</a></li>
          <li id="menu-item-7006" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7006 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/jewelry/material/wood/">Wood</a></li>
          <li id="menu-item-7007" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7007 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/jewelry/material/stone/">Stone</a></li>
          <li id="menu-item-7008" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7008 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/jewelry/material/pearl/">Pearl</a></li>
          <li id="menu-item-7009" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7009 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/jewelry/material/silver/">Silver</a></li>
          <li id="menu-item-7010" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7010 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/jewelry/material/bronze/">Bronze</a></li>
          <li id="menu-item-7011" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7011 menu-item-mega-link "><a href="https://gallerybangladesh.com/product-category/jewelry/material/bronze/">Bronze</a></li>
        </ul>
      </li>
      </ul>
      </li>
      <li id="menu-item-7012" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-7012"><a href="https://gallerybangladesh.com/product-category/handicraft/">Handicraft</a>
      <ul className="sub-menu">
        <li id="menu-item-7013" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7013"><a href="https://gallerybangladesh.com/product-category/handicraft/pottery/">Pottery</a></li>
        <li id="menu-item-7014" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7014"><a href="https://gallerybangladesh.com/product-category/handicraft/jute/">Jute</a></li>
        <li id="menu-item-7015" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7015"><a href="https://gallerybangladesh.com/product-category/handicraft/wooden/">Wooden</a></li>
        <li id="menu-item-7016" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7016"><a href="https://gallerybangladesh.com/product-category/handicraft/embroidery/">Embroidery</a></li>
        <li id="menu-item-7017" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7017"><a href="https://gallerybangladesh.com/product-category/handicraft/paper/">Paper</a></li>
        <li id="menu-item-7018" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7018"><a href="https://gallerybangladesh.com/product-category/handicraft/metal/">Metal</a></li>
        <li id="menu-item-7019" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7019"><a href="https://gallerybangladesh.com/product-category/handicraft/woven/">Woven</a></li>
        <li id="menu-item-7020" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7020"><a href="https://gallerybangladesh.com/product-category/handicraft/bamboo/">Bamboo</a></li>
      </ul>
      </li>
      </ul>	
  </nav>
</div>
                  <div className="header-right-items header-items">
                    <a href="/login" className="et-menu-account-btn icon">
                      <span className="icon-text">Sign in</span> 
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2">
                        </path>
                        <circle cx="12" cy="7" r="4">
                        </circle>
                      </svg>
                    </a>
                    <a data-target="open-cart" href="https://gallerybangladesh.com/cart/" title="Cart" className="quick_cart icon">
                      <span className="text">Cart</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>					<span className="item-counter minicart-counter">13</span>
                    </a>
                    <a href="https://gallerybangladesh.com/wishlist-2/" className="quick_wishlist icon">
                      <span className="text">Wishlist</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>			<span className="item-counter et-wishlist-counter"></span>
                    </a>
                    <a href="#" className="quick_search icon popup-1 search-header_icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>	</a>
                  </div>
              </div>
      </div>
      
      <div className="header-mobile logo-center">
        <div className="header-contents container">
          
      <div className="hamburger-menu">
        <button className="menu-toggle mobile-toggle" data-target="mobile-menu"><span className="bars"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></span> <span className="name">Menu</span></button>
      </div>


        <div className="logo-holder">
          <a href="https://gallerybangladesh.com/" rel="home" className="logolink ">
              <img src="https://gallerybangladesh.com/wp-content/uploads/2021/04/cropped-New-1.png" className="logoimg bg--light" alt="Gallery Bangladesh"/>
              <img src="https://gallerybangladesh.com/wp-content/uploads/2020/12/galley-BangladeshFF_logo.png" className="logoimg bg--dark" alt="Gallery Bangladesh"/>
          </a>
        </div>
              
              <div className="mobile-header-icons">
              <a data-target="open-cart" href="https://gallerybangladesh.com/cart/" title="Cart" className="quick_cart icon">
              <span className="text">Cart</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>					<span className="item-counter minicart-counter">13</span>
            </a>
              <a href="https://gallerybangladesh.com/wishlist-2/" className="quick_wishlist icon">
          <span className="text">Wishlist</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>			<span className="item-counter et-wishlist-counter"></span>
        </a>
            <a href="https://gallerybangladesh.com/my-account/" className="et-menu-account-btn icon"><span className="icon-text">Sign in</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></a>
            </div>		
          </div>
        </div>
    </header>
		<div className="header-spacer"></div>	
	</div>
</div>		


 {/* <!-- header end -->

 <!-- banner start --> */}
 {/* <section className="banner-section">
 	
 </section> */}
   </div>
  );
};

export default NavbarMenu;
