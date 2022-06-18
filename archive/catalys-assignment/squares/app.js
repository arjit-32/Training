 let a= [100,200,80,40,30,80,90];

 function generate(arr){
  for(let i=0;i<arr.length;++i){
      const newDiv = document.createElement("div");
      //newDiv.classList.add('square');
      let leftformula=Math.random()*(screen.width - arr[i]);
      let rightformula=Math.random()*(screen.height - arr[i]);
      let styles = 'left:'+leftformula+'; top:'+rightformula+'; width:'+arr[i]+'px'+'; height:'+arr[i]+'px;';
      newDiv.setAttribute('id','square');
      newDiv.setAttribute('style',styles);
      document.querySelector('body').appendChild(newDiv);
    }
  }
  //generate(a);

  document.querySelector("body").addEventListener('click',click);
  function click(e){
    if(e.target.id==='square') e.target.remove();
    if(e.target.id==='generateButton')  generate(a);
  }
