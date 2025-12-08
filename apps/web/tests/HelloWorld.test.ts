import { describe, expect, it } from 'vitest'

describe('hello World Test', () => {
  it('should pass a basic test', () => {
    expect(true).toBe(true)
  })

  it('should test basic math', () => {
    expect(2 + 2).toBe(4)
  })

  it('should test string manipulation', () => {
    const message = 'Hello'
    expect(message.toUpperCase()).toBe('HELLO')
  })
})
