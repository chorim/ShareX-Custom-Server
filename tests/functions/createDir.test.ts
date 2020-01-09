import "../../src/extensions"
import fs from 'fs'
import path from 'path'
import createDirectory from "../../src/utils/createDirectory"
import { promisify } from 'util'
const stat = promisify(fs.stat)
const rmdir = promisify(fs.rmdir)

describe('디렉토리 생성 테스트', () => {

  test('단일 디렉토리 생성 테스트', async () => {
    const dir = "/hello"
    const dirPath = path.join(__dirname, `.${dir}`)
    await createDirectory("./tests/functions" + dir)
    const result = await stat(dirPath)
    await rmdir(dirPath)
    expect(result.isDirectory()).toBe(true)
  })

  test('멀티 디렉토리 생성 테스트', async () => {
    const dir = "/hello/world"
    const dirPath = path.join(__dirname, `.${dir}`)
    await createDirectory("./tests/functions" + dir)
    const result = await stat(dirPath)
    await rmdir(dirPath)
    await rmdir(path.join(__dirname, "./hello"))
    expect(result.isDirectory()).toBe(true)
  })

})