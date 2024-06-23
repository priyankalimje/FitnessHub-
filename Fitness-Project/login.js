
    let signup=document.getElementById('signup');
    let signin=document.getElementById('signin');
    let name=document.getElementById('name');
    let title=document.getElementById('title');

    signin.onclick=function(){
      name.style.maxHeight='0';
      title.innerHTML='Sign In';
      signup.classList.add('disable');
      signin.classList.remove('disable');
    }

    signup.onclick=function(){
      name.style.maxHeight='60px';
      title.innerHTML='Sign Up';
      signup.classList.remove('disable');
      signin.classList.add('disable');
      if(validateForm()){
        //const text=document.querySelectorAll('.input-field');
        const text=document.getElementsByClassName('')
        //for (let i of text){
          text.removeChild(document.getElementById('formerror'));
        //}
        save();
      }
      //save();
    }

    const data=[];
    const fs=require('fs');

    function save(){
      let name=document.getElementById('fname').value;
      let mail=document.getElementById('mail').value;
      let pwd=document.getElementById('pwd').value;
      //alert('Hello '+name+'\n'+'Welcome to Site');

      data.push(name);
      data.push(mail);
      data.push(pwd);
      //alert(name);
      //let dstr=JSON.stringify(data);
      let dstr=data.join(', ');
      //alert(dstr);
      //let file= new Blob([dstr],{type='text'})
      fs.writeFile('reglog.txt',dstr,err=>{
        if(err){
          alert('Sorry:( A Technical Glitch!!!');
          return;
        }
        alert('Thank You for Signing Up...');
      })
    }

    function setError(id,message){
      element=document.getElementById(id);
      element.getElementsByClassName('formerror')[0].innerHTML=message;
    }

    function validateForm(){
      let returnVal=true;
      let name=document.forms['myform']['fname'].value;
      //alert(name);
      if(name.length==0){
        setError('name','*Please enter Full Name');
        returnVal=false;
      }
      return returnVal;
    }



