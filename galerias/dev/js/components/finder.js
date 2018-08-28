export const HandlerFinder = (function(){
    
    //CAMBIA EL ICNO DE BUSQUEDA POR X SI LA CAJA DE BUSQUEDA CONTIENE TEXTO
    let evtChangeSearchBarIcon = function(){        
        let textBar = document.getElementById("top-search-text");       
        textBar.addEventListener("keyup", function(event){            
            if(textBar.value.length != 0)
            {   //ELIMINA CLASES PARA OCULTAR BARRA Y AGREGA LAS DE VISUALIZACION
                document.getElementById("top-search-bar-icon").classList.remove("fa-search");
                document.getElementById("top-search-bar-icon").classList.add("fa-times");                
            }
            else
            {
                document.getElementById("top-search-bar-icon").classList.add("fa-search");
                document.getElementById("top-search-bar-icon").classList.remove("fa-times");                
            }
        }, false);
    }
/*
    //MUESTRA LA CAJA DE BUSQUEDA
    let evtOpenSearchBar = function(){
        let searchButon = document.getElementById("btn-search");
        searchButon.addEventListener("click", function(){
            if(document.getElementById("top-search-bar").classList.contains("hidden-top-search-bar") )
            {   //ELIMINA CLASES PARA OCULTAR BARRA Y AGREGA LAS DE VISUALIZACION
                document.getElementById("top-search-bar").classList.remove("hidden-top-search-bar");                
                document.getElementById("top-search-bar").classList.add("show-top-search-bar");
            }
        }, false);
    }*/

    let evtFinder = function(){
        evtChangeSearchBarIcon();
        //evtOpenSearchBar();
    }

    return{
        evtFinder: evtFinder
    };
})();
