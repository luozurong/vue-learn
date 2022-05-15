//创建mock的入口文件，并配置请求的接口地址，提交方式，返回的假数据
import Mock from 'mockjs'
//导入的模拟数据
import courseData from "./course"

/**
 * Mock.mock( rurl, rtype, template )
 * rurl:请求的接口地址
 * rtype:提交方式
 * template:返回数据
 */

Mock.mock("http://www.1909A.com/coureslist", "get", courseData)