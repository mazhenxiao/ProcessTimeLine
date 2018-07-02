export let mixin=(...arg)=>{
   return (target,name,descriptor)=>{
     Object.assign(target.prototype,...arg);
   }
}