	var keyword,
			arrCheck,
			arrKey,
			m,n,
			newKeyword,
			i,j,k,l,o,
			arrKeylen,
			uniqueKey = [],
			arrAZ = ["a","b","c","d","e","f","g","h","i","j",
					 "k","l","m","n","o","p","g","r",
					 "s","t","u","v","w","x","y","z"],
			uniqueKeyLen,
			strToCode = "hide the gold in the tree stump",
			arrToCode,
			arrDoubles = [];




//1.  Въвеждаме кодовата дума, която е стринг;

 keyword = "playfair example";

 //2. Проверяваме дали кодовата дума съдържа празно място и ако да --> го премахваме;
 m= keyword.indexOf(" ");
 // console.log(m);
 if (m!== -1){
	arrCheck = keyword.split(" ");
 	keyword = arrCheck.join("");
 };
 	// console.log(keyword);

// 3. Превръщаме ключовата дума в масив;

arrKey = keyword.split("");

// console.log(arrKey);

//3.1. Проверяваме дали буквите от ключовата дума се повтарят и създаваме масив-ключ с уникални букви

//arrKeyLen = arrKey.length;
// console.log(arrKeyLen);

function unique(arr1, arr2) {
	var len= arr1.length
	for ( i = 0; i < len; i++) {
	// console.log (arrKey[i]);
 		
 	var k = arr2.indexOf(arr1[i]);
 	// console.log(k);
	 	if (k == -1) {
	 		arr2.push(arr1[i])
	 	};
	
	};
};


unique(arrKey, uniqueKey);



 //3.2 Добавяме останалите букви от азбуката, които не се повтарят;

unique(arrAZ, uniqueKey);

//console.log(uniqueKey);




// 4. Наливаме ключовата дума в кодиращия масив;


var arrCipher = new Array (5);

uniqueKeyLen = uniqueKey.length;
console.log(uniqueKeyLen);


for(i =  0; i<uniqueKeyLen; i++){

	for(k = 0; k<5; k++){
		 arrCipher[k] = [];
		for(l = 0; l<5; l++){
	 		arrCipher[k][l] = uniqueKey[i];
	 		i++;

	 		document.write(arrCipher[k][l] + " ");
		};
		document.write("<br/>");

	};

};
console.log(arrCipher);


// arrKeylen = arrKey.length;
// for(i =  0; i<arrKeylen; i++){
// 	// console.log(arrKey[i]);

// for(k = 0; k<5; k++){
// 	 arrCipher[k] = [];
// 	for(l = 0; l<5; l++){
// 	 		arrCipher[k][l] = arrKey[i];
// 	 		i++;

// 		};

// 	};

// };
// console.log(arrCipher);

//5. Проверяваме дали думата за кодиране съдържа празно място и ако да --> го премахваме;
 m= strToCode.indexOf(" ");
 // console.log(m);
 if (m!== -1){
	arrCheck = strToCode.split(" ");
 	strToCode = arrCheck.join("");
 };
 	// console.log(keyword);

// 6. Превръщаме ключовата дума в масив;

arrToCode = strToCode.split("");
console.log(arrToCode);
// 7. Проверяваме дали има повтарящи се букви
var toCodeLen = arrToCode.length;
console.log(toCodeLen);


var count = 0;
var newArr=[];

for(i = 0; i<toCodeLen; i++){
	
	if (arrToCode[i] == arrToCode[i+1]) {
		count ++;
	};
// console.log(count);


	
};
// 8. Разделяме повтарящите се букви с "х";


for (j = 0; j<toCodeLen; j++){
	// newArr.push(arrToCode[j])

	// console.log(j)
	// console.log(arrToCode[j]);
	if (arrToCode[j] == arrToCode[j+1]  ) {
		newArr.push(arrToCode[j]);
		newArr.push("x");
		// 
	}else {
		
		newArr.push(arrToCode[j]);

	};
};

//console.log(newArr);


// 9. Проверяваме дали дължината на newArr е четно число

 var newArrLen = newArr.length;

 if (newArrLen%2 !== 0) {
 	newArr.push("x");
 };
 // console.log(newArr);

//------------------Шифриране на подадения стринг----------------//

//10. Разделяме подадения стринг по двойки



	for(j = 0; j <newArr.length; j+=2){
			for (i = 0; i <newArr.length/2; i++)
				{
				arrDoubles[i] = new Array(2);

				arrDoubles[i][0] = newArr[j];
				arrDoubles[i][1] = newArr[j+1];
				j+=2;

			};
		


			
				
};


console.log(arrDoubles);

// //11. Проверяваме мястото им в шифъра

	// for(k = 0; k<5; k++){
	// 	for(l = 0; l<5; l++){
	// 			for(j = 0; j <arrDoubles.length; j++){
	// 			if (arrDoubles[j][0] == arrCipher[k][l]) {
	// 				// console.log(newArr[i]);
	// 				// console.log( arrDoubles[j][0]);
	// 				// console.log( arrDoubles[j][1]);
	// 				console.log( arrDoubles[j][0] +" --->"+ k + " "+ l);

	// 			};
	// 			if (arrDoubles[j][1] == arrCipher[k][l]) {
	// 				// console.log(newArr[i]);
	// 				// console.log( arrDoubles[j][0]);
	// 				// console.log( arrDoubles[j][1]);
	// 				console.log( arrDoubles[j][1] +" --->"+ k + " "+ l);

	// 			};
	//  		};

	// 	};

	// };



						
//console.log(arrFirst);
for(j = 0; j <arrDoubles.length; j++){

		for(k = 0; k<5; k++){
			for(l = 0; l<5; l++){
			// console.log("current - > 0 " + arrDoubles[j][0]);
			// console.log("current - > 1  " + arrDoubles[j][1]);
				
					if (arrDoubles[j][0] == arrCipher[k][l] ) {
						// console.log("current - > 0 " + arrDoubles[j][0]);
						// console.log(newArr[i]);
						// console.log( arrDoubles[j][0]);
						// console.log( arrDoubles[j][1]);
						console.log( arrDoubles[j][0] + " --->" + k + " "+ l);

																
						
							
					};
			
				
				//  if (arrDoubles[j][1] == arrCipher[k][l]) {
				// // 	// console.log(newArr[i]);
				// // 	// console.log( arrDoubles[j][0]);
				// // 	// console.log( arrDoubles[j][1]);
				// console.log( arrDoubles[j][1] +" --->"+ k + " "+ l);

				//  };
	 		};

		};
	
};

// console.log(arrFirst);

// for(i = 0; i<newArr.length; i++){
// 	newArr[i].position = "1";
// }
// console.log(newArr[1].position);