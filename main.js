import createCore from './src/core.js'

const core = createCore()

try {
    core.start()
} catch (error) {
    console.log(error);
}