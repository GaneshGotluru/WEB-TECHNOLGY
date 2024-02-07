// let str= 'Jspiders'
// console.log(str);
// console.log(typeof str)

// let str1=String('Hebbal')
// console.log(str1)
// console.log(typeof str1)

// let str2=String(true)
// console.log(str2)
// console.log(typeof str2)

// console.log(str1.length)

// console.warn('Stratswith Method')
// let sw1=str.startsWith('J')
// console.log(sw1)

// console.log(str.startsWith('j'))
// console.log(String('Hai').startsWith('H'))

// let sw2=str.startsWith('spi',1)// here we are passing index position of string
// console.log(sw2)


// console.log(str.endsWith('s'))//true  // here we are passing  the length of str character 
// console.log(str.endsWith('e'))//false
// console.log(str.endsWith('e',6))//true


// let para='Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus numquam temporibus tenetur nulla commodi reiciendis ducimus, nobis necessitatibus maxime fuga amet iusto, autem nemo vel, ad labore sit! Deserunt, quia?'

// console.log(para)
// console.log(para.toUpperCase())
// console.log(para.toLowerCase())


// let str4='Nothing'
// console.log(str4.charAt(4))
// console.log(str4.charCodeAt(4))

// let str5='JavaScript'
// console.log(str5.indexOf('a'))
// console.log(str5.lastIndexOf('a'))
// console.log(str5.indexOf('z'))
// // console.log(str5.lastIndexOf(''))

// let str6='JavaScript'
// console.log(str6.substring(0,4));
// console.log(str6.substring(1,6));
// console.log(str6.substring(4,0));
// console.log(str6.substring(4));


// console.log(str6.substr(0,4));//Java
// console.log(str6.substr(1,4));//avaS
// console.log(str6.substr(3,5));//aScrip


// console.log(str6.slice(0,-6));
// console.log(str6.slice(-8,8));
// console.log(str6.slice(6,-1));
// console.log(str6.slice(8,-8));//here only forward slicing no back word slicing (empty)


// let str7="Something "
// console.log(str7)
// console.log(str7.length)
// console.log(str7.repeat(3))



let srg='      Goal is web developer        '
console.log(srg)
console.log(srg.length)

let t1=srg.trim()
console.log(t1)
console.log(t1.length)

let s1= t1.split() // to convert string to array
console.log(s1)

let s2= t1.split(' ') // spliting words
console.log(s2)

let s3= t1.split('') // spliting characters
console.log(s3)

let arr=['hi','how','are','you','?']
console.log(arr)
console.log(typeof arr)

let j=arr.join()
console.log(j)
console.log(typeof j)

console.log(arr.join(' '))