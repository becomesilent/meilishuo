<?php

$page = $_GET['page'];
//$page = $_POST['page'];


if($page == 1) {
	$arr = [
		[
			'id' => 1,
			'title' => '西安下雨啦！'
		],
		[
			'id' => 2,
			'title' => '西安又不下啦！'
		]
	];
} else if ($page == 2) {
	$arr = [
		[
			'id' => 1,
			'title' => '西安刮风啦！'
		],
		[
			'id' => 2,
			'title' => '西安风停啦！'
		]
	];
}



echo json_encode($arr);