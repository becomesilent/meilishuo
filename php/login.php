<?php
// 开启SESSION功能
session_start();

$account  = $_POST['account'];
$password = $_POST['password'];

if($account === 'admin888' && $password === 'admin888') {
	// 标识登录成功
	$_SESSION['LOGIN_OK'] = 1;

	$title = '登录成功！';
	$url = '../html/index.html';
	require_once('../html/status.tpl');
} else {
	$title = '登录失败！';
	$url = '../html/register.html';
	require_once('../html/status.tpl');
}