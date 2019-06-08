# @chatie/semver

[![NPM Version](https://badge.fury.io/js/%40chatie%2Fsemver.svg)](https://www.npmjs.com/package/@chatie/semver)
[![npm (tag)](https://img.shields.io/npm/v/%40chatie/semver/next.svg)](https://www.npmjs.com/package/@chatie/semver?activeTab=versions)
[![Build Status](https://travis-ci.com/Chatie/semver.svg?branch=master)](https://travis-ci.com/Chatie/semver)

![Linux Kernel Numbering](chatie.github.io/semver/images/kernel-version-networknuts.png)
> Source: [How do Linux Versions Work?](https://networknuts.wordpress.com/2013/11/21/linux-kernel-numbering/)

The Enhanced Semantic Versioner for NPM

## USAGE

This module is a wrapper of the NPM module [semver](https://www.npmjs.com/package/semver), it provide following additional features:

1. Two CLI utils that will identify whether this VERSION is for production(stable) or development(unstable):
    1. `semver-is-prod`
    1. `semver-id-dev`
1. Added two methods to `SemVer` class:
    1. `isProd(version: string): boolean`
    1. `isDev(version: string): boolean`
1. TypeScript support. It contains the typing definations already

Learn more about the original `semver` from its GitHub homepage: [semver](https://github.com/npm/node-semver)

## BACKGROUND

Copy from **Linux Kernel Version Numbering** - <http://www.linfo.org/kernel_version_numbering.html>:

> The second number denotes the major revision of the kernel version. It was formerly the case that even numbers indicated a stable release, that is, one that was deemed fit for production use (i.e., use in a non-experimental environment), such as 1.2, 2.4 or 2.6. Likewise, odd numbers, such as 1.1 or 2.5, have historically represented development releases. They were for testing new features and device drivers until they became sufficiently stable to be included in a stable release. However, this has changed starting with the Linux 2.6.x series, and new feature development now takes place in the same revision number.

Following the Semantic Versioning 2.0 <http://semver.org/>, and we will be able to use the MINOR version to indicated the release is STABLE or NOT.

Numbering rule:

1. even numbers, such as 0.8, 0.12 indicated a stable release, which is fit for production use.
1. odd numbers, such as 0.11 or 0.13, represented as development releases.

See also: <https://github.com/Chatie/wechaty/issues/905>

## CHANGELOG

### v0.3 (master)


### v0.2 June 09, 2019

1. Beta Release

### v0.0.1 June 08, 2019

1. Wrap `semver`
1. add new methods: `isProd` & `isDev`
1. add new binary: `semver-is-prod` & `semver-is-dev`

## AUTHOR

[Huan LI (李卓桓)](http://linkedin.com/in/zixia) zixia@zixia.net

[![Profile of Huan LI (李卓桓) on StackOverflow](https://stackexchange.com/users/flair/265499.png)](https://stackexchange.com/users/265499)

## COPYRIGHT & LICENSE

- Code & Docs © 2019 - now Huan LI zixia@zixia.net
- Code released under the Apache-2.0 License
- Docs released under Creative Commons
