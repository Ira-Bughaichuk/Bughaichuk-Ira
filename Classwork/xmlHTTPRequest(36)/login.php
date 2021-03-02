<?php
$login = trim($_GET['login']);
$pass = trim($_GET['pass']);

// (lesson 37, 00:25)робимо провірку:

if($login =='' || $pass == ''){// якщо даны не заповнимо то 
	echo "Ошибка. Зполните поле";// вибиватиме помилку з текстом Ошибка. Зполните поле
	return; //повертаэмо
	}
	
	if($login !='login' || $pass != '123'){ //якщо дані заповненні або не заповненні
		echo "Такого пользователя нет";
		return;
		}else{//
			echo "Добро пожаловать";
			}
?>

<!--Через php можемо вивести дані json-->
<?php
$action = $_GET['action'];
if($action == 'getbook'){
	echo getbook();
}
function getbook(){
	$arrayName = array('1'=> "Taras", '2'=> "Shevchenko", '3'=>"Taras");
	return json_encode($arrayName);
}
?>



