const results={shallow:{action:[4.50,3.42,3.20],accuracy:[68.8,68.7,67.4],reduction:'28.9%'},deep:{action:[6.30,4.48,4.20],accuracy:[71.8,71.7,70.5],reduction:'33.3%'}};
const tabs=[...document.querySelectorAll('.result-tab')];
function showResults(tab){const data=results[tab.dataset.mode];tabs.forEach(t=>{t.setAttribute('aria-selected',String(t===tab));t.tabIndex=t===tab?0:-1;});document.querySelector('#result-panel').setAttribute('aria-labelledby',tab.id);['ce','hybrid','fa'].forEach((key,i)=>{document.querySelector(`#${key}-action`).textContent=data.action[i].toFixed(2);document.querySelector(`#${key}-acc`).textContent=data.accuracy[i].toFixed(1)+'%';document.querySelector(`.${key}-bar`).style.setProperty('--bar-width',`${data.action[i]/7*100}%`);});document.querySelector('#reduction').textContent=data.reduction;}
tabs.forEach((tab,index)=>{tab.addEventListener('click',()=>showResults(tab));tab.addEventListener('keydown',event=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;event.preventDefault();const next=event.key==='Home'?0:event.key==='End'?tabs.length-1:(index+(event.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;tabs[next].focus();showResults(tabs[next]);});});
const citation=document.querySelector('#citation-text');
document.querySelector('#copy-citation').addEventListener('click',async()=>{const status=document.querySelector('#copy-status');try{await navigator.clipboard.writeText(citation.textContent);status.textContent='BibTeX copied to clipboard.';}catch{const range=document.createRange();range.selectNodeContents(citation);const selection=window.getSelection();selection.removeAllRanges();selection.addRange(range);status.textContent='Citation selected. Press Ctrl+C or ⌘C to copy.';}});
const dialog=document.querySelector('#figure-dialog');
document.querySelectorAll('[data-zoom]').forEach(button=>button.addEventListener('click',()=>{const image=document.querySelector('#dialog-image');image.src=button.dataset.zoom;image.alt=button.querySelector('img').alt;dialog.showModal();}));
document.querySelector('#close-figure').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close();}});

const visualizationTabs=[...document.querySelectorAll('.visualization-tab')];
function showVisualization(tab){
  visualizationTabs.forEach(item=>{
    const selected=item===tab;
    item.setAttribute('aria-selected',String(selected));
    item.tabIndex=selected?0:-1;
    document.getElementById(item.getAttribute('aria-controls')).hidden=!selected;
  });
}
visualizationTabs.forEach((tab,index)=>{
  tab.addEventListener('click',()=>showVisualization(tab));
  tab.addEventListener('keydown',event=>{
    if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;
    event.preventDefault();
    const next=event.key==='Home'?0:event.key==='End'?visualizationTabs.length-1:(index+(event.key==='ArrowRight'?1:-1)+visualizationTabs.length)%visualizationTabs.length;
    visualizationTabs[next].focus();
    showVisualization(visualizationTabs[next]);
  });
});
