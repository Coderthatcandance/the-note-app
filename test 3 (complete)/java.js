const textbox=document.getElementById('tbox');
const submit_button=document.getElementById('butt');


textbox.addEventListener("keypress" , (value)=>{
    const valuetake= value.currentTarget.value;
    if(value===""){submit_button.disabled=true;}
    else{submit_button.disabled=false;
    };})



const save_note=JSON.parse(localStorage.getItem('saven'));

if(Array.isArray(save_note)){
the_notes=save_note;
}
else{
        the_notes=[{
        note:'Default',
        id:"123"
        
    }];
}
 


addvalue();
addnote();
function addvalue(){
    const textb=document.getElementById('tbox');
    const thebutt=document.getElementById('butt');
    thebutt.onclick=function(){
    const note_value= textb.value;
    const id=''+ Math.floor(Math.random()*Date.now()); 
    the_notes.push(
        {note:note_value,
        id:id}
    );
    addnote();
    }}


function addnote(){ 
    document.getElementById('the_hdiv').innerHTML='';
    the_notes.forEach(function(the_notes){

    const the_div=  document.createElement('div');
    const the_dbutt= document.createElement('button');

    the_div.innerText=the_notes.note;
    the_dbutt.innerText='X';

    the_dbutt.onclick=delete_note;
    the_dbutt.id=the_notes.id;

    const the_hdiv=document.getElementById('the_hdiv');

    the_hdiv.appendChild(the_div);
    the_div.appendChild(the_dbutt);
    
    attributes(the_dbutt, the_div);
    
})
 
savenote();
}





function attributes(the_dbutt, the_div){

     the_dbutt.setAttribute("class","delete_button")
    
     the_div.setAttribute("class","the_jdiv")
     

}


function delete_note(event){
    const the_dbutt=event.target;

    const the_dbuttid=the_dbutt.id;

the_notes= the_notes.filter(function(dnote){
    if(dnote.id===the_dbutt.id){
        return false;
    }
    else{
        return true;
    }
    
    })
 addnote();
 savenote();
}


function savenote(){
    localStorage.setItem('saven',JSON.stringify(the_notes))
}



