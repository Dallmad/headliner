import{jsxs as n,jsx as e}from"react/jsx-runtime";import{f as p,u,c as g}from"./formatCurrency-D28xlVPp.js";import{c as i,f as x,r as m,e as v,k as w}from"./index-D6YdblxR.js";import{useState as k}from"react";import"react-dom";import"react-dom/client";const y=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background: #f8fafc;
  border-top: 1px solid #e2e8f0;
`,h=i.button`
  padding: 8px 16px;
  border-radius: 6px;
  border: 1px solid ${t=>t.active?"#3b82f6":"#e2e8f0"};
  background: ${t=>t.active?"#3b82f6":"white"};
  color: ${t=>t.active?"white":"#1e293b"};
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background: ${t=>t.active?"#2563eb":"#f1f5f9"};
  }
`,C=i.span`
  font-size: 0.9rem;
  color: #64748b;
`,P=({total:t,limit:a,skip:r,onPageChange:s})=>{const d=Math.floor(r/a)+1,o=Math.ceil((t??0)/a);return n(y,{children:[e(h,{disabled:d===1,onClick:()=>s(r-a),children:"Back"}),n(C,{children:["Page ",e("strong",{children:d})," from ",o]}),e(h,{disabled:d===o,onClick:()=>s(r+a),children:"Forward"})]})},T=i.div``,I=i.div`
  position: absolute;
  ${({isLast:t})=>t?"bottom: 100%;":"top: 100%;"}
  left: 10px;
  z-index: 9999;
  width: 350px;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  pointer-events: none;
  visibility: visible;
  display: block;
`,$=i.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.2fr;
  font-weight: bold;
  font-size: 0.75rem;
  color: #888;
  gap: 8px;
  border-bottom: 1px solid #eee;
  padding-bottom: 8px;
  margin-bottom: 8px;
  text-transform: uppercase;
`,L=i.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.2fr;
  gap: 8px;
  font-size: 0.85rem;
  margin-bottom: 6px;
  align-items: center;

  span:last-child {
    font-weight: 600;
    text-align: right;
  }
`,z=i.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,A=({products:t,isLastItems:a})=>n(I,{isLast:a,children:[n($,{children:[e("span",{children:"Item"}),e("span",{children:"Price"}),e("span",{children:"Qty"}),e("span",{children:"Total"})]}),t.map(r=>n(L,{children:[e(z,{title:r.title,children:r.title}),e("span",{children:p(r.price)}),n("span",{children:["x",r.quantity]}),e("span",{children:p(r.total)})]},r.id))]}),D=i.div`
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  background: white;
  margin-top: 20px;
  overflow: visible;
  position: relative;
`,M=i.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-family: sans-serif;
`,l=i.th`
  background-color: #f8fafc;
  padding: 12px 16px;
  color: #64748b;
  font-weight: 600;
  border-bottom: 2px solid #e2e8f0;
  text-transform: uppercase;
  font-size: 0.75rem;
`,c=i.td`
  padding: 16px;
  border-bottom: 1px solid #e2e8f0;
  color: #1e293b;
  vertical-align: middle;
`,R=i.td`
  position: relative;
  padding: 12px;
  border-bottom: 1px solid #dee2e6;
`,S=i.tr`
  cursor: pointer;
  transition: background-color 0.2s;
  position: relative;
  &:hover {
    background-color: #f1f5f9;
  }
`,j=({carts:t})=>{const a=x(),[r,s]=k(null),d=o=>{a(`${m.CARTS}/${o}`)};return e(D,{children:n(M,{children:[e("thead",{children:n("tr",{children:[e(l,{children:"Cart ID"}),e(l,{children:"User ID"}),e(l,{children:"Items Count"}),e(l,{children:"Total Amount"})]})}),e("tbody",{children:t?.map((o,f)=>{const b=f>=t.length/2;return n(S,{onClick:()=>d(o.id),onMouseEnter:()=>s(o.id),onMouseLeave:()=>s(null),children:[n(R,{children:["# ",o.id," ",r===o.id&&o.products&&e(A,{products:o.products,isLastItems:b})]}),e(c,{children:o.userId}),n(c,{children:[o.totalProducts," items"]}),e(c,{children:p(o.total)})]},o.id)})})]})})},K=()=>{const{skip:t,limit:a,setSkip:r}=v(),{data:s}=u({queryKey:["carts",10,t],queryFn:()=>g.getCartsList(a,t),placeholderData:w});return n(T,{children:[e(j,{carts:s?.carts}),e(P,{total:s?.total,limit:a,skip:t,onPageChange:r})]})};export{K as default};
