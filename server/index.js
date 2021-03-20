import express from 'express'

import Mongoose from 'mongoose'

import config from '@config'

import path from 'path'

import v1Router from '@routes'

import Webpack from 'webpack'

import webpackConfig from '../webpack.config'

import WebpackHotMiddleware from 'webpack-hot-middleware'

import WebpackDevMiddleware from 'webpack-dev-middleware'

Mongoose.connect(config.databaseUrl, { useNewUrlParser: true })

const app = express()

const compiler = Webpack(webpackConfig)

app.use(WebpackDevMiddleware(compiler, {
     publicPath: webpackConfig.output.publicPath,
}))

app.use(WebpackHotMiddleware(compiler, {
    path: '/__webpack_hmr',
}))

app.use(v1Router)

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/index.html'))
})

app.listen(3000, () => {
    console.log('Server started successfully')
})
