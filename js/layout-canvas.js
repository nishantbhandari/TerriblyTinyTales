var canvas = new fabric.Canvas('c');

// browser viewport size
	var w = window.innerWidth;
	var h = window.innerHeight;
alert(window.innerHeight);
alert(window.innerWidth);
//

//	// stage dimensions
	var ow = 720; // your stage width
	var oh = 540; // your stage height
    	// keep aspect ratio
	    var scale = Math.min(w / ow, h / oh);
//
//	   	// adjust canvas size
//    
////
canvas.setWidth(window.innerWidth);
canvas.setHeight(300);    

canvas.setWidth(ow * scale);
canvas.setHeight(oh * scale);   
//canvas.setWidth(720);
//canvas.setHeight(540);
var width = canvas.getWidth();
var heigth= canvas.getHeight();   
var check = localStorage.getItem("did");
var dtext=localStorage.getItem(check+"-diText1");
var author=localStorage.getItem("name");

if(check&&dtext)
{


var dtext=localStorage.getItem(check+"-diText1");
var dhash=localStorage.getItem(check+"-dhash"); 
var dnumber=localStorage.getItem(check+"-dnumber");
var ddate=localStorage.getItem(check+"-ddate");
    
var iText1 = new fabric.IText(dtext,{
    minScaleLimit:1,
    fontSize:44,
    fill:'white',
    stroke:'white',
    strokeWidth:1,
    fontFamily:'HNUL',
    lockScalingX:true,
    lockScalingY:true,
    lockRotation:true});

    
var by = new fabric.Text('by '+author,{
    left:700,
    top:500,
    originX:'right',
   
    fontSize:20,
    fill:'white',
       stroke:'white',
    strokeWidth:1,
    fontFamily:'HNUL',
    lockMovementX: false,
    lockMovementY: false,
    lockScalingX:true,
    lockScalingY:true,
    lockRotation:true
});
    

var ttt = new fabric.Text('terribly tiny tales',{

    top:heigth-45,
    fontSize:24,
    fill:'white',
    fontFamily:'HNUL',
    useNative: true,
       stroke:'white',
    strokeWidth:1,
    lockMovementX: true,
    lockMovementY: true,
    lockScalingX:true,
    lockScalingY:true,
    lockRotation:true,
fontWeight:'bold'});
    
var hash=new fabric.IText(dhash,{
    left:width-700,
    top:heigth-40,
    fontSize:20,
    fill:'white',
    fontFamily:'HNUL',
       stroke:'white',
    strokeWidth:1,
    lockMovementX: true,
    lockMovementY: true,
    lockScalingX:true,
    lockScalingY:true,
    lockRotation:true
});
    
var number=new fabric.IText(dnumber,{
    left:width-60,
    fontSize:20,
    fill:'white',
    fontFamily:'HNUL',
    lockMovementX: true,
    lockMovementY: true,
       stroke:'white',
    strokeWidth:1,
    lockScalingX:true,
    lockScalingY:true,
    lockRotation:true
});
}
else
{
var iText1 = new fabric.IText('Enter Text',{
    minScaleLimit:1,
    fontSize:18,
    fill:'white',
    fontFamily:'HNUL',
    lockScalingX:true,
    lockScalingY:true,
    lockRotation:true,
       stroke:'white',
    strokeWidth:1,});

    
var by = new fabric.Text('by '+author,{
    left:700,
    top:500,
    originX:'right',
   
    fontSize:20,
    fill:'white',
       stroke:'white',
    strokeWidth:1,
    fontFamily:'HNUL',
    lockMovementX: false,
    lockMovementY: false,
    lockScalingX:true,
    lockScalingY:true,
    lockRotation:true
});
    

var ttt = new fabric.Text('terribly tiny tales',{

    top:heigth-45,
    fontSize:24,
    fill:'white',
    fontFamily:'HNUL',
    useNative: true,
       stroke:'white',
    strokeWidth:1,
    lockMovementX: true,
    lockMovementY: true,
    lockScalingX:true,
    lockScalingY:true,
    lockRotation:true,
fontWeight:'bold'});
    
var hash=new fabric.IText('#smile',{
    left:width-700,
    top:heigth-40,
    fontSize:20,
    fill:'white',
    fontFamily:'HNUL',
       stroke:'white',
    strokeWidth:1,
    lockMovementX: true,
    lockMovementY: true,
    lockScalingX:true,
    lockScalingY:true,
    lockRotation:true
});
    
var number=new fabric.IText('#000',{
    left:width-60,
    fontSize:20,
    fill:'white',
    fontFamily:'HNUL',
    lockMovementX: true,
    lockMovementY: true,
       stroke:'white',
    strokeWidth:1,
    lockScalingX:true,
    lockScalingY:true,
    lockRotation:true
});

}
iText1.imageSmoothingEnabled = true;
ttt.imageSmoothingEnabled = true;
hash.imageSmoothingEnabled = true;
number.imageSmoothingEnabled = true;

canvas.allowTouchScrolling = true;
canvas.centerObject(iText1);
canvas.centerObjectH(ttt);
canvas.calcOffset();
canvas.setBackgroundColor('black');
canvas.add(iText1);
canvas.add(by);
canvas.add(ttt);
canvas.add(hash);
canvas.add(number);

canvas.renderAll.bind(canvas);
setTimeout(function(){canvas.renderAll();
                     }, 500);
document.getElementById('counter').value=iText1.text.length;
iText1.on('text:changed', function(e) {
document.getElementById('counter').value=iText1.text.length;
    
    if(iText1.text.length>=140)
    {
        alert("Max character limit reached.")
    }

});
    var cHeight = canvas.getHeight();
    var cWidth = canvas.getWidth();

    var n1 = 720/cWidth;
    var n2 = 540/cHeight;
    
//alert(n2);


function delete1()
{
	var r=confirm("Are you sure you want to delete this tale/draft?");
	if(r==true)
	{
	iText1.text='Enter Text';
	hash.text='#smile';
	number.text='#000';
	var b = localStorage.getItem("did");
	canvas.renderAll();
	if(b)
	{
		
		localStorage.removeItem(b+"-diText1");
		localStorage.removeItem(b+"-dhash");
		localStorage.removeItem(b+"-dnumber");
		localStorage.removeItem(b+"-ddate");  
	}
	else console.log(10);
	}
	else console.log(10);

}

function newcanvas()
{
iText1.text='Enter Text';
hash.text='#smile';
number.text='#000';
    canvas.renderAll();
}

function savedraft() {
		
		var currentdate = new Date();
		var datetime = currentdate.getDay() + "."+currentdate.getMonth() 
						+ "." + currentdate.getFullYear() + " - " 
							+ currentdate.getHours() + "." 
						+ currentdate.getMinutes() + "." + currentdate.getSeconds(); 
		var b = localStorage.getItem("id");
		var z=parseInt(1);
		if(b)
		{
		var a = parseInt(localStorage.getItem("id"));

		window.localStorage.setItem(a+"-diText1", iText1.text);
		window.localStorage.setItem(a+"-dhash", hash.text); 
		window.localStorage.setItem(a+"-dnumber", number.text);
		window.localStorage.setItem(a+"-ddate", datetime);
		window.localStorage.setItem("id",a + z);
		window.localStorage.setItem("did",a);	
		}
		else
		{
		localStorage.setItem("id",0);
		a = parseInt(localStorage.getItem("id"));

		window.localStorage.setItem(a+"-diText1", iText1.text);
		window.localStorage.setItem(a+"-dhash", hash.text); 
		window.localStorage.setItem(a+"-dnumber", number.text);
		window.localStorage.setItem(a+"-ddate", datetime);
		window.localStorage.setItem("id",a + z);
		window.localStorage.setItem("did",a);
		}
		
	 
}

//document.write("<img src="+dataURL+" width='720' height='540'>");
//localStorage.clear():
//localStorage.clear():
