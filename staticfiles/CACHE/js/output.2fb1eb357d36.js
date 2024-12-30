function initializeForms(){const validIntervals=[5,10,15,30,60];const defaultInterval=5;const defaultThreshold=60;const intervalButtons=document.querySelectorAll('.interval-button');const rangeInput=document.getElementById('interval-range-input');const currentValueLabel=document.getElementById('current-value');const thresholdToggle=document.getElementById('custom_threshold_toggle');const thresholdRange=document.getElementById('alert_threshold_range');const thresholdValue=document.getElementById('threshold_value');const thresholdMessage=document.getElementById('threshold_message');function setActiveButton(activeInterval){intervalButtons.forEach(function(btn){const interval=btn.getAttribute('data-interval');if(interval===String(activeInterval)){btn.classList.remove('bg-white','text-gray-900','dark:bg-gray-800','dark:text-gray-400');btn.classList.add('bg-gray-800','text-white');}else{btn.classList.remove('bg-gray-800','text-white');btn.classList.add('bg-white','text-gray-900','dark:bg-gray-800','dark:text-gray-400');}});}
function updateInterval(interval){rangeInput.value=interval;currentValueLabel.textContent=interval+'m';setActiveButton(interval);}
function snapToValidInterval(value){let closest=validIntervals[0];let smallestDiff=Math.abs(validIntervals[0]-value);for(let i=1;i<validIntervals.length;i++){let diff=Math.abs(validIntervals[i]-value);if(diff<smallestDiff){smallestDiff=diff;closest=validIntervals[i];}}
return closest;}
function updateThresholdUI(isCustom){thresholdRange.disabled=!isCustom;thresholdValue.textContent=thresholdRange.value+'s';thresholdMessage.textContent=isCustom?'Custom threshold: '+thresholdRange.value+' seconds':'Using default threshold ('+defaultThreshold+' seconds)';}
updateInterval(defaultInterval);intervalButtons.forEach(function(button){button.addEventListener('click',function(){const interval=parseInt(button.getAttribute('data-interval'),10);updateInterval(interval);});});rangeInput.addEventListener('input',function(e){const interval=snapToValidInterval(parseInt(e.target.value,10));updateInterval(interval);});thresholdToggle.addEventListener('change',function(e){updateThresholdUI(e.target.checked);if(!e.target.checked){thresholdRange.value=defaultThreshold;}});thresholdRange.addEventListener('input',function(){updateThresholdUI(true);});updateThresholdUI(thresholdToggle.checked);}
document.addEventListener('DOMContentLoaded',initializeForms);;const options={xaxis:{show:true,categories:{{chart_data.dates|safe}},labels:{show:true,style:{fontFamily:"Inter, sans-serif",cssClass:'text-xs font-normal fill-gray-500 dark:fill-gray-400'}},axisBorder:{show:false,},axisTicks:{show:false,},},yaxis:{show:true,labels:{show:true,style:{fontFamily:"Inter, sans-serif",cssClass:'text-xs font-normal fill-gray-500 dark:fill-gray-400'},}},series:[{name:"Response time (ms)",data:{{chart_data.data|safe}},color:"#1A56DB",},],chart:{sparkline:{enabled:false},height:"100%",width:"100%",type:"area",fontFamily:"Inter, sans-serif",dropShadow:{enabled:false,},toolbar:{show:false,},},tooltip:{enabled:true,x:{show:true,},},fill:{type:"gradient",gradient:{opacityFrom:0.55,opacityTo:0,shade:"#1C64F2",gradientToColors:["#1C64F2"],},},dataLabels:{enabled:false,},stroke:{width:6,},legend:{show:false},grid:{show:false,},}
if(document.getElementById("labels-chart")&&typeof ApexCharts!=='undefined'){const chart=new ApexCharts(document.getElementById("labels-chart"),options);chart.render();};function initializeTabs(){const tabButtons=document.querySelectorAll('[role="tab"]');if(tabButtons.length>0){tabButtons[0].setAttribute('aria-selected','true');const firstTabTarget=document.querySelector(tabButtons[0].getAttribute('data-tabs-target'));if(firstTabTarget){firstTabTarget.classList.remove('hidden');}}
tabButtons.forEach(button=>{button.addEventListener('click',()=>{tabButtons.forEach(tab=>{tab.setAttribute('aria-selected','false');const target=document.querySelector(tab.getAttribute('data-tabs-target'));if(target){target.classList.add('hidden');}});button.setAttribute('aria-selected','true');const target=document.querySelector(button.getAttribute('data-tabs-target'));if(target){target.classList.remove('hidden');}});});};document.addEventListener('DOMContentLoaded',function(){const sidebar=document.getElementById('logo-sidebar');const collapseBtn=document.getElementById('sidebar-collapse-btn');const sidebarTexts=document.querySelectorAll('.sidebar-text');const mainContent=document.getElementById('main-content');const tooltipElements=document.querySelectorAll('[role="tooltip"]');function setSidebarState(collapsed){localStorage.setItem('sidebarCollapsed',collapsed);}
function getSidebarState(){return localStorage.getItem('sidebarCollapsed')==='true';}
function updateSidebarUI(collapsed){if(collapsed){sidebar.classList.remove('w-64');sidebar.classList.add('w-16');sidebarTexts.forEach(text=>text.classList.add('hidden'));mainContent.classList.remove('sm:ml-64');mainContent.classList.add('sm:ml-16');collapseBtn.querySelector('svg').classList.add('rotate-180');tooltipElements.forEach(tooltip=>{tooltip.style.display='block';});}else{sidebar.classList.add('w-64');sidebar.classList.remove('w-16');sidebarTexts.forEach(text=>text.classList.remove('hidden'));mainContent.classList.add('sm:ml-64');mainContent.classList.remove('sm:ml-16');collapseBtn.querySelector('svg').classList.remove('rotate-180');tooltipElements.forEach(tooltip=>{tooltip.style.display='none';});}}
const initialState=getSidebarState();updateSidebarUI(initialState);collapseBtn.addEventListener('click',function(){const newState=!getSidebarState();setSidebarState(newState);updateSidebarUI(newState);});});;