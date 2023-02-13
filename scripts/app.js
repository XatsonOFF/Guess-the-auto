const headElem = document.getElementById("head");
const buttonsElem = document.getElementById("buttons");
const buttonsElem2 = document.getElementById("buttons2");
const bg = document.getElementById("img-bg");
const pagesElem = document.getElementById("pages");
const image = document.getElementById("img");

//Класс, который представляет сам тест
class Quiz
{
	constructor(type, questions, results)
	{
		//Тип теста: 1 - классический тест с правильными ответами, 2 - тест без правильных ответов
		this.type = type;

		//Массив с вопросами
		this.questions = questions;

		//Массив с возможными результатами
		this.results = results;

		//Количество набранных очков
		this.score = 0;

		//Номер результата из массива
		this.result = 0;

		//Номер текущего вопроса
		this.current = 0;
	}

	Click(index)
	{
		//Добавляем очки
		let value = this.questions[this.current].Click(index);
		this.score += value;

		let correct = -1;

		//Если было добавлено хотя одно очко, то считаем, что ответ верный
		if(value >= 1)
		{
			correct = index;
		}
		else
		{
			//Иначе ищем, какой ответ может быть правильным
			for(let i = 0; i < this.questions[this.current].answers.length; i++)
			{
				if(this.questions[this.current].answers[i].value >= 1)
				{
					correct = i;
					break;
				}
			}
		}

		this.Next();

		return correct;
	}

	//Переход к следующему вопросу
	Next()
	{
		this.current++;
		
		if(this.current >= this.questions.length) 
		{
			this.End();
		}
	}

	//Если вопросы кончились, этот метод проверит, какой результат получил пользователь
	End()
	{
		for(let i = 0; i < this.results.length; i++)
		{
			if(this.results[i].Check(this.score))
			{
				this.result = i;
			}
		}
	}
} 

//Класс, представляющий вопрос
class Question 
{
	constructor(text, answers)
	{
		this.text = text; 
		this.answers = answers; 
	}

	Click(index) 
	{
		return this.answers[index].value; 
	}
	
}


//Класс, представляющий ответ
class Answer 
{
	constructor(text, value) 
	{
		this.text = text; 
		this.value = value; 
	}
}

//Класс, представляющий результат
class Result 
{
	constructor(text, value)
	{
		this.text = text;
		this.value = value;
	}

	//Этот метод проверяет, достаточно ли очков набрал пользователь
	Check(value)
	{
		if(this.value <= value)
		{
			return true;
		}
		else 
		{
			return false;
		}
	}
}

//Массив с результатами
const results = 
[
	new Result("В следующий раз получится", 0),
	new Result("Мегаплох", 20),
	new Result("Не надо шутить с тестами", 40),
	new Result("Хорошо", 60),
	new Result("Огонь!", 80),
	new Result("Идеально", 100)
];

//Массив с вопросами
const questions = 
[
	new Question("", 
	[
		new Answer("EMW", 0),
		new Answer("BMW", 1),		
		new Answer("AUDI", 0),
		new Answer("HONDA", 0)
	]),
	
	new Question("", 
	[
		new Answer("GMC", 0),
		new Answer("CHRYSLER", 0),
		new Answer("FORD", 1),
		new Answer("AMC", 0)
	]),

	new Question("", 
	[
		new Answer("LINCOLN", 0),
		new Answer("OPEL", 1),
		new Answer("PONTIAC", 0),
		new Answer("ACURA", 0)
	]),

	new Question("", 
	[
		new Answer("RENAULT", 1),
		new Answer("ALFA ROMEO", 0),
		new Answer("AMC", 0),
		new Answer("GEELY", 0)
	]),

	new Question("", //5
	[
		new Answer("DATSUN", 0),
		new Answer("TOYOTA", 0),
		new Answer("BUICK", 0),
		new Answer("MITSUBISHI", 1)
	]),

	new Question("", 
	[
		new Answer("MINI", 0),
		new Answer("NISSAN", 0),
		new Answer("HONDA", 1),
		new Answer("ACURA", 0)
	]),

	new Question("", 
	[
		new Answer("PONTIAC", 0),
		new Answer("DODGE", 1),
		new Answer("BUICK", 0),
		new Answer("CHEVROLET", 0)
	]),

	new Question("", 
	[
		new Answer("PONTIAC", 0),
		new Answer("MERCURY", 0),
		new Answer("LINCOLN", 0),
		new Answer("CADILAC", 1)
	]),

	new Question("", 
	[
		new Answer("SKODA", 1),
		new Answer("DS", 0),
		new Answer("ROVER", 0),
		new Answer("ALFA ROMEO", 0)
	]),

	new Question("", //10
	[
		new Answer("RENAULT", 0),
		new Answer("MINI", 0),
		new Answer("PEUGEOT", 1),
		new Answer("SEAT", 0)
	]),

	new Question("", 
	[
		new Answer("INFINITI", 0),
		new Answer("NISSAN", 1),
		new Answer("SUZUKI", 0),
		new Answer("DAIHATSU", 0)
	]),

	new Question("", 
	[
		new Answer("DAF", 0),
		new Answer("KAMAZ", 1),
		new Answer("MAN", 0),
		new Answer("SCANIA", 0)
	]),

	new Question("", 
	[
		new Answer("MAYBACH", 1),
		new Answer("MINI", 0),
		new Answer("MASERATI", 0),
		new Answer("DS", 0)
	]),

	new Question("", 
	[
		new Answer("DAF", 0),
		new Answer("IVECO", 0),
		new Answer("MAN", 0),
		new Answer("SCANIA", 1)
	]),
	
	new Question("", //15
	[
		new Answer("CHRYSLER", 0),
		new Answer("JEEP", 0),
		new Answer("PONTIAC", 1),
		new Answer("GEELY", 0)
	]),

	new Question("", 
	[
		new Answer("SCION", 0),
		new Answer("LOTUS", 1),
		new Answer("LANCIA", 0),
		new Answer("OLDSMOBILE", 0)
	]),

	new Question("", 
	[
		new Answer("LINCOLN", 1),
		new Answer("GMC", 0),
		new Answer("TVR", 0),
		new Answer("OLDSMOBILE", 0)
	]),

	new Question("", 
	[
		new Answer("TVR", 0),
		new Answer("RUF", 0),
		new Answer("LANCIA", 1),
		new Answer("MERCURY", 0)
	]),

	new Question("", 
	[
		new Answer("BUGATTI", 0),
		new Answer("KOENIGSEGG", 1),
		new Answer("MCLAREN", 0),
		new Answer("SSC", 0)
	]),

	new Question("", //20
	[
		new Answer("TVR", 0),
		new Answer("BUICK", 1),
		new Answer("ROVER", 0),
		new Answer("DAEWOO", 0)
	]),

	new Question("", 
	[
		new Answer("PONTIAC", 0),
		new Answer("TOYOTA", 0),
		new Answer("ALFA ROMEO", 2),
		new Answer("MAZDA", 0)
	]),

	new Question("", 
	[
		new Answer("ZENVO", 2),
		new Answer("FLANKER", 0),
		new Answer("MARUSSIA", 0),
		new Answer("ACURA", 0)
	]),

	new Question("", 
	[
		new Answer("RENAULT", 0),
		new Answer("FIAT", 2),
		new Answer("VAZ", 0),
		new Answer("AZLK", 0)
	]),

	new Question("", 
	[
		new Answer("TRACKHAWK", 0),
		new Answer("SRT", 0),
		new Answer("DEMON", 0),
		new Answer("EXORCIST", 2)
	]),

	new Question("", //25
	[
		new Answer("LAMBORGHINI", 2),
		new Answer("JEEP", 0),
		new Answer("FERRARI", 0),
		new Answer("TOYOTA", 0)
	]),

	new Question("", 
	[
		new Answer("MCLAREN", 2),
		new Answer("FERRARI", 0),
		new Answer("LAMBORGHINI", 0),
		new Answer("KOENIGSEGG", 0)
	]),

	new Question("", 
	[
		new Answer("407", 0),
		new Answer("406", 2),
		new Answer("308", 0),
		new Answer("207", 0)
	]),

	new Question("", 
	[
		new Answer("BUICK", 0),
		new Answer("CHEVROLET", 0),
		new Answer("GMC", 0),
		new Answer("PONTIAC", 2)
	]),

	new Question("", 
	[
		new Answer("PONTIAC", 0),
		new Answer("DODGE", 0),
		new Answer("CHRYSLER", 2),
		new Answer("AMC", 0)
	]),

	new Question("", //30
	[
		new Answer("TOYOTA", 0),
		new Answer("HYUNDAI", 2),
		new Answer("KIA", 0),
		new Answer("MAZDA", 0)
	]),
	
	new Question("", 
	[
		new Answer("ROLLS-ROYCE", 0),
		new Answer("ZIS", 0),
		new Answer("CHRYSLER", 0),
		new Answer("ZIL", 2)
	]),

	new Question("", 
	[
		new Answer("E32", 0),
		new Answer("E39", 0),
		new Answer("E28", 0),
		new Answer("E38", 2)
	]),

	new Question("", 
	[
		new Answer("LINCOLN", 0),
		new Answer("CHRYSLER", 0),
		new Answer("AURUS", 2),
		new Answer("ROLLS-ROYCE", 0)
	]),

	new Question("", 
	[
		new Answer("CCS", 0),
		new Answer("BUGATTI", 2),
		new Answer("LAMBORGHINI", 0),
		new Answer("KOENIGSEGG", 0)
	]),

	new Question("", // 35
	[
		new Answer("TESTAROSSA", 2),
		new Answer("BERLINETTA", 0),
		new Answer("F40", 0),
		new Answer("488", 0)
	]),

	new Question("", 
	[
		new Answer("JAGUAR", 0),
		new Answer("LAND ROVER", 5),
		new Answer("FORD", 0),
		new Answer("CADILAC", 0)
	]),

	new Question("", 
	[
		new Answer("MINI", 5),
		new Answer("SMART", 0),
		new Answer("TOYOTA", 0),
		new Answer("CITROEN", 0)
	]),

	new Question("", 
	[
		new Answer("LAND ROVER", 0),
		new Answer("BMW", 0),
		new Answer("TOYOTA", 0),
		new Answer("MERCEDES", 5)
	]),

	new Question("", 
	[
		new Answer("2103", 0),
		new Answer("2108", 5),
		new Answer("2109", 0),
		new Answer("2110", 0)
	]),

	new Question("", // 40
	[
		new Answer("FERRARI", 0),
		new Answer("KOENIGSEGG", 0),
		new Answer("LAMBORGHINI", 5),
		new Answer("FORD", 0)
	]),

	new Question("", 
	[
		new Answer("ASTON MARTIN", 5),
		new Answer("CITROEN", 0),
		new Answer("MASERATI", 0),
		new Answer("PORSCHE", 0)
	]),

	new Question("", 
	[
		new Answer("LAMBORGHINI", 0),
		new Answer("SCANIA", 0),
		new Answer("LAND ROVER", 0),
		new Answer("HUMMER", 5)
	]),

	new Question("", 
	[
		new Answer("FORD", 0),
		new Answer("CITROEN", 5),
		new Answer("NISSAN", 0),
		new Answer("SUBARU", 0)
	]),

	new Question("", 
	[
		new Answer("BMW", 5),
		new Answer("MERCEDES", 0),
		new Answer("PORSCHE", 0),
		new Answer("AUDI", 0)
	]),

	new Question("", 
	[
		new Answer("MINI", 0),
		new Answer("NISSAN", 0),
		new Answer("SUBARU", 0),
		new Answer("TOYOTA", 5)
	])
];

//Сам тест
const quiz = new Quiz(1, questions, results);

Update();

//Обновление теста
function Update()
{
	//Проверяем, есть ли ещё вопросы
	if(quiz.current < quiz.questions.length) 
	{
		//Если есть, меняем вопрос в заголовке
		headElem.innerHTML = quiz.questions[quiz.current].text;

		//Удаляем старые варианты ответов
		buttonsElem.innerHTML = "";
		
		if(quiz.current == 20 || quiz.current == 35)
		{	
			document.getElementById("img-bg").style.display="none";
			document.getElementById("buttons").style.display="none";
			buttonsElem2.innerHTML = "Уровень пройден <br/> Очки: " + quiz.score + "<br/><br/> <span>Подсказка</span> <br/> Нажмите ЛКМ по картинке, чтобы увеличить изображение";
			setTimeout(LvlScore, 5000);	
		}

		//Создаём кнопки для новых вариантов ответов
		for(let i = 0; i < 4; i++)
		{
			let btn = document.createElement("button");
			btn.className = "button";

			btn.innerHTML = quiz.questions[quiz.current].answers[i].text;

			btn.setAttribute("index", i);

			buttonsElem.appendChild(btn);
		}
		
		//Выводим номер текущего вопроса
		if(quiz.current <= 20)
		{
		pagesElem.innerHTML = (quiz.current + 1) + " / 20";
		}
		if(quiz.current >= 20)
		{
		pagesElem.innerHTML = (quiz.current + 1) + " / 35";
		}
		if(quiz.current >= 35)
		{
		pagesElem.innerHTML = (quiz.current + 1) + " / 45";
		}

		//Вызываем функцию, которая прикрепит события к новым кнопкам
		Init();
	}
	else
	{
		// Если это конец, то выводим результат
		buttonsElem.innerHTML = "";
		document.getElementById("img").setAttribute("onClick", "");
		
		if(quiz.score == 100){
			document.getElementById("img").setAttribute("src", "https://i.gifer.com/VOFS.gif"); //
		}
		if(quiz.score >= 80 && quiz.score < 100){
			document.getElementById("img").setAttribute("src", "http://i.yapx.ru/R7GvK.gif"); //
		}
		if(quiz.score >= 60 && quiz.score < 80){
			document.getElementById("img").setAttribute("src", "https://i.yapx.ru/R859S.gif"); 
		}
		if(quiz.score >= 40 && quiz.score < 60){
			document.getElementById("img").setAttribute("src", "images/40.jpg"); //
		}
		if(quiz.score >= 20 && quiz.score < 40){
			document.getElementById("img").setAttribute("src", "images/20.jpg"); //
		}
		if(quiz.score < 20){
			document.getElementById("img").setAttribute("src", "https://c.tenor.com/LAxJhCXFrRYAAAAd/drift-academeg.gif"); //
		}
		
		buttonsElem2.innerHTML = "<br><br><span id='restart'>Еще раз</span>";
		document.getElementById("restart").setAttribute("onClick", "location.reload()");
		headElem.innerHTML = quiz.results[quiz.result].text;
		pagesElem.innerHTML = "Очки: " + quiz.score + "/100";
	}
}

function LvlScore()
{
	document.getElementById("img-bg").style.display="flex";
	document.getElementById("buttons").style.display="flex";
	buttonsElem2.innerHTML = ""

}

function Init()
{
	//Находим все кнопки
	let btns = document.getElementsByClassName("button");

	for(let i = 0; i < btns.length; i++)
	{
		//Прикрепляем событие для каждой отдельной кнопки
		//При нажатии на кнопку будет вызываться функция Click()
		btns[i].addEventListener("click", function (e) { Click(e.target.getAttribute("index")); });
	}
}

function Click(index) 
{
	//Получаем номер правильного ответа
	let correct = quiz.Click(index);

	//Находим все кнопки
	let btns = document.getElementsByClassName("button");

	//Делаем кнопки серыми
	for(let i = 0; i < btns.length; i++)
	{
		btns[i].className = "button button_passive";
	}

	//Если это тест с правильными ответами, то мы подсвечиваем правильный ответ зелёным, а неправильный - красным
	if(quiz.type == 1)
	{
		if(correct >= 0)
		{
			btns[correct].className = "button button_correct";
		}

		if(index != correct) 
		{
			btns[index].className = "button button_wrong";
		} 
	}
	else
	{
		//Иначе просто подсвечиваем зелёным ответ пользователя
		btns[index].className = "button button_correct";
	}
	
	

	//Ждём секунду и обновляем тест
	setTimeout(Update, 1000);
	setTimeout(imgsrc, 1000);
	
}

let l = 1, l2 = 1, l3 = 1;

function imgsrc() {
		
	if (quiz.current < 20){
		l++;
		var imgs = new Array("images/lvl1/q1." + l + ".svg");
		image.src=imgs;
		}

	if (quiz.current >= 20 && quiz.current < 35) {
		document.getElementById("img").setAttribute("onClick", "open_photo('images/lvl2/q2." + l2 + ".jpg')");
		document.getElementById("img-bg").style.background="none";
		document.getElementById("img").style.width="auto";
		document.getElementById("img").style.borderRadius="15px";
		var imgs = new Array("images/lvl2/q2." + l2 + ".jpg");
		l2++; 
		image.src=imgs;
		}
	if (quiz.current >= 35 && quiz.current < 45) {
		document.getElementById("img").setAttribute("onClick", "open_photo('images/lvl3/q3." + l3 + ".jpg')");
		var imgs = new Array("images/lvl3/q3." + l3 + ".jpg");
		l3++;
		image.src=imgs;
	}
}

function open_photo(photo) {
	Object.assign(document.querySelector('#big-photo').style, {		
		display: "flex",
		width: "100%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
	  });
	document.getElementById("dark-bg").style.display="block";
	document.getElementById("big-photo").innerHTML =
    ("<img onclick='close_photo()' src='" + photo + "'>");
}

function close_photo() {
	document.getElementById("big-photo").style.display="none";
	document.getElementById("dark-bg").style.display="none";

}


// антигугл
// window.onblur = function() { 
// 	console.log('blur');
// 	if (quiz.current > 5){
// 		location.reload();
// 		alert("пж без гугла");
// 	}
// }

