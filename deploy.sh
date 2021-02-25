#!/bin/bash

#进入build文件夹下
cd build
#git初始化
git init
#创建gh-pages分支
git checkout --orphan gh-pages
#添加文件到暂存区
git add .
#添加信息
git commit -m "update(*):gh-pages"
#设置远程仓库地址
git remote add origin git@github.com:Mulander-J/all-blue.git
#推送项目到 gh-pages分支
git push origin gh-pages
