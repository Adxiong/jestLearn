/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-05-25 16:45:25
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-25 16:46:57
 */
const delayPromise = (callback) => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        const res = callback && callback()
        resolve(res)
      }, (1000));
    } catch (e) {
      reject(e)
    }
  })
}

module.exports = delayPromise