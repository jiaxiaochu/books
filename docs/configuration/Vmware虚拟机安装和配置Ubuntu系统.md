---
title: Vmware虚拟机安装和配置Ubuntu系统
date: 2018-05-22 00:46:01
tags: [环境配置,系统配置,Ubuntu,VMware,虚拟机]
categories: 『环境配置』- 工欲善其事，必先利其器
toc: true
top: true
<!-- thumbnail: https://ws1.sinaimg.cn/large/0065l1jqly1g57y869akaj30m80go7a0.jpg -->
---

**创建带有 SCSI 控制器类型、虚拟机磁盘类型以及与旧版 VMware 产品兼容性等高级选项的虚拟机**

- 安装前准备：
  - 安装好VMwareWorkstation
  - Ubuntu16.04镜像文件
    - （下载地址链接：https://pan.baidu.com/s/1MSBBv9NOh7_cFgTMUQPEhQ 提取码：w6g7 ）
  - Ubuntu18.04镜像文件
    - （下载地址链接：链接：https://pan.baidu.com/s/1uhPj0ttM9M7QxpR3Z4LI5g 提取码：il08 ）

> 若连接失效，请[邮箱](zhixiang.jia@foxmail.com)联系我

<!-- more -->
### 一、Ubuntu的初步安装

- 创建新的虚拟机

![1554713786949](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554713786949.png)

![1554713919815](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554713919815.png)

点击下一步，如下图所示

![1554714395837](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554714395837.png)

选择兼容性版本

![1554714611043](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554714611043.png)

![1554714641613](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554714641613.png)

![1554714669480](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554714669480.png)

![1554714696310](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554714696310.png)

![1554714767912](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554714767912.png)

注意修改的信息

![1554714861230](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554714861230.png)

![1554714922826](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554714922826.png)

修改处理器配置信息，如下图所示

![1554715071537](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554715071537.png)

虚拟机内存配置，最低要求2GB,可以根据自己的需求修改，后期也可以再更改

![1554715123156](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554715123156.png)

![1554715260124](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554715260124.png)

![1554715283480](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554715283480.png)

![1554715310027](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554715310027.png)

![1554715336946](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554715336946.png)

![1554715445357](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554715445357.png)

![1554715463889](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554715463889.png)

![1554715479180](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554715479180.png)

![1554715497915](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554715497915.png)

![1554715586157](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554715586157.png)

此时，切记千万不要手快点开电源！！！

![1554715685795](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554715685795.png)

### 二、Ubuntu系统安装设置

- 设置加载镜像

![1554715904976](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554715904976.png)

![1554715948576](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554715948576.png)

![1554716035134](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554716035134.png)

![1554716093894](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554716093894.png)

![1554716176488](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554716176488.png)

**这些完成后就可以直接开启虚拟机了**

![1554716252197](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554716252197.png)

![1554716334005](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554716334005.png)

![1554716370278](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554716370278.png)

![1554716422946](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554716422946.png)

![1554716459440](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554716459440.png)

![1554716488179](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554716488179.png)

![1554716543173](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554716543173.png)

![1554716575158](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554716575158.png)

![1554716602325](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554716602325.png)

![1554716620502](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554716620502.png)

拖动窗口，点 continue 继续下一步

![1554716700582](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554716700582.png)

设置自己的用户名和密码 :

![1554716728355](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554716728355.png)

![1554716905189](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554716905189.png)

安装进行中，等待安装

![1554716944869](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554716944869.png)

![1554719354860](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554719354860.png)

![1554731409117](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554731409117.png)

点击 Restart Now 进行重启，

如果出现如下图所示的状况，导致无法进入系统界面，需要点击Vmware的重新启动客户机按钮进行重新启动

如下图所示：

![1554731666457](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554731666457.png)

![1554776517422](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554776517422.png)

![1554776873497](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554776873497.png)

如果出现如下情况，**切记千万不要选择更新**

![1554778547735](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554778547735.png)

![1554778836786](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554778836786.png)

![1554778863798](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554778863798.png)

![1554778886569](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554778886569.png)

![1554778926607](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554778926607.png)

- 在安装好的Ubuntu系统中鼠标右键选择 Open Terminal，打开Ubuntu系统的命令终端

![1554778966309](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554778966309.png)

- 然后，修改hosts文件
  - etc目录下的hosts文件
![WechatIMG42](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/WechatIMG42.png)
- 使用vim修改编辑hosts文件
`sudo vi /etc/hosts`
![WechatIMG41](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/WechatIMG41.png)
- 使用gedit修改编辑hosts文件
`sudo gedit /etc/hosts`
![WechatIMG43](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/WechatIMG43.png)
![WechatIMG44](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/WechatIMG44.png)
![WechatIMG46](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/WechatIMG46.png)

如此，即代表系统安装成功

### 三、安装Vmware Tools

> 为了让系统能像下图一样适应客户机，需要安装Vmware Tools

![1554777043804](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554777043804.png)

- 在安装好的Ubuntu系统中鼠标右键选择 Open Terminal，打开Ubuntu系统的命令终端

![1554778975398](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554778975398.png)

1. 获取管理员权限

   输入以下命令，来获取管理员权限，密码是你在上面设置的密码：`sudo passwd`

![1554779131062](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554779131062.png)

- 前面我设置的密码是`chuanzhi`

![1554779170274](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554779170274.png)

![1554779303171](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554779303171.png)

- 如果上面你设置的密码不是`chuanzhi`,请输入你自己设置的密码

![1554779643739](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554779643739.png)

![1554779704503](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554779704503.png)

- 切换到 root 最高权限用户

![1554779872183](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554779872183.png)

#### 安装Vmware tools工具

> 选择Vmware顶部工具栏里的 **安装Vmware Tools（T）**选项

![1554780158202](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554780158202.png)

![1554780239135](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554780239135.png)

![1554781022857](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554781022857.png)

- 在安装好的Ubuntu系统中鼠标右键选择 Open Terminal，打开Ubuntu系统的命令终端

  - 打开终端后，进行下面设置

- 复制CD中的 VMwareTools-10.0.10-4301679.tar.gz 文件到根目录下：

  `cp /media/user/VMware\ Tools/VMwareTools-10.0.10-4301679.tar.gz /`

- 然到移动到根目录：

  `cd /`

- 解压 VMwareTools-10.0.10-4301679.tar.gz：

  `tar -zxvf VMwareTools-10.0.10-4301679.tar.gz`

![1554782968942](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554782968942.png)

- 按下回车，执行解压
  - 如下如所示

![1554787027354](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554787027354.png)

- 解压完成后进入解压文件夹vmware-tools-distrib

  `cd vmware-tools-distrib`

- 运行安装程序：

  `./vmware-install.pl`

- 一路 y 加 回车

![1554787211386](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554787211386.png)

![1554787346650](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554787346650.png)

![1554787370075](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554787370075.png)

![1554787422575](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554787422575.png)

![1554787787278](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554787787278.png)

![1554787868385](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554787868385.png)

![1554788380134](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554788380134.png)

- 如下图所示

![1554788414292](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554788414292.png)

### 四、设置共享文件夹

> 设置共享文件夹，可以实现Windows系统和Ubuntu系统的复制粘贴功能

- 在菜单栏找到虚拟机->设置，添加自己的共享文件夹

![1554788596453](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554788596453.png)

![1554788674038](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554788674038.png)

![1554788694696](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554788694696.png)

![1554788733020](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554788733020.png)

如此，即完成了Ubuntu系统的初步设置

### 五、修改Ubuntu系统的更新源

> 更改apt源为国内源方法早就有了，内容大同小异，我们应当掌握其规律了，其实每一版内容不同的地方就是版本号（或者官方一点的说：系统代号），所以我们先了解下新版本的系统代号：
> 使用命令：lsb_release -c
> 得到本系统的系统代号，如下图所示：
> 同样的我们也可以得到之前任意版本的系统代号：
> Ubuntu 12.04 (LTS)代号为precise。
> Ubuntu 14.04 (LTS)代号为trusty。
> Ubuntu 15.04 代号为vivid。
> Ubuntu 15.10 代号为wily。
> Ubuntu 16.04 (LTS)代号为xenial。
> 所以这也就解释了为什么利用搜索引擎搜出来的那么多方案里面内容不尽相同的原因，因为大家更改apt安装源时用的系统不一样。

- **查看系统版本代号 **`lsb_release -a`

![1554789205438](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554789205438.png)

<font color=red size=5 face="黑体">注意：一定要对准自己的Ubuntu系统版本代号，检查是Ubuntu16.04还是Ubuntu18.04</font>

**下面分别提供Ubuntu16.04和ubuntu 18.04两个不同系统版本的阿里源**

- Ubuntu16.04对应阿里源

```
# deb cdrom:[Ubuntu 16.04 LTS _Xenial Xerus_ - Release amd64 (20160420.1)]/ xenial main restricted
deb-src http://archive.ubuntu.com/ubuntu xenial main restricted #Added by software-properties
deb http://mirrors.aliyun.com/ubuntu/ xenial main restricted
deb-src http://mirrors.aliyun.com/ubuntu/ xenial main restricted multiverse universe #Added by software-properties
deb http://mirrors.aliyun.com/ubuntu/ xenial-updates main restricted
deb-src http://mirrors.aliyun.com/ubuntu/ xenial-updates main restricted multiverse universe #Added by software-properties
deb http://mirrors.aliyun.com/ubuntu/ xenial universe
deb http://mirrors.aliyun.com/ubuntu/ xenial-updates universe
deb http://mirrors.aliyun.com/ubuntu/ xenial multiverse
deb http://mirrors.aliyun.com/ubuntu/ xenial-updates multiverse
deb http://mirrors.aliyun.com/ubuntu/ xenial-backports main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ xenial-backports main restricted universe multiverse #Added by software-properties
deb http://archive.canonical.com/ubuntu xenial partner
deb-src http://archive.canonical.com/ubuntu xenial partner
deb http://mirrors.aliyun.com/ubuntu/ xenial-security main restricted
deb-src http://mirrors.aliyun.com/ubuntu/ xenial-security main restricted multiverse universe #Added by software-properties
deb http://mirrors.aliyun.com/ubuntu/ xenial-security universe
deb http://mirrors.aliyun.com/ubuntu/ xenial-security multiverse
```

- Ubuntu18.04对应阿里源
  - 如果是Ubuntu18.04系统可以参照我的简书配置：https://www.jianshu.com/p/e5677ebd5341

```
deb http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse
```

#### 修改系统更新源方法步骤如下：

> 首先备份Ubuntu系统的官方源文件

- 打开Ubuntu的命令终端，进入源文件 `sources.list` 所在的目录：
  - 然后执行备份命令，执行 `sudo cp sources.list sources.list.backup` 对源文件内容进行备份，以防万一。

```
cd /etc/apt
sudo cp sources.list sources.list.backup
```

![1554790544705](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554790544705.png)

![1554790767758](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554790767758.png)

- 修改源文件内容
  - 将上述对应系统版本的阿里源的文件内容全部复制，使用 `sudo vim sources.list` 打开文件，输入 `ggdG`（vim操作指令）删除所有内容（这句指令可以理解为删除第一行到最后一行的的全部内容）

```
sudo vim sources.list    # 在 /etc/apt 目录下
ggdG    # 使用vim打开 sources.list 文件后执行此命令
```

- 将复制的阿里源文件内容全部粘贴到文件中后，输入 : 然后再输入wq 保存退出。

值得注意的是 sources.list 文件的条目都是有格式的（通过上面的内容大家也看的出来），一般有如下形式：

```
deb http://site.example.com/debian distribution component1 component2 component3
deb-src http://site.example.com/debian distribution component1 component2 component3
```

所以后面几个参数是对软件包的分类（Ubuntu下是main， restricted，universe ，multiverse这四个）
所以你把内容写成:

```
deb http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted 
deb http://mirrors.aliyun.com/ubuntu/ bionic-proposed universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-proposed universe multiverse
```

上面之类的也是可以的，之前我有这个疑惑，所以在这里一并告知和我有一样疑惑的朋友。

#### 更新源

- 使用 `sudo apt-get update` 即可更新获取阿里软件源 提供的软件列表

```
sudo apt-get update
```

![1554793359809](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554793359809.png)

#### 更新软件

- 使用 `sudo apt-get upgrade` 即可跟新软件

```
sudo apt-get upgrade
```

![1554793398077](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554793398077.png)

![1554793429708](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554793429708.png)

- 如下图所示，即代表更新成功

![1554797295052](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554797295052.png)

### 六、安装VIM编辑器

- 在Ubuntu系统的命令终端输入 `sudo apt-get install vim ` 进行下载

![1554803724133](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554803724133.png)

![1554803952271](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554803952271.png)

![1554804086386](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554804086386.png)

- 检测是否安装成功
  - 在命令终端输入 vim 回车

![1554804141041](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554804141041.png)

- 如上图所示，即代表安装成功

![1554804186592](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554804186592.png)

- 退出 vim
  - 1.按下  ESC  键   
  - 2.再输入 ：
  - 3.最后输入  q 或 wq  即可
  - 4.回车

![1554804467597](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554804467597.png)

- 安装完成后的 vim 是默认不显示行号的
- 上图中在 /etc/vim/ 目录下打开的 输入 `sudo vi vimrc`后是不显示行号的，如下图所示

![1554804649529](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554804649529.png)

- 进入编辑界面后，按下 G 键（这是大写的 G）直接跳转到文件的最后一行
- 再次按下 i 键，进行编辑，输入 `set number`  如下图所示

![1554804835256](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554804835256.png)

- 退出 vim
  - 1.按下  ESC  键   
  - 2.再输入 ：
  - 3.最后输入  q 或 wq  即可
  - 4.回车

![1554804906611](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554804906611.png)

- 检查设置行号是否生效

![1554805087039](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554805087039.png)

![1554805125404](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554805125404.png)

如此，即代表安装好修改配置成功

### 七、安装谷歌浏览器

- 先下载谷歌浏览器的deb安装包

  - 下载地址如下：

  `https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb`

  ![1554813326034](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554813326034.png)

- 等待下载完成

![1554813365460](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554813365460.png)

![1554813409803](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554813409803.png)



- 安装谷歌浏览器需执行以下两步，回到终端输入以下命令

  `sudo apt install libappindicator1 libindicator7`

- 关闭终端，打开下载的存放deb包的文件夹，空白处右键在这里打开终端

![1554813646605](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554813646605.png)



![1554813742619](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554813742619.png)

![1554813992872](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554813992872.png)

- 输入以下命令

  `sudo dpkg -i google-chrome-stable_current_amd64.deb`

![1554814165619](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554814165619.png)

![1554814217647](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554814217647.png)

- 最后在终端中输入以下命令，修复依赖关系

  `sudo apt -f install`

![1554814265937](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554814265937.png)

- 至此谷歌浏览器就安装好了，现在把它设置在快速启动栏

![1554814413853](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554814413853.png)

![1554814520209](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554814520209.png)

![1554814557334](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554814557334.png)

- 最后将其移动到快速启动栏的合适位置，右键点击图标锁定到启动器，左键拖动选择合适位置！

![1554814641809](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554814641809.png)

- 至此，谷歌浏览器即安装成功

### 八、安装Pycharm

> 下载地址：https://www.jetbrains.com/pycharm/download/#section=linux

![1554814864232](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554814864232.png)

![1554814899101](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554814899101.png)

![1554815355830](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554815355830.png)

![1554815374846](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554815374846.png)

- 右键安装包，点击“Extract Here”意思是提取到这里，相当于解压

![1554815431347](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554815431347.png)

![1554815480951](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554815480951.png)

- 提取完成后，会生成一个 pycharm-2019.1.1 的文件夹，然后双击进入该文件夹

![1554815530708](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554815530708.png)

![1554815580850](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554815580850.png)

- ，空白处右键在这里打开终端

![1554815684306](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554815684306.png)

![1554815714869](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554815714869.png)

![1554815763462](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554815763462.png)

![1554815809209](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554815809209.png)

![1554815836513](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554815836513.png)

![1554815856201](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554815856201.png)

![1554815880671](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554815880671.png)

- 选择主题

![1554815953777](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554815953777.png)

![1554815989929](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554815989929.png)

![1554816006374](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554816006374.png)

![1554816038655](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554816038655.png)

- 到这里，我选择秘钥激活的方法

  - 百度：lanyus

  - http://idea.lanyus.com/

    ![1554816196446](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554816196446.png)

- 修改 hosts 文件（hosts文件在 /etc 目录下）

```
0.0.0.0 account.jetbrains.com
0.0.0.0 www.jetbrains.com

```

- 将上面两行代码添加到，hosts文件中

![1554816454362](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554816454362.png)

![1554816518699](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554816518699.png)

![1554816541195](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554816541195.png)

- 添加后如下图所示

![1554816591936](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554816591936.png)

- 退出 vim
  - 1.按下  ESC  键   
  - 2.再输入 ：
  - 3.最后输入  q 或 wq  即可
  - 4.回车

![1554816648781](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554816648781.png)

- 获取注册码后输入

![1554816683863](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554816683863.png)

![1554816725814](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554816725814.png)

![1554816739779](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554816739779.png)

![1554816753105](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554816753105.png)

- 指定Python3解释器（1）

![1554816822783](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554816822783.png)

![1554816890874](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554816890874.png)

- 指定Python3解释器（2）

![1554816962147](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554816962147.png)

![1554817009349](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554817009349.png)

- 可以通过在命令终端输入：`whereis python`找到系统的Python解释器路径

![1554817125613](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554817125613.png)

![1554817211879](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554817211879.png)

![1554817253896](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554817253896.png)

![1554817287968](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554817287968.png)

![1554817306973](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554817306973.png)

![1554817354430](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554817354430.png)

![1554817392028](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554817392028.png)

![1554817411242](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554817411242.png)

![1554817434009](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554817434009.png)

- 如此，Python3的解释器便指定完成

#### 添加Pycharm桌面快捷方式

- 第一步

  - 创建Pycharm.desktop文件并用gedit的打开

    - sudo gedit /usr/share/applications/Pycharm.desktop

      ![1554898559678](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554898559678.png)

    - 然后就会弹出一个新框

- 第二步

  - 粘贴下面的代码输入并保存

    ```bash
    [Desktop Entry]
    Type=Application
    Name=Pycharm
    GenericName=Pycharm3
    Comment=Pycharm3:The Python IDE
    Exec=sh /home/python/Downloads/pycharm-2019.1.1/bin/pycharm.sh
    Icon=/home/python/Downloads/pycharm-2019.1.1/bin/pycharm.png
    Terminal=pycharm
    Categories=Pycharm
    
    ```

- **注意一定要将Desktop Entry复制进去，也就是上面的全部都要复制进去**
  - Exec 的路径是 **<font color=red size=5 face="黑体">pycharm.sh</font>** 的所在路径，即 pycharm 的启动文件
  - Icon 的路径是 **<font color=red size=5 face="黑体">pycharm.png</font>** 的所在路径，即 pycharm 的图标

我下载解压后的路径，如下图

![1554897945848](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554897945848.png)

![1554898166630](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554898166630.png)

![1554898231594](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554898231594.png)

- 路径：`/home/python/Downloads/pycharm-2019.1.1/bin`
  - Exec 的路径是 **<font color=red size=5 face="黑体">pycharm.sh</font>** 的所在路径，即 pycharm 的启动文件
    - `/home/python/Downloads/pycharm-2019.1.1/bin/pycharm.sh`
  - Icon 的路径是 **<font color=red size=5 face="黑体">pycharm.png</font>** 的所在路径，即 pycharm 的图标
    - `/home/python/Downloads/pycharm-2019.1.1/bin/pycharm.png`
- 创建的Pycharm.desktop文件如下

```
[Desktop Entry]
Type=Application
Name=Pycharm
GenericName=Pycharm3
Comment=Pycharm3:The Python IDE
Exec=sh /home/python/Downloads/pycharm-2019.1.1/bin/pycharm.sh
Icon=/home/python/Downloads/pycharm-2019.1.1/bin/pycharm.png
Terminal=pycharm
Categories=Pycharm

```

![1554898498094](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554898498094.png)

- 修改完成后，即可发现Pycharm的快捷方式

![1554898638150](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554898638150.png)

![1554898720552](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554898720552.png)

- 如此，即表示配置成功

### 九、安装MySQL数据库
> 有两种安装方法，请将两种方法都阅读完后，再选择其中的一种方式进行安装

方法一 使用命令安装MySQL数据库
1. 安装前先更新软件包列表：

```
在终端执行如下命令：
sudo apt-get update
```

![image-20190518191456335](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/mysql-20190518191456335.png)
../assets/data/Vmware虚拟机安装和配置Ubuntu系统/
2. 在Ubuntu16.04上安装MySQL：

```
在终端执行如下命令：
sudo apt-get install mysql-server mysql-client
```

![image-20190518191721166](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/mysql-20190518191721166.png)

3. 在安装过程中需要你输入MySQL管理员用户（root）密码，如下图

![image-20190518192226707](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/mysql-20190518192226707.png)

![image-20190518192828216](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/mysql-20190518192828216.png)

如上即代表安装完成
***
方法二 **通过APT方式安装**
> 说明：此种方式完全参考官方提供的教程:
> 地址：<https://dev.mysql.com/doc/mysql-apt-repo-quick-guide/en/>

注意：通过APT方式安装的版本都是现在最新的版本，现在我安装的是5.7.18。通过这种方式安装好之后开机自启动都已经配置好，和命令行上的环境变量，无需手动配置。

1. 下载官方提供的mysql-apt-config.deb包进行APT源设置，下载地址：<https://dev.mysql.com/downloads/repo/apt/>

![1554899654766](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554899654766.png)

![1554899907427](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554899907427.png)

![1554899922743](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554899922743.png)

- 找到下载的包路径

![1554900025755](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554900025755.png)

- 输入如下命令：
  - `sudo dpkg -i mysql-apt-config_0.8.12-1_all.deb`

![1554900103387](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554900103387.png)

- 运行之后会出现如下界面：

![1554900135846](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554900135846.png)

- 一般只需要默认，按方向键选择OK回车即可。

![1554902470640](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554902470640.png)

![1554900217426](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554900217426.png)

- 完成后使用以下命令从MySQL APT存储库更新包信息（*此步骤是必需的*）：
  - `sudo apt-get update`

![1554900482957](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554900482957.png)

![1554902683502](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554902683502.png)

> 说明：官方说通过这个工具这样操作之后，安装MySQL时就是按照上面选择的来进行。

2. 安装

- 通过以下命令安装MySQL

  - `sudo apt-get install mysql-server`

  ![1554900531962](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554900531962.png)

  ![1554900558244](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554900558244.png)

  - 这将安装MySQL服务器的包，以及客户端和数据库公共文件的包。

  此时如果提示依赖不足，如下所示：

  - **如果没出现依赖问题，那么就不需要使用此命令。**

![1554900813099](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554900813099.png)

​	那么需要运行下面命令解决依赖问题

​		`sudo apt-get install -f`

​	安装MySQL时会一并安装如下所示的软件：

![1554900899005](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554900899005.png)

完成后再次运行 `sudo apt-get install mysql-server`

**如果没出现依赖问题，那么就不需要使用此命令。**

- 在安装过程中，系统会要求您为MySQL安装的root用户提供密码,输入即可,如下所示：

> 重要
>
> 确保记住您设置的root密码。想要稍后设置密码的用户可以在对话框中将 密码字段留空，只需按确定即可 ; 在这种情况下，对于使用Unix套接字文件的连接，将通过[Socket Peer-Credential Pluggable Authentication](https://dev.mysql.com/doc/refman/8.0/en/socket-pluggable-authentication.html)对服务器的root访问进行身份 [验证](https://dev.mysql.com/doc/refman/8.0/en/socket-pluggable-authentication.html)。您可以稍后使用程序**mysql_secure_installation**设置root密码 。

- 我这里密码设置为：mysql  (为了避免忘记密码，建议设置为:mysql)

![1554901073287](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554901073287.png)

> MySQL8.0采用了新的加密方式，一定要注意，正是因为这个加密方式才导致Ubuntu18.04用设置的root密码登录不了MySQL，因为Ubuntu18.04的终端可能有问题，并不支持这个新的加密方式。幸好有界面可以让我们选择使用旧版本5.x的加密方式，所以果断选择采用5.x的加密方式。

- 确认密码

![1554901161042](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554901161042.png)

![1554901186844](../assets/data/Vmware虚拟机安装和配置Ubuntu系统/1554901186844.png)


