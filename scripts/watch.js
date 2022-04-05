require('esbuild').build({
    entryPoints: ['src/background.js','src/scripts/scrapper.js'],
    outdir: 'static',
    bundle: true,
    watch: true,
  }).then(result => {
    console.log('watching...')
    console.log(result)
  })