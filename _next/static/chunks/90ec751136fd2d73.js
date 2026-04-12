(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,33525,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"warnOnce",{enumerable:!0,get:function(){return s}});let s=e=>{}},536,e=>{"use strict";var t=e.i(43476);e.s(["PaginationControls",0,({currentPage:e,totalPages:a,onPageChange:s})=>a<=1?null:(0,t.jsxs)("div",{className:"mt-8 flex justify-between text-sm text-gray-600",children:[(0,t.jsx)("button",{onClick:()=>s(e=>e-1),disabled:0===e,className:"flex items-center gap-1 cursor-pointer transition-colors hover:text-gray-900 disabled:opacity-30",children:"← Anterior"}),(0,t.jsx)("button",{onClick:()=>s(e=>e+1),disabled:e>=a-1,className:"flex items-center gap-1 cursor-pointer transition-colors hover:text-gray-900 disabled:opacity-30",children:"Próximo →"})]})])},467,66416,41753,39241,e=>{"use strict";let t=e.i(47167).default.env.CONTENTFUL_ENVIRONMENT||"master",a=`https://graphql.contentful.com/content/v1/spaces/l1y1n3addvg8/environments/${t}`;async function s(e,t){let s=await fetch(a,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer -QI6zYpH8bOjhnSUKM3jbWnNzSY614MdNDalsvI5TNc"},body:JSON.stringify({query:e,variables:t})}),i=await s.json();if(i.errors)throw Error(JSON.stringify(i.errors,null,2));return i.data}e.s(["getContent",()=>s],467);let i=`
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
`,r=`
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
`;e.s(["PROFESSORS_FILTERED_QUERY",0,i,"PROJECTS_FILTERED_QUERY",0,r],66416);var l=e.i(43476),n=e.i(75157);e.s(["FilterBar",0,({selectedTags:e,tags:t,onTagSelect:a})=>(0,l.jsxs)("div",{className:"mb-8",children:[(0,l.jsx)("h3",{className:"mb-4 text-lg font-bold text-gray-600",children:"Áreas de atuação"}),(0,l.jsx)("div",{className:"flex flex-wrap gap-3",children:t.map(t=>(0,l.jsxs)("button",{onClick:()=>a(t.name),className:(0,n.cn)("rounded-lg px-4 py-2 text-sm font-medium transition-colors cursor-pointer",e.includes(t.name)?"bg-blue-600 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"),children:["#",t.name]},t.name))})]})],41753);var o=e.i(71645);function c(e,t,a){let[s,i]=(0,o.useState)([]),[r,l]=(0,o.useState)(e),[n,c]=(0,o.useState)(0),[d,m]=(0,o.useState)(!1),h=async t=>{if(i(t),c(0),0===t.length)l(e);else{m(!0);let[e]=await Promise.all([a(t),new Promise(e=>setTimeout(e,500))]);l(e),m(!1)}},g=Math.ceil(r.length/t),x=r.slice(n*t,(n+1)*t);return{selectedTags:s,items:r,currentPage:n,setCurrentPage:c,isLoading:d,totalPages:g,paginated:x,handleTagSelect:e=>h(s.includes(e)?s.filter(t=>t!==e):[...s,e]),handleTagSelectOnly:e=>h([e])}}e.s(["usePaginatedFilter",()=>c],39241)},47490,e=>{"use strict";var t=e.i(43476),a=e.i(467),s=e.i(66416);let i=(0,e.i(75254).default)("mail",[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]);var r=e.i(51514),l=e.i(57688);let n=({professor:e,onTagSelect:a})=>(0,t.jsxs)("div",{className:"max-w-sm overflow-hidden bg-white font-sans",children:[(0,t.jsx)("div",{className:"aspect-square w-full overflow-hidden",children:(0,t.jsx)(l.default,{src:e.photo.url,width:800,height:800,alt:e.name,className:"h-full w-full object-cover"})}),(0,t.jsxs)("div",{className:"py-4 flex flex-col gap-2",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h2",{className:"text-xl font-bold text-gray-800 p-0",children:e.name}),(0,t.jsx)("p",{className:"text-sm text-gray-400",children:e.role})]}),(0,t.jsxs)("div",{className:"flex items-center gap-2 transition duration-300 text-gray-500",children:[e.email&&(0,t.jsx)("a",{href:`mailto:${e.email}`,className:"hover:text-blue-600",children:(0,t.jsx)(i,{size:24,strokeWidth:1.5})}),e.github&&(0,t.jsx)("a",{href:e.github,target:"_blank",rel:"noreferrer",className:"hover:text-blue-600",children:(0,t.jsx)(r.Icon,{id:"github",size:20})}),e.lattes&&(0,t.jsx)("a",{href:e.lattes,target:"_blank",rel:"noreferrer",className:"hover:text-blue-600",children:(0,t.jsx)(r.Icon,{id:"lattes",size:20})}),e.linkedin&&(0,t.jsx)("a",{href:e.linkedin,target:"_blank",rel:"noreferrer",className:"hover:text-blue-600",children:(0,t.jsx)(r.Icon,{id:"linkedin",size:20})})]}),(0,t.jsx)("div",{className:"flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide",children:e?.workingFieldsCollection?.items.map(e=>(0,t.jsxs)("button",{onClick:()=>a?.(e.name),className:"inline-block rounded-md bg-gray-200 px-3 py-1 text-sm text-gray-700 hover:bg-gray-300 transition-colors cursor-pointer",children:["#",e.name]},e.name))})]})]});var o=e.i(41753),c=e.i(536),d=e.i(39241);e.s(["ProfessorsGrid",0,({tags:e=[],initProfessors:i=[]})=>{let{selectedTags:r,currentPage:l,setCurrentPage:m,isLoading:h,totalPages:g,paginated:x,handleTagSelect:u,handleTagSelectOnly:p}=(0,d.usePaginatedFilter)(i,12,async e=>(await (0,a.getContent)(s.PROFESSORS_FILTERED_QUERY,{workingField:e})).docentesCollection.items);return(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)(o.FilterBar,{tags:e,selectedTags:r,onTagSelect:u}),(0,t.jsx)("div",{className:"my-6 h-px w-full bg-gray-200","aria-hidden":"true"}),h?(0,t.jsx)("p",{className:"py-20 text-center text-gray-500",children:"Carregando..."}):0===x.length?(0,t.jsx)("p",{className:"py-20 text-center text-gray-500",children:"Nenhum professor foi encontrado para os filtros selecionados."}):(0,t.jsx)("div",{className:"grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 items-start",children:x.map(e=>(0,t.jsx)(n,{professor:e,onTagSelect:p},e.name))}),(0,t.jsx)(c.PaginationControls,{currentPage:l,totalPages:g,onPageChange:m})]})}],47490)}]);