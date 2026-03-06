(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,33525,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return s}});let s=e=>{}},75254,e=>{"use strict";var t=e.i(71645);let r=(...e)=>e.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim(),s=e=>{let t=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase());return t.charAt(0).toUpperCase()+t.slice(1)};var a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let i=(0,t.forwardRef)(({color:e="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:l,className:n="",children:o,iconNode:c,...d},m)=>(0,t.createElement)("svg",{ref:m,...a,width:s,height:s,stroke:e,strokeWidth:l?24*Number(i)/Number(s):i,className:r("lucide",n),...!o&&!(e=>{for(let t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0;return!1})(d)&&{"aria-hidden":"true"},...d},[...c.map(([e,r])=>(0,t.createElement)(e,r)),...Array.isArray(o)?o:[o]])),l=(e,a)=>{let l=(0,t.forwardRef)(({className:l,...n},o)=>(0,t.createElement)(i,{ref:o,iconNode:a,className:r(`lucide-${s(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,l),...n}));return l.displayName=s(e),l};e.s(["default",()=>l],75254)},467,66416,41753,e=>{"use strict";let t=e.i(47167).default.env.CONTENTFUL_ENVIRONMENT||"master",r=`https://graphql.contentful.com/content/v1/spaces/l1y1n3addvg8/environments/${t}`;async function s(e,t){let s=await fetch(r,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer -QI6zYpH8bOjhnSUKM3jbWnNzSY614MdNDalsvI5TNc"},body:JSON.stringify({query:e,variables:t})}),a=await s.json();if(a.errors)throw Error(JSON.stringify(a.errors,null,2));return a.data}e.s(["getContent",()=>s],467);let a=`
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
`;e.s(["PROFESSOR_QUERY",0,a,"PROJECT_QUERY",0,i],66416);var l=e.i(43476);e.s(["FilterBar",0,({selectedTags:e,tags:t,onTagSelect:r})=>(0,l.jsxs)("div",{className:"mb-8",children:[(0,l.jsx)("h3",{className:"mb-4 text-lg font-bold text-gray-600",children:"Áreas de atuação"}),(0,l.jsx)("div",{className:"flex flex-wrap gap-3",children:t.map(t=>(0,l.jsxs)("button",{onClick:()=>r(t.name),className:`rounded-lg px-4 py-2 text-sm font-medium transition-colors cursor-pointer ${e.includes(t.name)?"bg-blue-600 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`,children:["#",t.name]},t.name))})]})],41753)},47490,e=>{"use strict";var t=e.i(43476),r=e.i(467),s=e.i(66416),a=e.i(71645);let i=(0,e.i(75254).default)("mail",[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]);var l=e.i(51514),n=e.i(57688);let o=({professor:e})=>(0,t.jsxs)("div",{className:"max-w-sm overflow-hidden bg-white font-sans",children:[(0,t.jsx)("div",{className:"aspect-square w-full overflow-hidden",children:(0,t.jsx)(n.default,{src:e.photo.url,width:800,height:800,alt:e.name,className:"h-full w-full object-cover"})}),(0,t.jsxs)("div",{className:"py-4",children:[(0,t.jsx)("h2",{className:"text-xl font-bold text-gray-900",children:e.name}),(0,t.jsx)("p",{className:"mt-1 text-sm text-gray-700",children:e.role}),(0,t.jsxs)("div",{className:"mt-3 flex items-center gap-2 transition duration-300 text-gray-500",children:[e.email&&(0,t.jsx)("a",{href:`mailto:${e.email}`,className:"hover:text-blue-600",children:(0,t.jsx)(i,{size:24,strokeWidth:1.5})}),e.github&&(0,t.jsx)("a",{href:e.github,target:"_blank",rel:"noreferrer",className:"hover:text-blue-600",children:(0,t.jsx)(l.Icon,{id:"github",size:20})}),e.lattes&&(0,t.jsx)("a",{href:e.lattes,target:"_blank",rel:"noreferrer",className:"hover:text-blue-600",children:(0,t.jsx)(l.Icon,{id:"lattes",size:20})}),e.linkedin&&(0,t.jsx)("a",{href:e.linkedin,target:"_blank",rel:"noreferrer",className:"hover:text-blue-600",children:(0,t.jsx)(l.Icon,{id:"linkedin",size:20})})]}),(0,t.jsxs)("div",{className:"mt-6 flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide",style:{msOverflowStyle:"none",scrollbarWidth:"none"},children:[(0,t.jsx)("style",{children:`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}),e?.workingFieldsCollection?.items.map(e=>(0,t.jsxs)("span",{className:"inline-block rounded-md bg-gray-200 px-3 py-1 text-sm text-gray-700",children:["#",e.name]},e.name))]})]})]});var c=e.i(41753);e.s(["ProfessorGrid",0,({tags:e=[],initProfessors:i=[]})=>{let[l,n]=(0,a.useState)([]),[d,m]=(0,a.useState)(i),[h,u]=(0,a.useState)(0),[g,x]=(0,a.useState)(!1),p=async e=>{let t=l.includes(e)?l.filter(t=>t!==e):[...l,e];n(t),u(0),0===t.length?m(i):(x(!0),m((await (0,r.getContent)(s.PROFESSOR_QUERY,{workingField:t})).docentesCollection.items),await new Promise(e=>setTimeout(e,300)),x(!1))},f=Math.ceil(d.length/12),b=d.slice(12*h,(h+1)*12);return(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)(c.FilterBar,{tags:e,selectedTags:l,onTagSelect:p}),(0,t.jsx)("div",{className:"my-6 h-px w-full bg-gray-200","aria-hidden":"true"}),g?(0,t.jsx)("p",{className:"py-20 text-center text-gray-500",children:"Carregando..."}):0===d.length?(0,t.jsx)("p",{className:"py-20 text-center text-gray-500",children:"Nenhum professor foi encontrado para os filtros selecionados."}):(0,t.jsx)("div",{className:"grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4",children:b.map(e=>(0,t.jsx)(o,{professor:e},e.name))}),f>1&&(0,t.jsxs)("div",{className:"mt-8 flex justify-between text-sm text-gray-600",children:[(0,t.jsx)("button",{onClick:()=>u(e=>e-1),disabled:0===h,className:"flex items-center gap-1 disabled:opacity-30 hover:text-gray-900 cursor-pointer transition-colors",children:"← Anterior"}),(0,t.jsx)("button",{onClick:()=>u(e=>e+1),disabled:h>=f-1,className:"flex items-center gap-1 disabled:opacity-30 hover:text-gray-900 cursor-pointer transition-colors",children:"Próximo →"})]})]})}],47490)}]);