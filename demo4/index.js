
/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-05-25 21:49:50
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-25 22:00:27
 */

const getData = require("./getData")

const generateData = () => {
  return {
    name: "adxiong",
    data: getData()
  }
}

module.exports = generateData