---
title: Ubuntu系统搭建配置Python虚拟开发环境
date: 2019-07-22 22:57:27
tags:  [环境配置,虚拟环境]
categories: 『环境配置』- 工欲善其事，必先利其器
toc: true
<!-- thumbnail: https://ws1.sinaimg.cn/large/0065l1jqly1g590mpqs2ej30gg08c3ym.jpg -->
---
### 为什么使用 Virtualenv ？

**我们知道使用Python的过程中会安装各种库、包，甚至有时候还需要Python2和Python3两种环境混合使用，慢慢的你的Python运行环境会越来越臃肿，这倒还是其次，最可怕的是，有些应用会使用到某个Python包的特定版本，我们知道同一个Python运行环境里面是不能存在同一个包的不同版本的。所有这些都是你为什么要使用
Virtualenv的理由。**

Virtualenv给你一个**干净的Python运行环境**，并能让你不同的应用,使用不同版本的包文件提供了可能，甚至使 用
它可以让Python2和Python3和谐地共存。对于我们来说，我们用它的原因主要有以下几点：

```
1.我们需要一个干净的Python环境，这个环境只针对我目前开发的应用；
2.我们不希望多安装一个和项目无关的包，也不希望出现和其它应用有包版本冲突的问题；
3.我们还需要生成一个requirements.txt用来告诉其他人我项目的依赖；
4.我们不希望使用pyinstaller打包发布的过程中，给我加进来一堆没有用处的文件。
```

```
1.搭建虚拟环境主要是为了保证环境得统一性，对于不同得应用建立专属得python环境，比如针对后台开发
得django可以建立一个虚拟环境，针对爬虫开发得应用可以在建立一个虚拟环境，避免环境之间产生冲突。
2.可以避免一个环境造成得安装包过的多，导致环境加载缓慢.
```
<!-- more -->
## 搭建寻开发环境详细步骤

1. 首先检查系统是否有安装pip

```
在终端输入如下命令：
pip # 查看是否安装有pip
pip --version# 查看安装的pip版本
___________________________________
pip3 # 查看是否安装有pip
pip3 --version # 查看安装的pip3版本
```

![1557328279385](../assets/data/Ubuntu系统搭建配置Python虚拟开发环境/1557328279385.png)

- 安装pip
  - `sudo apt install python-pip`

![1557330160105](../assets/data/Ubuntu系统搭建配置Python虚拟开发环境/1557330160105.png)

![1557330201495](../assets/data/Ubuntu系统搭建配置Python虚拟开发环境/1557330201495.png)

- 安装pip3
  - `sudo apt install python3-pip`

![1557330305508](../assets/data/Ubuntu系统搭建配置Python虚拟开发环境/1557330305508.png)

![1557330371783](../assets/data/Ubuntu系统搭建配置Python虚拟开发环境/1557330371783.png)

2. 安装 virtualenv 和 virtualenvwrapper

```
在终端输入如下命令：
pip install virtualenv
pip install virtualenvwrapper
# 如果python2和python3共存，则需要同时安装
pip3 install virtualenv
pip3 install virtualenvwrapper
# virtualenvwrapper是virtualenv的扩展包，可以更⽅便的新增、删除、复制、切换虚 拟环境。
```

- Python2的安装

![1557337352791](../assets/data/Ubuntu系统搭建配置Python虚拟开发环境/1557337352791.png)

![1557337386266](../assets/data/Ubuntu系统搭建配置Python虚拟开发环境/1557337386266.png)

- Python3的安装

![1557339330517](../assets/data/Ubuntu系统搭建配置Python虚拟开发环境/1557339330517.png)

![1557339362845](../assets/data/Ubuntu系统搭建配置Python虚拟开发环境/1557339362845.png)

- 找到 `virtualenvwrapper.sh` 的路径

![1557337564417](../assets/data/Ubuntu系统搭建配置Python虚拟开发环境/1557337564417.png)

- 修改`virtualenvwrapper.sh`的路径

![1557339703369](../assets/data/Ubuntu系统搭建配置Python虚拟开发环境/1557339703369.png)

![1557339743410](../assets/data/Ubuntu系统搭建配置Python虚拟开发环境/1557339743410.png)

- 测试 python3 解释器能否正常导入 `virtualenvwrapper`
  - 如下图所示即代表成功

![1557339461944](../assets/data/Ubuntu系统搭建配置Python虚拟开发环境/1557339461944.png)

### 配置环境变量

- 修改 `.bashrc` 文件（mac电脑是 `.bash_profile`文件）

![1557337634587](../assets/data/Ubuntu系统搭建配置Python虚拟开发环境/1557339743410.png)

- 将下列内容添加到`~/.bashrc` 文件中

```
#Setting virtualenv PATH for python3
VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
source /usr/local/bin/virtualenvwrapper.sh # virtualenvwrapper.sh的路径
export WORKON_HOME="/home/python/workspace"  # workspace是盛放虚拟环境的文件夹（根据自己的修改）
# export WORKON_HOME=$HOME/.virtualenvs    # 盛放虚拟环境的文件夹也可以设置为.virtualenvs 
```

![1557342578512](../assets/data/Ubuntu系统搭建配置Python虚拟开发环境/1557342578512.png)

- 更新环境变量
  - 执行`source ~/.bashrc`

![1557342603329](../assets/data/Ubuntu系统搭建配置Python虚拟开发环境/1557342603329.png)

### 创建虚拟开发环境

- Django虚拟环境
  - `mkvitualenv -p python3 django_py3`

![1557342747600](../assets/data/Ubuntu系统搭建配置Python虚拟开发环境/1557342747600.png)

- AI虚拟环境

![1557342797321](../assets/data/Ubuntu系统搭建配置Python虚拟开发环境/1557342797321.png)

- 如此，虚拟环境即创建成功

>由于篇幅短小和时间仓促,若你发现了错误请告知我。
>
>希望我没有误导你，而是带你看了小小的新世界。

