var h=Object.defineProperty;var d=(s,a,n)=>a in s?h(s,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[a]=n;var i=(s,a,n)=>(d(s,typeof a!="symbol"?a+"":a,n),n);const e=class{constructor(){i(this,"data");this.data=new Array}static async init(){const a=new e;return a.data=await fetch(this.dbUrl).then(n=>n.json()).then(n=>{const r=[];for(const c of n)r.push(c);return r}),a}static async getInstance(){return this.instance||(this.instance=await this.init()),this.instance}findBySha256(a){return this.data.find(n=>n.sha256===a)}search(a){return a==""?this.data:this.data.filter(n=>n.sha256.includes(a.toUpperCase())||n.filename.includes(a)||n.name.includes(a)||n.author.includes(a)||n.version.includes(a)||n.build.includes(a)||n.url.includes(a))}};let t=e;i(t,"dbUrl",new URL("/aviutl-hash-finder/assets/db.68a4b721.json",self.location).href),i(t,"instance");export{t as A};
