/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-05-25 22:13:19
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-25 22:38:09
 */
import React from 'react'


const BaiduLink = () => {
  const title = "百度一下,你就知道了"
  const url = 'https://www.baidu.com'
  return (
    <div>
      <a href={url}>{title}</a>
    </div>
  )
}

export default BaiduLink