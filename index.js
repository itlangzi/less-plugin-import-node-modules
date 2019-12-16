const path = require('path')
const resolvePlugin = function (less) {
    class LessImportNodeModules extends less.FileManager {
        constructor(options = {}) {
            super(options)
            this.prefix = options.prefix || "~"
        }
        supports(filename, currentDirectory, options, environment) {
            return this.prefix && filename.charAt(0) === this.prefix
        }
        supportsSync(filename, currentDirectory, options, environment) {
            return this.supports(filename, currentDirectory, options, environment);
        }
        resolve(filename) {
            filename = filename.replace(this.prefix, '')
            return path.join(process.cwd(), 'node_modules', filename)
        }
        loadFile(filename, currentDirectory, options, environment) {
            filename = this.resolve(filename)
            return super.loadFile(filename, '', options, environment)
        }
        loadFileSync(filename, currentDirectory, options, environment) {
            filename = this.resolve(filename)
            return this.loadFileSync(filename, '', options, environment)
        }
    }
    return LessImportNodeModules
}
class LessPluginImportNodeModules {
    constructor(options = {}) {
        this.options = options
        this.minVersion = [2, 6, 0]
    }
    install(less, pluginManager, functions) {
        const LessImportNodeModules = resolvePlugin(less)
        pluginManager.addFileManager(new LessImportNodeModules(this.options));
    }
}
module.exports = LessPluginImportNodeModules