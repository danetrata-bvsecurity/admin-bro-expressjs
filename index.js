/**
 * @module admin-bro-expressjs
 *
 * @description
 * Plugin that allows you to add AdminBro to Express.js applications.
 *
 * ## Installation
 *
 * ``````sh
 * npm install admin-bro-expressjs
 * ```
 *
 * ## Usage
 *
 * ```
 * const AdminBroExpress = require('admin-bro-expressjs')
 * ```
 *
 * It exposes 2 methods that create an Express Router, which can be attached
 * to a given url in the API. Each method takes a preconfigured instance of {@link AdminBro}.
 *
 * - {@link module:admin-bro-expressjs.buildRouter AdminBroExpress.buildRouter(admin, [predefinedRouter])}
 * - {@link module:admin-bro-expressjs.buildAuthenticatedRouter AdminBroExpress.buildAuthenticatedRouter(admin, auth, [predefinedRouter])}
 *
 * If you want to use a router you have already created - not a problem. Just pass it
 * as a `predefinedRouter` parameter.
 *
 * You may want to use this option when you want to include
 * some custom auth middleware for you AdminBro routes.
 *
 * ## Example without an authentication
 *
 * ```
 * const AdminBro = require('admin-bro')
 * const AdminBroExpress = require('admin-bro-expressjs')
 *
 * const express = require('express')
 * const app = express()
 *
 * const adminBro = new AdminBro({
 *   databases: [],
 *   rootPath: '/admin',
 * })
 *
 * const router = AdminBroExpress.buildRouter(adminBro)
 * app.use(adminBro.options.rootPath, router)
 * app.listen(8080, () => console.log('AdminBro is under localhost:8080/admin'))
 * ```
 *
 * ## Using build in authentication
 *
 * To protect the routes with a session authentication, you can use predefined
 * {@link module:admin-bro-expressjs.buildAuthenticatedRouter} method.
 *
 * Note! To use authentication in production environment, there is a need to configure
 * express-session for production build. It can be achieved by passing options to
 * `sessionOptions` parameter. Read more on [express/session Github page](https://github.com/expressjs/session)
 *
 * ## Adding custom authentication
 *
 * You can add your custom authentication setup by firstly creating the router and then
 * passing it via the `predefinedRouter` option.
 *
 * ```
 * let router = express.Router()
 * router.use((req, res, next) => {
 *   if (req.session && req.session.admin) {
 *     req.adminUser = req.session.admin
 *     next()
 *   } else {
 *     res.redirect(adminBro.options.loginPath)
 *   }
 * })
 * router = AdminBroExpress.buildRouter(adminBro, router)
 * ```
 */

const Plugin = require('./plugin')

module.exports = Plugin
