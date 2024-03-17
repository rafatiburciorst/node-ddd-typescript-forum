import { expect, it } from 'vitest'
import { Slug } from './slug'

it('should create a slug from a string', () => {
  const slug = Slug.createFromText('Example question title')
  expect(slug.value).toEqual('example-question-title')
})
