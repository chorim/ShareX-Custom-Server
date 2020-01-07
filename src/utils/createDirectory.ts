import fs from 'fs'
import { promisify } from 'util'
const exists = promisify(fs.exists)
const mkdir = promisify(fs.mkdir)

export default async (dir: string) => {
  let path = '';
  dir
    .split('/')
    .filter((item: string) => item !== '')
    .asyncForEach(async (element: string) => {
      path += element + '/'
      const result = await exists(path)
      if (!result) await mkdir(path)
    })
}

