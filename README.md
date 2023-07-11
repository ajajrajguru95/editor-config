# Webpack and Editor Config #

Webpack is a popular module bundler for JavaScript applications. It helps manage and optimize the build process by bundling together various assets, such as JavaScript, CSS, images, and more, for deployment in a browser environment. Webpack takes a modular approach, allowing developers to organize their code into separate modules and dependencies.

EditorConfig is a file format that helps maintain consistent coding styles across different editors and IDEs. It allows developers to define and share their coding conventions and preferences for a project or a codebase. By using an EditorConfig file, developers working on the same project can have a consistent indentation, line endings, and other formatting settings, regardless of the editor or IDE they use.

### Repository info? ###

* You can clone the repo in your Wordpress theme and you are good to go. Occasionally you can also pull and reuse the same setup on mulitple projects for reusability.
* Version - **1.0**
* Starter template generated from [Create App](https://createapp.dev/)

### Requirements ###

* [Node JS](https://nodejs.org/en/download)

### How do I set it up? ###

* Once cloned this repo into your theme you can find the package.json file along with other essential setup files.
* After that run <pre>**npm install**</pre>
* The above process will install all the required packages to run the setup mentioned in the package.json file.
* Once the packages are installed you can find the scripts section in package.json file where all the necessary commands have been defined.
* **npm run build-dev** command runs the process defined for a development environment.
* **npm run build-prod** command runs the process defined for the production environment. This command will combine/minify and compress the assets, so this will be used when moving stuff on the server(Live).
* We also have a watch command to keep watching for updates/necessary changes. **npm run watch**

### Editor Config setup ###

* To have a common code config we are using [editor config setup](https://editorconfig.org/)
* This file helps with maintaining a common config across different IDEs(editors).
* Whichever editor you use please install the editor config package/plugin and you are good to go.
* [Sublime](https://github.com/sindresorhus/editorconfig-sublime#readme)
* [VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

### I found some issues ###

* If you find any issues are something is not working as intended please let the developer know.
* Feedback is also appreciated.
* If someone wants to collaborate and improve the setup they are happily welcome.
