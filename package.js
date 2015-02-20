Package.describe({
	name: "meteortypescript:compiler",
	summary: "TypeScript is a staticaly typed superset of JavaScript",
	git: "https://github.com/meteor-typescript/meteor-typescript-compiler.git",
	version: "2.0.0"
});

Package._transitional_registerBuildPlugin({
	name: "compileTypescript",
	use: ['meteor'],
	sources: [
		'plugin/compile-tsc.js'
	],
	npmDependencies: {
		"typescript": "1.4.1",
		"node-persist": "0.0.2",
		"temp": "0.8.1",
		"glob": "4.3.5",
		"rimraf": "2.2.8"
	}
});
