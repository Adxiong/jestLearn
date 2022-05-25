/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-05-25 16:52:54
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-25 17:05:25
 */
const getRandom = require("../getRandom")


let mockRandom
beforeEach(() => {
  mockRandom = jest.spyOn(Math, "random")
})

afterEach(() => {
  mockRandom.mockRestore()
})


test("getRandom function result less then 10", () => {
  const res = getRandom()
  expect(res).toBeLessThan(10)
})

test("getRandom function result equal 1", () => {
  mockRandom.mockReturnValue(0.11)
  const res = getRandom()
  expect(res).toBe(1)
})


test("getRandom function result equal 10", () => {
  mockRandom.mockReturnValue(1)
  const res = getRandom()
  expect(res).toBe(10)
})

test("getRandom function result greater  than 0 or equal ", () => {
  const res = getRandom()
  expect(res).toBeGreaterThanOrEqual(0)
})

