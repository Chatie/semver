#!/usr/bin/env ts-node

import { SemVer } from '@chatie/semver'

async function main () {
  const sv = new SemVer('1.0.0')
  if (!sv.isProd) {
    throw new Error('not prod?')
  }
  return 0
}

main()
  .then(process.exit)
  .catch(e => {
    console.info(e)
    process.exit(1)
  })
