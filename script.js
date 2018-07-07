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
			strToCode = "we are the champions my friend",
			arrToCode,
			arrDoubles = [],
			arrFirst = [],
			arrSecond = [],
			arrEncoded = [],
			strEncoded;




//1.  Въвеждаме кодовата дума, която е стринг;

 keyword = "everything is love";

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

//11. Правим проверка на съответстващия индекс от шифър-масива на амасива за кодиране

	//11.1 Създаваме два помощни масива, в които ще съхраняваме стойностие на индексите;
for(j = 0; j <newArr.length; j+=2){
	for (i = 0; i <newArr.length/2; i++)
		{
		arrFirst[i] = new Array(2);

		arrFirst[i][0] = newArr[j];
		arrFirst[i][1] = newArr[j+1];
		j+=2;
	};	
};
//console.log(arrFirst);

for(j = 0; j <newArr.length; j+=2){
	for (i = 0; i <newArr.length/2; i++)
		{
		arrSecond[i] = new Array(2);

		arrSecond[i][0] = newArr[j];
		arrSecond[i][1] = newArr[j+1];
		j+=2;
	};	
};
//console.log(arrSecond);


for(j = 0; j <newArr.length; j+=2){
	for (i = 0; i <newArr.length/2; i++)
		{
		arrEncoded[i] = new Array(2);

		arrEncoded[i][0] = newArr[j];
		arrEncoded[i][1] = newArr[j+1];
		j+=2;
	};	
};
//console.log(arrEncoded);



//11.. 2 Проверяваме мястото им в шифъра

						


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
						console.log(arrDoubles[j][0] + " --->" + k + " "+ l);
						arrFirst[j][0] =k;
						arrFirst[j][1] =l;
																
						
							
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

//console.log(arrFirst);


for(j = 0; j <arrDoubles.length; j++){

		for(k = 0; k<5; k++){
			for(l = 0; l<5; l++){
			// console.log("current - > 0 " + arrDoubles[j][0]);
			// console.log("current - > 1  " + arrDoubles[j][1]);
				
					if (arrDoubles[j][1] == arrCipher[k][l] ) {
						// console.log("current - > 0 " + arrDoubles[j][0]);
						// console.log(newArr[i]);
						// console.log( arrDoubles[j][0]);
						// console.log( arrDoubles[j][1]);
						console.log(arrDoubles[j][1] + " --->" + k + " "+ l);
						arrSecond[j][0] =k;
						arrSecond[j][1] =l;
																
						
							
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

//console.log(arrSecond);




for(j = 0; j <arrDoubles.length; j++){
	//console.log(arrDoubles[j]);
// Hx
	k = arrFirst[j][0];
// Ix
	l = arrSecond[j][0];
// Hy
	m = arrFirst[j][1];
// Iy;
	n = arrSecond[j][1];
	// console.log(k);
	// console.log(m);
	// console.log(l);
	// console.log(n);
	

//12.  Проверяваме дали двойката букви за кодиране се намират в ред
			if (k == l) {
			//	console.log("row");
				if (m<4) {
				arrEncoded[j][0] = arrCipher[l][m+1]; 
				
				} else {
				arrEncoded[j][0] = arrCipher[l][0];
				
				};
				if (n < 4) {
					arrEncoded[j][1] = arrCipher[k][n+1];
				} else{
					arrEncoded[j][1] = arrCipher[k][0];
				}
				// console.log(arrDoubles[j]);
				// console.log(arrCipher[l][m+1]);
				// console.log(arrCipher[l][n+1]);
			};
//13.  Проверяваме дали двойката букви за кодиране се намират в колона			
			if (m == n) {
			//	console.log("column");

			if (l< 4 ) {
				arrEncoded[j][0] = arrCipher[l+1][m]; 
			}else {
				arrEncoded[j][0] = arrCipher[0][m]; 
			};
				if (k < 4) {
					arrEncoded[j][1] = arrCipher[k+1][n];
				} else {
					arrEncoded[j][1] = arrCipher[0][n];
				}
				
				// console.log(arrDoubles[j]);
				// console.log(arrCipher[l+1][m]);
				// console.log(arrCipher[k+1][m])
			};
//14.  Проверяваме дали двойката букви за кодиране се намират в правоъгълник			
			if (k !== l && m!==n){
			//	console.log("recrangle");
				if (k<n) {
					arrEncoded[j][0] = arrCipher[k][n]; 
					arrEncoded[j][1] = arrCipher[l][m];	
				} else {
					arrEncoded[j][1] = arrCipher[k][n]; 
					arrEncoded[j][0] = arrCipher[l][m];	
				}
				
				// console.log(arrDoubles[j]);
				// console.log(arrCipher[k][n]);
				// console.log(arrCipher[l][m]);
				
							
				
	};
};	


// console.log(arrDoubles);

// console.log(arrEncoded);

//15. Отпечатваме шифрования стринг
strEncoded = arrEncoded.join("");
var myArr = strEncoded.split(",");
strEncoded =  myArr.join("");

console.log(strEncoded);