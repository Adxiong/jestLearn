/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-05-25 21:51:58
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-25 21:59:53
 */
jest.mock("../getData.js")
const getData = require("../getData")
const generateData = require("../index")
getData.mockReturnValue(11)

test('generate data 测试', () => {
  expect(generateData()).toEqual({
    name: "adxiong",
    data: 11
  })
})