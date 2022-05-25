/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-05-25 00:36:14
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-25 00:41:44
 */
const add = require('./index')


describe('add 函数的单元测试', () => {
  test('1+1应该等于2', () => {
    const res = add(1, 1)
    expect(res).toBe(2)
  })
});
