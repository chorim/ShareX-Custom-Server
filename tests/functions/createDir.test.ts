import "../../src/extensions"
import fs from 'fs'
import path from 'path'
import createDirectory from "../../src/utils/createDirectory"
import { promisify } from 'util'
const stat = promisify(fs.stat)

describe('디렉토리 생성 테스트', () => {

  test('단일 디렉토리 생성 테스트', async () => {
    const dir = "/hello"
    const dirPath = path.join(__dirname, `.${dir}`)
    await createDirectory("./tests/functions" + dir)
    await new Promise((r) => setTimeout(r, 100))
    const result = await stat(dirPath)
    expect(result.isDirectory()).toBe(true)
  })

  test('멀티 디렉토리 생성 테스트', async () => {
    const dir = "/hello/world"
    const dirPath = path.join(__dirname, `.${dir}`)
    await createDirectory("./tests/functions" + dir)
    await new Promise((r) => setTimeout(r, 100))
    const result = await stat(dirPath)
    expect(result.isDirectory()).toBe(true)
  })

})