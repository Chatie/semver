#!/usr/bin/env node

import { SemVer } from '../src/'

// console.log(process.argv)

// https://nodejs.org/docs/latest/api/process.html#process_process_argv
if (process.argv.length !== 3) {
  console.info('Usage: semver-is-prod VERSION')
  process.exit(1)
}

const version = process.argv[2]

const semver = new SemVer(version)

if (semver.isProd) {
  console.info(`${version} is production release`)
  process.exit(0)
} else {
  console.info(`${version} is development release`)
  process.exit(1)
}
