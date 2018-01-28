Package.describe({
  name: 'akryum:vue-component-dev-client',
  version: '0.4.0',
  summary: 'Hot-reloading client for vue components',
  git: 'https://github.com/Akryum/meteor-vue-component',
  documentation: 'README.md',
  debugOnly: true,
})

Package.onUse(function (api) {
  api.use('ecmascript')
  api.use('reload')
  api.use('autoupdate')
  api.use('reactive-var')
  api.mainModule('client/dev-client.js', 'client')
})

Npm.depends({
  'socket.io-client': '2.0.4',
})
