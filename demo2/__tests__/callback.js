/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-05-25 15:26:19
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-25 16:03:03
 */
const { delay, delayPromise } = require('../callback')

test("delay 是否被执行", done => {
  expect.assertions(1)
  delay(() => {
    console.log("callback exec")
    expect(true).toBe(true)
    done()
  })
})


test("delayPromise 是否被执行", () => {
  expect.assertions(1)
  const callback = () => 1
  return delayPromise(callback).then(res => {
    expect(res).toBe(1)
  })
})


test("delayPromise async", async () => {
  expect.assertions(1)
  const callback = () => 1
  const res = await delayPromise(callback)
  expect(res).toBe(1)
})
