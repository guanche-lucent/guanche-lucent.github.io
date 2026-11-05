import we from"./roles-B8pXgQLu.js";import{m as x,u as se,a as ke,s as ae}from"./transport-NPEHmWCv.js";import{r as oe,h as te}from"./handoff-BVK2ZY7D.js";import{A as p}from"./index-CrYjwM-i.js";const ye=JSON.parse('[{"id":"house-PRD需求说明","scope":"library","version":"1111111111111111111111111111111111111111111111111111111111111111","revision":1,"state":"active","name":"PRD需求说明","description":"新功能、功能改版、内部工具需求的说明文档，读者是研发、设计、测试，成品是 Word。不适用：活动方案（用「活动策划」）、市场或竞品研究（用「调研报告」）、规章流程（用「管理制度 / 流程规范」）。","category":"方案与文档","source_declared_runtime":"","source_declared_resource":"","source_declared_rag":"","ingest_default":true,"entrypoint_readable":true,"execution_verified":false,"license_status":"unknown","license_files":[],"input_contract":"","output_contract":"","file_count":1,"script_count":0,"source":{},"source_declaration_trusted":false,"issues":[],"roles":["planner","writer","reviewer"],"examples":[{"title":"新功能需求","text":"帮我给知识库加「收藏」功能写一份需求说明"},{"title":"反馈转需求","text":"把这段用户反馈整理成需求文档，写清验收标准"},{"title":"改版 PRD","text":"写一份登录页改版的 PRD，写明不做的事"}],"covers":["写清功能需求、使用场景和验收条件"],"summary":"需求文档，给研发、设计、测试看","tags":["Word","新功能","改版"],"kind":"house","format":"docx"},{"id":"house-Python小工具","scope":"library","version":"1111111111111111111111111111111111111111111111111111111111111111","revision":1,"state":"active","name":"Python小工具","description":"文件合并、格式转换、批量改名、数据清洗与汇总、简单报表生成这类本地命令行工具，成品是代码包。不适用：只要一张汇总表、不需要反复运行（用「预算与数据汇总」）；网页、服务、带界面的应用（一期不做）。","category":"数据与工具","source_declared_runtime":"","source_declared_resource":"","source_declared_rag":"","ingest_default":true,"entrypoint_readable":true,"execution_verified":false,"license_status":"unknown","license_files":[],"input_contract":"","output_contract":"","file_count":1,"script_count":0,"source":{},"source_declaration_trusted":false,"issues":[],"roles":["planner","writer","reviewer"],"examples":[{"title":"CSV 合并","text":"帮我写个小工具，把文件夹里的 CSV 合并并按月汇总"},{"title":"批量改名","text":"写个脚本批量重命名这批文件"},{"title":"表格去重","text":"把这份表格里的重复行去掉，输出一份新表"}],"covers":["处理本地文件、格式转换与批量数据"],"summary":"一条命令就能跑的数据小工具","tags":["代码","表格处理","批量文件"],"kind":"house","format":"code"},{"id":"house-会议纪要","scope":"library","version":"1111111111111111111111111111111111111111111111111111111111111111","revision":1,"state":"active","name":"会议纪要","description":"周会、项目会、评审会、客户沟通会等，输入是录音转写文本（带时间戳和说话人）或会上笔记，成品是 Word 纪要。不适用：要制定成文的规章（用「管理制度 / 流程规范」）、要写成需求文档（用「PRD / 需求说明」）、阶段工作总结（用「工作汇报」）。","category":"方案与文档","source_declared_runtime":"","source_declared_resource":"","source_declared_rag":"","ingest_default":true,"entrypoint_readable":true,"execution_verified":false,"license_status":"unknown","license_files":[],"input_contract":"","output_contract":"","file_count":1,"script_count":0,"source":{},"source_declaration_trusted":false,"issues":[],"roles":["planner","writer","reviewer"],"examples":[{"title":"周会纪要","text":"把这段周会录音整理成纪要，待办写清谁、何时"},{"title":"评审会","text":"根据评审会转写稿出一份纪要，标出没定的事"},{"title":"客户沟通","text":"整理客户沟通会记录，决定和分歧分开写"}],"covers":["整理会议结论、负责人和下一步"],"summary":"录音变纪要：决定、待办、谁负责","tags":["Word","周会","评审会"],"kind":"house","format":"docx"},{"id":"house-工作汇报","scope":"library","version":"1111111111111111111111111111111111111111111111111111111111111111","revision":1,"state":"active","name":"工作汇报","description":"周报、月报、季度汇报、项目阶段汇报，读者是上级或团队，成品是幻灯片。不适用：活动或方案策划（用「活动策划」）、对外宣讲。","category":"汇报与演讲","source_declared_runtime":"","source_declared_resource":"","source_declared_rag":"","ingest_default":true,"entrypoint_readable":true,"execution_verified":false,"license_status":"unknown","license_files":[],"input_contract":"","output_contract":"","file_count":1,"script_count":0,"source":{},"source_declaration_trusted":false,"issues":[],"roles":["planner","writer","reviewer"],"examples":[{"title":"季度汇报","text":"帮我做一份第三季度工作汇报，给老板看，8 页左右"},{"title":"项目周报","text":"把这周的项目进展写成周报"},{"title":"一页结论","text":"把这几个数字整理成一页结论和下季度计划"}],"covers":["回顾工作结果，写清计划和需要的支持"],"summary":"周报、月报、季度汇报，给上级看","tags":["幻灯片","季度汇报","周报"],"kind":"house","format":"html|docx"},{"id":"house-幻灯片视觉","scope":"library","version":"1111111111111111111111111111111111111111111111111111111111111111","revision":1,"state":"active","name":"幻灯片视觉","description":"所有 HTML 幻灯片任务的排版角色都装它（工作汇报、活动策划，以及其他判定为幻灯片的成品）。输入是撰写的分页稿（每页：观点句标题、正文、配图意图、讲稿），输出是每页选一个组件、把稿子内容填进组件字段，程序按主题渲染。它只管「怎么摆」，不管内容对不对（撰写和审读的事），不写 CSS，不改稿子的意思。","category":"排版与配图","source_declared_runtime":"","source_declared_resource":"","source_declared_rag":"","ingest_default":true,"entrypoint_readable":true,"execution_verified":false,"license_status":"unknown","license_files":[],"input_contract":"","output_contract":"","file_count":1,"script_count":0,"source":{},"source_declaration_trusted":false,"issues":[],"roles":["layout"],"examples":[],"covers":["把内容排成层次清楚的幻灯片"],"summary":"把稿子排成清爽好看的幻灯片","tags":["排版","数据卡","图表"],"kind":"house","format":"html"},{"id":"house-活动策划","scope":"library","version":"1111111111111111111111111111111111111111111111111111111111111111","revision":1,"state":"active","name":"活动策划","description":"拉新、促活、促销、会员、节日营销、线下活动、内部活动的策划方案，成品是幻灯片。不适用：回顾已经做完的工作（用「工作汇报」）、产品功能需求（用「PRD / 需求说明」）、市场与竞品研究（用「调研报告」）。","category":"方案与文档","source_declared_runtime":"","source_declared_resource":"","source_declared_rag":"","ingest_default":true,"entrypoint_readable":true,"execution_verified":false,"license_status":"unknown","license_files":[],"input_contract":"","output_contract":"","file_count":1,"script_count":0,"source":{},"source_declaration_trusted":false,"issues":[],"roles":["planner","writer","reviewer"],"examples":[{"title":"会员拉新","text":"帮我给社区咖啡店做一份四周会员拉新方案，预算 3 万"},{"title":"节日促销","text":"策划一场门店节日促销，写清玩法和预算"},{"title":"年会方案","text":"给团队年会做一份活动方案，含流程和分工"}],"covers":["写清活动目标、玩法、流程和预算"],"summary":"活动方案，写清目标、玩法和预算","tags":["幻灯片","拉新促销","年会活动"],"kind":"house","format":"html|docx"},{"id":"house-演讲稿","scope":"library","version":"1111111111111111111111111111111111111111111111111111111111111111","revision":1,"state":"active","name":"演讲稿","description":"内部分享、年会或活动致辞、开场发言、颁奖词、述职或竞聘演讲，成品是讲者拿着念的稿子。不适用：要投在屏幕上的幻灯片（用「工作汇报」或「活动策划」）、交给别人看的书面材料（用「调研报告」「管理制度 / 流程规范」）、会后整理（用「会议纪要」）。","category":"汇报与演讲","source_declared_runtime":"","source_declared_resource":"","source_declared_rag":"","ingest_default":true,"entrypoint_readable":true,"execution_verified":false,"license_status":"unknown","license_files":[],"input_contract":"","output_contract":"","file_count":1,"script_count":0,"source":{},"source_declaration_trusted":false,"issues":[],"roles":["planner","writer","reviewer"],"examples":[{"title":"内部分享","text":"帮我写一篇 8 分钟的内部分享稿，讲新人怎么快速上手"},{"title":"年会致辞","text":"写一段 3 分钟以内的年会开场致辞"},{"title":"竞聘演讲","text":"帮我写一篇竞聘演讲稿，突出三件做成的事"}],"covers":["把观点写成适合讲者口述的稿子"],"summary":"给人念的稿子：分享、致辞、竞聘","tags":["Word","内部分享","年会致辞"],"kind":"house","format":"docx"},{"id":"house-管理制度流程规范","scope":"library","version":"1111111111111111111111111111111111111111111111111111111111111111","revision":1,"state":"active","name":"管理制度流程规范","description":"考勤、远程办公、报销、采购、信息安全、审批流程、岗位操作规范等内部制度文件，成品是 Word。不适用：产品功能需求（用「PRD / 需求说明」）、会议决定的记录（用「会议纪要」）、对外合同和法律文书（一期不做）。","category":"方案与文档","source_declared_runtime":"","source_declared_resource":"","source_declared_rag":"","ingest_default":true,"entrypoint_readable":true,"execution_verified":false,"license_status":"unknown","license_files":[],"input_contract":"","output_contract":"","file_count":1,"script_count":0,"source":{},"source_declaration_trusted":false,"issues":[],"roles":["planner","writer","reviewer"],"examples":[{"title":"远程办公","text":"帮我起草一份 20 人团队的远程办公规定"},{"title":"报销规范","text":"把报销流程整理成一份规范，写清审批时限"},{"title":"入职流程","text":"写一份新员工入职流程"}],"covers":["写清适用范围、职责、规则和操作流程"],"summary":"公司制度和流程，改几个值就能发","tags":["Word","规章制度","办事流程"],"kind":"house","format":"docx"},{"id":"house-调研报告","scope":"library","version":"1111111111111111111111111111111111111111111111111111111111111111","revision":1,"state":"active","name":"调研报告","description":"市场调研、竞品分析、产品选型、政策或行业动态梳理，资料来自用户上传的材料或平台联网搜索，成品是 Word。不适用：活动方案（用「活动策划」）、产品功能说明（用「PRD / 需求说明」）、内部工作总结（用「工作汇报」）。","category":"方案与文档","source_declared_runtime":"","source_declared_resource":"","source_declared_rag":"","ingest_default":true,"entrypoint_readable":true,"execution_verified":false,"license_status":"unknown","license_files":[],"input_contract":"","output_contract":"","file_count":1,"script_count":0,"source":{},"source_declaration_trusted":false,"issues":[],"roles":["planner","writer","reviewer"],"examples":[{"title":"产品调研","text":"帮我调研国内 AI 办公助手的主要产品和定价"},{"title":"竞品对比","text":"对比三家竞品的会员体系，最后给出建议"},{"title":"行业现状","text":"根据这份资料写一份行业现状调研"}],"covers":["核对资料，比较方案并给出有据的结论"],"summary":"市场、竞品、行业调研，结论带来源","tags":["Word","竞品对比","行业调研"],"kind":"house","format":"docx"},{"id":"house-配图风格","scope":"library","version":"1111111111111111111111111111111111111111111111111111111111111111","revision":1,"state":"active","name":"配图风格","description":"HTML 幻灯片任务的配图角色装它。输入是撰写的分页稿（含每页的配图意图）和排版结果，输出是「哪几页配图、每张图想让人记住什么、图像提示词、放在页面哪个位置」，再由图像模型每张调用一次生成。不适用：数据图表（排版角色用图表组件画）；Word、Excel、代码成品（没有配图角色）。用户在出装时把配图设为「我提供」时，不生成图，只按上传图片的内容决定放哪一页。","category":"排版与配图","source_declared_runtime":"","source_declared_resource":"","source_declared_rag":"","ingest_default":true,"entrypoint_readable":true,"execution_verified":false,"license_status":"unknown","license_files":[],"input_contract":"","output_contract":"","file_count":1,"script_count":0,"source":{},"source_declaration_trusted":false,"issues":[],"roles":["illustrator"],"examples":[],"covers":["为幻灯片选择配图，统一视觉风格"],"summary":"给幻灯片配图，全片一个风格","tags":["配图","封面插画","统一风格"],"kind":"house","format":"image"},{"id":"house-预算与数据汇总","scope":"library","version":"1111111111111111111111111111111111111111111111111111111111111111","revision":1,"state":"active","name":"预算与数据汇总","description":"部门预算、费用汇总、销售或业绩按期汇总、简单的计划对比表，成品是 Excel。不适用：要写分析结论的报告（用「调研报告」或「工作汇报」）、要处理一批原始文件的工具（用「Python 小工具 / 数据脚本」）。","category":"数据与工具","source_declared_runtime":"","source_declared_resource":"","source_declared_rag":"","ingest_default":true,"entrypoint_readable":true,"execution_verified":false,"license_status":"unknown","license_files":[],"input_contract":"","output_contract":"","file_count":1,"script_count":0,"source":{},"source_declaration_trusted":false,"issues":[],"roles":["planner","writer","reviewer"],"examples":[{"title":"季度预算","text":"帮我做一份产品部第四季度预算表，按月分四类"},{"title":"销售汇总","text":"把这三个月的销售明细汇总成月度表，带占比"},{"title":"活动预算","text":"做一份活动预算表，各科目加起来等于总额"}],"covers":["按统一口径汇总数据并核对预算"],"summary":"预算表、汇总表，改一个数全表跟着变","tags":["Excel","预算","销售汇总"],"kind":"house","format":"xlsx"},{"id":"private-reviewer","scope":"private","version":"1111111111111111111111111111111111111111111111111111111111111111","revision":1,"state":"active","name":"数据口径审读","description":"按你提供的规范检查与制作。","category":"方案与文档","source_declared_runtime":"","source_declared_resource":"","source_declared_rag":"","ingest_default":true,"entrypoint_readable":true,"execution_verified":false,"license_status":"unknown","license_files":[],"input_contract":"","output_contract":"","file_count":1,"script_count":0,"source":{},"source_declaration_trusted":false,"issues":[],"role":"reviewer","covers":["核对口径","不编数字"],"examples":[],"summary":"把材料写成清楚的文档","tags":["Word","工作文档","日常办公"],"format":"docx","kind":"private"},{"id":"private-illustrator","scope":"private","version":"1111111111111111111111111111111111111111111111111111111111111111","revision":1,"state":"active","name":"品牌配图规范","description":"按你提供的规范检查与制作。","category":"方案与文档","source_declared_runtime":"","source_declared_resource":"","source_declared_rag":"","ingest_default":true,"entrypoint_readable":true,"execution_verified":false,"license_status":"unknown","license_files":[],"input_contract":"","output_contract":"","file_count":1,"script_count":0,"source":{},"source_declaration_trusted":false,"issues":[],"role":"illustrator","covers":["配图风格","统一用色"],"examples":[],"summary":"把材料写成清楚的文档","tags":["Word","工作文档","日常办公"],"format":"docx","kind":"private"}]'),ce={items:ye},be="80181b13-e4f7-4ad0-a5cb-240a6253b48e",qe="421f1c7e-8d3c-4e10-a50d-8d7c9b6fd193",De="7a0b51c2-abef-4aa1-b7ea-8b2896c992a4",Se="write_activity_docx",Pe=1,We="docx",$e=[{name:"document.docx",format:"docx",sha256:"e56096d841842aa6eda64fff4d1aee24a7bde8e94b3666c6f57b3508b5538a1e",bytes:1201,role:"document"},{name:"document.json",format:"json",sha256:"f6ae7090c5eddc1cfd07ce23857032f23cc0db01358603a271213215112723b7",bytes:1245,role:"structured_content"},{name:"sources.json",format:"json",sha256:"4b8ed1ce3a1e3ac654685f0c27dd2615c84a163bd2b1c7c2d2fd6c0df1fe94c8",bytes:1272,role:"sources"},{name:"preview.pdf",format:"pdf",sha256:"fe4e3657d4ffb764335186499379d93eb215279c4fdc78e8c5cd855ca3e49f73",bytes:76049,role:"preview"},{name:"render.json",format:"json",sha256:"abb00f0bc1d37653aec257db9adb97ebc05284cb3af9ae57a72f25b39cd80504",bytes:925,role:"render_manifest"},{name:"page-001.png",format:"png",sha256:"7d01612638cb7fe7d99327897335e824b87df02b5b608a307b0d837b74d3e36f",bytes:194036,role:"preview_page"}],Ee=[{source_id:"material:85353a61-1ecc-418e-9706-987b9d3ef960",quote:"内容只要活动安排、总结两节。清溪社区读书分享会，18人，预算600元；流程为阅读分享、交流提问、总结。"},{source_id:"material:85353a61-1ecc-418e-9706-987b9d3ef960",quote:"清溪社区读书分享会，18人，预算600元；流程为阅读分享、交流提问、总结。"}],Me=1791382411174436e-6,Te=`清溪社区读书分享会活动说明
活动安排
本次清溪社区读书分享会参与人数为18人，活动预算为600元。
活动流程依次为阅读分享、交流提问与总结三项。阅读分享环节由参与者分享阅读内容，交流提问环节围绕分享内容展开，最后进行总结。
总结
本次活动围绕读书分享展开，按阅读分享、交流提问、总结的顺序安排。参与规模为18人，预算共600元；不另补时间地点与其他资料。`,$={id:be,task_id:qe,run_id:De,node_id:Se,execution_version:Pe,format:We,files:$e,sources:Ee,created_at:Me,preview:Te},Re=""+new URL("activity-BM-gNtXY.docx",import.meta.url).href,re=["一句话结论","Q3 回顾","关键数据","问题与原因","Q4 三个专项","需要的支持"];function I(e,n){var a,o,f,_;if(e.startsWith("f4a-")){const l=oe(e),h=Number(((a=n.match(/-v(\d+)$/))==null?void 0:a[1])??((o=l.runtime.card_draft)==null?void 0:o.version)??2);return{...structuredClone($),id:n,task_id:e,format:"html",version:h,execution_version:h,previous_artifact_id:h>1?`f4a-artifact-v${h-1}`:null,files:[{name:"report.html",role:"document",format:"html"},{name:"preview.pdf",role:"pdf",format:"pdf"},...te.DRAFT_UNITS.map(w=>({name:`page-${String(w.no).padStart(3,"0")}.png`,role:"preview_page",format:"png"}))],locators:te.DRAFT_UNITS.map(w=>({kind:"slide",pointer:w.pointer,title:w.title})),changed_locators:["page:7"],leftover_locators:["page:9"],preview:null}}const t=d(e),r=t.plan.nodes[0].output_format,i=((f=J(e,0).items.filter(l=>l.kind==="draft.updated").at(-1))==null?void 0:f.payload.version)??2,s=Number(((_=n.match(/-v(\d+)$/))==null?void 0:_[1])??i),c=r==="html"||r==="pptx"?re.map((l,h)=>({kind:"slide",pointer:`page:${h+1}`,title:l})):r==="xlsx"?[{kind:"sheet",pointer:"sheet:第四季度预算",title:"第四季度预算"}]:["活动安排","总结"].map(l=>({kind:"section",pointer:"heading:"+l,title:l})),v=r==="docx"?$.files.filter(l=>["document","preview_page","preview"].includes(l.role)):r==="xlsx"?[{name:"budget.xlsx",role:"workbook",format:"xlsx"}]:[{name:r==="pptx"?"report.pptx":"report.html",role:"document",format:r},{name:"preview.pdf",role:"pdf",format:"pdf"},...re.map((l,h)=>({name:`page-${String(h+1).padStart(3,"0")}.png`,role:"preview_page",format:"png"}))];return{...structuredClone($),id:n,task_id:e,format:r,files:v,execution_version:s,version:s,previous_artifact_id:s>1?`artifact-main-v${s-1}`:null,locators:c,changed_locators:s>1?[c[r==="docx"?0:Math.min(2,c.length-1)].pointer]:[],leftover_locators:s>1?[c[Math.min(4,c.length-1)].pointer]:[],preview:r==="docx"?$.preview:r==="xlsx"?`项目	预算（元）
部门活动	600`:null}}async function le(e,n,t){const r=I(e,n);if(!r.files.some(c=>c.name===t))throw new p("not_found","文件不存在");const i=t.endsWith(".docx")?Re:`./mock-artifacts/${e.startsWith("f4a-")?"f4a/":r.format==="docx"?"word/":""}${t}`,s=await fetch(i,{credentials:"same-origin"});if(!s.ok)throw new p("download_failed","成品文件读取失败");return s.blob()}const _n=Object.freeze(Object.defineProperty({__proto__:null,file:le,get:I},Symbol.toStringTag,{value:"Module"})),ue="sf-f2-mock",M=JSON.parse(sessionStorage.getItem(ue)??"{}"),R=()=>sessionStorage.setItem(ue,JSON.stringify(M)),Ue=e=>structuredClone(e);function m(e,n,t){var i;const r={seq:(((i=e.items.at(-1))==null?void 0:i.seq)??0)+1,kind:n,revision:1,created_at:Date.now()/1e3,payload:t};return e.items.push(r),r.seq}function P(e,n){n.state="done",m(n,"final.ready",{artifact_ids:["artifact-main"],summary:"最终版已交付",leftovers:[{text:d(e).plan.nodes[0].output_format==="docx"?"时间和地点还没确定，按约定未补写":d(e).plan.nodes[0].output_format==="xlsx"?"科目金额还没确定，保留预算总额":"季度目标值还没确定，达成率无法判断",locator:d(e).plan.nodes[0].output_format==="html"?"page:5":d(e).plan.nodes[0].output_format==="xlsx"?"sheet:第四季度预算":"heading:总结"}]}),se(e,{group:"recent",stuck_at:"已交付",attention_reason:null}),R()}function Q(e){var v,a;x();const n=d(e);if(M[e])return M[e];const t={items:[],queue:[],state:"chat",nextAt:Date.now()+2500};M[e]=t;const r=((a=(v=n.plan.equipment.find(o=>o.role==="writer"))==null?void 0:v.skill)==null?void 0:a.package_id)==="house-活动策划",i=r?"已删除重复叙述，按阅读分享、交流提问、总结整理活动流程":"已按审读意见修改，统一内容口径",s="artifact-main",c=n.plan.nodes[0].output_format==="html"?"page:3":n.plan.nodes[0].output_format==="xlsx"?"sheet:第四季度预算":"heading:活动安排";for(const o of n.plan.equipment.filter(f=>f.mode!=="none"&&f.role!=="finalizer"))m(t,"role.message",{role:o.role,text:o.role==="planner"?"出了约定和提纲":o.role==="writer"?"写完初稿 · 稿 1":o.role==="reviewer"?"审读发现重复内容，点名撰写修改":o.role==="illustrator"?"配图完成":o.role==="layout"?"排版完成 · v1":"已核对材料",evidence:o.role==="reviewer"?[{locator:c,note:"点名：writer"}]:[],artifact_id:s,version:1,round:1}),o.role==="writer"&&m(t,"check.message",{artifact_id:s,items:[{name:"不出现「待定」",pass:!0,detail:"待定 0",locator:null},{name:"内容不重复",pass:!1,detail:r?"活动流程存在重复叙述":"请统一内容口径",locator:c}]});return m(t,"role.message",{role:"writer",text:i,evidence:[{locator:c,note:"已修改"}],artifact_id:s,version:2,round:2}),m(t,"draft.updated",{artifact_id:s,version:2,changed_locators:[c],by_role:"writer"}),n.plan.equipment.some(o=>o.role==="reviewer"&&o.mode!=="none")&&m(t,"role.message",{role:"reviewer",text:"审读复查通过",evidence:[],artifact_id:s,version:2,round:2}),m(t,"check.message",{artifact_id:s,items:[{name:"内容不重复",pass:!0,detail:"已修改",locator:null}]}),m(t,"chat.ended",{reason:"reviewer_pass"}),m(t,"final.question",{question_id:"question-target",text:n.contract.questions[0].text,options:["按推荐","上传材料"],recommended:n.contract.questions[0].example,deadline_at:Date.now()/1e3+600}),n.task.group==="recent"?P(e,t):n.task.group==="attention"?t.state="finalizing":(t.queue=t.items.splice(2),t.nextAt=Date.now()+(n.task.id.startsWith("44ed")?3e4:2500)),R(),t}function je(e,n){var r;if(n.queue.length&&Date.now()>=n.nextAt){const i=n.queue.shift();i.seq=(((r=n.items.at(-1))==null?void 0:r.seq)??0)+1,n.items.push(i),n.nextAt=Date.now()+2500,i.kind==="chat.ended"&&(n.state="finalizing"),i.kind==="final.question"&&se(e,{group:"attention",attention_reason:"final_question",stuck_at:"定稿在等你回答一个问题"}),R()}const t=[...n.items].reverse().find(i=>i.kind==="final.question");(t==null?void 0:t.kind)==="final.question"&&n.state!=="done"&&!n.queue.length&&Date.now()/1e3>t.payload.deadline_at&&P(e,n)}function J(e,n){var r;const t=Q(e);return je(e,t),{items:Ue(t.items.filter(i=>i.seq>n)),next_seq:((r=t.items.at(-1))==null?void 0:r.seq)??0}}function Oe(e){return{state:Q(e).state}}function ze(e,n){const t=Q(e);if(n.to&&!d(e).plan.equipment.some(i=>i.role===n.to&&i.mode!=="none"))throw new p("invalid_input","本次没有这个角色");const r=m(t,"user.message",{to:n.to,kind:n.kind,text:n.text});if(n.kind==="answer"){const i=[...t.items].reverse().find(s=>s.kind==="final.question");if((i==null?void 0:i.kind)!=="final.question"||i.payload.question_id!==n.question_id)throw new p("invalid_input","问题已变化");t.queue=[],P(e,t)}else n.kind==="stop"?(t.queue=[],m(t,"chat.ended",{reason:"user_stop"}),P(e,t)):n.kind==="ask"?m(t,"role.answer",{role:n.to??"finalizer",text:"按交付约定组织内容，没有补写材料中未确认的事实。",in_reply_to:r}):(m(t,"role.message",{role:n.to??"writer",text:"已按你的意见修改",evidence:[],artifact_id:"artifact-main",version:3,round:2}),m(t,"draft.updated",{artifact_id:"artifact-main",version:3,changed_locators:[d(e).plan.nodes[0].output_format==="html"?"page:3":d(e).plan.nodes[0].output_format==="xlsx"?"sheet:第四季度预算":"heading:活动安排"],by_role:n.to??"writer"}));return n.kind==="instruct"&&t.state==="done"&&(m(t,"chat.ended",{reason:"reviewer_pass"}),P(e,t)),R(),{seq:r}}function Ne(e){const n=d(e);return{items:n.files.map((t,r)=>({id:`material-${r}`,task_id:e,text:"用户上传的材料",source_label:t,input_policy:"public_or_redacted",sha256:"3a4fb9d14b14445d4b2f733ba998f0843400763b37c76b8e07de2e9051c03911",created_at:n.task.created_at}))}}function de(e,n){return I(e,n)}async function Ce(e,n){var i;const t=de(e,n),r=(i=t.files.find(s=>["document","workbook","code_archive"].includes(s.role)))==null?void 0:i.name;if(!r)throw new p("not_found","主文件不存在");return le(e,n,r)}const fn=Object.freeze(Object.defineProperty({__proto__:null,artifact:de,download:Ce,events:J,materials:Ne,runtime:Oe,send:ze},Symbol.toStringTag,{value:"Module"})),Ae={"house-PRD需求说明":`---
name: prd
description: 给研发、设计、测试看的产品需求说明 Word：做什么、不做什么、怎么算做完一眼可查，验收标准能照着测。
house: true
deliverable: PRD / 需求说明
format: docx
roles: planner, writer, reviewer
examples:
  - 给内部知识库加「收藏」功能，写一份需求说明
  - 把这段用户反馈整理成需求文档，写清验收标准
  - 写一份登录页改版的 PRD，写明不做的事
---
# PRD / 需求说明（Word）

## 1 适用
新功能、功能改版、内部工具需求的说明文档，读者是研发、设计、测试，成品是 Word。不适用：活动方案（用「活动策划」）、市场或竞品研究（用「调研报告」）、规章流程（用「管理制度 / 流程规范」）。

## 2 读者
研发、设计、测试同事。翻开第一眼找：要做什么、边界在哪、怎么算做完。研发关心状态和异常，设计关心场景和交互，测试关心验收标准能不能照着验。最烦：背景写一页、用户故事照套模板、「支持」「优化」没有边界、验收写「功能正常可用」、每节末尾挂「待补充」。

## 3 结构
- 背景与问题：现在哪里不好，证据是什么。
- 目标：上线后可观察到的变化；也写不追求什么。
- 用户场景：谁、在什么情况下、想做什么、现在卡在哪。
- 功能范围与不做的事：做哪些功能点、优先级；明确不做什么、为什么。
- 交互要点：入口、主流程、各种状态和边界。
- 验收标准：一条一个操作加预期结果。
- 上线后看哪些数据：看什么指标、怎么算、回答什么问题。
- 待决问题：需要拍板的事，每条附建议（只在这里出现一次）。

## 4 要求
1. 背景只写问题和证据，三五句，不复述需求原话。
2. 目标写成可观察的变化；需求没给目标值时写衡量哪个指标，不编数值。
3. 场景具体到角色和情境，场景之间不重复同一个诉求。
4. 范围用表：功能点、说明、优先级；「不做的事」单列，每条写原因。
5. 交互要点必须覆盖：空状态、数量或长度上限（或说明是否限制在待决问题里定）、失败提示、权限（无权限的内容怎么处理）、被删除或失效后的表现。
6. 验收标准写成「在什么前提下，做什么操作，看到什么结果」，测试照着做能判过或不过。
7. 数据部分写清事件名、触发时机、指标口径，以及每个指标回答什么问题。
8. 范围、验收、埋点用表，不用长段落条列。
9. 不确定的事集中到「待决问题」，每条附建议方案；正文不散落「待补充」「待定」。
10. 同一个东西全文一个叫法（如统一叫「收藏」不混用「星标」「关注」）。
11. 分析和取舍用「建议」「考虑到」的口吻写，和已确定的事分开。
12. 用户限定两到三页时，把它做成紧凑评审稿：点名章节保持原名，背景并入名为「目标」的章节。场景用短条目，不拆成多列表格；范围表把不做的事也作为行写进去，不另加第二张表。表格不设序号列，每格写短语，不写解释性长句；验收合并正反状态相同的路径。交互只解释规则，验收只写动作与结果，埋点与指标放同一张表，不在三处重复同一事实。缺口只保留会阻塞功能判断的内容，已回答或不影响功能的上线日期、平台名称等不占篇幅。渲染超页时压缩句子、合并重复行，不额外加背景、读者说明或附录。

## 5 废话清单
- 「提升用户体验」「打造便捷高效的……」这类没有对象的目标。
- 「作为用户，我希望……以便……」照套，没有具体情境。
- 验收写「功能正常」「交互流畅」「符合预期」。
- 每节结尾一句「具体细节待补充」。
- 背景大段讲行业趋势。
- 范围里写「后续可扩展」却不说现在做不做。

## 6 必问
1. 用在什么端？（例：网页版知识库，暂无手机端）
2. 现在有没有类似的入口可以借用？（例：已有「最近浏览」列表）
3. 文档有没有可见范围或权限？（例：部分文档仅部门可见）
4. 期望什么时候上线、有没有版本节点？（例：11 月第二个迭代）
5. 有没有必须对齐的现有指标或数据平台？（例：埋点统一走神策）

## 7 审读清单
1. 每个用户场景是否有具体角色和情境，且场景之间不重复？
2. 是否同时写了「做的功能」和「不做的事」，不做的事是否都有原因？
3. 每条验收标准是否包含前提、操作和可判定的预期结果？
4. 交互要点是否覆盖空状态、上限、失败、权限、内容失效五类情况？
5. 每个数据指标是否写了口径和它要回答的问题？
6. 正文是否没有散落「待补充」「待定」，不确定的事都集中在待决问题且附建议？
7. 有没有编造需求里没有的用户量、目标值、上线日期？
8. 范围、验收、埋点是否用了表？
9. 同一概念是否全文一个叫法？
10. 用户限定页数时，渲染后的 Word 是否在要求范围内？若超页，删重复解释、压缩表格单元格和背景，不删场景、异常或验收标准。

### 紧凑稿审读补充
- 两到三页稿以范例的短句与双列表为参照。多列长句会让每行自动折成多行；超页时先把「前提、操作、预期」合为两列，删已在交互解释的重复规则，保留可执行验收动作。
- 已回答的范围不能继续留在缺口；用户跳过的上线日期、平台等不阻塞功能评审，不照搬范例的待决问题。结尾只保留确实影响范围或交互的决定。
`,"house-Python小工具":`---
name: python-tool
description: 给会敲命令、不读代码的同事用的 Python 小工具或数据脚本：一条命令能跑，输入出错给一句人话，测试真跑，说明照抄就能用。
house: true
deliverable: Python 小工具 / 数据脚本
format: code
roles: planner, writer, reviewer
examples:
  - 写个小工具把文件夹里的 CSV 合并并按月汇总
  - 写个脚本批量重命名这批文件，带测试
  - 把这份表格里的重复行去掉，输出一份新表
---
# Python 小工具 / 数据脚本（代码）

## 1 适用
文件合并、格式转换、批量改名、数据清洗与汇总、简单报表生成这类本地命令行工具，成品是代码包。不适用：只要一张汇总表、不需要反复运行（用「预算与数据汇总」）；网页、服务、带界面的应用（一期不做）。

## 2 读者
两类人：会在终端敲命令但不读代码的同事，和以后接手维护的人。前者第一眼找使用说明里那条命令；后者找入口在哪、逻辑在哪、测试怎么跑。最烦：跑不起来、依赖没写全、出错满屏堆栈、测试是摆设、说明和代码对不上。

## 3 结构
撰写角色按文件输出。
- \`README.md\`：用途一句话、安装、用法示例（可复制的命令）、输入格式、输出说明、常见报错和处理。
- 主程序：命令行入口只做参数解析和调用；读取、处理、输出各是独立函数。
- \`tests/\`：测试文件，用临时目录造数据。
- \`requirements.txt\`：第三方依赖。

## 4 要求
1. README 里的安装和运行命令照抄就能跑通，命令和参数名与代码一致。
2. 依赖最少：标准库优先，确需第三方包的写进 requirements.txt。
3. 命令行参数用 argparse，每个参数有说明和默认值，\`--help\` 能看懂。
4. 输入出错（路径不存在、列缺失、格式不对）时打印一句人话说明原因和怎么改，以非零退出码结束，不抛堆栈。
5. 核心逻辑写成可测试的函数，不依赖全局状态和本机固定路径。
6. 测试至少覆盖一条正常路径和一个边界（空输入、坏数据、缺列），断言具体结果，不写 \`assert True\`。
7. 只读写用户指定的输入和输出位置，不联网，不调用外部命令。
8. 跳过的脏数据要计数，运行结束时报告，不静默丢弃。
9. 读文本文件兼容常见编码（如 Excel 另存的带 BOM 的 UTF-8）。
10. 输出里的名称（工作表名、列名、文件名）与需求用词一致。
11. 注释只写「为什么这样做」，不逐行翻译代码。

## 5 废话清单
- README 写「本工具功能强大、简单易用」。
- 注释「# 导入模块」「# 定义函数」。
- 只有 \`assert True\` 或只测「函数能被调用」的测试。
- 没被用到的函数、配置项、日志框架。
- 一个文件里堆一个几百行的 main。

## 6 必问
1. 输入文件长什么样？给一两行例子。（例：\`2026-01-05,拿铁,30\`，日期是年-月-日）
2. 在什么电脑上用、Python 版本？（例：Windows，Python 3.11）
3. 输出要什么格式和名称？（例：Excel，工作表叫「明细」「月汇总」）
4. 数据量大概多少？（例：每月几千行）
5. 遇到坏数据是跳过还是停下？（例：跳过并告诉我跳了几行）

## 7 审读清单
以平台运行测试的结果为依据判断。
1. 测试是否真实运行并全部通过？
2. README 的命令是否与代码的参数名、默认值一致？
3. 需求要求的每个输出（工作表、列、文件）是否都存在且名称一致？
4. 需求描述的特殊情况（如输入为空、不存在）行为是否已实现并有测试？
5. 错误输入时是否只输出一句提示并以非零退出码结束？
6. requirements.txt 是否列全了用到的第三方包？
7. 是否没有读写指定位置以外的文件、没有联网和外部命令？
8. 测试是否覆盖了至少一个边界情况，且断言具体结果？
9. 跳过的数据是否计数并报告？

10. CSV 的空白物理行与坏数据行是否分清？\`csv.DictReader\` 会自动跳过完全空白行，不会将其交给逐行校验；测试不能把这种空行算进“日期或金额错误”的坏行数。例如两条无效日期/金额记录加一条空白物理行，坏数据应计两条。需求真要统计物理空行时，应单独实现并分别验证，不能用修改计数掩盖实际解析行为。
11. 所有随包测试是否与 README 的行为约定一致，并实际执行全过？发现断言与标准库解析行为冲突时修正实现或断言口径，保留空白输入与坏数据覆盖，不删测试、不跳过失败项。
`,"house-会议纪要":`---
name: meeting-minutes
description: 由录音转写整理的会议纪要 Word：先给决定和待办，按议题组织，每条结论和待办用脚注挂录音时间段，没参会的人看得懂、参会的人能回听核对。
house: true
deliverable: 会议纪要
format: docx
roles: planner, writer, reviewer
examples:
  - 把这段周会录音整理成纪要，待办写清谁、何时
  - 根据评审会转写稿出一份纪要，标出未决事项
  - 整理客户沟通会记录，决定和分歧分开写
---
# 会议纪要（Word，录音转写接入）

## 1 适用
周会、项目会、评审会、客户沟通会等，输入是录音转写文本（带时间戳和说话人）或会上笔记，成品是 Word 纪要。不适用：要制定成文的规章（用「管理制度 / 流程规范」）、要写成需求文档（用「PRD / 需求说明」）、阶段工作总结（用「工作汇报」）。

## 2 读者
没参会的同事，以及事后对账的参会者。第一眼找：定了什么、我要做什么、什么时候交。最烦：按发言顺序记流水账、待办没人没时间、把讨论当结论、想核对原话却不知道在录音哪里。

## 3 结构
- 会议信息：主题、日期、参会人（转写里有才写）。
- 会议决定：拍板了的事，每条一句。
- 待办事项：表格，事项、负责人、截止时间、出处。
- 议题要点：按议题分节，每节写讨论的关键信息和理由。
- 未决与分歧：没定的事、各方观点、建议下次怎么定。
- 脚注：每条决定、待办、分歧挂一个脚注，写录音时间段和说话人。

## 4 要求
1. 按议题组织，不按发言先后记流水账。
2. 严格区分「决定」「待办」「讨论」「未决」：会上没有明确拍板的，不写进决定。
3. 每条决定、待办、分歧挂脚注，格式统一为「录音 起–止，说话人」（一句话的结论可只写一个时间点），时间照转写原格式；时间段取自转写，不估算。
4. 待办写清做什么、谁、何时；转写里没说负责人或时间的，写「会上未明确」，并在未决里提一次，不猜。
5. 人名、数字、日期照转写原样；明显的同音识别错误按上下文更正，并在脚注注明「转写为『……』」。
6. 口语改成书面语，去掉口头禅和重复，但不改意思、不加强或减弱语气。
7. 分歧写清双方观点和各自理由，不替会议下结论；可以加一句「建议下次会议先定……」，用建议口吻。
8. 闲聊和与议题无关的内容不进纪要。
9. 决定放在最前，待办用表。

## 5 废话清单
- 「会议气氛热烈，大家积极发言」。
- 「经过充分讨论，与会人员一致认为」，而转写里并没有一致。
- 按人逐一复述「张三表示……李四表示……」。
- 「会议取得圆满成功」「下一步将继续推进」。
- 每条待办后面都写「待定」。

## 6 必问
1. 会议主题和日期？（例：小程序改版周会，10 月 9 日）
2. 转写里的「说话人 1、2」分别是谁？（例：说话人 1 是产品王敏）
3. 纪要给谁看？（例：项目组内部，同时抄送部门负责人）
4. 有没有要隐去的内容？（例：薪资讨论不写）

## 7 审读清单
1. 每条「决定」能否在转写中找到明确拍板的原话，脚注时间段是否对得上？
2. 每条待办是否有事项、负责人、截止时间，缺的是否写了「会上未明确」？
3. 有没有把讨论或个人意见写成决定？
4. 分歧是否写了双方观点和理由？
5. 脚注格式是否统一，时间段是否都来自转写？
6. 是否按议题组织而不是按发言顺序？
7. 有没有转写里没有的数字、人名、日期？
8. 同音字更正是否在脚注注明了原转写？
9. 有没有套话和闲聊内容？

`,"house-工作汇报":`---
name: work-report
description: 给上级或团队的阶段工作汇报幻灯片：结论先行，数字带解读，问题带影响和动作，计划有边界。
house: true
deliverable: 工作汇报
format: html|docx
roles: planner, writer, reviewer
examples:
  - 做一份第三季度工作汇报给老板，8 页左右
  - 把这周的项目进展写成周报
  - 把这几个数字整理成一页结论加下季度计划
---
# 工作汇报（幻灯片）

## 1 适用
周报、月报、季度汇报、项目阶段汇报，读者是上级或团队，成品是幻灯片。项目周报也用它，没指定格式时默认交 Word：按节写，结构同下，「页」读作「节」，图表改成表格。不适用：活动或方案策划（用「活动策划」）、对外宣讲。

## 2 读者
上级。翻开第一眼找结论和数字，想知道「好不好、哪里有问题、你打算怎么办」。最烦：同一组数字反复出现、把需求原话抄成要点、计划没有时间和责任、通篇没有判断。

## 3 结构
- 封面：汇报名、周期、汇报人（有才写）。
- 总体结论：一句话定性这段时间（好、平、有隐患），再三条最重要的事实支撑它。
- 关键数据：每个指标一张卡或一张图，旁边一句「所以呢」；有起止值的画成对比图。
- 完成事项：按事情说，每件带结果或影响，不是流水账。
- 问题与原因：每个问题三句：发生了什么、影响什么、已经或打算怎么做。
- 下季度计划：三到五件，每件写清要做成什么、什么时候、谁牵头（没给就写「建议由…负责」）。
- 结尾：需要上级拍板或支持的一两件事；没有就写「请指正」。

## 4 要求
1. 结论先行：第二页就是定性判断，不是背景。
2. 每个数字后面必须跟一句它意味着什么，算得出来的比例和变化要算出来（1.2 万到 1.8 万就是增长 50%）。
3. 同一个数字全片只在一处当主角，别处只引用不重复展示。
4. 问题页必须写影响和动作，不写「原因是第三方接口变更」就完。
5. 计划每条有时间或里程碑，有牵头人或「建议由谁负责」。
6. 没给的事实不编：目标值、项目名、负责人不知道就不写，或在结尾当「需要补充」提一次。
7. 分析、解读、建议是你的本职，用「建议」「判断」「预计」的口吻写，和事实分开。
8. 每页一个观点，标题就是观点句（「用户数增长五成，主要靠新功能」），不是栏目名（「关键数据」）。
9. 有起止、对比、占比的数字优先用图；没有可比数据不硬画。
10. 讲稿（notes）写给汇报人念的话，两三句，不重复页面文字。

## 5 废话清单
- 把需求原话拆成要点抄一遍。
- 「整体向好，同时需关注风险」这类两头都说的句子。
- 「未做其他推断性归因」「资料未提供」写进页面。
- 每页都以「待确认」收尾。
- 结尾页只写「谢谢」。
- 栏目名当标题：关键数据、完成事项。

## 6 必问
1. 这段时间的目标或计划基线是什么？（例：季度目标用户 2 万）
2. 延期或出问题的项目叫什么、影响谁？（例：会员系统改版，影响运营活动上线）
3. 汇报人和汇报对象的称呼？（例：产品部 向 总经理）
4. 有没有必须提的下阶段重点？（例：优先把工单率再降 10%）
5. 有没有要上级拍板的事？（例：增加一名测试）

## 7 审读清单
1. 第二页是否给出了对这段时间的明确定性判断？
2. 每个关键数字旁是否有一句解读，可算的变化是否算了？
3. 是否有任何一页在重复另一页已经展示过的数字或事实？
4. 问题是否都写了影响和动作？
5. 计划每条是否有时间或里程碑、有牵头人或建议负责人？
6. 有没有编造需求里没有的目标值、项目名、人名、完成状态？
7. 标题是否都是观点句而不是栏目名？用户明确指定的章节名是否仍能在对应页找到（可用短栏目标识保留原名）？
8. 有起止或对比的数字是否用了图，图是否只比同一指标？
9. 页面上有没有「待确认」「未提供」这类流程话？
10. 结尾是否明确了需要上级决定或支持的事，或明确没有？

### 写稿到成品审读补充
- 「第 N 页」是稿件分段标识，不是页面标题；封面只放实际汇报名和已知信息，不印「未提供」「此页留空」「按实际填写」等制作说明。
- 起止值对比使用可编辑柱状图。稿件在关键数据页用两列表给出「阶段、用户数」；两行分别为期初、期末，数值写完整原值（如 12000、18000），单位不缩放藏在表头。不在这张表另加变化列，变化率与解读放正文；横向比较才用三列表「指标、期初、期末」。检查生成文件里确实有图、数值和资料一致，文字或表格不能冒充图表。
- 图表页是否只讲图中的指标？右侧保留起止值和一句简短解读，不能把工单、新功能等其他指标、整段讲稿都塞进同一侧栏；其他指标放到各自页面，展开分析放讲稿。逐页看成品底部，文字不得被裁掉。
- 页面是否还在向制作者解释怎么做？「栏目标签」「本页即…」「表格中另备一版」「可直接替换」以及引用块中的制作说明都不交给读者；指定栏目直接作为短小标题出现，封面只留真实汇报名、周期和汇报人。
`,"house-幻灯片视觉":`---
name: slide-visual
description: 排版角色的官方技能：主题「光·工作室」的八种组件各管什么内容、每页怎么选组件和填字段、自由区怎么用、放不下怎么办，以及视觉审读清单。
house: true
deliverable: 幻灯片视觉
format: html
roles: layout
examples:
  - 把这份稿子排成幻灯片，数字多的页用数据卡
  - 计划页改成表格，问题页做成左右对比
  - 字太多的页帮我拆开或压一压
---
# 幻灯片视觉（排版角色）

## 1 适用
所有 HTML 幻灯片任务的排版角色都装它（工作汇报、活动策划，以及其他判定为幻灯片的成品）。输入是撰写的分页稿（每页：观点句标题、正文、配图意图、讲稿），输出是每页选一个组件、把稿子内容填进组件字段，程序按主题渲染。它只管「怎么摆」，不管内容对不对（撰写和审读的事），不写 CSS，不改稿子的意思。

## 2 读者
会议室里看投屏的人，和会后拿 PDF 翻的人。第一眼看标题（这页的结论），第二眼找一个视觉焦点（一个大数字、一张图、一张表）。最烦：一页塞满字、字被压得很小、每页长得都一样、图表看不出在比什么、装饰比内容抢眼。

## 3 组件（主题「光·工作室」，id \`studio-light\`）
主题：近白底，大量留白；全片只有一个主色（蓝紫 #5160f0），用于标题里的关键词、主数字、图表主系列；正文和辅助信息用中性灰；绿色只表示「达成、变好」，橙色只表示「风险、要关注」；系统中文字体；不用毛玻璃、多色渐变和层层阴影。只有这一套浅色主题，没有深色页。

**节奏**：页分两种：主视觉页（封面、大数字卡、图表加结论、结尾）和密集页（表格、要点、时间线、双栏）。两种尽量交替：连续三页不用同一种组件，密集页不要连着超过三页。页的顺序由撰写定，排版只在选组件时照顾节奏。节奏靠版式交替，不靠换深色背景。

八种组件，字段名以渲染器为准：
- **封面**：标题、副题、日期或汇报人（有才填）、封面图（配图角色给，放右侧，标题在左）。只用于第 1 页。
- **要点**：标题、要点若干（每条一句话，可带一句补充）。论点加理由、并列的几件事用它；三条左右最好读。
- **大数字卡**：标题、卡片若干（数值、名称、一句解读）。几个不同指标放在一起看时用它。
- **双栏对比**：标题、左栏（小标题、要点）、右栏（小标题、要点）、结论句。前后对比、两种方案、做与不做用它。
- **图表加结论**：标题、图表（类型：柱状、折线、饼图；类别；系列名与数值）、结论句。同一指标的起止对比用柱状，多个时间点的趋势用折线，各部分加起来等于整体的占比用饼图。
- **表格**：标题、列名、行、表注。三个以上维度的条目用它（计划的事、时间、牵头；预算的科目、金额、占比）。
- **时间线**：标题、节点若干（时间、做什么、谁负责）。按时间推进的节奏、里程碑用它。
- **结尾**：标题、需要决定或支持的事、联系人（有才填）。只用于最后一页。

**自由区**：每页可带一块，三选一：一句判断（如「判断：成果超出常规季度，风险在交付节奏」）、一张很小的表、或配图角色给这页的一张小图。它补充本页，不开第二个话题。

## 4 要求
1. 先读这页的观点句和内容类型，再选组件：一组不同指标 → 大数字卡；同一指标的比较或趋势 → 图表加结论；两边对照 → 双栏对比；三个以上维度的条目 → 表格；按时间推进 → 时间线；论点加理由 → 要点。
2. 标题照抄稿子的观点句，不改成栏目名，不改意思。
3. 一页只有一个视觉焦点：放了图表就不再放大数字卡，放了表格就不再放图。
4. 连续三页不能用同一种组件；主视觉页与密集页交替（见第 3 节「节奏」）。连着几页都是要点时，回头看其中有没有内容更适合图表、表格或大数字卡。
5. 放不下时不缩字号、不删内容、不挤出页框：在结果里标「放不下：第 N 页，原因」，找撰写压缩或拆页。
6. 图表只比同一单位的同一指标；数值原样取自稿子，不四舍五入、不换算口径；没有可比数据不硬画图。
7. 主色只用来强调，一页只强调一处；绿色、橙色只表示好坏，不当装饰色。
8. 配图只放在配图角色指定的页：封面图放封面图位，其余页的图放自由区位；不铺成文字背景，不压住标题和数字。
9. 自由区只放一句判断、一张小表或一张小图，且与本页观点直接相关；没有就空着。
10. 讲稿放进备注字段，不出现在页面上。
11. 第 1 页用封面，最后一页用结尾；结尾必须列出需要决定或支持的事，没有就写「请指正」。
12. 交稿前逐页自检：不用 emoji 或图标代替文字；标题在一行内放得下（放不下就找撰写把观点句改短，不缩字号）；图片只允许裁掉底部，不裁顶部和两边；不加渐变文字、入场动画、数字从 0 跳起来的计数效果；数字直接写成文字。程序检查也会查这几条，不过就打回排版。

## 5 废话清单
- 每页都是要点列表，数字和计划也写成一串圆点。
- 为了「好看」加图标、emoji、色块、装饰线。
- 只写「谢谢」或「Thank you」的大字结尾页。
- 图表没有结论句，看的人不知道该看出什么。
- 把表格内容硬塞进双栏，或把一组数字画成不相干的饼图。
- 一页里出现三种以上强调色。
- 渐变色的标题字、入场动画、数字从 0 跳到目标值的计数效果。

## 6 范例页
- 稿子「用户数从 1.2 万到 1.8 万，增长 50%」→ 图表加结论：柱状两根（季度初、季度末），结论句放稿子里的解读。
- 稿子「3 个新功能、用户数 +50%、工单 −25%」→ 大数字卡三张，每张一句解读；工单下降用绿色，因为它是变好。
- 稿子「四件计划，各有时间和牵头人」→ 表格（计划、做成什么、时间、牵头）。
- 稿子「活动四周分三段」→ 时间线，每个节点写时间、动作、负责方。
完整的八页选择表见 \`范例.md\`。

## 7 审读清单
1. 每页选的组件是否与内容类型匹配（数字用卡或图、多维条目用表、时间推进用时间线）？
2. 每页标题是否是稿子里的观点句，没有被改成栏目名？
3. 页图上有没有文字溢出、挤出页框、被压小的字？
4. 图表是否只比同一指标、数值与稿子一致、带结论句？
5. 节奏是否交替：有没有连续三页同一种组件，或密集页连着超过三页？
6. 风格是否一致：全片的强调色、字体角色、标题写法是否同一套规则；主色是否一页只强调一处，绿色和橙色是否只表示好坏？
7. 配图是否在指定的页、没有压住标题和数字？
8. 第 1 页是否是封面、最后一页是否是结尾，结尾是否列出了要决定或支持的事？
9. 自由区是否只放了一句判断或一张小表，且与本页相关？
10. 视觉层级是否清楚：没看过这份稿子的人，能不能一眼看出每页先看什么（标题结论）、再看什么（唯一的视觉焦点），而不是几样东西抢着引人注意？

`,"house-活动策划":`---
name: campaign-plan
description: 给决策者和执行团队的活动策划幻灯片：一页看清目标、玩法、钱和成败标准，机制写成用户路径，预算拆到科目，指标带口径。
house: true
deliverable: 活动策划
format: html
roles: planner, writer, reviewer
examples:
  - 为社区咖啡店做一份四周会员拉新方案，预算 3 万
  - 策划一场门店节日促销，写清玩法和预算
  - 给团队年会做一份活动方案，含流程和分工
---
# 活动策划（幻灯片）

## 1 适用
拉新、促活、促销、会员、节日营销、线下活动、内部活动的策划方案，成品是幻灯片。不适用：回顾已经做完的工作（用「工作汇报」）、产品功能需求（用「PRD / 需求说明」）、市场与竞品研究（用「调研报告」）。

## 2 读者
批钱的人（老板、市场负责人）和干活的人（运营、门店、设计）。批钱的人第一眼找：要达成什么、怎么玩、花多少、怎么算成功；干活的人找：哪一周做什么、谁负责。最烦：玩法只有一句「线上线下联动」、预算只有总数、指标没有口径、风险对策写「加强监控」。

## 3 结构
- 封面：活动名、品牌、周期。
- 一页概览：目标、核心玩法、预算、周期、成败标准，各一句。
- 活动目标：要改变什么，用什么衡量。
- 目标人群：分几类人，每类为什么会来。
- 活动机制：用户从看到到拿到好处的路径，门槛和奖励。
- 渠道与节奏：按周或阶段，每段做什么、在哪做、谁负责。
- 预算分配：按科目拆，每科多少、占比、为什么这么分。
- 风险与应对：可能出什么事、怎么提前发现、发生了怎么办。
- 效果指标：看哪几个数、怎么算、什么时候看。
- 结尾：需要拍板或提供的事。

## 4 要求
1. 第二页是一页纸概览，只看这页也能决定批不批。
2. 目标写成可衡量的变化；需求没给目标值时写衡量什么，目标值作为「建议」或在结尾请对方提供，不编。
3. 人群分层，每层写清是谁、动机是什么、用哪个钩子打动。
4. 机制写成用户路径：看到什么 → 做什么 → 得到什么；参与门槛、奖励形式、领取和核销方式写具体。
5. 节奏覆盖整个活动周期不留空档，每段有动作、渠道、负责方（没给写「建议由…负责」）。
6. 预算按科目拆，科目之和等于给定总额；拆分是建议就写「建议分配」，并给一句理由。
7. 风险每条写三件事：可能发生什么、早期信号、应对动作。
8. 每个指标带口径：怎么算、在哪看、第几周看。
9. 数字只用需求给的；推算出来的（如每周预算、每人成本）标明是推算。
10. 每页一个观点，标题是观点句（「四周分三段，第一周只做老客裂变」），不是栏目名。
11. 节奏用时间线，预算用表或图，人群和指标用卡片或表。
12. 讲稿两三句，说这页为什么这么设计，不重复页面文字。

## 5 废话清单
- 「线上线下全面联动」「打造爆款」「全方位提升品牌影响力」这类没有动作的句子。
- 风险对策写「加强监控、及时调整」「做好预案」。
- 预算页只写总额，或科目加起来不等于总额。
- 每页都把活动目标再说一遍。
- 指标只写「转化率」「曝光量」，不说怎么算。
- 结尾页只写「谢谢」。

## 6 必问
1. 这次活动要达成的目标值或参照基线？（例：四周新增会员 800 人，现有会员 3000 人）
2. 品牌和门店现状？（例：两家社区店，日均客流约 200 杯）
3. 能用的渠道有哪些？（例：门店收银台、企业微信社群、本地生活平台）
4. 能拿出的奖励和权益？（例：首杯半价、第二杯免费、周边杯套）
5. 活动开始日期和不能撞的档期？（例：11 月 4 日开始，避开双十一当周）

## 7 审读清单
1. 第二页是否在一页内给出了目标、玩法、预算、周期、成败标准？
2. 机制页是否写出了用户参与路径、门槛和奖励的具体形式？
3. 预算各科目之和是否等于需求给的总额，拆分是否标为建议并有理由？
4. 每个效果指标是否写了计算口径和查看时间？
5. 每条风险是否有早期信号和应对动作？
6. 节奏是否覆盖整个活动周期、每段有负责方或建议负责方？
7. 有没有编造需求里没有的门店数、会员数、客流、目标值？
8. 标题是否都是观点句而不是栏目名？
9. 页面上有没有「待定」「资料未提供」这类流程话？
10. 结尾是否列出了需要拍板或需要对方提供的事？
11. 用户点名的章节是否在对应页保留原名（例如「活动目标：一句观点」）？观点句不能替换掉用户要找的栏目；返工时逐项对照，不把章节名称仅写进讲稿。

`,"house-演讲稿":`---
name: speech-script
description: 给讲者念、给听众听的演讲稿 Word：开头三句进主题，三段各一个观点配一个画面，数字少而好记，结尾回到开头并给一个具体动作。
house: true
deliverable: 演讲稿
format: docx
roles: planner, writer, reviewer
examples:
  - 写一篇 8 分钟的内部分享稿，讲新人上手怎么从两周缩到五天
  - 写一段 3 分钟以内的年会开场致辞
  - 帮我写一篇竞聘演讲稿，突出三件做成的事
---
# 演讲稿（Word）

## 1 适用
内部分享、年会或活动致辞、开场发言、颁奖词、述职或竞聘演讲，成品是讲者拿着念的稿子。不适用：要投在屏幕上的幻灯片（用「工作汇报」或「活动策划」）、交给别人看的书面材料（用「调研报告」「管理制度 / 流程规范」）、会后整理（用「会议纪要」）。

## 2 读者
两个人：念稿的讲者和听稿的听众。听众只用耳朵，第一分钟决定听不听，听完只记得住一两句话和一个画面；讲者要能顺口念下来，知道哪里停、哪里重读、超时了删哪段。最烦：开头客套三分钟、书面长句念着拗口、一串数字一个也没记住、三段讲的其实是一件事、结尾只有「谢谢大家」。

## 3 结构
- 稿头：题目，一行写场合、讲者、时长。
- 开场：一个具体场景、问题或反差，三句之内说出今天讲什么。
- 为什么和你有关：一两句，说清这件事和台下的人有什么关系。
- 主体三段：每段一个观点，先说观点句，再给一个例子或画面，最后一句小结；段与段之间一句过渡，告诉听众讲到哪了。
- 收尾：回到开场的那个场景或问题，给听众一个具体可做的动作，再致谢。
- 讲者提示（附在文末的表）：每段预计时长、哪段超时可删、需要特别注意的读音或停顿。

## 4 要求
1. 写给耳朵听：短句，一句一口气念得完；少用「此外」「综上所述」「与此同时」这类书面连接词。
2. 开头不客套，第一句就是场景、问题或反差；称呼按场合给一句，内部分享不用「尊敬的各位领导」。
3. 每段只讲一个观点，第一句就是观点句；三段之间不重复，各管一件事。
4. 每个观点配一个具体例子或画面，例子只用需求给的事实；需求没给故事时，把给定的事实讲成场景，不虚构人物、对话和客户。
5. 数字少而好记：一段里只让一个数字当主角，用对比讲（「两周变成五天」），比例和差值能算的算出来。
6. 过渡句明确报进度：「第一件事」「第二件事」「最后一件，也是最难的一件」。
7. 结尾回扣开场，给一个听众今天就能做的动作，而不是口号。
8. 篇幅和时长相当：按演讲语速（含停顿，每分钟一百八十字左右）估算念完的时长，与需求给的时长相符，估算写进讲者提示。
9. 用「［停顿］」标在需要留给听众反应的地方，用加粗标重读的词，全篇各几处，不滥用。
10. 正文是段落，不是要点列表；不写成幻灯片的提纲。
11. 分析和判断是讲者的观点，用「我的体会是」「我想建议」的口吻，和事实分开。

## 5 废话清单
- 「尊敬的各位领导、亲爱的同事们，大家好，今天很荣幸站在这里」三连开场。
- 「众所周知」「在……的大背景下」「随着……的不断发展」开头的空句。
- 赋能、抓手、闭环、打通、沉淀、对齐颗粒度。
- 「让我们携起手来，共创美好明天」这类没有动作的号召。
- 三段都在说「我们很努力」，只是换了说法。
- 一口气念出五六个数字。
- 结尾直接「我的分享就到这里，谢谢大家」，前面没有落点。

## 6 必问
1. 什么场合、台下是谁、大概多少人？（例：月度内部分享会，客服和产品约 60 人）
2. 讲者是谁、用什么身份讲？（例：客服组组长，第一次在全员会上分享）
3. 要讲多长时间？（例：8 分钟）
4. 希望听众听完做什么？（例：各组下个月试行每天 15 分钟复盘）
5. 有没有能讲的真实故事或数字？（例：上个月一位新人第五天就独立接线）

## 7 审读清单
1. 开场三句之内是否说出了今天讲什么，且没有客套三连？
2. 主体每段的第一句是否是观点句，三段是否各讲一件不同的事？
3. 每个观点是否配了一个具体例子或画面？
4. 每段是否只有一个主数字，且用对比讲清了它意味着什么？
5. 有没有念起来拗口的书面长句或书面连接词？
6. 段与段之间是否有过渡句报进度？
7. 结尾是否回扣开场，并给出一个听众能做的具体动作？
8. 讲者提示里的估算时长是否与需求时长相当，是否标了超时可删的段？
9. 有没有编造需求里没有的成绩、人名、对话或客户故事？
10. 有没有废话清单里的套话？

`,"house-管理制度流程规范":`---
name: policy
description: 公司内部管理制度与流程规范 Word：条款编号清楚，每条写清谁、做什么、什么时限、违反怎样，行政拿去改几个值就能发。
house: true
deliverable: 管理制度 / 流程规范
format: docx
roles: planner, writer, reviewer
examples:
  - 起草一份 20 人团队的远程办公管理规定
  - 把报销流程整理成一份规范，审批时限写清楚
  - 写一份新员工入职流程，条款编号清楚
---
# 管理制度 / 流程规范（Word）

## 1 适用
考勤、远程办公、报销、采购、信息安全、审批流程、岗位操作规范等内部制度文件，成品是 Word。不适用：产品功能需求（用「PRD / 需求说明」）、会议决定的记录（用「会议纪要」）、对外合同和法律文书（一期不做）。

## 2 读者
两类人：照着做的员工，和负责执行、修改的行政或人事。员工翻开找：我能不能这样做、要走什么流程、违反了会怎样；行政找：哪些值要按公司情况改、和现有制度冲不冲突。最烦：口号式条款、条款没有主体和时限、同一事项两章说法不一样、罚则超出公司权限。

## 3 结构
- 标题与总则：目的（一句）、适用范围、术语定义。
- 分章正文：按需求点名的章节，每章若干条。
- 附则：解释部门、生效日期、修订方式、与其他制度的关系。
- 附件（需要时）：申请表要素、审批流程表。

## 4 要求
1. 编号用「第一章」「第一条」，条下分项用（一）（二）；条号全文连续，不跳号、不重号。
2. 每条能读出主体（谁）、行为（做什么）、条件或时限、结果；读不出主体的条款改写。
3. 用词区分义务、禁止、许可：「应」「不得」「可」，同一意思全文同一个词。
4. 流程类条款写清步骤顺序、审批人的岗位、各步时限；步骤超过三步时加流程表。
5. 需求没给的期限、次数、时段等数值不写成已定事实。正文用可执行的定稿措辞（例如按团队公布的工作时段响应）；确需行政选定的建议值集中放在结尾「待补充信息」，不在条款中插入【建议：……】括号。
6. 罚则分级并与违规行为对应；处理措施限于公司内部管理手段（提醒、书面警告、暂停相关资格）；涉及扣薪、解除劳动合同的写「依照公司相关制度及法律法规处理」，不自创金额和条件。
7. 同一事项只在一章规定，其他地方写「按第 X 条执行」，不重复写。
8. 附则写解释部门、生效日期（没给写「自发布之日起施行」）、修订方式。
9. 语气正式简洁：不用口语、感叹、「我们」「大家」。
10. 术语在总则定义一次，正文用法一致。

## 5 废话清单
- 「坚持以人为本」「营造良好氛围」这类口号条款。
- 「严格遵守」「高度重视」「切实做好」后面没有具体动作。
- 每章结尾重复一句「违者按有关规定处理」。
- 目的条写成一段长篇大论。
- 条款写成解释说明文，读不出谁要做什么。
- 每条后挂「待定」。

## 6 必问
1. 公司有没有现行的员工手册或考勤制度要对接？（例：有《员工手册》，违纪处理按其第五章）
2. 这项制度的关键限制？（例：远程办公每周最多两天）
3. 用什么工具审批、打卡、沟通？（例：飞书审批、飞书打卡）
4. 有没有设备和安全要求？（例：只能用公司电脑，连 VPN）
5. 生效日期和解释部门？（例：11 月 1 日起，行政部解释）

## 7 审读清单
1. 条号是否全文连续、无跳号重号，章与条层级是否一致？
2. 每条是否能读出主体和动作？
3. 流程类条款是否写了审批人岗位和时限依据，确需行政决定的值是否集中在结尾？
4. 需求点名的每一章是否都在，且顺序与需求一致？
5. 罚则是否分级、与违规行为对应，且没有自创扣薪金额或解除条件？
6. 同一事项是否只在一处规定，没有两章说法不同？
7. 正文是否没有【建议：……】括号占位，需求没给的数值是否未被当成已定事实？
8. 附则是否写了解释部门、生效方式、修订方式？
9. 有没有口号式、没有具体动作的条款？
10. 术语是否全文一致？

`,"house-调研报告":`---
name: research-report
description: 市场、产品、竞品、政策调研报告 Word：摘要先给结论，每条关键事实挂来源，对比表维度统一，差异写成对比句，结论回答需求的问题。
house: true
deliverable: 调研报告
format: docx
roles: planner, writer, reviewer
examples:
  - 调研国内 AI 办公助手的主要产品、定价和差异点
  - 对比三家竞品的会员体系，最后给出建议
  - 根据这份资料写一份行业现状调研
---
# 调研报告（Word）

## 1 适用
市场调研、竞品分析、产品选型、政策或行业动态梳理，资料来自用户上传的材料或平台联网搜索，成品是 Word。不适用：活动方案（用「活动策划」）、产品功能说明（用「PRD / 需求说明」）、内部工作总结（用「工作汇报」）。

## 2 读者
要做判断的人：选型采购、定方向、写方案的负责人。第一眼找：结论是什么、几家比下来谁强在哪、价格多少、依据靠不靠谱。最烦：搬运官网宣传语、价格只写「以官网为准」、没有来源、同一句「未查到」写满全文、结论是「各有千秋」。

## 3 结构
- 摘要：三到五条结论，读者只看这一节也能做判断。
- 调研范围与方法：调研时间点、地区、选取了哪些对象、为什么选它们、资料从哪来、没纳入什么。
- 逐个对象：定位、核心功能、定价、主要差异点。
- 对比表：统一维度，一格一个事实。
- 差异点与场景适配：用有标识的分析段落说明对象之间的差别、依据与适用场景。
- 结论与建议：直接回答需求提出的问题。
- 资料来源：文末编号列表，每条有标题、网址、访问日期。

## 4 要求
1. 摘要放在最前，每条是判断句，不是目录。
2. 价格、功能、发布时间、用户规模等关键事实，每条挂脚注或来源编号，能在文末对上网址。
3. 价格写清计价单位和版本（每人每月、按年、免费额度、企业版另议）。
4. 资料里找不到的事实写「公开资料未查到」，只在对比表对应格出现，正文不逐处重复；同一个缺口全文只说一次。
5. 对比表每格只放事实或「未查到」，不混入评价；评价放在表后的分析里。
6. 需求点名“差异点”时，必须写出以“差异点与场景适配”标识的独立分析段落或小节。已定提纲没有专节时，放在主要产品或对比表所在节内；不只散列在表格单元格和结论里。差异点写成对比句：「甲按人收费，乙按调用量收费，团队人多用量少时乙更便宜」，不写各家的宣传语。
7. 分析和建议用「判断」「建议」「可能」的口吻，并写出依据是哪几条事实。
8. 来源说法冲突时两说并列，各注来源和日期，不自行取舍成一个数。
9. 范围写清：截至哪天、哪个地区、按什么标准选的对象。
10. 结论回答需求的问题，不新开题；需求要对比表就必须有对比表。

## 5 废话清单
- 「随着人工智能技术的快速发展」式的开头。
- 照抄官网标语：「重新定义办公」「全场景智能」。
- 「各有千秋」「需根据自身需求选择」当结论。
- 「价格以官网为准」在每段重复。
- 「待补充」一个意思写很多遍。
- 每个对象一段几乎相同的介绍模板。

## 6 必问
1. 调研是为了做什么决定？（例：给 50 人团队选一款办公助手采购）
2. 最关心哪几个维度？（例：价格、能否私有部署、能否接入飞书）
3. 有没有必须包含或排除的对象？（例：必须包含钉钉和飞书自带的助手）
4. 报告给谁看？（例：给行政和 IT 负责人决策）
5. 时间和地区范围？（例：截至本月，只看国内）

## 7 审读清单
1. 摘要是否在最前，且每条是能直接用的判断？
2. 每个价格、数字、日期是否有来源编号，能在文末对上网址？
3. 对比表维度是否统一，格内是否只有事实没有评价？
4. 「未查到」「以官网为准」类说法是否没有在正文反复出现？
5. 差异点是否是对比句，而不是各家宣传语？
6. 结论是否回答了需求提出的问题？
7. 有没有资料里找不到的数字或事实？
8. 来源冲突的地方是否两说并列并注明？
9. 调研范围和截止时间是否写清？
10. 用户要求评论文章或指定正文篇幅时，是否按正文单独核算，排除了网址、参考资料、参考文献与待补充信息？例如要求约 800 字，正文就围绕这个目标写足，不能靠长网址凑够；也不能把评论压成摘要要点。偏短时补全已有事实的影响、判断依据、适用边界和团队可采取的动作，不新增未经来源支持的事实，不重复结论凑字。

11. 需求点名的部分是否逐项有可定位的正文？明确要求“差异点”时，保留“差异点与场景适配”的独立分析段落或小节，用对比句解释具体差异与适用场景，不能只把信息散进对比表或结论。
12. 成品标题是否只写内容主题？标题不得带制作格式后缀（如“（docx）”“Word 文档”）；实施方案等长文同样检查。

`,"house-配图风格":`---
name: illustration-style
description: 配图角色的官方技能：幻灯片里哪页配图、画什么、提示词怎么写、什么不画；风格与主题「光·工作室」配套，全片统一。
house: true
deliverable: 配图风格
format: html
roles: illustrator
examples:
  - 给封面配一张简洁的插画，给标题留出位置
  - 给问题页配一张表达「衔接出了错」的图
  - 整份幻灯片的配图统一成一个风格
---
# 配图风格（配图角色）

## 1 适用
HTML 幻灯片任务的配图角色装它。输入是撰写的分页稿（撰写标了配图意图的页才有）和排版结果，输出是「哪几页配图、每张图想让人记住什么、图像提示词、放在页面哪个位置」，再由图像模型每张调用一次生成。不适用：数据图表（排版角色用图表组件画）；Word、Excel、代码成品（没有配图角色）。用户在出装时把配图设为「我提供」时，不生成图，只按上传图片的内容决定放哪一页。

## 2 读者
看投屏的人。图的用处是帮他一眼进入情境、记住一个概念，不是填空白。最烦：图和这页内容没关系、图里出现乱码文字、每页风格都不一样、人物手指和五官怪异、图挡住了标题和数字。

## 3 风格（与主题「光·工作室」，id \`studio-light\` 配套）
扁平或轻插画；近白底，大量留白；主色蓝紫（#5160f0）加一到两个低饱和的中性辅色；几何感、线条干净；画面里没有任何文字和数字；人物用简化造型，不画清晰五官，不像任何真实的人。全片所有提示词用同一段「风格尾缀」，保证每张图像同一个人画的：

> 扁平插画，近白色背景，大面积留白，主色蓝紫色 #5160f0，搭配浅灰与淡蓝，低饱和，几何线条，干净简洁，无文字，无数字，无标志

## 4 要求
1. 封面配一张；其余页默认不配，只有这页的意思非图不能表达（概念页、场景页）才加，放在该页的自由区位；数据页、图表页、表格页、结尾页不配图。
2. 少而准：一份幻灯片通常只有封面一张；多出来的每张都要在发言里说得出为什么非图不可，可配可不配的不配。
3. 每张图先写一句「这页想让人记住什么」，再写画面；画面要服务这句话。
4. 提示词按「主体 + 动作或状态 + 场景 + 构图与留白方位 + 风格尾缀 + 排除项」写，主体和动作写具体（「一个人把两块错位的拼图对齐」），不写空形容词。
5. 构图按排版给的位置：封面横幅给标题在左侧或上方留白，侧栏小图主体居中；留白方位写进提示词。
6. 全片使用同一段风格尾缀，不中途换风格。
7. 图里不出现文字、数字、logo、品牌标识、真实人物或可识别的公众人物。
8. 不画需求里没有的具体事实：不画不存在的产品界面、具体数据曲线、真实的门店或办公室。
9. 用隐喻时选一眼看得懂的（拼图、路线、桥），不选需要解释的。
10. 用户「我提供」时不改图、不重新生成，只决定每张图放哪一页，并在发言里说明理由。

## 5 废话清单
- 「科技感」「未来感」「高端大气」这类空形容词。
- 握手的商务人士、发光的地球、齿轮配灯泡、向上的箭头这类陈词滥调。
- 3D 渲染、金属质感、霓虹光效，和主题不搭。
- 让图里写标语或数字。
- 每一页都配图。

## 6 范例页
- 封面（季度汇报）：想让人记住「这是一次增长的复盘」→ 一个简化造型的人站在画面右侧，回头看身后一级比一级高的抽象阶梯，标题在左侧留白。
- 问题页（第三方接口变更导致延期）：想让人记住「问题出在外部衔接」→ 两块拼图在接口处错位，一只手正把它们对齐。
- 数据页（用户数增长 50%）：不配图，交给图表组件。
两条完整提示词见 \`范例.md\`。

## 7 审读清单
1. 封面是否有图，且与成品主题相关？
2. 有没有给数据页、图表页、表格页配图？
3. 图里有没有文字、数字、logo 或乱码？
4. 全片图片风格是否统一（同一风格尾缀、同一配色）？
5. 图是否压住了标题或正文，留白位置是否与排版一致？
6. 画面是否画了需求里没有的具体事实（产品界面、数据曲线、真实场所）？
7. 人物是否有手指、五官扭曲这类明显瑕疵？
8. 每张图是否和它所在页想表达的意思直接相关？

`,"house-预算与数据汇总":`---
name: budget-sheet
description: 预算、费用、销售等数据汇总 Excel：原始数字只填一次，其余全用公式联动，合计只加一层，占比合计为百分之百，打开就能改数。
house: true
deliverable: 预算与数据汇总
format: xlsx
roles: planner, writer, reviewer
examples:
  - 做一份产品部第四季度预算表，按月分四类
  - 把这三个月的销售明细汇总成月度表，带占比
  - 做一份活动预算表，各科目合计等于总额
---
# 预算与数据汇总（Excel）

## 1 适用
部门预算、费用汇总、销售或业绩按期汇总、简单的计划对比表，成品是 Excel。不适用：要写分析结论的报告（用「调研报告」或「工作汇报」）、要处理一批原始文件的工具（用「Python 小工具 / 数据脚本」）。

## 2 读者
财务和部门负责人。打开第一眼找：总数多少、每类多少、各占多少、每期多少。会直接在表里改数字再看合计变化。最烦：合计翻倍、改了一个数合计不动、单位混乱、占比加起来不是百分之百、表里塞着「待定」导致公式报错。

## 3 结构
撰写角色输出表结构与公式，不写文章。
- 说明区：表名、单位、周期、数据来源（需求给的就写「按需求提供」）。
- 明细区：行是类别，列是期间，最后一列是类别小计。
- 合计行：每个期间的合计，以及总计。
- 占比列：每个类别小计占总计的比例。
- 备注区：建议值、需求未提供的数据、口径说明，每条一行。
- 需要另一个视角（如按季度对比）时另起工作表，引用主表，不复制数字。

## 4 要求
1. 需求给的原始数字只在明细格填一次，其他所有格都是公式。
2. 合计只加一层：类别小计 = 本行各期间之和；期间合计 = 本列各明细行之和，不得把小计行或合计行包进求和范围；总计取各类别小计之和，与各期间合计之和应相等。
3. 占比公式先判断总计是否为 0，再用类别小计除以总计，分母用绝对引用，例如 \`=IF($E$6=0,0,E2/$E$6)\`，不能直接写 \`=E2/$E$6\`。总计非零时占比列合计为 100%，总计为 0 时各项占比和占比合计都为 0。
4. 单位写在表头或说明区，全表统一（元或万元二选一）。金额格设千分位，占比格设百分比。
5. 需求明说没有的数填 0；需求没给的数在计算区留空并在备注说明，不在计算区填文字。
6. 公式只用基础函数（SUM、加减乘除、ROUND、IF），不用宏、不链接外部文件。
7. 合计行和总计加粗或底色区分；表头冻结。
8. 工作表名和列名用需求里的叫法（需求说「季度总计」就叫「季度总计」）。
9. 推算值（如月均、同比）放在单独列并在列名注明「推算」。
10. 一张表回答一个问题，不加装饰行和空工作表。

## 5 废话清单
- 说明区写大段解释或「本表仅供参考」。
- 空工作表、装饰性的大标题合并单元格占好几行。
- 合计行下面再加一行「总计」把合计又加一遍。
- 计算区出现「待定」「暂无」文字。
- 同一个数字在两张表各手填一次。

## 6 必问
1. 金额单位用元还是万元？（例：元）
2. 期间怎么划分？（例：按月，10 到 12 月）
3. 金额是否含税？（例：含税）
4. 要不要和上期或实际对比？（例：只做预算，不对比）
5. 类别口径有没有特殊说明？（例：人力含社保公积金）

## 7 审读清单
以平台重算后的结果为依据判断。
1. 重算后总计是否等于各类别小计之和，且等于各期间合计之和？
2. 有没有任何求和范围包含了另一条小计或合计？
3. 占比列合计是否为 100%（四舍五入误差内）？
4. 需求给的每个数字是否原样出现在明细格，且只出现一次？
5. 明细格以外是否全部是公式，没有手填数字？
6. 计算区是否没有文字，公式是否没有错误值？
7. 需求列出的每个类别、每个期间、每个汇总项是否都在？
8. 单位是否标明且全表统一？
9. 推算值是否单独成列并标明？
10. 将全部明细数字改为 0 后重算，占比公式是否仍返回 0、没有 #DIV/0!（占比公式是否都用 IF 判断了总计为零）？

`,"private-reviewer":`# 数据口径审读

## 适用
按你提供的规范检查与制作。

## 要求
- 核对口径
- 不编数字

## 示例
- 检查数字有没有来源
- 不同段落使用同一口径`,"private-illustrator":`# 品牌配图规范

## 适用
按你提供的规范检查与制作。

## 要求
- 配图风格
- 统一用色

## 示例
- 配图统一使用品牌色
- 封面使用简洁的线描插画`},j={...Ae,...JSON.parse(sessionStorage.getItem("sf-mock-skill-texts")??"{}")};function Fe(e){return x(),j[e]??null}function L(e,n){j[e]=n,sessionStorage.setItem("sf-mock-skill-texts",JSON.stringify(j))}const pe="sf-f3-helpers",O=[{id:"mock-report-helper",name:"工作汇报帮手",description:"Q3 工作汇报",revision:1,skill_ref:{package_id:"house-工作汇报",version:"1".repeat(64)},archive:{deliverable:{artifact_id:"report-final",title:"Q3 工作汇报",format:"html"},message_count:2,messages:["结论放在开头。","目标值没给，不要编数字。"],decisions:["保留已确认的回顾与计划，目标值另行补充。"],references:["季度工作记录"],saved_from_task_id:"mock-report-task"},availability:"available",created_at:1791331200,source_task_id:null,entries:[]},{id:"mock-meeting-helper",name:"会议纪要帮手",description:"会议纪要",revision:1,skill_ref:{package_id:"house-会议纪要",version:"1".repeat(64)},archive:{deliverable:{artifact_id:"meeting-final",title:"项目周会纪要",format:"docx"},message_count:1,messages:["把每件事的负责人和下一步写清楚。"],decisions:["只记录会上确认的事项。"],references:["周会笔记"],saved_from_task_id:"mock-meeting-task"},availability:"available",created_at:1791331200,source_task_id:null,entries:[]}];let D=JSON.parse(sessionStorage.getItem(pe)??"null")??O;const Ie=()=>sessionStorage.setItem(pe,JSON.stringify(D));function W(){return x(),structuredClone(D)}async function Qe(e){var s;if(x(),e.file&&!e.file.size)throw new p("invalid_input","文件为空，请重新选择");if(!e.file&&!((s=e.text)!=null&&s.trim()))throw new p("invalid_input","先说一句技能要做什么");await new Promise(c=>setTimeout(c,650));const n=crypto.randomUUID(),t="writer",r=["结构","要求","审读清单"],i={id:n,name:e.file?e.file.name.replace(/\.[^.]+$/,""):"自定义审读",description:e.text??`你上传的：${e.file.name}`,scope:"private",kind:"private",summary:"把材料写成清楚的文档",tags:["Word","工作文档","日常办公"],format:"docx",examples:[],category:"方案与文档",version:"1".repeat(64),revision:1,state:"active",role:t,covers:r};return L(n,e.file?await e.file.text():e.text),fe(i),{package_id:n,role:t,covers:r,summary:i.summary,tags:i.tags,category:i.category,examples:i.examples,saved_as:"mine"}}const z=new Map;function N(e,n){const t={id:crypto.randomUUID(),operation:e,expected_revision:e==="save"?null:n.revision,target_hash:"1".repeat(64),impact_hash:"2".repeat(64),expires_at:Date.now()/1e3+300,confirmed_at:null,status:"pending",proposed:null,impact:{},diff:{}};return z.set(t.id,{change:t,helper:n}),structuredClone(t)}function Je(e,n){var v;if(e.startsWith("f4a-")){const a=oe(e),o=C().items.find(l=>l.id===n.skill_package_id);if(!o||!a.plan.equipment.some(l=>{var h;return(h=l.skills)==null?void 0:h.some(w=>w.package_id===o.id)}))throw new p("invalid_input","请选择这次用到的技能",422);const f=a.events.filter(l=>l.kind==="final.ready").at(-1),_=a.events.filter(l=>l.kind==="user.message").map(l=>l.payload.text??"");return N("save",{...structuredClone(O[0]),id:crypto.randomUUID(),name:n.name,description:a.task.title,skill_ref:{package_id:o.id,version:o.version},archive:{deliverable:{artifact_id:(f==null?void 0:f.payload.artifact_id)??"",title:a.task.title,format:((v=a.contract.card)==null?void 0:v.kind)==="slides"?"html":"docx"},message_count:_.length,messages:_,decisions:f?[f.payload.summary??""]:[],references:[],saved_from_task_id:e},source_task_id:e,created_at:Date.now()/1e3})}const t=d(e);if(!n.name.trim())throw new p("invalid_input","请给帮手起个名字");if(!t.plan.equipment.some(a=>{var o;return a.role!=="finalizer"&&a.mode!=="none"&&((o=a.skill)==null?void 0:o.package_id)===n.skill_package_id}))throw new p("invalid_input","请选择这次用到的技能");const r=C().items.find(a=>a.id===n.skill_package_id);if(!r)throw new p("not_found","技能不存在");const i=J(e,0).items,s=i.filter(a=>a.kind==="final.ready").at(-1),c=i.filter(a=>a.kind==="user.message").map(a=>a.payload.text);return N("save",{...structuredClone(O[0]),id:crypto.randomUUID(),name:n.name,description:t.task.title,skill_ref:{package_id:r.id,version:r.version},archive:{deliverable:{artifact_id:(s==null?void 0:s.payload.artifact_ids[0])??"artifact-main",title:t.task.title,format:t.plan.nodes[0].output_format},message_count:c.length,messages:c,decisions:s?[s.payload.summary]:[],references:t.files,saved_from_task_id:e},source_task_id:e,created_at:Date.now()/1e3})}function Le(e){x();const n=D.find(t=>t.id===e.id);if(!n||n.revision!==e.revision)throw new p("preview_stale","帮手已变化，请刷新");return N("delete",n)}function Ve(e){x();const n=z.get(e.id);if(!n||n.change.expires_at<Date.now()/1e3||n.change.target_hash!==e.target_hash||n.change.impact_hash!==e.impact_hash)throw new p("preview_stale","预览已过期，请重新操作");return n.change.operation==="save"?D.push(n.helper):D=D.filter(t=>t.id!==n.helper.id),z.delete(e.id),Ie(),{change_id:e.id,helper_id:n.helper.id,revision:n.helper.revision,state:e.operation==="save"?"active":"deleted",helper:e.operation==="save"?structuredClone(n.helper):null}}const mn=Object.freeze(Object.defineProperty({__proto__:null,add:Qe,confirm:Ve,deletePreview:Le,listHelpers:W,savePreview:Je,saveSkillText:L,skillText:Fe},Symbol.toStringTag,{value:"Module"})),_e="sf-f1-mock",Be=()=>{try{return JSON.parse(sessionStorage.getItem(_e)??"null")}catch{return null}},S=Be(),q=(S==null?void 0:S.records)??{};let y=(S==null?void 0:S.cards)??structuredClone(ce.items);const b=()=>sessionStorage.setItem(_e,JSON.stringify({records:q,cards:y})),g=e=>structuredClone(e),ie=e=>({package_id:"house-"+e,version:"1".repeat(64),kind:"house"}),E={id:"mock-report-helper",name:"工作汇报帮手",description:"Q3 工作汇报"};function Xe(){return x(),{items:W(),next_cursor:null}}function fe(e){y.push(e),b()}function C(){return x(),{items:g(y.filter(e=>e.state==="active")),next_cursor:null}}function d(e){if(x(),!q[e]){const t=ae.items.find(r=>r.id===e);t&&(me({title:t.title,request_text:t.request_text},e),q[e].task={...g(t),route:"full"},b())}const n=q[e];if(!n)throw new p("not_found","任务不存在",404);return n}function T(e,n,t=[],r="planner.turn"){e.events.push({seq:e.events.length+1,kind:r,revision:e.task.revision,created_at:Date.now()/1e3,payload:r==="planner.turn"?{text:n,contract_changed_fields:t}:{text:n,to:null,kind:"instruct"}}),b()}function me(e,n){var B,X,H,Y,G,K,Z;x();const t=n??crypto.randomUUID(),i={...g(ae.items[0]),id:t,title:e.title,request_text:e.request_text,status:"draft",revision:1,group:"active",stuck_at:"和规划对齐约定",attention_reason:null,created_at:Date.now()/1e3,updated_at:Date.now()/1e3,route:/完整|多份/.test(e.request_text)?"full":"fast"},s=e.skill_package_id??(e.helper_id?(X=(B=W().find(u=>u.id===e.helper_id))==null?void 0:B.skill_ref)==null?void 0:X.package_id:void 0),c=(Y=(H=y.find(u=>u.id===s))==null?void 0:H.format)==null?void 0:Y.split("|")[0],v=c==="xlsx"||!s&&/Excel|数据表/i.test(e.request_text),a=c==="code"||!s&&/代码|Python/i.test(e.request_text),o=!v&&/活动|读书分享会/.test(e.request_text),f=e.skill_package_id??(e.helper_id?(K=(G=W().find(u=>u.id===e.helper_id))==null?void 0:G.skill_ref)==null?void 0:K.package_id:void 0)??"house-"+(v?"预算与数据汇总":o?"活动策划":/会议纪要/.test(e.request_text)?"会议纪要":"工作汇报"),_=e.helper_id?W().find(u=>u.id===e.helper_id):null,l=y.find(u=>u.id===f),h=(Z=l==null?void 0:l.format)==null?void 0:Z.split("|")[0],w=e.skill_package_id?h!=="html":/Word|会议纪要|数据表|Excel|代码|Python/i.test(e.request_text),V=w?["planner","writer","reviewer","finalizer"]:["planner","writer","illustrator","layout","reviewer","finalizer"],ve={planner:"规划",writer:"撰写",illustrator:"配图",layout:"排版",reviewer:"审读",finalizer:"定稿",reader:"读资料",fact_checker:"核对"},he=Object.fromEntries(we.map(u=>[u.role,u.responsibility])),ge={planner:"先和规划对齐约定",writer:"没有撰写，就没人写内容，不能开工。请换回或装一份撰写技能。",illustrator:"成品不会有配图，可以开工。",layout:"没有排版，做不成幻灯片，不能开工。排版没了可改交 Word，回到对齐页说明。",reviewer:"只剩程序检查，质量会差一些，可以开工。",finalizer:"需要定稿保证交付",reader:"缺少资料摘要",fact_checker:"缺少事实核对，只保留程序检查。"},xe=V.map(u=>{var ee,ne;return{id:u,role:u,name:ve[u],responsibility:he[u],mode:"ai",must_have:["planner","writer","layout","finalizer"].includes(u),required:["planner","writer","layout","finalizer"].includes(u),missing_effect:["planner","writer","layout","finalizer"].includes(u)?"blocks":"degrades",alternative:ge[u],skill:u==="illustrator"?ie("配图风格"):u==="layout"?ie("幻灯片视觉"):{package_id:f,version:((ee=y.find(U=>U.id===f))==null?void 0:ee.version)??"1".repeat(64),kind:((ne=y.find(U=>U.id===f))==null?void 0:ne.scope)==="private"?"private":"house"},previous_skill:null,helper:e.helper_id&&["planner","writer"].includes(u)?{id:(_==null?void 0:_.id)??E.id,name:(_==null?void 0:_.name)??E.name,archive_summary:(_==null?void 0:_.description)??E.description}:null,references:[],theme:u==="layout"?"studio-light":null,note:""}});q[t]={task:i,confirmed:!1,files:[],contract:{deliverable_type:v?"Excel 数据表":a?"代码":w?"Word 文档":"6 页幻灯片（HTML ＋ PDF）",audience:"给老板，5 分钟讲完",key_points:["Q3 回顾","Q4 三个专项","需要的支持"],given_numbers:[],questions:[{index:1,text:"Q4 有具体目标值吗？",example:"没有就写「保持增长」，不编数字",answer:null}],hard_items:["页数 5–8","不出现「待定」"],outline:i.route==="full"?["一句话结论","关键数据","本季亮点","问题与原因","Q4 计划","需要的支持"]:[],changed_fields:[]},plan:{version:1,task_revision:1,equipment:xe,nodes:[{id:"deliverable",title:e.title,objective:e.request_text,action:"produce_content",equipment_ids:V,output_format:v?"xlsx":a?"code":w?"docx":"html",acceptance:["不出现「待定」"]}]},events:[]};const k=q[t];return k.task.selected_package_id=f,k.task.brief={title:e.title,objective:e.request_text,requested_outputs:[k.contract.deliverable_type],constraints:[],questions:[]},o&&(k.contract={deliverable_type:w?"Word 文档":"幻灯片（HTML ＋ PDF）",audience:"社区活动参与者",key_points:["活动安排","总结"],given_numbers:["18 人","预算 600 元"],questions:[{index:1,text:"活动时间和地点还没确定，是否留空？",example:"只保留已确认的活动安排，不补时间和地点",answer:null}],hard_items:["仅活动安排、总结两节","不编造时间地点"],outline:["活动安排","总结"],changed_fields:[]},k.plan.nodes[0].acceptance=k.contract.hard_items),v&&(k.contract={deliverable_type:"Excel 数据表",audience:"部门负责人",key_points:["第四季度预算汇总"],given_numbers:["部门活动预算 600 元"],questions:[{index:1,text:"预算只有总额，是否暂不拆分科目？",example:"保留 600 元总额，不编造科目金额",answer:null}],hard_items:["总额 600 元","不编造科目金额"],outline:["第四季度预算"],changed_fields:[]},k.plan.nodes[0].acceptance=k.contract.hard_items),T(k,e.helper_id?`读了帮手「${(_==null?void 0:_.name)??E.name}」的档案，这次按它来。有一件事材料里没有，约定在右边，有异议直接说。`:"读完需求。有一件事材料里没有，约定在右边，有异议直接说。"),n||ke(i),b(),{task:g(i)}}function He(e){return{task:g(d(e).task)}}function Ye(e){return g(d(e).contract)}function Ge(e){const n=d(e);return{task_id:e,current_version:n.plan.version,plan:g(n.plan)}}function Ke(e){d(e).confirmed=!0,b()}function Ze(e,n){var r;const t=d(e);if(T(t,n,[],"user.message"),t.confirmed=!1,t.contract.changed_fields=[],/5\s*页/.test(n))t.contract.hard_items=["页数 4–6","不出现「待定」"],t.contract.deliverable_type="5 页幻灯片（HTML ＋ PDF）",t.contract.changed_fields=["hard_items","deliverable_type"],t.contract.outline.length&&(t.contract.outline=["一句话结论","关键数据","本季亮点","问题与原因","Q4 计划与支持"],t.contract.changed_fields.push("outline"));else if(/按推荐/.test(n)){const i=Number(((r=n.match(/第\s*(\d+)/))==null?void 0:r[1])??1),s=t.contract.questions.find(c=>c.index===i);s&&(s.answer=s.example),t.contract.changed_fields=["questions"]}else/Word/i.test(n)?(t.contract.deliverable_type="Word 文档",t.contract.changed_fields=["deliverable_type"],t.plan.equipment=t.plan.equipment.filter(i=>!["layout","illustrator"].includes(i.role)),t.plan.nodes[0].output_format="docx",t.plan.nodes[0].equipment_ids=t.plan.equipment.map(i=>i.id)):(t.contract.questions[0].answer=n,t.contract.changed_fields=["questions"]);T(t,"已按你的意见更新约定，请看右边标黄的行。",t.contract.changed_fields)}function en(e,n){const t=d(e);return{items:g(t.events.filter(r=>r.seq>n)),next_seq:t.events.length}}const A=new Map;function nn(e,n){const t=d(e);if(n.base_version!==t.plan.version)throw new p("preview_stale","请刷新出装",409);const r={id:crypto.randomUUID(),diff_hash:"2".repeat(64),preview:{after:g({equipment:n.equipment,nodes:n.nodes})},current_version:t.plan.version};return A.set(r.id,{id:e,change:r,base:t.plan.version}),g(r)}function tn(e,n){const t=d(e),r=A.get(n.id);if(!r||r.id!==e||r.base!==t.plan.version||r.change.diff_hash!==n.diff_hash)throw new p("preview_stale","请刷新出装",409);return t.plan={...t.plan,...g(r.change.preview.after),version:t.plan.version+1},A.delete(n.id),b(),g({...n,current_version:t.plan.version})}function rn(e,n){const t=d(e);if(!n.size)throw new p("upload_failed","文件为空，请重新选择");t.files.push(n.name),b()}async function sn(e,n,t){const r=d(e);if(!t.size)throw new p("upload_failed","文件为空，请重新选择");await new Promise(c=>setTimeout(c,650));const i=r.plan.equipment.find(c=>c.role===n),s={...g(ce.items[0]),id:crypto.randomUUID(),name:t.name.replace(/\.[^.]+$/,""),scope:"private",kind:"private",summary:"把材料写成清楚的文档",tags:["Word","工作文档","日常办公"],format:"docx",category:"方案与文档",description:`你上传的：${t.name}`,role:n,roles:[n],covers:["结构","要求"],examples:[]};y.push(s),L(s.id,await t.text()),i.skill={package_id:s.id,version:s.version,kind:"private",adapt:{usable:!0,covers:["结构","要求"],keeps:["审读清单"],note:`读了「${t.name}」，采用你的结构与要求，保留官方审读清单。`}},i.mode="ai",r.plan.version++,T(r,"规划已按你的文件适配好")}function an(e,n){const t=d(e);if(t.task.route!==n)throw new p("invalid_input","开工路径与任务不符");const r=t.plan.equipment.filter(i=>i.mode==="none"&&i.missing_effect==="blocks");if(r.length)throw new p("role_required",r.map(i=>i.alternative).join("；"),409);if(!t.confirmed)throw new p("planning_not_ready","请先确认交付约定");t.task.stuck_at="制作中",b()}const F=new Map;function on(e){x();const n=crypto.randomUUID();return F.set(n,e.id),{confirmation_token:n,expires_at:Date.now()/1e3+300,impact:{package_id:e.id,revision:e.revision,versions:[e.version],bindings:Object.values(q).flatMap(t=>t.plan.equipment.filter(r=>{var i;return((i=r.skill)==null?void 0:i.package_id)===e.id}).map(r=>({id:r.id,task_id:t.task.id,task_revision:t.task.revision}))),helper_impacts:[]}}}function cn(e,n){var t,r;if(x(),F.get(n.confirmation_token)!==e.id||n.expires_at<Date.now()/1e3)throw new p("preview_stale","预览已过期",409);for(const i of Object.values(q))for(const s of i.plan.equipment)((t=s.skill)==null?void 0:t.package_id)===e.id&&(s.mode="none",s.skill=null),((r=s.previous_skill)==null?void 0:r.package_id)===e.id&&(s.previous_skill=null);return y=y.filter(i=>i.id!==e.id),F.delete(n.confirmation_token),b(),{deleted:!0}}const vn=Object.freeze(Object.defineProperty({__proto__:null,addCard:fe,confirm:tn,confirmContract:Ke,contract:Ye,create:me,deletePreview:on,deleteSkill:cn,dialogue:Ze,events:en,helpers:Xe,material:rn,planning:Ge,preview:nn,record:d,skills:C,start:an,task:He,upload:sn},Symbol.toStringTag,{value:"Module"}));export{_n as a,fn as c,mn as l,vn as p};
