window.onload=function(){
           var xx=[12,3,6,9];
           var k=0;
           var clock = document.getElementsByClassName("clock")[0];
                  for (var i = 0; i < 60; i++) {
                      if(i%5==0){
                          w=2;
                          h=9;
                          if(i%15==0){
                              var tt=document.createElement("div");
                              tt.innerHTML=xx[k++];
                              tt.className="shuzi";
                              clock.appendChild(tt);
                              tt.style.cssText="width:20px;height:40px;";
                              if(k==1){
                                  tt.style.webkitTransform="translate3d(70px,16px,0px)";
                              }else if(k==2){
                                  tt.style.webkitTransform="translate3d(130px,70px,0px)";
                              }else if(k==3){
                                  tt.style.webkitTransform="translate3d(73px,126px,0px)";
                              }else if(k==4){
                                  tt.style.webkitTransform="translate3d(24px,70px,0px)";
                              }

                          }

                          tt.style.transformOrigin = "center 78px";

                      }else{
                          w=1 ;
                          h=4;
                      }
                      var div = document.createElement("div");
                      div.className = "kedu";
                      clock.appendChild(div);
                      div.style.cssText="width:"+w+"px;height:"+h+"px";
                      div.style.webkitTransform = "translate("+(156-w)/2+"px) rotate(" + 6 * i + "deg)";
                      div.style.transformOrigin = "center 78px";

                  }

           var date=new Date();
           var hours=date.getHours();
           var minute=date.getMinutes();
           var miao1=date.getSeconds();


           var shi=set(25, 2,"black",(hours*30-90)+(minute*6)/12,55);
           var fen=set(35, 2,"black",minute*6-90,55);
           var miao=set(50, 1,"red",miao1*6-90,50);
                  function set(w,h,color,rote,ss) {
                      var pointer= document.createElement("div");
                      var t=(156-h)/2;
                      pointer.t=t;
                      pointer.style.cssText="width:"+w+"px;height:"+h+"px;background:"+ color+";position:absolute;left:0;top:0;transform:translate("+ss+"px, "+t+"px) rotate("+rote+"deg);transform-origin:"+(78-ss)+"px center";
                      clock.appendChild(pointer);

                      return pointer;

                  }
           setInterval(function(){

               var date=new Date();
               var hours=date.getHours();
               var minute=date.getMinutes();
               var miao1=date.getSeconds();

               shi.style.transform="translate(55px,"+shi.t+"px) rotate("+((hours*30-90)+minute*6/12)+"deg)";
               fen.style.transform="translate(55px,"+fen.t+"px) rotate("+(minute*6-90)+"deg)";
               miao.style.transform="translate(50px,"+miao.t+"px) rotate("+(miao1*6-90)+"deg)";
               console.log(minute);
           },1000);

       }