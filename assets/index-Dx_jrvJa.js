import{jsxs as o,jsx as i}from"react/jsx-runtime";import{u as O,f,c as y}from"./formatCurrency-DbFwMuEj.js";import{S as w,s as M,h as v,g as D,n as k,u as P,a as I,b as q,c as a,d as B,e as R,f as j,B as E,D as K,r as A}from"./index-DzBh2GCI.js";import*as u from"react";import"react-dom";import"react-dom/client";var Q=class extends w{#e;#i=void 0;#t;#s;constructor(t,r){super(),this.#e=t,this.setOptions(r),this.bindMethods(),this.#r()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){const r=this.options;this.options=this.#e.defaultMutationOptions(t),M(this.options,r)||this.#e.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#t,observer:this}),r?.mutationKey&&this.options.mutationKey&&v(r.mutationKey)!==v(this.options.mutationKey)?this.reset():this.#t?.state.status==="pending"&&this.#t.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#t?.removeObserver(this)}onMutationUpdate(t){this.#r(),this.#n(t)}getCurrentResult(){return this.#i}reset(){this.#t?.removeObserver(this),this.#t=void 0,this.#r(),this.#n()}mutate(t,r){return this.#s=r,this.#t?.removeObserver(this),this.#t=this.#e.getMutationCache().build(this.#e,this.options),this.#t.addObserver(this),this.#t.execute(t)}#r(){const t=this.#t?.state??D();this.#i={...t,isPending:t.status==="pending",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset}}#n(t){k.batch(()=>{if(this.#s&&this.hasListeners()){const r=this.#i.variables,c=this.#i.context,n={client:this.#e,meta:this.options.meta,mutationKey:this.options.mutationKey};if(t?.type==="success"){try{this.#s.onSuccess?.(t.data,r,c,n)}catch(e){Promise.reject(e)}try{this.#s.onSettled?.(t.data,null,r,c,n)}catch(e){Promise.reject(e)}}else if(t?.type==="error"){try{this.#s.onError?.(t.error,r,c,n)}catch(e){Promise.reject(e)}try{this.#s.onSettled?.(void 0,t.error,r,c,n)}catch(e){Promise.reject(e)}}}this.listeners.forEach(r=>{r(this.#i)})})}};function T(t,r){const c=P(),[n]=u.useState(()=>new Q(c,t));u.useEffect(()=>{n.setOptions(t)},[n,t]);const e=u.useSyncExternalStore(u.useCallback(d=>n.subscribe(k.batchCalls(d)),[n]),()=>n.getCurrentResult(),()=>n.getCurrentResult()),m=u.useCallback((d,p)=>{n.mutate(d,p).catch(I)},[n]);if(e.error&&q(n.options.throwOnError,[e.error]))throw e.error;return{...e,mutate:m,mutateAsync:e.mutate}}const z=a.div`
  padding: 24px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  max-width: 800px;
  margin: 20px auto;
  font-family: 'Inter', sans-serif;
`,L=a.div`
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 16px;
  margin-bottom: 24px;
`,U=a.div`
  display: flex;
  gap: 20px;
  color: #666;
  font-size: 0.95rem;
  margin-top: 8px;
`,F=a.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,N=a.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  align-items: center;
  padding: 12px;
  background: #f9f9f9;
  border-radius: 8px;
  transition: transform 0.2s;
  gap: 8px;

  &:hover {
    transform: translateX(4px);
    background: #f1f1f1;
  }
`,l=a.span`
  font-size: 0.75rem;
  color: #999;
  text-transform: uppercase;
  display: block;
  margin-bottom: 2px;
`,h=a.span`
  font-weight: 500;
  color: #333;
`,X=a.div`
  margin-top: 32px;
  padding-top: 20px;
  border-top: 2px dashed #eee;
  text-align: right;
`,G=a.h2`
  font-size: 1.8rem;
  color: #007bff;
  margin: 0;
`,H=a.h2`
  font-size: 0.9rem;
  color: #28a745;
  margin-top: 4px;
`,V=a.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  padding: 8px 0;
  margin-bottom: 16px;
  transition:
    color 0.2s,
    transform 0.2s;

  &:hover {
    color: #0056b3;
    transform: translateX(-4px);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`,J=a.div`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: flex-end;
`,W=a.div`
  display: flex;
  align-items: center;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 6px;
  overflow: hidden;
`,C=a.button`
  padding: 4px 10px;
  background: #eee;
  border: none;
  cursor: pointer;
  &:hover {
    background: #ddd;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`,Y=a.button`
  background: #ff4d4f;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background 0.2s;
  &:hover {
    background: #ff7875;
  }
`,st=()=>{const{cartId:t}=B(),r=P(),{setNotification:c}=R(),n=j(),{data:e}=O({queryKey:["cart",t],queryFn:()=>y.getCartById(t),enabled:!!t}),m=()=>{n(A.CARTS)},d=T({mutationFn:s=>y.updateCart(t,s),onSuccess:s=>{c({message:"Successfully updated cart",type:"success"}),r.setQueryData(["cart",t],s)}}),p=(s,b)=>{if(!e)return;const g=e.products.map(x=>x.id===s?{...x,quantity:b}:x);d.mutate(g)},S=s=>{if(!e)return;const b=e.products.filter(g=>g.id!==s);d.mutate(b)};return o(z,{children:[o(V,{onClick:m,children:[i(E,{}),"Back to List"]}),o(L,{children:[i("h2",{children:"Cart Details"}),o(U,{children:[o("span",{children:[i(l,{children:"Cart ID"})," ",o(h,{children:["# ",e?.id]})]}),o("span",{children:[i(l,{children:"User ID"})," ",i(h,{children:e?.userId})]})]})]}),i(F,{children:e?.products?.map(s=>o(N,{children:[o("div",{children:[i(l,{children:"Product"}),i(h,{children:s.title})]}),o("div",{children:[i(l,{children:"Price"}),i(h,{children:f(s?.price)})]}),o(J,{children:[o(W,{children:[i(C,{onClick:()=>p(s.id,s.quantity-1),disabled:s.quantity<=1||d.isPending,children:"-"}),i("span",{style:{padding:"0 10px"},children:s.quantity}),i(C,{onClick:()=>p(s.id,s.quantity+1),disabled:d.isPending,children:"+"})]}),i(Y,{onClick:()=>S(s.id),disabled:d.isPending,children:i(K,{})})]}),o("div",{style:{textAlign:"right"},children:[i(l,{children:"Subtotal"}),i(h,{children:f(s?.total)})]})]},s.id))}),o(X,{children:[i(l,{children:"Total Amount"}),i(G,{children:f(e?.total)}),(e?.discountedTotal??0)<(e?.total??0)&&o(H,{children:["Discounted price: ",f(e?.discountedTotal)]})]})]})};export{st as default};
