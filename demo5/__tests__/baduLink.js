/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-05-25 22:21:11
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-25 22:35:48
 */
import BaiduLink from "../BaiduLink";
import renderer from "react-test-renderer";
import React from 'react'

test("Baidulink component render content test", () => {
  const tree = renderer.create(<BaiduLink></BaiduLink>).toJSON()
  expect(tree).toMatchSnapshot()
})