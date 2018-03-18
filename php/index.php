<?php
// 开启SESSION功能
session_start();
// 判断用户是否登录成功
// isset：判断某个属性是否存在，不存在返回false，存在返回true
if(isset($_SESSION['LOGIN_OK'])) {

	require_once('../html/index.html');
} else {
	// 跳转到登录界面
	header('location:index.html');
}

