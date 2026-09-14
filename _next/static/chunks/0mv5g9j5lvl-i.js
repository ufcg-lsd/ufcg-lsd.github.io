(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,5014,e=>{"use strict";var t=e.i(71645),r=e.i(71987),s=e.i(88973),a=e.i(96661);let i=(0,t.createContext)({}),l=(0,t.forwardRef)(({color:e,size:l,strokeWidth:n,absoluteStrokeWidth:o,className:c="",children:d,iconNode:h,...m},g)=>{let{size:x=24,strokeWidth:u=2,absoluteStrokeWidth:f=!1,color:p="currentColor",className:b=""}=(0,t.useContext)(i)??{},y=o??f?24*Number(n??u)/Number(l??x):n??u;return(0,t.createElement)("svg",{ref:g,...r.default,width:l??x??r.default.width,height:l??x??r.default.height,stroke:e??p,strokeWidth:y,className:(0,a.mergeClasses)("lucide",b,c),...!d&&!(0,s.hasA11yProp)(m)&&{"aria-hidden":"true"},...m},[...h.map(([e,r])=>(0,t.createElement)(e,r)),...Array.isArray(d)?d:[d]])});e.s(["default",0,l],5014)},71987,88973,e=>{"use strict";e.s(["default",0,{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}],71987),e.s(["hasA11yProp",0,e=>{for(let t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0;return!1}],88973)},96661,e=>{"use strict";e.s(["mergeClasses",0,(...e)=>e.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim()])},536,e=>{"use strict";var t=e.i(43476);e.s(["PaginationControls",0,({currentPage:e,totalPages:r,onPageChange:s})=>r<=1?null:(0,t.jsxs)("div",{className:"mt-8 flex justify-between text-sm text-gray-600",children:[(0,t.jsx)("button",{onClick:()=>s(e=>e-1),disabled:0===e,className:"flex items-center gap-1 cursor-pointer transition-colors hover:text-gray-900 disabled:opacity-30",children:"← Anterior"}),(0,t.jsxs)("span",{className:"text-gray-500",children:[e+1,"/",r," páginas"]}),(0,t.jsx)("button",{onClick:()=>s(e=>e+1),disabled:e>=r-1,className:"flex items-center gap-1 cursor-pointer transition-colors hover:text-gray-900 disabled:opacity-30",children:"Próximo →"})]})])},47490,e=>{"use strict";var t=e.i(43476),r=e.i(467),s=e.i(66416),a=e.i(71645),i=e.i(18566);let l=(0,e.i(56420).default)("mail",[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]);var n=e.i(51514),o=e.i(57688);let c=({professor:e,onTagSelect:r})=>{let[s,...a]=e?.workingFieldsCollection?.items??[];return(0,t.jsxs)("div",{className:"flex items-start gap-3 border-b border-gray-200 py-4",children:[(0,t.jsx)("div",{className:"size-20 shrink-0 overflow-hidden rounded-md bg-gray-100",children:(0,t.jsx)(o.default,{src:e.photo.url,width:128,height:128,alt:e.name,className:"h-full w-full object-cover"})}),(0,t.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h2",{className:"text-md font-bold text-gray-900",children:e.name}),(0,t.jsx)("p",{className:"text-sm text-gray-500",children:e.role})]}),(0,t.jsxs)("div",{className:"flex flex-wrap items-center gap-2",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2 text-gray-500",children:[e.email&&(0,t.jsx)("a",{href:`mailto:${e.email}`,className:"hover:text-blue-600",children:(0,t.jsx)(l,{size:18,strokeWidth:1.5})}),e.github&&(0,t.jsx)("a",{href:e.github,target:"_blank",rel:"noreferrer",className:"hover:text-blue-600",children:(0,t.jsx)(n.Icon,{id:"github",size:18})}),e.lattes&&(0,t.jsx)("a",{href:e.lattes,target:"_blank",rel:"noreferrer",className:"hover:text-blue-600",children:(0,t.jsx)(n.Icon,{id:"lattes",size:18})}),e.linkedin&&(0,t.jsx)("a",{href:e.linkedin,target:"_blank",rel:"noreferrer",className:"hover:text-blue-600",children:(0,t.jsx)(n.Icon,{id:"linkedin",size:18})})]}),s&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{className:"h-4 w-px bg-gray-300","aria-hidden":"true"}),(0,t.jsxs)("div",{className:"flex flex-wrap items-center gap-2",children:[(0,t.jsxs)("button",{onClick:()=>r?.(s.name),className:"rounded-xs border border-gray-200 bg-white px-2 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer",children:["#",s.name]}),a.length>0&&(0,t.jsxs)("span",{className:"rounded-xs border border-gray-200 bg-white px-2 py-1 text-sm font-medium text-gray-500",children:["+",a.length]})]})]})]})]})]})};var d=e.i(41753),h=e.i(536),m=e.i(39241);e.s(["ProfessorsGrid",0,({tags:e=[],initProfessors:l=[]})=>{let n=(0,i.useSearchParams)().get("area"),{selectedTags:o,items:g,currentPage:x,setCurrentPage:u,isLoading:f,totalPages:p,paginated:b,handleTagSelect:y,handleTagSelectOnly:j,handleClearTags:N}=(0,m.usePaginatedFilter)(l,12,async e=>(await (0,r.getContent)(s.PROFESSORS_FILTERED_QUERY,{workingField:e})).docentesCollection.items);return(0,a.useEffect)(()=>{n&&j(n)},[n]),(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)(d.FilterBar,{tags:e,selectedTags:o,onTagSelect:y,onClear:N,count:g.length,itemLabel:"professor(a)(es/as)"}),(0,t.jsx)("div",{className:"my-6 h-px w-full bg-gray-200","aria-hidden":"true"}),f?(0,t.jsx)("p",{className:"py-20 text-center text-gray-500",children:"Carregando..."}):0===b.length?(0,t.jsx)("p",{className:"py-20 text-center text-gray-500",children:"Nenhum professor foi encontrado para os filtros selecionados."}):(0,t.jsx)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-x-8",children:b.map(e=>(0,t.jsx)(c,{professor:e,onTagSelect:j},e.name))}),(0,t.jsx)(h.PaginationControls,{currentPage:x,totalPages:p,onPageChange:u})]})}],47490)},467,66416,41753,39241,e=>{"use strict";let t=e.i(47167).default.env.CONTENTFUL_ENVIRONMENT||"master",r=`https://graphql.contentful.com/content/v1/spaces/l1y1n3addvg8/environments/${t}`;async function s(e,t){let s=await fetch(r,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer -QI6zYpH8bOjhnSUKM3jbWnNzSY614MdNDalsvI5TNc"},body:JSON.stringify({query:e,variables:t})}),a=await s.json();if(a.errors)throw Error(JSON.stringify(a.errors,null,2));return a.data}e.s(["getContent",0,s],467);let a=`
  query GetProfessors($workingField: [String]) {
    docentesCollection(where: {
      workingFields: { name_in: $workingField }
    }) {
      items {
        name
        role
        email
        linkedin
        github
        lattes
        workingFieldsCollection {
          items {
            name
          }
        }
        photo {
          url
          width
          height
        }
      }
    }
  }
`,i=`
  query GetProjects($actionField: [String]) {
    projectCollection(where: {
      actionFields: { name_in: $actionField }
    }) {
      items {
        name
        link
        leader {
          name
        }
        description {
          json
        }
        actionFieldsCollection {
          items {
            name
          }
        }
        graduates
        underGraduates
        initDate
        endDate
      }
    }
  }
`;e.s(["PROFESSORS_FILTERED_QUERY",0,a,"PROJECTS_FILTERED_QUERY",0,i],66416);var l=e.i(43476),n=e.i(75157);e.s(["FilterBar",0,({selectedTags:e,tags:t,onTagSelect:r,onClear:s,count:a,itemLabel:i})=>{let o=0===e.length,c=e=>(0,n.cn)("rounded-xs border px-2 py-1 text-sm font-medium transition-colors cursor-pointer bg-white",e?"border-cyan-700 text-cyan-700":"border-gray-200 text-gray-700 hover:bg-gray-50");return(0,l.jsxs)("div",{className:"mb-8",children:[(0,l.jsxs)("div",{className:"mb-4 flex items-baseline justify-between",children:[(0,l.jsx)("h3",{className:"text-lg font-bold text-gray-900",children:"Áreas de atuação"}),(0,l.jsxs)("span",{className:"text-sm text-gray-500",children:[a," ",i]})]}),(0,l.jsxs)("div",{className:"flex flex-wrap gap-3",children:[(0,l.jsx)("button",{onClick:s,className:c(o),children:"Todos"}),t.map(t=>(0,l.jsxs)("button",{onClick:()=>r(t.name),className:c(e.includes(t.name)),children:["#",t.name]},t.name))]})]})}],41753);var o=e.i(71645);e.s(["usePaginatedFilter",0,function(e,t,r){let[s,a]=(0,o.useState)([]),[i,l]=(0,o.useState)(e),[n,c]=(0,o.useState)(0),[d,h]=(0,o.useState)(!1),m=async t=>{if(a(t),c(0),0===t.length)l(e);else{h(!0);let[e]=await Promise.all([r(t),new Promise(e=>setTimeout(e,500))]);l(e),h(!1)}},g=Math.ceil(i.length/t),x=i.slice(n*t,(n+1)*t);return{selectedTags:s,items:i,currentPage:n,setCurrentPage:c,isLoading:d,totalPages:g,paginated:x,handleTagSelect:e=>m(s.includes(e)?s.filter(t=>t!==e):[...s,e]),handleTagSelectOnly:e=>m([e]),handleClearTags:()=>m([])}}],39241)}]);