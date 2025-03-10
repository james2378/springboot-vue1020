### 介绍
java毕业设计，大学生就业需求分析系统
### 3000多套系统，需要联系
抠：3565014707 微：a13424421017

#### 软件架构
##### 整体架构模式
这是一个 高校就业管理与招聘平台，采用 前后端分离架构，包含以下模块：

管理后台（src/main/resources/admin）：基于 Vue.js + ElementUI 的 SPA 应用，供学校就业指导中心和企业 HR 使用。

用户端（src/main/resources/front）：基于 Layui + jQuery 的传统前端，面向学生和招聘企业提供职位浏览、简历投递、面试管理等功能。

后端服务（src/main/java/com）：基于 Spring Boot + MyBatis 的 Java 服务，提供 RESTful API 和核心业务逻辑。

##### 分层架构设计
后端分层：

Controller层：controller 包（如 CommonController）处理 HTTP 请求，返回 JSON 数据。

Service层：service 包（如 CommonService）实现业务逻辑（如职位匹配、简历筛选）。

DAO层：dao 包（如 CommonDao）通过 MyBatis XML 文件（CommonDao.xml）操作数据库。

实体与数据模型：

entity 包定义数据库实体（如 DictionaryModel 数据字典实体）；

vo（值对象）和 view（视图模型）用于接口数据传输和复杂查询结果封装。

前端分层：

管理后台（Vue.js）：

视图层：views/modules 定义页面（如 zhaopin 职位管理页）。

组件层：components 封装可复用组件（如 BreadCrumbs 面包屑导航）。

状态管理：通过 Vuex（store.js）管理全局状态（如用户权限、职位发布状态）。

用户端（Layui）：

传统 MVC：通过 HTML + jQuery 实现动态页面（如 jianli/add.html 简历填写页）。
##### 关键技术特性
权限控制：

后端通过 AuthorizationInterceptor 拦截器和 @APPLoginUser 注解实现接口权限校验；

前端管理后台通过路由（router-static.js）限制页面访问权限（如仅企业 HR 可发布职位）。

数据字典管理：

dictionary 系列模块维护基础数据（如行业类型 dictionaryHanye、性别 dictionarySex、职位状态 dictionaryZhaopin）。

文件与资源管理：

static/upload 存储用户上传的简历附件（如 PDF、图片）。
#### 核心功能模块解析
##### 用户与权限模块
多角色体系：

yonghu（学生用户）：填写简历、投递职位、查看面试邀请；

gongsi（企业用户）：发布职位、筛选简历、发送面试邀请；

users（管理员）：审核企业资质、管理数据字典、处理投诉。

权限分级：

学生仅可修改个人简历和投递记录；

企业 HR 可管理自有职位和面试流程；

管理员拥有全局权限（如封禁违规账户）。

##### 简历与职位管理
简历管理：

jianli（简历信息）：学生填写教育背景、实习经历、技能证书，支持附件上传（如作品集）；

简历状态管理（草稿、已提交、已隐藏）。

职位发布与匹配：

zhaopin（招聘信息）：企业发布职位（岗位职责、薪资范围、要求），支持关键字搜索和智能推荐；

职位状态管理（开放中、已关闭、已招满）。

##### 投递与面试管理
投递流程：

toudi（投递记录）：学生投递职位后生成记录，企业可查看并标记为“已读/待处理/不合适”；

投递进度跟踪（如“已投递→HR 已查看→进入面试”）。

面试管理：

yaoqing（面试邀请）：企业向学生发送面试邀约（时间、地点、联系人），学生确认或拒绝；

面试结果反馈（通过/未通过/待定）。

##### 数据统计与报表
就业数据统计：

xueshengjiuye（学生就业情况）：按学院、专业统计签约率、平均薪资，生成可视化图表（如折线图、饼图）；

企业招聘效果分析（职位浏览量、投递转化率）。

数据字典扩展：

dictionaryYuanxi（院系字典）：维护学校院系信息；

dictionaryJiuye（就业类型字典）：定义就业形式（如“全职”“实习”“自主创业”）。
##### 系统管理模块
基础配置：

config（系统参数）：设置平台规则（如简历公开范围、投诉处理时效）；

dictionaryShangxia（上下架状态）：控制职位和简历的可见性。

日志与审核：

记录用户操作日志（如企业发布职位、学生修改简历）；

管理员审核企业资质（营业执照、招聘授权书）。
