/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-05-25 16:47:02
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-25 16:50:54
 */
const delayPromise = require('../index')


test("delayPromise jest.fn 测试", () => {
  expect.assertions(1)
  const callback = jest.fn().mockReturnValue(1)
  return expect(delayPromise(callback)).resolves.toBe(1)
})