let a=document.getElementById("page");
let b=document.getElementById("para1");
let c=document.getElementById("para2");
let d=document.getElementById("para3");
let e=document.getElementById("para4");
        let f=0;
        function toggle(){
            if(f==0){
                a.style.backgroundColor="#212529";
                a.style.color="#f0f8ff";
                b.style.color="#f0f8ff"
                c.style.color="#f0f8ff"
                d.style.color="#f0f8ff"
                e.style.color="#f0f8ff"
                f=1;
            }
            else if(f==1){
                a.style.backgroundColor="#f0f8ff";
                a.style.color="#212529";
                b.style.color="#212529"
                c.style.color="#212529"
                d.style.color="#212529"
                e.style.color="#212529"
                f=0;
            }
        }