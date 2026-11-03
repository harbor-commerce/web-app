import test from 'node:test'
import assert from 'node:assert/strict'
import * as pages from '../src/pages/index.js'

test('every page has a title', () => {
  for (const p of Object.values(pages)) assert.ok(p.title)
})
