require('esbuild').build({
    entryPoints: ['src/background.js'],
    outdir: 'static',
    bundle: true,
    watch: true,
  }).then(result => {
    console.log('watching...')
    console.log(result)
  })