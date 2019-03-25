var allButtoms=$('#buttons > span')

for(let i=0;i<allButtoms.length;i++)
{
    $(allButtoms[i]).on('click',function(x){
        var index = $(x.currentTarget).index()
        var p = index*-300
        $('#images').css({
            transform: 'translate('+p+'px)'
        })
        n=index
        activeButton(allButtoms.eq(index))
    })
}

function activeButton($button){
    $button.addClass('red').siblings('.red')
    .removeClass('red')
}

var n=0;
var size = allButtoms.length
allButtoms.eq(n%size).trigger('click')

var timerId = setTimer()
function setTimer(){
    return setInterval(()=>{
    n +=1
    allButtoms.eq(n%size).trigger('click')    
    },2000)
}
$('.window').on('mouseenter',function(){
    window.clearInterval(timerId)
})
$('.window').on('mouseleave',function(){
    timerId=setTimer()
})