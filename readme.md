# ComponentGuide
<h2>!Configuración del proyecto¡</h2>
<ul>
	<li>
		<h3>Instalación de Node Version Manager</h3>
		<label><a href="http://www.nodenica.com/como-instalar-nvm/">Documentación</a></label>
		<p>
			curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
		</p>
	</li>
	<li>
		<h3>Instalación de Node con NVM</h3>
		<p>nvm install [versión] <a href="https://nodejs.org/en/download/current/">Ver la última versión de Node</a></p>
		<label>Nota: Para este proyecto usamos la versión v8.7.0 de Node</label>
	</li>
	<li>
		<h3>Creación del package.json</h3>
		<p>npm init -y</p>
	</li>
	<li>
		<h3>Instalación de dependencias</h3>
		<p>npm i -g gulp</p>
		<p>npm i -save gulp</p>
		<p>npm i -save gulp-pug</p>
		<p>npm i -save gulp-stylus</p>
		<p>npm i babel-core</p>
		<p>npm i -save babel-preset-env</p>
		<p>npm i -save babelify</p>
		<p>npm i -save browserify</p>
		<p>npm i -save vinyl-source-stream</p>
		<p>npm i -save vinyl-buffer</p>
		<p>npm i -save glob</p>
		<p>npm i -save gulp-notify</p>
	</li>
</ul>
<h2>Nombre de los sitios dentro del poryecto [site-name]</h2>
<ul>
	<li>galerias</li>
</ul>
<h2>Descripción de las tareas a ejecutar para poder compilar los archivos [task]</h2>
<ul>
	<li>
		<p>
			<h3>html</h3>
			<label>Compila todos los archivos con exensión [pug]</label>
		</p>
	</li>
	<li>
		<p>
			<h3>css</h3>
			<label>Compila todos los archivos con exensión [styl]</label>
		</p>
	</li>
	<li>
		<p>
			<h3>js</h3>
			<label>Transpila los archivos escritos con ES6 a ES5, (Son archivos js)</label>
		</p>
	</li>
</ul>
<h3>SITE_NAME=[site-name] gulp [task]</h3>
<h3>Convenciones para el desarrollo</h3>
<h4>A-BEM</h4>
<pre>
	============================= B E M =============================
	=================================================================

	eg. 1 --------
	nameBlock
		nameBlock__nameElement
		nameBlock__nameElement
			nameBlock__nameElement nameBlock__nameElement--nameModifier
		nameBlock__nameElement nameBlock__nameElement--nameModifier

	eg. 2 --------
	nameBlock nameBlock--nameModifier
		nameBlock__nameElement
		nameBlock__nameElement
			nameBlock__nameElement
		nameBlock__nameElement nameBlock__nameElement--nameModifier


	=========================== A-B E M =============================
	=================================================================

	eg. 1 --------
	m-nameBlock
		m-nameBlock__nameElement
		m-nameBlock__nameElement
			m-nameBlock__nameElement m-nameBlock__nameElement--nameModifier
		m-nameBlock__nameElement m-nameBlock__nameElement--nameModifier

	eg. 2 --------
	o-nameBlock o-nameBlock--nameModifier
		o-nameBlock__nameElement
		o-nameBlock__nameElement
			o-nameBlock__nameElement
		o-nameBlock__nameElement o-nameBlock__nameElement--nameModifier
	
	============================ CONVENTION =========================
	=================================================================

	.- Names for blocks, elements, and modifiers should be in camelCase
	.- Before the block name should have an identifier, eg. (a-,m-,o-,t-)
	.- Blocks and Elements should be descriptive
</pre>
<pre>
	==========================   EG   ===============================
	=================================================================

	<div class="m-cardMall">
	  <figure class="m-cardMall__media"><img src="#"></figure>
	  <div class="m-cardMall__brief">
	    <div class="m-cardMall__titleContainer">
	      <h3 class="m-cardMall__title">Perisur</h3>
	    </div>
	    <div class="m-cardMall__reveal">
	    	<span class="material-icons m-cardMall__switchReveal">more_vert</span>
	    </div>
	    <div class="m-cardMall__anchorContainer">
	    	<a class="m-cardMall__anchor" href="#">Ir a este centro comercial</a>
	    </div>
	  </div>
	  <div class="m-cardMall__modal m-cardMall__modal--hidden">
	    <div class="m-cardMall__close">
	    	<span class="material-icons m-cardMall__switchClose">close</span>
	    </div>
	    <div class="m-cardMall__logoContainer">
	      <figure class="m-cardMall__logo"><img src="#"></figure>
	      <p class="m-cardMall__paragraph">Anillo Periferico sur No. 4690 Col. Ampliacion del Pedregal, San Angel Mexico, D.F.</p>
	    </div>
	    <div class="m-cardMall__thelepone">
	      <p class="m-cardMall__paragraph">Tel. 01 55 56 06 8389</p>
	    </div>
	    <div class="m-cardMall__email">
	      <p class="m-cardMall__paragraph">perisur@galerias.com</p>
	    </div>
	    <div class="m-cardMall__descriptionContainer">
	      <h4 class="m-cardMall__description">Detalles del Centro comercial</h4>
	      <ul class="m-cardMall__detail">
	        <li><p class="m-cardMall__paragraph">Una superficie rentable construida de 51,303 m2</p></li>
	        <li><p class="m-cardMall__paragraph">Locales comerciales</p></li>
	        <li><p class="m-cardMall__paragraph">6,345 lugares de estacionamiento</p></li>
	        <li><p class="m-cardMall__paragraph">Liverpool, Palacio de Hierro, Sears, Cinepolis</p></li>
	      </ul>
	    </div>
	  </div>
	</div>
</pre>