#!/usr/bin/env ts-node

import { exec } from 'shelljs'
import { test } from 'tstest'

import { SemVer } from '@chatie/semver'

const VERSION_PROD_LIST: Array<[string, boolean]> = [
  ['0.0.0', true],
  ['0.0.1', true],
  ['0.1.0', false],
  ['0.1.1', false],
  ['0.2.0', true],
  ['0.2.1', true],
]

test('semver class prod/dev indentification', async (t: test.Test) => {
  for (const [version, prod] of VERSION_PROD_LIST) {
    const semVer = new SemVer(version)

    t.equal(semVer.isProd, prod, `version/prod should match: ${version} -> ${prod}`)
    t.equal(semVer.isDev, !prod, `version/dev should match: ${version} -> ${!prod}`)
  }
})

test('semver-is-prod', async (t: test.Test) => {
  for (const [version, prod] of VERSION_PROD_LIST) {
    const isProd = exec(`npx semver-is-prod ${version} > /dev/null`).code === 0

    t.equal(isProd, prod, `version/prod should match: ${version} -> ${prod}`)
  }
})
