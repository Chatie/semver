#!/usr/bin/env ts-node

import test from 'tstest'

import { SemVer } from './semver'

test('prod indentification', async t => {
  const VERSION_PROD_LIST: Array<[string, boolean]> = [
    ['0.0.0', true],
    ['0.0.1', true],
    ['0.1.0', false],
    ['0.1.1', false],
    ['0.2.0', true],
    ['0.2.1', true],

    /**
     * Pre-release versions
     */
    ['2.0.0-alpha.1', false],
    ['2.0.0-alpha', false],
    ['2.0.0-beta.1', false],
    ['2.0.0-beta', false],
    ['2.0.0-rc.1', false],
    ['2.0.0-rc', false],

    ['2.0.0', true],
    ['2.0.1', true],
    ['2.1.0', false],
    ['2.1.1', false],
    ['2.2.0', true],
    ['2.2.1', true],
    ['2.3.0', false],
    ['2.3.1', false],

  ]

  for (const [version, prod] of VERSION_PROD_LIST) {
    const semVer = new SemVer(version)

    t.equal(semVer.isProd, prod, `version/prod should match: ${version} -> ${prod}`)
    t.equal(semVer.isDev, !prod, `version/dev should match: ${version} -> ${prod}`)
  }
})
