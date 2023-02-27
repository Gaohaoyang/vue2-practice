import{V as o,n as r,E as c,L as l,N as i,a as d}from"./index.6f249051.js";const _=o.extend({props:{pic:{type:String,required:!0}},data:()=>({loaded:!1}),methods:{handleLoad(){this.loaded=!0}}});var p=function(){var s=this,t=s._self._c;return s._self._setupProxy,t("div",{staticClass:"wrap"},[t("img",{staticClass:"pic",class:s.loaded?"shadow":"",attrs:{src:s.pic,alt:"dog"},on:{load:s.handleLoad}})])},u=[],g=r(_,p,u,!1,null,"0b2b6482",null,null);const h=g.exports,f=o.extend({created(){this.getDogsPics()},components:{ErrStatus:c,LoadingDots:l,Pic:h,Navbar:i},data:()=>({showErr:!1,loading:!0,pics:[]}),methods:{getDogsPics(){d.get(`https://dog.ceo/api/breed/${this.$route.params.breed}/images/random/10`).then(e=>{console.log(e.data),e.data.status==="success"?(console.log(e.data.message),this.pics=e.data.message,this.loading=!1):(console.log("error"),this.handleError())}).catch(e=>{console.log(e),this.handleError()})},handleError(){this.showErr=!0,this.loading=!1}}});var m=function(){var s=this,t=s._self._c;return s._self._setupProxy,t("div",{staticClass:"container"},[t("Navbar",{attrs:{title:s.$route.params.breed}}),s.loading?t("LoadingDots"):s._e(),s.showErr?t("ErrStatus"):s._e(),s._l(s.pics,function(n,a){return t("Pic",{key:a,style:{marginBottom:a===s.pics.length-1?"80px":"0"},attrs:{pic:n}})})],2)},v=[],x=r(f,m,v,!1,null,"cd61820d",null,null);const b=x.exports;export{b as default};
