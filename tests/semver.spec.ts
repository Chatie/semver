#!/usr/bin/env ts-node

import test from 'blue-tape'

import { SemVer } from '../src/'

test('prod indentification in integration testing', async t => {
  const VERSION_PROD_LIST: Array<[string, boolean]> = [
    ['0.0.0', true],
    ['0.0.1', true],
    ['0.1.0', false],
    ['0.1.1', false],
    ['0.2.0', true],
    ['0.2.1', true],
  ]

  for (const [version, prod] of VERSION_PROD_LIST) {
    const semVer = new SemVer(version)

    t.equal(semVer.isProd, prod, `version/prod should match: ${version} -> ${prod}`)
  }
})

