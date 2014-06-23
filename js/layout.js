    $(document).ready(function() {
        
        
    $("#strike").click(function() {
        var obj = canvas.getActiveObject();
    

                        
                    var style = { };
    style['textDecoration'] = 'line-through';
    obj.setSelectionStyles(style);
                
        canvas.renderAll();
    console.log(obj.getSelectedText());
        
});
        $("#italic").click(function() {
 
        var obj = canvas.getActiveObject();
    
//obj.setFontFamily('Verdana');
                        
                    var style = { };
    style['fontWeight'] = 'italic';
    obj.setSelectionStyles(style);
                
        canvas.renderAll();
    console.log(obj.getSelectedText());
        
});
                $("#underline").click(function() {
        
        var obj = canvas.getActiveObject();
    
//obj.setFontFamily('Verdana');
                        
                    var style = { };
    style['textDecoration'] = 'underline';
    obj.setSelectionStyles(style);
                
        canvas.renderAll();
    console.log(obj.getSelectedText());   
});
        });