import { isUser, setToken } from "../../src/utils/isUser"

describe('토큰 검사', () => {
  test('단일 토큰 검사가 정상적이여야 합니다.', () => {
    setToken('token1')
    const result = isUser('token1')
    expect(result).toBe(true)
  })
  test('여러 토큰 검사가 정상적이여야 합니다.', () => {
    setToken('token1,token2,token3')
    const result = isUser('token1')
    expect(result).toBe(true)
  })
})