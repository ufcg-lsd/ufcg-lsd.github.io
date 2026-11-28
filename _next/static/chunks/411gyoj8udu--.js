(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,5014,e=>{"use strict";var t=e.i(71645),s=e.i(71987),r=e.i(88973),a=e.i(96661);let i=(0,t.createContext)({}),n=(0,t.forwardRef)(({color:e,size:n,strokeWidth:l,absoluteStrokeWidth:o,className:c="",children:d,iconNode:m,...x},h)=>{let{size:u=24,strokeWidth:g=2,absoluteStrokeWidth:p=!1,color:f="currentColor",className:j=""}=(0,t.useContext)(i)??{},y=o??p?24*Number(l??g)/Number(n??u):l??g;return(0,t.createElement)("svg",{ref:h,...s.default,width:n??u??s.default.width,height:n??u??s.default.height,stroke:e??f,strokeWidth:y,className:(0,a.mergeClasses)("lucide",j,c),...!d&&!(0,r.hasA11yProp)(x)&&{"aria-hidden":"true"},...x},[...m.map(([e,s])=>(0,t.createElement)(e,s)),...Array.isArray(d)?d:[d]])});e.s(["default",0,n],5014)},71987,88973,e=>{"use strict";e.s(["default",0,{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}],71987),e.s(["hasA11yProp",0,e=>{for(let t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0;return!1}],88973)},96661,e=>{"use strict";e.s(["mergeClasses",0,(...e)=>e.filter((e,t,s)=>!!e&&""!==e.trim()&&s.indexOf(e)===t).join(" ").trim()])},536,e=>{"use strict";var t=e.i(43476);e.s(["PaginationControls",0,({currentPage:e,totalPages:s,onPageChange:r})=>s<=1?null:(0,t.jsxs)("div",{className:"mt-8 flex justify-between text-sm text-gray-600",children:[(0,t.jsx)("button",{onClick:()=>r(e=>e-1),disabled:0===e,className:"flex items-center gap-1 cursor-pointer transition-colors hover:text-gray-900 disabled:opacity-30",children:"← Anterior"}),(0,t.jsxs)("span",{className:"text-gray-500",children:[e+1,"/",s," páginas"]}),(0,t.jsx)("button",{onClick:()=>r(e=>e+1),disabled:e>=s-1,className:"flex items-center gap-1 cursor-pointer transition-colors hover:text-gray-900 disabled:opacity-30",children:"Próximo →"})]})])},50050,e=>{"use strict";var t=e.i(43476),s=e.i(98038),r=e.i(57688),a=e.i(22016);let i=({item:e})=>(0,t.jsx)("div",{className:"group relative aspect-video flex items-center justify-center rounded-xs overflow-hidden bg-gray-50 hover:opacity-75 transition-all duration-300",children:(0,t.jsx)(a.default,{href:e.link||"#",target:"_blank",rel:"noopener noreferrer",className:"relative flex items-center justify-center w-full h-full p-6",children:e.logo?.url?(0,t.jsx)(r.default,{src:e.logo.url,alt:e.name,width:e.logo.width,height:e.logo.height,className:"max-w-full max-h-full object-contain"}):(0,t.jsx)("span",{className:"text-sm font-medium text-gray-500 text-center",children:e.name})})});var n=e.i(23211);e.s(["PartnersCarousel",0,({partners:e,title:r,text:a})=>0===e.length?null:(0,t.jsxs)(n.Carousel,{className:"flex flex-col gap-6 pt-2",opts:{align:"start",loop:!0},children:[(0,t.jsxs)("div",{className:"flex items-start justify-between gap-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h2",{className:"text-2xl font-bold text-gray-900",children:r}),(0,t.jsx)("div",{className:"text-sm text-gray-600 mt-1",children:(0,s.documentToReactComponents)(a.json)})]}),(0,t.jsxs)("div",{className:"hidden md:flex items-center gap-2 shrink-0",children:[(0,t.jsx)(n.CarouselPrevious,{className:"static size-10 translate-x-0 translate-y-0 rounded-xs cursor-pointer"}),(0,t.jsx)(n.CarouselNext,{className:"static size-10 translate-x-0 translate-y-0 rounded-xs bg-cyan-800 text-white hover:border-cyan-800 border-0 hover:border hover:text-cyan-800 hover:bg-white cursor-pointer"})]})]}),(0,t.jsx)(n.CarouselContent,{children:e.map(e=>(0,t.jsx)(n.CarouselItem,{className:"basis-1/2 sm:basis-1/3 lg:basis-1/5",children:(0,t.jsx)(i,{item:e})},e.name))})]})],50050)},27116,e=>{"use strict";var t=e.i(43476),s=e.i(467),r=e.i(66416),a=e.i(71645),i=e.i(18566),n=e.i(98038);let l=(0,e.i(56420).default)("external-link",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]),o=e=>new Date(e).getFullYear(),c=({project:e,onTagSelect:s})=>{let r=e.endDate?o(e.endDate):"Atual";return(0,t.jsxs)("div",{className:"py-6 border-b border-gray-200 hover:bg-gray-100 rounded-xs p-4 transition duration-300 last:border-b-0",children:[(0,t.jsxs)("div",{className:"flex w-full flex-wrap items-start justify-between gap-x-2 gap-y-1",children:[e.link?(0,t.jsxs)("a",{href:e.link,target:"_blank",rel:"noreferrer",className:"font-bold text-gray-900 hover:underline flex items-center gap-1",children:[e.name,(0,t.jsx)(l,{size:14,className:"shrink-0"})]}):(0,t.jsx)("span",{className:"font-bold text-gray-900",children:e.name}),(0,t.jsxs)("span",{className:"text-sm text-gray-500 shrink-0",children:[o(e.initDate)," - ",r]})]}),(0,t.jsxs)("div",{className:"mt-3 flex flex-wrap items-center justify-between gap-3",children:[(0,t.jsxs)("div",{children:[e.leader&&(0,t.jsxs)("span",{className:"text-gray-600 text-sm",children:["Coordenado por: ",(0,t.jsx)("strong",{children:e.leader.name})]}),(0,t.jsx)("div",{className:"mt-2 text-sm text-gray-700",children:(0,n.documentToReactComponents)(e.description.json)})]}),(0,t.jsx)("div",{className:"flex flex-wrap gap-2",children:e.actionFieldsCollection.items.map(e=>(0,t.jsxs)("button",{onClick:()=>s?.(e.name),className:"inline-block rounded-xs border border-gray-200 bg-white px-2 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer",children:["#",e.name]},e.name))})]})]})};var d=e.i(41753),m=e.i(536),x=e.i(39241);e.s(["ProjectsGrid",0,({tags:e=[],initProjects:n=[]})=>{let l=(0,i.useSearchParams)().get("area"),{selectedTags:o,items:h,currentPage:u,setCurrentPage:g,isLoading:p,totalPages:f,paginated:j,handleTagSelect:y,handleTagSelectOnly:b,handleClearTags:v}=(0,x.usePaginatedFilter)(n,9,async e=>(await (0,s.getContent)(r.PROJECTS_FILTERED_QUERY,{actionField:e})).projectCollection.items);return(0,a.useEffect)(()=>{l&&b(l)},[l]),(0,t.jsxs)("div",{children:[(0,t.jsx)(d.FilterBar,{tags:e,selectedTags:o,onTagSelect:y,onClear:v,count:h.length,itemLabel:"projeto(s)"}),p?(0,t.jsx)("p",{className:"py-20 text-center text-gray-500",children:"Carregando..."}):0===j.length?(0,t.jsx)("p",{className:"py-20 text-center text-gray-500",children:"Nenhum projeto foi encontrado para os filtros selecionados."}):(0,t.jsx)("div",{children:j.map(e=>(0,t.jsx)(c,{project:e,onTagSelect:b},e.name))}),(0,t.jsx)(m.PaginationControls,{currentPage:u,totalPages:f,onPageChange:g})]})}],27116)},467,66416,41753,39241,e=>{"use strict";let t=e.i(47167).default.env.CONTENTFUL_ENVIRONMENT||"master",s=`https://graphql.contentful.com/content/v1/spaces/l1y1n3addvg8/environments/${t}`;async function r(e,t){let r=await fetch(s,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer -QI6zYpH8bOjhnSUKM3jbWnNzSY614MdNDalsvI5TNc"},body:JSON.stringify({query:e,variables:t})}),a=await r.json();if(a.errors)throw Error(JSON.stringify(a.errors,null,2));return a.data}e.s(["getContent",0,r],467);let a=`
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
`;e.s(["PROFESSORS_FILTERED_QUERY",0,a,"PROJECTS_FILTERED_QUERY",0,i],66416);var n=e.i(43476),l=e.i(75157);e.s(["FilterBar",0,({selectedTags:e,tags:t,onTagSelect:s,onClear:r,count:a,itemLabel:i})=>{let o=0===e.length,c=e=>(0,l.cn)("shrink-0 rounded-xs border px-2 py-1 text-sm font-medium transition-colors cursor-pointer bg-white",e?"border-cyan-700 text-cyan-700":"border-gray-200 text-gray-700 hover:bg-gray-50");return(0,n.jsxs)("div",{className:"mb-8",children:[(0,n.jsxs)("div",{className:"mb-4 flex items-baseline justify-between",children:[(0,n.jsx)("h3",{className:"text-md font-bold text-gray-900",children:"Áreas de atuação"}),(0,n.jsxs)("span",{className:"text-sm text-gray-500",children:[a," ",i]})]}),(0,n.jsxs)("div",{className:"-mx-4 flex gap-3 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0",children:[(0,n.jsx)("button",{onClick:r,className:c(o),children:"Todos"}),t.map(t=>(0,n.jsxs)("button",{onClick:()=>s(t.name),className:c(e.includes(t.name)),children:["#",t.name]},t.name))]})]})}],41753);var o=e.i(71645);e.s(["usePaginatedFilter",0,function(e,t,s){let[r,a]=(0,o.useState)([]),[i,n]=(0,o.useState)(e),[l,c]=(0,o.useState)(0),[d,m]=(0,o.useState)(!1),x=async t=>{if(a(t),c(0),0===t.length)n(e);else{m(!0);let[e]=await Promise.all([s(t),new Promise(e=>setTimeout(e,500))]);n(e),m(!1)}},h=Math.ceil(i.length/t),u=i.slice(l*t,(l+1)*t);return{selectedTags:r,items:i,currentPage:l,setCurrentPage:c,isLoading:d,totalPages:h,paginated:u,handleTagSelect:e=>x(r.includes(e)?r.filter(t=>t!==e):[...r,e]),handleTagSelectOnly:e=>x([e]),handleClearTags:()=>x([])}}],39241)}]);