// JavaScript Document

let xhr = new XMLHttpRequest();// створюємо новий запрос обєкта
/*console.log(xhr);*/ // виводимо його в консоль і бачимо велику к-сть параметрів те що ми можимо використовувати

//.open- це тип запроса що відправляє відповідь на сервер
//"GET" -буде формуватися як URL силка з параметром name(це дані що являються URL строкою)
// true- ісанхроний запрос

xhr.open("GET", "book.json", true);// конфигурация запроса

xhr.send();//отправка запроса на сервер


//.onreadystatechange - це стан сервера в якому готове до роботи (підготовуємо почву сервера для роботи з ним) і
//у нього є чоити стани 0- це початок, 1-конфігурація запроса, 2-отправка, 3-отримання відповіді, 4 - сервер готовий повертати якщо відповідь сформульована
xhr.onreadystatechange = function(){
	if(xhr.readyState !=4) return; // вибираємо стан 4
	if(xhr.status != 200){// провіямо код status, щоб відповідав код 200 сервера
		console.log(xhr.status + ":" + xhr.statusText);
		}else{
			console.log(xhr.responseText);
			}
	}
	//ми отримали доступ до плеєр джсон і відповідь від сервера і вивели його