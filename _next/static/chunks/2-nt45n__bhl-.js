(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,536,e=>{"use strict";var t=e.i(43476);e.s(["PaginationControls",0,({currentPage:e,totalPages:s,onPageChange:r})=>s<=1?null:(0,t.jsxs)("div",{className:"mt-8 flex justify-between text-sm text-gray-600",children:[(0,t.jsx)("button",{onClick:()=>r(e=>e-1),disabled:0===e,className:"flex items-center gap-1 cursor-pointer transition-colors hover:text-gray-900 disabled:opacity-30",children:"← Anterior"}),(0,t.jsxs)("span",{className:"text-gray-500",children:[e+1,"/",s," páginas"]}),(0,t.jsx)("button",{onClick:()=>r(e=>e+1),disabled:e>=s-1,className:"flex items-center gap-1 cursor-pointer transition-colors hover:text-gray-900 disabled:opacity-30",children:"Próximo →"})]})])},47490,e=>{"use strict";var t=e.i(43476),s=e.i(467),r=e.i(66416),a=e.i(71645),i=e.i(18566);let n=(0,e.i(56420).default)("mail",[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]);var l=e.i(51514),o=e.i(57688);let c=({professor:e,onTagSelect:s})=>{let[r,...a]=e?.workingFieldsCollection?.items??[];return(0,t.jsxs)("div",{className:"flex items-start gap-3 border-b border-gray-200 py-4",children:[(0,t.jsx)("div",{className:"size-20 shrink-0 overflow-hidden rounded-md bg-gray-100",children:(0,t.jsx)(o.default,{src:e.photo.url,width:128,height:128,alt:e.name,className:"h-full w-full object-cover"})}),(0,t.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h2",{className:"text-md font-bold text-gray-900",children:e.name}),(0,t.jsx)("p",{className:"text-sm text-gray-500",children:e.role})]}),(0,t.jsxs)("div",{className:"flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center",children:[(0,t.jsxs)("div",{className:"order-2 flex items-center gap-2 text-gray-500 sm:order-none",children:[e.email&&(0,t.jsx)("a",{href:`mailto:${e.email}`,className:"hover:text-blue-600",children:(0,t.jsx)(n,{size:18,strokeWidth:1.5})}),e.github&&(0,t.jsx)("a",{href:e.github,target:"_blank",rel:"noreferrer",className:"hover:text-blue-600",children:(0,t.jsx)(l.Icon,{id:"github",size:18})}),e.lattes&&(0,t.jsx)("a",{href:e.lattes,target:"_blank",rel:"noreferrer",className:"hover:text-blue-600",children:(0,t.jsx)(l.Icon,{id:"lattes",size:18})}),e.linkedin&&(0,t.jsx)("a",{href:e.linkedin,target:"_blank",rel:"noreferrer",className:"hover:text-blue-600",children:(0,t.jsx)(l.Icon,{id:"linkedin",size:18})})]}),r&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{className:"hidden h-4 w-px bg-gray-300 sm:block","aria-hidden":"true"}),(0,t.jsxs)("div",{className:"order-1 flex flex-wrap items-center gap-2 sm:order-none",children:[(0,t.jsxs)("button",{onClick:()=>s?.(r.name),className:"rounded-xs border border-gray-200 bg-white px-2 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer",children:["#",r.name]}),a.length>0&&(0,t.jsxs)("span",{className:"rounded-xs border border-gray-200 bg-white px-2 py-1 text-sm font-medium text-gray-500",children:["+",a.length]})]})]})]})]})]})};var d=e.i(41753),m=e.i(536),x=e.i(39241);e.s(["ProfessorsGrid",0,({tags:e=[],initProfessors:n=[],description:l})=>{let o=(0,i.useSearchParams)().get("area"),{selectedTags:h,items:g,currentPage:u,setCurrentPage:p,isLoading:b,totalPages:f,paginated:j,handleTagSelect:y,handleTagSelectOnly:N,handleClearTags:v}=(0,x.usePaginatedFilter)(n,12,async e=>(await (0,s.getContent)(r.PROFESSORS_FILTERED_QUERY,{workingField:e})).docentesCollection.items);return(0,a.useEffect)(()=>{o&&N(o)},[o]),(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)(d.FilterBar,{tags:e,selectedTags:h,onTagSelect:y,onClear:v,count:g.length,itemLabel:"pessoas"}),l&&(0,t.jsx)("p",{className:"text-sm md:text-base text-gray-600 mb-4 whitespace-pre-line",children:l}),(0,t.jsx)("div",{className:"my-6 h-px w-full bg-gray-200","aria-hidden":"true"}),b?(0,t.jsx)("p",{className:"py-20 text-center text-gray-500",children:"Carregando..."}):0===j.length?(0,t.jsx)("p",{className:"py-20 text-center text-gray-500",children:"Nenhum professor foi encontrado para os filtros selecionados."}):(0,t.jsx)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-x-8",children:j.map(e=>(0,t.jsx)(c,{professor:e,onTagSelect:N},e.name))}),(0,t.jsx)(m.PaginationControls,{currentPage:u,totalPages:f,onPageChange:p})]})}],47490)},467,66416,41753,39241,e=>{"use strict";let t=e.i(47167).default.env.CONTENTFUL_ENVIRONMENT||"master",s=`https://graphql.contentful.com/content/v1/spaces/l1y1n3addvg8/environments/${t}`;async function r(e,t){let r=await fetch(s,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer -QI6zYpH8bOjhnSUKM3jbWnNzSY614MdNDalsvI5TNc"},body:JSON.stringify({query:e,variables:t})}),a=await r.json();if(a.errors)throw Error(JSON.stringify(a.errors,null,2));return a.data}e.s(["getContent",0,r],467);let a=`
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
        initDate
        endDate
      }
    }
  }
`;e.s(["PROFESSORS_FILTERED_QUERY",0,a,"PROJECTS_FILTERED_QUERY",0,i],66416);var n=e.i(43476),l=e.i(75157);e.s(["FilterBar",0,({selectedTags:e,tags:t,onTagSelect:s,onClear:r,count:a,itemLabel:i})=>{let o=0===e.length,c=e=>(0,l.cn)("shrink-0 rounded-xs border px-2 py-1 text-sm font-medium transition-colors cursor-pointer bg-white",e?"border-cyan-700 text-cyan-700":"border-gray-200 text-gray-700 hover:bg-gray-50");return(0,n.jsxs)("div",{className:"mb-8",children:[(0,n.jsxs)("div",{className:"mb-4 flex items-baseline justify-between",children:[(0,n.jsx)("h3",{className:"text-md font-bold text-gray-900",children:"Áreas de atuação"}),(0,n.jsxs)("span",{className:"text-sm text-gray-500",children:[a," ",i]})]}),(0,n.jsxs)("div",{className:"-mx-4 flex gap-3 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0",children:[(0,n.jsx)("button",{onClick:r,className:c(o),children:"Todos"}),t.map(t=>(0,n.jsxs)("button",{onClick:()=>s(t.name),className:c(e.includes(t.name)),children:["#",t.name]},t.name))]})]})}],41753);var o=e.i(71645);e.s(["usePaginatedFilter",0,function(e,t,s){let[r,a]=(0,o.useState)([]),[i,n]=(0,o.useState)(e),[l,c]=(0,o.useState)(0),[d,m]=(0,o.useState)(!1),x=async t=>{if(a(t),c(0),0===t.length)n(e);else{m(!0);let[e]=await Promise.all([s(t),new Promise(e=>setTimeout(e,500))]);n(e),m(!1)}},h=Math.ceil(i.length/t),g=i.slice(l*t,(l+1)*t);return{selectedTags:r,items:i,currentPage:l,setCurrentPage:c,isLoading:d,totalPages:h,paginated:g,handleTagSelect:e=>x(r.includes(e)?r.filter(t=>t!==e):[...r,e]),handleTagSelectOnly:e=>x([e]),handleClearTags:()=>x([])}}],39241)}]);