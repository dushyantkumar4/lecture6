// const employee={
//     calcTax(){
//         console.log(`tax will be 10% of credited amount`);
//     }
// }

// const karan={
//     salary:50000,
//     calcTax(){
//         console.log(`tax will be 20% if salary more than 1 lakh `);   
//     }
// }

// karan.__proto__=employee;
// console.log(karan);
// console.log(karan.calcTax());

// class toyotaCar{
//     constructor(brand,mileage){
//         console.log("creating new object");
//         this.brand=brand;
//     }
//     stop(){
//         console.log("stop");
//     }
//     start(){
//         console.log("strat");
//     }
//     // setBrand(brand){
//     //     this.brandName=brand;
//     // }
// }
// let fortuner=new toyotaCar("fortuner",10);
// console.log(fortuner);
// let lexus=new toyotaCar("lexus",12);
// console.log(lexus);
// // console.log(fortuner.start());
// // fortuner.setBrand("fortuner");

// console.log(lexus.stop());
// lexus.setBrand(`legender`);
// console.log(lexus.brandName);

// class parent{
//     hello(){
//         console.log(`parent class to child`)
//     }
// }
// class child extends parent{};

// let obj=new child();
// console.log(obj.hello);

// class person{
//     constructor(){
//         this.species="homo sapiens";
//     }
//     eat(){
//         console.log("he can eat");
//     }
//     sleep(){
//         console.log("he can sleep");
//     }
// }
// class engineer extends person{
//     work(){
//         console.log("he is specialist in his work");
//     }
// }
// const dushyant=new engineer();
// // console.log(dushyant.eat());
// class doctor extends person{
//     work(){
//         console.log("treat patients");
//     }
// }
// const akash=new doctor();
// console.log(akash.eat());
// let p1=new person();
// let e1=new engineer();
// console.log(p1,e1);

// class person{
//     constructor(name){
//         this.species="homo sapience";
//         this.name=name;
//     }

//     eat(){
//         console.log("he can eat");
//     }
// }

// class Engineer extends person{
//     constructor(name){
//         super(name); //to invoke parent constructor
//     }
//     work(){
//         super.eat();
//         console.log("he has speciality in cs");
//     }
// }

// const engObj=new Engineer("dushyant");
// console.log(engObj);

//Question 1
// let DATA="secrate information about the website";
// class user{
//     constructor(name,email){
//         this.name=name;
//         this.email=email;
//     }

//     viewData(){
//         console.log(`website data is :${DATA}`);
//     }
// } 

// class Admin extends user{
//     constructor(name,email){
//         super(name,email);
//     }
//     editData(){
//         DATA="some new value";
//     }
// }

// const student1=new user("dushyant","abc@gamil.com");
// const student2=new user("minakshi","minakshi@gmail.com");

// const teacher1=new user("manoj","teacher@gmail.com");

// const admin1=new Admin("dushyant","hello@gamil.com");

//ASYNC CODE PRACTICE
// function sum(a,b){
//     console.log(a+b);
// }
// function calculator(a,b,callBack){
//     callBack(a,b);
// }
// console.log(calculator(1,2,sum));

// function hello(){
//     console.log("hello");
// }

// setTimeout(hello,3000);

// function getData(data,delay,anoFun){
//     setTimeout(()=>{
//         console.log(`data${data}`);
//         if(anoFun) anoFun();
//     },delay)
// }
// getData(123,1000,()=>{
//     getData(345,1000,()=>{
//         getData(456,1000);
//     });
// }
// );

// const promise1=new Promise(function(res,rej){
//     setTimeout(()=>{
//         let num=Math.floor(Math.random()*10)+1;
//         if(num>4){
//             res({username:"dusyant",marks:99,age:22});
//         }else{
//             rej("Error:internal error");
//         }
//     },1000);
// });
// promise1.then((user)=>{
//     console.log(user);
//     return user.username;
// }).then((username)=>{
//     console.log(username);
// })
// .catch((error)=>{
//     console.log(`Network ${error}`);
// }).finally(()=>{
//     console.log("it'll always run");
// });

// function getData(dataId,nextFun){
//     return new Promise((resoleve,rejected)=>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resoleve("success");
//             if(nextFun){
//                 nextFun();
//             }
//         },5000);
//     });
// }
// let result=getData(1234);
// console.log(result);

// const getPromise=()=>{
//     return new Promise((resolve, rejected)=>{
//         // console.log("this is promise");
//         // resolve("promise resolved");
//         rejected("Rejected:Network error");

//     });
// }
// const value=getPromise();
// console.log(value);
// value.then((res)=>{
//     console.log(`Success: ${res}`);
// }
// )
//  value.catch((err)=>{
//     console.warn(err);
//  })

// function asyncFun(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("some data ");
//             res("promise resloved");
//         },3000);
//     });
// }

// function asyncFun2(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("some data2");
//             res("promise2 resolved");
//         },3000);
//     });
// }

// console.log("fatching fun 1.....");
// asyncFun().then((succ)=>{
//     // console.log(succ);
//     console.log("fatching fun 2.....");
//     asyncFun2().then((res)=>{
//         // console.log(res);
//     });
// });

// function getData(dataId,nextFun){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log(`getting data ${dataId}`);
//             res("success");
//         },4000)
//     })
// }
// getData(1).then((succ1)=>{
//     console.log(succ1);
//     return getData(2);
// }).then((succ)=>{
//     console.log(succ);
// })

// function api(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("Weather data");
//             res(200);
//         },2000);
//     });
// }

// async function weatherD(){
//     await api();
//     await api();
// }

function getData(dataId){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log(`getting data ${dataId}`);
            res("success");
        },2000)
    })
}

async function hello(){
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
    await getData(5);
}
(async function hello(){
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
    await getData(5);
})();