/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-05-25 15:25:19
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-25 16:01:27
 */
const delay = (callback) => {
  setTimeout(() => {
    callback && callback()
  }, 1000);
}

const delayPromise = (callback) => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        const res = callback && callback()
        resolve(res)
      }, 1000);
    } catch (e) {
      reject(2)
    }
  })
}


module.exports = {
  delay, delayPromise
}