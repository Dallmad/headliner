import{c as r,j as e,f as b,r as f,i as u,e as g,k as m}from"./index-BQl0LHhe.js";import{f as c,u as j,c as v}from"./formatCurrency-DTqH7yTR.js";const w=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background: #f8fafc;
  border-top: 1px solid #e2e8f0;
`,p=r.button`
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
`,k=r.span`
  font-size: 0.9rem;
  color: #64748b;
`,y=({total:t,limit:i,skip:s,onPageChange:n})=>{const a=Math.floor(s/i)+1,o=Math.ceil((t??0)/i);return e.jsxs(w,{children:[e.jsx(p,{disabled:a===1,onClick:()=>n(s-i),children:"Back"}),e.jsxs(k,{children:["Page ",e.jsx("strong",{children:a})," from ",o]}),e.jsx(p,{disabled:a===o,onClick:()=>n(s+i),children:"Forward"})]})},C=r.div``,P=r.div`
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
`,T=r.div`
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
`,I=r.div`
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
`,$=r.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,L=({products:t,isLastItems:i})=>e.jsxs(P,{isLast:i,children:[e.jsxs(T,{children:[e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Price"}),e.jsx("span",{children:"Qty"}),e.jsx("span",{children:"Total"})]}),t.map(s=>e.jsxs(I,{children:[e.jsx($,{title:s.title,children:s.title}),e.jsx("span",{children:c(s.price)}),e.jsxs("span",{children:["x",s.quantity]}),e.jsx("span",{children:c(s.total)})]},s.id))]}),z=r.div`
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  background: white;
  margin-top: 20px;
  overflow: visible;
  position: relative;
`,R=r.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-family: sans-serif;
`,d=r.th`
  background-color: #f8fafc;
  padding: 12px 16px;
  color: #64748b;
  font-weight: 600;
  border-bottom: 2px solid #e2e8f0;
  text-transform: uppercase;
  font-size: 0.75rem;
`,l=r.td`
  padding: 16px;
  border-bottom: 1px solid #e2e8f0;
  color: #1e293b;
  vertical-align: middle;
`,A=r.td`
  position: relative;
  padding: 12px;
  border-bottom: 1px solid #dee2e6;
`,D=r.tr`
  cursor: pointer;
  transition: background-color 0.2s;
  position: relative;
  &:hover {
    background-color: #f1f5f9;
  }
`,M=({carts:t})=>{const i=b(),[s,n]=f.useState(null),a=o=>{i(`${u.CARTS}/${o}`)};return e.jsx(z,{children:e.jsxs(R,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx(d,{children:"Cart ID"}),e.jsx(d,{children:"User ID"}),e.jsx(d,{children:"Items Count"}),e.jsx(d,{children:"Total Amount"})]})}),e.jsx("tbody",{children:t?.map((o,x)=>{const h=x>=t.length/2;return e.jsxs(D,{onClick:()=>a(o.id),onMouseEnter:()=>n(o.id),onMouseLeave:()=>n(null),children:[e.jsxs(A,{children:["# ",o.id," ",s===o.id&&o.products&&e.jsx(L,{products:o.products,isLastItems:h})]}),e.jsx(l,{children:o.userId}),e.jsxs(l,{children:[o.totalProducts," items"]}),e.jsx(l,{children:c(o.total)})]},o.id)})})]})})},E=()=>{const{skip:t,limit:i,setSkip:s}=g(),{data:n}=j({queryKey:["carts",10,t],queryFn:()=>v.getCartsList(i,t),placeholderData:m});return e.jsxs(C,{children:[e.jsx(M,{carts:n?.carts}),e.jsx(y,{total:n?.total,limit:i,skip:t,onPageChange:s})]})};export{E as default};
