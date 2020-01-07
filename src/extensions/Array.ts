interface Array<T> {
  asyncFilter(
    callback: (element: T, index?: number, array?: T[]) => Promise<boolean>,
  ): Promise<T[]>

  asyncForEach(
    callback: (element: T, index?: number, array?: T[]) => Promise<void>,
  ): Promise<void>
}

Array.prototype.asyncFilter = async function(callback) {
  const fail = Symbol()
  return (await Promise.all(
    this.map(async (item) => ((await callback(item)) ? item : fail)),
  )).filter((i) => i !== fail)
}

Array.prototype.asyncForEach = async function(callback) {
  for (let index = 0; index < this.length; index++) {
    await callback(this[index], index, this)
  }
}