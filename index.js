console.log('hello');
const allergies=[
    {name:'Drug',
    frequency:2},
    {name:'Food',
    frequency:23},
    {name:'Insect',
    frequency:7},
    {name:'Pollen',
    frequency:30},
    {name:'Pet',
    frequency:9},
    {name:'Mold',
    frequency:2},
    {name:'Latex',
    frequency:3},
];
var searchbox=document.getElementById('search_box');
var suggestionsPannel=document.querySelector('.suggestions');
//searchbox.value='esha';
searchbox.addEventListener('keyup',function(){
    suggestionsPannel.innerHTML=" ";
    const input=searchbox.value;
    //console.log(searchbox.value);
    const suggestion=allergies.filter(function(allergy){
        return allergy.name.toLowerCase().startsWith(input);
    });
    suggestion.sort((a,b)=>{
        return a.frequency-b.frequency;
    });
    console.log(suggestion);
   
   suggestion.forEach(function(suggested){
        
       const div=document.createElement('div');
       div.innerHTML=suggested.name;
       suggestionsPannel.appendChild(div);
       console.log(suggestion,div);
   });
});
