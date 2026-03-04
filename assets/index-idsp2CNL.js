import{S as P,s as S,h as g,g as O,n as v,u as C,r as l,a as w,b as M,c as o,d as D,e as I,f as q,i as E,j as t,B,k as p,D as R,l as K,m as y}from"./index-CX5BI1iw.js";var A=class extends P{#s;#i=void 0;#t;#e;constructor(s,r){super(),this.#s=s,this.setOptions(r),this.bindMethods(),this.#r()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(s){const r=this.options;this.options=this.#s.defaultMutationOptions(s),S(this.options,r)||this.#s.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#t,observer:this}),r?.mutationKey&&this.options.mutationKey&&g(r.mutationKey)!==g(this.options.mutationKey)?this.reset():this.#t?.state.status==="pending"&&this.#t.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#t?.removeObserver(this)}onMutationUpdate(s){this.#r(),this.#n(s)}getCurrentResult(){return this.#i}reset(){this.#t?.removeObserver(this),this.#t=void 0,this.#r(),this.#n()}mutate(s,r){return this.#e=r,this.#t?.removeObserver(this),this.#t=this.#s.getMutationCache().build(this.#s,this.options),this.#t.addObserver(this),this.#t.execute(s)}#r(){const s=this.#t?.state??O();this.#i={...s,isPending:s.status==="pending",isSuccess:s.status==="success",isError:s.status==="error",isIdle:s.status==="idle",mutate:this.mutate,reset:this.reset}}#n(s){v.batch(()=>{if(this.#e&&this.hasListeners()){const r=this.#i.variables,d=this.#i.context,n={client:this.#s,meta:this.options.meta,mutationKey:this.options.mutationKey};if(s?.type==="success"){try{this.#e.onSuccess?.(s.data,r,d,n)}catch(e){Promise.reject(e)}try{this.#e.onSettled?.(s.data,null,r,d,n)}catch(e){Promise.reject(e)}}else if(s?.type==="error"){try{this.#e.onError?.(s.error,r,d,n)}catch(e){Promise.reject(e)}try{this.#e.onSettled?.(void 0,s.error,r,d,n)}catch(e){Promise.reject(e)}}}this.listeners.forEach(r=>{r(this.#i)})})}};function Q(s,r){const d=C(),[n]=l.useState(()=>new A(d,s));l.useEffect(()=>{n.setOptions(s)},[n,s]);const e=l.useSyncExternalStore(l.useCallback(a=>n.subscribe(v.batchCalls(a)),[n]),()=>n.getCurrentResult(),()=>n.getCurrentResult()),x=l.useCallback((a,h)=>{n.mutate(a,h).catch(w)},[n]);if(e.error&&M(n.options.throwOnError,[e.error]))throw e.error;return{...e,mutate:x,mutateAsync:e.mutate}}const T=o.div`
  padding: 24px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  max-width: 800px;
  margin: 20px auto;
  font-family: 'Inter', sans-serif;
`,z=o.div`
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 16px;
  margin-bottom: 24px;
`,L=o.div`
  display: flex;
  gap: 20px;
  color: #666;
  font-size: 0.95rem;
  margin-top: 8px;
`,U=o.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,F=o.div`
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
`,c=o.span`
  font-size: 0.75rem;
  color: #999;
  text-transform: uppercase;
  display: block;
  margin-bottom: 2px;
`,u=o.span`
  font-weight: 500;
  color: #333;
`,N=o.div`
  margin-top: 32px;
  padding-top: 20px;
  border-top: 2px dashed #eee;
  text-align: right;
`,X=o.h2`
  font-size: 1.8rem;
  color: #007bff;
  margin: 0;
`,G=o.h2`
  font-size: 0.9rem;
  color: #28a745;
  margin-top: 4px;
`,H=o.button`
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
`,V=o.div`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: flex-end;
`,J=o.div`
  display: flex;
  align-items: center;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 6px;
  overflow: hidden;
`,j=o.button`
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
`,W=o.button`
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
`,Z=()=>{const{cartId:s}=D(),r=C(),{setNotification:d}=I(),n=q(),{data:e}=E({queryKey:["cart",s],queryFn:()=>y.getCartById(s),enabled:!!s}),x=()=>{n(K.CARTS)},a=Q({mutationFn:i=>y.updateCart(s,i),onSuccess:i=>{d({message:"Successfully updated cart",type:"success"}),r.setQueryData(["cart",s],i)}}),h=(i,f)=>{if(!e)return;const m=e.products.map(b=>b.id===i?{...b,quantity:f}:b);a.mutate(m)},k=i=>{if(!e)return;const f=e.products.filter(m=>m.id!==i);a.mutate(f)};return t.jsxs(T,{children:[t.jsxs(H,{onClick:x,children:[t.jsx(B,{}),"Back to List"]}),t.jsxs(z,{children:[t.jsx("h2",{children:"Cart Details"}),t.jsxs(L,{children:[t.jsxs("span",{children:[t.jsx(c,{children:"Cart ID"})," ",t.jsxs(u,{children:["# ",e?.id]})]}),t.jsxs("span",{children:[t.jsx(c,{children:"User ID"})," ",t.jsx(u,{children:e?.userId})]})]})]}),t.jsx(U,{children:e?.products?.map(i=>t.jsxs(F,{children:[t.jsxs("div",{children:[t.jsx(c,{children:"Product"}),t.jsx(u,{children:i.title})]}),t.jsxs("div",{children:[t.jsx(c,{children:"Price"}),t.jsx(u,{children:p(i?.price)})]}),t.jsxs(V,{children:[t.jsxs(J,{children:[t.jsx(j,{onClick:()=>h(i.id,i.quantity-1),disabled:i.quantity<=1||a.isPending,children:"-"}),t.jsx("span",{style:{padding:"0 10px"},children:i.quantity}),t.jsx(j,{onClick:()=>h(i.id,i.quantity+1),disabled:a.isPending,children:"+"})]}),t.jsx(W,{onClick:()=>k(i.id),disabled:a.isPending,children:t.jsx(R,{})})]}),t.jsxs("div",{style:{textAlign:"right"},children:[t.jsx(c,{children:"Subtotal"}),t.jsx(u,{children:p(i?.total)})]})]},i.id))}),t.jsxs(N,{children:[t.jsx(c,{children:"Total Amount"}),t.jsx(X,{children:p(e?.total)}),(e?.discountedTotal??0)<(e?.total??0)&&t.jsxs(G,{children:["Discounted price: ",p(e?.discountedTotal)]})]})]})};export{Z as default};
