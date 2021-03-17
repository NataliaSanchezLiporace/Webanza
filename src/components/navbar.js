import React from 'react';
import CartWidget from './CartWidget.js';


export const NavBar =() =>{
	return (
		<nav class="navbar navbar-expand-lg navbar-light bg-light" >
		<a class="navbar-brand" href="#" >
			Webanza
		</a>	
		
		<div class="collapsse navbar-collapse" id="navbarNavAltMarkup" >	
		  <div class="navbar-nav" >
		    <a class="nav-item nav-link" href="#" >
		    Servicios
		    </a>

		    <a class="nav-item nav-link" href="#" >
		    Contacto
		    </a>
		  </div>
		</div>
		<CartWidget />
        <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
         >
        <span class="navbar-toggler-icon"></span>
        </button>
    </nav>
      );
		
	};
    