var A={
    setcolor : function(color){
    var alist=document.querySelectorAll('a');
    var i=0
    while(i<alist.length)
    {
        alist[i].style.color=color;
        i=i+1;
    }
  }
        
}
var Body={
    setcolor : function(color){
    document.querySelector('body').style.color = color;
},
    setbackgroundcolor : function(color){
    document.querySelector('body').style.backgroundColor = color;
}
}
function nightDayHandler(self){
    var target = document.querySelector('body');
if(self.value === '라이트모드')
{
    Body.setbackgroundcolor('white');
    self.value='다크모드';
    Body.setcolor('black');
    A.setcolor('red');
}
else
{
    Body.setbackgroundcolor('black');
    self.value='라이트모드';
    Body.setcolor('white');
    A.setcolor('powderblue');
}
}