export const HandlerFinder = (function(){   
    

    //CAMBIA EL ICONO DE BUSQUEDA POR X SI LA CAJA DE BUSQUEDA CONTIENE TEXTO
    let evtChangeSearchBarIcon = function(){        
        let textBar = document.getElementById("top-search-text");       
        textBar.addEventListener("keyup", function(event){            
            if(textBar.value.length != 0)
            {   //CAMBIA TEXTO DE MATERIAL ICON
                document.getElementById("top-search-bar-icon").innerText="close";                
            }
            else
            {
                document.getElementById("top-search-bar-icon").innerText="search";               
            }
        }, false);
    }

    //MUESTRA LA CAJA DE BUSQUEDA
    let evtOpenSearchBar = function(){
        let searchButon = document.getElementById("btn-search");
        searchButon.addEventListener("click", function(){
            let searchBar = document.getElementById("top-search-bar");            
            if(searchBar.classList.contains("hidden-top-search-bar") )
            {   //ELIMINA CLASES PARA OCULTAR BARRA Y AGREGA LAS DE VISUALIZACION
                searchBar.classList.remove("hidden-top-search-bar");                
                searchBar.classList.add("show-top-search-bar");
                searchButon.classList.remove("searchIcon");
                searchButon.classList.add("searchIcon-pressed");
                searchBarAnimation();                
            }
        }, false);
    }

    //OCULTA LA CAJA DE BUSQUEDA
    let evtCloseSearchBar = function(){
        let textBar = document.getElementById("top-search-text");
        let searchBar = document.getElementById("top-search-bar");
        let searchButon = document.getElementById("btn-search");            
        textBar.onblur = function(){
            searchBar.classList.add("hidden-top-search-bar");                
            searchBar.classList.remove("show-top-search-bar");
            searchButon.classList.add("searchIcon");
            searchButon.classList.remove("searchIcon-pressed");
            textBar.value="";
            document.getElementById("top-search-bar-icon").innerText="search";
        }
    }

 


    let evtFinder = function(){
        evtChangeSearchBarIcon();
        evtOpenSearchBar();
        evtCloseSearchBar();
    }

    return{
        evtFinder: evtFinder
    };
})();
