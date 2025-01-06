document.addEventListener('DOMContentLoaded',function(){const sidebar=document.getElementById('logo-sidebar');const collapseBtn=document.getElementById('sidebar-collapse-btn');const sidebarTexts=document.querySelectorAll('.sidebar-text');const mainContent=document.getElementById('main-content');const tooltipElements=document.querySelectorAll('[role="tooltip"]');function setSidebarState(collapsed){localStorage.setItem('sidebarCollapsed',collapsed);}
function getSidebarState(){return localStorage.getItem('sidebarCollapsed')==='true';}
function updateSidebarUI(collapsed){if(collapsed){sidebar.classList.remove('w-64');sidebar.classList.add('w-20');sidebarTexts.forEach(text=>text.classList.add('hidden'));mainContent.classList.remove('sm:ml-64');mainContent.classList.add('sm:ml-20');collapseBtn.querySelector('svg').classList.add('rotate-180');tooltipElements.forEach(tooltip=>{tooltip.style.display='block';});}else{sidebar.classList.add('w-64');sidebar.classList.remove('w-20');sidebarTexts.forEach(text=>text.classList.remove('hidden'));mainContent.classList.add('sm:ml-64');mainContent.classList.remove('sm:ml-20');collapseBtn.querySelector('svg').classList.remove('rotate-180');tooltipElements.forEach(tooltip=>{tooltip.style.display='none';});}}
const initialState=getSidebarState();updateSidebarUI(initialState);collapseBtn.addEventListener('click',function(){const newState=!getSidebarState();setSidebarState(newState);updateSidebarUI(newState);});});;