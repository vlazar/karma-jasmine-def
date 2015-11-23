initJasmineDef.$inject = ['config.files']
function initJasmineDef (configFiles) {
  prepend(configFiles, 'lade')
  prepend(configFiles, 'jasmine-def')
}

function prepend (files, npmModule) {
  files.unshift({ pattern: require.resolve(npmModule), included: true, served: true, watched: false })
}

module.exports = {
  'framework:jasmine-def': ['factory', initJasmineDef]
}
