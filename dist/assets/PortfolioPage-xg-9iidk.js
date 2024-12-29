import{h as p,r as i,j as m,d as u}from"./vendor-gPAzqeJY.js";import{i as j,j as a,k as x,l as P}from"./index-ClpAJCsq.js";const y=()=>{const[c,e]=p(),{getProjectsByCategory:r,isLoading:n}=j(),[l,g]=i.useState([]),t=c.get("category")||"";i.useEffect(()=>{r(t).then(s=>{g(s)})},[t,r]),i.useEffect(()=>{a.includes(t)||e({category:"marketplace"})},[t,e]);const d=s=>{const f=a[s];e({category:f})};let o=a.findIndex(s=>s===t);return o=o===-1?0:o,{projects:l,isLoading:n,onChangeCategory:d,selectedIndex:o}},v=()=>{const{selectedIndex:c,projects:e,isLoading:r,onChangeCategory:n}=y();return m.jsxs(h,{children:[m.jsx(x,{sections:a,selectedIndex:c,onSelectSection:n,size:"s",outline:!1}),m.jsx(P,{projects:e,isLoading:r})]})},h=u.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(1.875rem, 1.9608vw + 1.3971rem, 3.75rem);
  padding: clamp(1rem, 4.183vw + -0.0196rem, 5rem) 0
    clamp(1.25rem, 5.2288vw + -0.0245rem, 6.25rem);
`;export{v as PortfolioPage,v as default};
