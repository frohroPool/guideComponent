# Multisitios
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