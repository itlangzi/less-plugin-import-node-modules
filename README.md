# less-plugin-import-node-modules
Use '~' to quickly import css/less files under node_modules
## Basic usage
Install with `npm` or `yarn`  
```
npm install --save-dev less-plugin-import-node-modules
```
```
yarn add --dev less-plugin-import-node-modules
```

In less file:
```
@import "~/example/style.less";
```

or if importing a css file an [import option](http://lesscss.org/features/#import-options) is required:
```
@import (less) "~/example/style.less";
```

Add plugin at [`Less Options`](http://lesscss.org/features/#plugin-atrules-feature):
```js
const LessPluginImportNodeModules = require('less-plugin-import-node-modules')
{
    //...
    plugins:[new LessPluginImportNodeModules()]
    //...
}
```

**Options**  
`prefix: "~"`  
Example specify another prefix :   
```js
new LessPluginImportNodeModules({prefix:'node_modules'})
```

## Browser usage
Not supported.