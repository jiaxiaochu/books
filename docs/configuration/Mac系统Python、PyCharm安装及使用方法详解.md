---
title: Mac系统Python、PyCharm安装及使用方法详解
date: 2019-11-20 13:39:13
tags: [环境配置,Pycharm,Python解释器]
categories: 『环境配置』- 工欲善其事，必先利其器
toc: true
---

## 一、下载安装Python3解释器

> 使用Python3

- Python之父Guido van Rossum在邮件列表上宣布 Python 2.7将于2020年1月1日终止支持。用户如果想要在这个日期之后继续得到与Python 2.7有关的支持，则需要付费给商业供应商。

![img](../assets/data/Mac系统Python、PyCharm安装及使用方法详解/image-20191120150636393.png)
<!-- more -->
```
**Guido van Rossum 表示：**
Let's not play games with semantics.**The way I see the situation for 2.7 is that EOL is January 1st, 2020, and there will be no updates, not even source-only security patches, after that date.（Python 2.7提供的支持截止到2020年1月1日，并且在那之后将不会有更新，甚至没有源代码安全补丁。）**Support (from the core devs, the PSF, and python.org) stops completely on that date. If you want support for 2.7 beyond that day you will have to pay a commercial vendor. Of course it's open source so people are also welcome to fork it. But the core devs have toiled long enough, and the 2020 EOL date (an extension from the originally annouced 2015 EOL!) was announced with sufficient lead time and fanfare that I don't feel bad about stopping to support it at all.
```

**1.mac环境安装Python3解释器**

- 1.有linux系统命令基础的伙伴可以按照我下方教程步骤安装
- 2.无linux系统命令基础的伙伴请参考  **百度经验：如何在Mac上安装Python3**
  - 百度经验连接：**<https://jingyan.baidu.com/article/4d58d54156e5069dd4e9c09b.html>**

```
1、查看 mac 自带系统版本
#查看系统自带的python
open /System/Library/Frameworks/Python.framework/Versions
#系统当前的python版本。
python -V

2、开始安装(这里我们使用神器homebrew)
#安装前先搜索一下是否已经存在python3的包：
brew search python3
#已经存在，我们可以直接安装了：
brew install python3
#出现如下报错
 Error: An unexpected error occurred during the `brew link` step
The formula built, but is not symlinked into /usr/local
Permission denied @ dir_s_mkdir - /usr/local/Frameworks
Error: Permission denied @ dir_s_mkdir - /usr/local/Frameworks
#手动创建一个这个目录
sudo mkdir /usr/local/Frameworks
#再来解决权限问题：
sudo chown $(whoami):admin /usr/local/Frameworks
#手动执行一下安装时未完成的创建连接：
brew link python3
#当前系统下的python3的信息：
brew info python3

#系统当前的python版本。
python -V
```

![image-20191120114502890](../assets/data/Mac系统Python、PyCharm安装及使用方法详解/image-20191120114502890.png)

**2.修改mac当前系统的默认版本为Python3.*版本**

```
#查找python3安装路径
brew info python3
#修改 Mac 系统配置文件
vi ~/.bash_profile
#添加配置信息 
# Setting PATH for Python 3.7   # Python3的环境变量
# The original version is saved in .bash_profile.pysave
PATH="/Library/Frameworks/Python.framework/Versions/3.7/bin:${PATH}"
export PATH
#编译系统配置文件
source ~/.bash_profile
#系统当前的python版本。
python -V
```

- 下面是我的`.bash_profile`配置文件(避免有的伙伴看不懂，加了中文注释哦！)
  - 虚拟环境、数据库的配置可以不用配置（不写上即可，没有安装写上会出错）

```
# Setting PATH for Python 3.7   # Python3的环境变量
# The original version is saved in .bash_profile.pysave
PATH="/Library/Frameworks/Python.framework/Versions/3.7/bin:${PATH}"
export PATH

# ———————————下面的虚拟环境、数据库的配置可以不用配置（不写上即可，没有安装写上会出错）—————————————————
# Setting virtualenv PATH for Python 3.7		# 虚拟环境的配置
export WORKON_HOME='~/workspace'
export VIRTUALENVWRAPPER_SCRIPT=/Library/Frameworks/Python.framework/Versions/3.7/bin/virtualenvwrapper.sh
export VIRTUALENVWRAPPER_PYTHON=/Library/Frameworks/Python.framework/Versions/3.7/bin/python3
export VIRTUALENVWRAPPER_VIRTUALENV=/Library/Frameworks/Python.framework/Versions/3.7/bin/virtualenv
export VIRTUALENVWRAPPER_VIRTUALENV_ARGS='--no-site-packages'
source /Library/Frameworks/Python.framework/Versions/3.7/bin/virtualenvwrapper.sh

# setting MySQL PATH		# MySQL数据库的环境变量配置
PATH=/usr/local/mysql/bin:$PATH
export PATH
```



## 二、下载安装Pycharm社区版

PyCharm官网点击【DOWNLOAD NOW】后，有看到分专业版（Professional）和社区版（Community），社区版是免费的，一般使用社区版的就可以了。

1. 前往下载地址：<https://www.jetbrains.com/pycharm/>

2. 可以直接在首页中下载社区版

![image-20191120115915844](../assets/data/Mac系统Python、PyCharm安装及使用方法详解/image-20191120115915844.png)

![image-20191120120155478](../assets/data/Mac系统Python、PyCharm安装及使用方法详解/image-20191120120155478.png)

3. 下载完成之后，双击打开，拖动到 mac 的应用列表中，**和安装mac版其它软件是一样的操作**。
   若要使用专业付费版(土豪请随意)，请自行网上搜索。

**下载完成后，安装过程和安装QQ等软件的过程是一样的，不要告诉我你不会，艹要是那样的话请出去补补课**

------

## 三、mac上Pycharm使用教程

#### Pycharm整体结构

- 工具栏中可以对IDE做一些设置
- 项目文件区主要是自己工程下的一些文件，还有Python依赖库
- 运行调试区可以用来运行、调试Python代码
- 代码区为自己编写代码的窗口
- 控制台主要用于显示一些打印信息，还有调试信息

![image-20191120120859668](../assets/data/Mac系统Python、PyCharm安装及使用方法详解/image-20191120120859668.png)

#### 创建项目

1. 打开PyCharm，第一个按钮就是创建一个新的项目，第二个是选择打开已有的项目

![image-20191120121013103](../assets/data/Mac系统Python、PyCharm安装及使用方法详解/image-20191120121013103.png)

2. 接着选择创建一个Python项目，右边第一栏location是选择项目的存放地址，第二栏INterpreter是选择解释器，可以看到这里有两个Python版本，一个Python 2.7，一个是3.6，这取决你自己电脑里安装了几个Python

这里选择我们安装的Python3

- 下图是解释如何参看我们安装的Python3路径

![image-20191120114502890](../assets/data/Mac系统Python、PyCharm安装及使用方法详解/image-20191120114502890.png)

![image-20191120121045185](../assets/data/Mac系统Python、PyCharm安装及使用方法详解/image-20191120121045185.png)

3. 项目创建成功后，还只是一个空的项目，需要向里面添加Python文件

![image-20191120121406687](../assets/data/Mac系统Python、PyCharm安装及使用方法详解/image-20191120121406687.png)

4. 创建文件名，点击OK

![image-20191120121430116](../assets/data/Mac系统Python、PyCharm安装及使用方法详解/image-20191120121430116.png)

5. 然后就可以在创建好的Python文件里，编写自己的代码了

![image-20191120121451814](../assets/data/Mac系统Python、PyCharm安装及使用方法详解/image-20191120121451814.png)

### 修改/调整python解释器

有时候拿到一个Python项目，可能不是自己想要的解释器版本，可以选择调整解释器版本

- 对整个项目调整其解释器

![image-20191120121532582](../assets/data/Mac系统Python、PyCharm安装及使用方法详解/image-20191120121532582.png)

![image-20191120121543941](../assets/data/Mac系统Python、PyCharm安装及使用方法详解/image-20191120121543941.png)

也可以对单独一个文件设置其解释器

![image-20191120121605334](../assets/data/Mac系统Python、PyCharm安装及使用方法详解/image-20191120121605334.png)

![image-20191120121617263](../assets/data/Mac系统Python、PyCharm安装及使用方法详解/image-20191120121617263.png)

#### 执行Python文件

- 工具栏里选择执行run

![image-20191120121637707](../assets/data/Mac系统Python、PyCharm安装及使用方法详解/image-20191120121637707.png)

- 右上角执行run

![image-20191120121702909](../assets/data/Mac系统Python、PyCharm安装及使用方法详解/image-20191120121702909.png)

- 在代码区域右键选择run

![image-20191120121722064](../assets/data/Mac系统Python、PyCharm安装及使用方法详解/image-20191120121722064.png)

- 在左边文件区域，选择要执行的文件，右键run

![image-20191120121924146](../assets/data/Mac系统Python、PyCharm安装及使用方法详解/image-20191120121924146.png)

- 执行run之后，还可以在控制台重复执行run

![image-20191120122020326](../assets/data/Mac系统Python、PyCharm安装及使用方法详解/image-20191120122020326.png)


- 如此，所示即表示安装完成


由于篇幅短小和时间仓促,若你发现了错误请告知我。
希望我没有误导你，而是带你看了小小的新世界。

> 更多资料欢迎访问我的博客：http://www.jiazhixiang.xyz
