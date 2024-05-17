// cú pháp ts :
// let/const <tên biến> : <kiểu dữ liêu> = <giá trị>

let a :number = 10; // number 
let string:string = "hung hx";
let b : boolean = true;
let any :any = false;
any = "hung hx"; 
let empty : null = null; // có giá trị nhưng lai là rỗng
let undef:undefined =undefined; // ko có giá trị , chưa được gán

const showInfo=(info : string):void=>{
    console.log(info);
}

// tính tổng 2 số

const sum=(a:number,b:number) : number =>{
    return a+b;
}

let numberOrString: number|string = "hung"; //số hoặc chuỗi


// khai báo mảng
// c1
let arr: number[] = [1,2,3,4]
// c2
let arr2: Array<number> = [1,2,3,4]

// khai báo đôi tượng