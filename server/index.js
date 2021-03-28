import express from 'express'

import Mongoose from 'mongoose'

import BodyParser from 'body-parser'

import config from '@config'

import path from 'path'

import v1Router from '@routes'

import Webpack from 'webpack'

import webpackConfig from '../webpack.config'

import WebpackHotMiddleware from 'webpack-hot-middleware'

import WebpackDevMiddleware from 'webpack-dev-middleware'

Mongoose.connect(config.databaseUrl, { useNewUrlParser: true })

const app = express()

app.use(BodyParser.json())

const compiler = Webpack(webpackConfig)

app.use(WebpackDevMiddleware(compiler, {
     publicPath: webpackConfig.output.publicPath,
}))

app.use(WebpackHotMiddleware(compiler, {
    path: '/__webpack_hmr',
}))

app.use(v1Router)

app.use(express.static(path.resolve(__dirname, 'public')))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/index.html'))
})

app.listen(3000, () => {
    console.log('Server started successfully')
})
