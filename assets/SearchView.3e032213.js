import{A as _}from"./aviutlModuleRepository.2111ddbd.js";import{d as i,w as d,r as v,c as h,a as b,b as s,u as y,F as V,e as r,o as f}from"./index.e7babb1e.js";const B=i({__name:"SearchView",async setup(w){let a,n;const l=([a,n]=d(()=>_.getInstance()),a=await a,n(),a),t=v(""),u=h(()=>l.findAllBySha256(t.value).map(e=>({filename:e.filename,name:e.name,version:e.version,build:e.build,author:e.author,url:e.url,sha256:e.sha256})));return(e,o)=>{const m=r("va-input"),c=r("va-data-table");return f(),b(V,null,[s(m,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=p=>t.value=p)},null,8,["modelValue"]),s(c,{items:y(u)},null,8,["items"])],64)}}});export{B as default};