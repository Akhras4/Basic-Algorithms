const x=[];
const z=[];
for (let i=1; i<136;i++){
    x.push=(i);
    if(i%2==true){
        z.push(i);
    }
}
console.log(z)

const w = [1, 4, 2, 12];
for (let i = 0; i < w.length; i++) {
    console.log(w[i]);
}
console.log()

const Find = [-11, -44, -2, -12,-20,-1,-22];
Find.sort(function(a,b){return a-b})
const Findmax=Find.slice(-1)
console.log(Findmax)


const get=[1,2,3,4]
let q =0;
for (let i = 0; i < get.length; i++) {
q+=get[i]
var ave=get.length;
}
var eqalAve=q/ave;
console.log(eqalAve)

const m = [1, -4, 2, -12];
for (let i = 0; i < m.length; i++) {
    if (m[i]<=0){
       m[i]=0; 
    }
}
console.log(m)


const o = [1, -4, 2, -12];
for (let i = 0; i < m.length; i++) {
    if (o[i]<=0){
       o[i]='turing'; 
    }
}
console.log(o)
