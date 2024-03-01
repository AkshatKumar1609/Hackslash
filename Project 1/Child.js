let a=document.getElementById("page");
let x=document.getElementById("bg1");
let y=document.getElementById("bg2");
        let c=0;
        function toggle(){
           if(c==0){
                a.style.backgroundColor="#212529";
                a.style.color="#f0f8ff";
                x.style.backgroundColor="#092635"
                y.style.backgroundColor="#1B4242";
                c=1;
            }
            else if(c==1){
                a.style.backgroundColor="#f0f8ff";
                a.style.color="#212529";
                x.style.backgroundColor="rgb(180,243,175)";
                y.style.backgroundColor="rgb(163,236,240)";
                c=0;
            }
        }