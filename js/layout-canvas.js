var canvas = new fabric.Canvas('c');

// browser viewport size
	var w = window.innerWidth;
	var h = window.innerHeight;

	// stage dimensions
	var ow = 720; // your stage width
	var oh = 540; // your stage height
    	// keep aspect ratio
	    var scale = Math.min(w / ow, h / oh);

	   	// adjust canvas size
    
//
//canvas.setWidth(window.innerWidth);
//canvas.setHeight(300);    

canvas.setWidth(ow * scale);
canvas.setHeight(oh * scale);    


var width = canvas.getWidth();
var heigth= canvas.getHeight();    
var author= window.localStorage.getItem("name");
var iText1 = new fabric.IText('Enter Text',{
    minScaleLimit:1,
    fontSize:30,
    fill:'white',
    fontFamily:'HNUL',
    lockScalingX:true,
    lockScalingY:true,
    fontWeight:'bold',
    lockRotation:true});

    
var by = new fabric.Text('by '+author,{
    left:width-100,
    top:heigth-45,
    fontSize:15,
    fill:'white',
    fontFamily:'HNUL',
    lockMovementX: true,
    lockMovementY: true,
    lockScalingX:true,
    lockScalingY:true,
    lockRotation:true});
    
var ttt = new fabric.Text('terribly tiny tales',{
    left:width-250,
    top:heigth-50,
    fontSize:18,
    fill:'white',
    fontFamily:'HNUL',
    useNative: true,
    lockMovementX: true,
    lockMovementY: true,
    lockScalingX:true,
    lockScalingY:true,
    lockRotation:true});
    
var hash=new fabric.IText('#smile',{
    right:width,
    top:heigth-45,
    fontSize:18,
    fill:'white',
    fontFamily:'HNUL',
    lockMovementX: true,
    lockMovementY: true,
    lockScalingX:true,
    lockScalingY:true,
    lockRotation:true});
    
var number=new fabric.IText('#000',{
    left:width-50,
    fontSize:18,
    fill:'white',
    fontFamily:'HNUL',
    lockMovementX: true,
    lockMovementY: true,
    lockScalingX:true,
    lockScalingY:true,
    lockRotation:true});
    

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
canvas.renderAll();

document.getElementById('counter').value=iText1.text.length;
iText1.on('text:changed', function(e) {
document.getElementById('counter').value=iText1.text.length;

});
    var cHeight = canvas.getHeight();
    var cWidth = canvas.getWidth();

    var n1 = 720/cWidth;
    var n2 = 540/cHeight;
    
//alert(n2);

var dataURL = canvas.toDataURL({
  format: 'png',
  multiplier: n1
});
function delete1()
{
	var r=confirm("Are you sure you want to delete this tale/draft?");
	if(r==true)
	iText1.text='Enter Text';
	else console.log(10);
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
		alert(a);
		
		window.localStorage.setItem(a+"-diText1", iText1.text);
		window.localStorage.setItem(a+"-dhash", hash.text); 
		window.localStorage.setItem(a+"-dnumber", number.text);
		window.localStorage.setItem(a+"-ddate", datetime);
		window.localStorage.setItem("id",a + z);	
		}
		else
		{
		localStorage.setItem("id",0);
		a = parseInt(localStorage.getItem("id"));
		alert(a);
		window.localStorage.setItem(a+"-diText1", iText1.text);
		window.localStorage.setItem(a+"-dhash", hash.text); 
		window.localStorage.setItem(a+"-dnumber", number.text);
		window.localStorage.setItem(a+"-ddate", datetime);
		window.localStorage.setItem("id",a + z);	
		}
		
	 
}
    canvas.setActiveObject(iText1);

    document.write("<img src="+dataURL+" width='720' height='540'>");
    
