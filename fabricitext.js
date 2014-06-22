
    var canvas = new fabric.Canvas('c1');


var iText1 = new fabric.IText('zomg123\nbar\n0bAz\nand something else', {
  left: 10,
  top: 20,
  fontFamily: 'Courier',
  fill: '#333',
  styles: {
    0: {
      0: { textBackgroundColor: 'green', fill: 'yellow', textDecoration: 'line-through' },
      1: { textBackgroundColor: '#faa', fontSize: 80, textDecoration: 'line-through'},
      2: { textBackgroundColor: '#55f', fill: '#fff', textDecoration: 'line-through' },
      5: { fontWeight: 'bold', fontFamily: 'Arial', fontSize: 120, fill: '#ccf'  }
    },
    1: {
      0: { fontFamily: 'Impact', fill: 'green', stroke: 'red' },
      1: { fontFamily: 'Impact' },
      2: { fontFamily: 'Impact' }
    },
    2: {
      0: { stroke: 'lightblue', strokeWidth: 3, fontSize: 60 },
      1: { textBackgroundColor: '#aff', fontSize: 30, fontStyle: 'italic' },
      2: { textBackgroundColor: '#aff', textDecoration: 'overline' },
      3: { fontWeight: 'bold', textDecoration: 'overline' }
    },
    3: {
      0: { textDecoration: 'underline', fontFamily: 'Helvetica', fill: '#888' },
      1: { textDecoration: 'underline', fontFamily: 'Helvetica', fill: '#888' },
      2: { textDecoration: 'underline', fontFamily: 'Helvetica', fill: '#888' },

      4: { textBackgroundColor: '#faa', fontStyle: 'italic', fontFamily: 'Monaco', fontSize: 20  },
      5: { textBackgroundColor: '#faa', fontStyle: 'italic', fontFamily: 'Monaco', fontSize: 25  },
      6: { textBackgroundColor: '#faa', fontStyle: 'italic', fontFamily: 'Monaco', fontSize: 30  },
      7: { textBackgroundColor: '#faa', fontStyle: 'italic', fontFamily: 'Monaco', fontSize: 35  },
      8: { textBackgroundColor: '#faa', fontStyle: 'italic', fontFamily: 'Monaco', fontSize: 40  },
      9: { textBackgroundColor: '#faa', fontStyle: 'italic', fontFamily: 'Monaco', fontSize: 45  },
      10: { textBackgroundColor: '#faa', fontStyle: 'italic', fontFamily: 'Monaco', fontSize: 50 },
      11: { textBackgroundColor: '#faa', fontStyle: 'italic', fontFamily: 'Monaco', fontSize: 55 },
      12: { textBackgroundColor: '#faa', fontStyle: 'italic', fontFamily: 'Monaco', fontSize: 60 },

      14: { shadow: 'rgba(0,0,0,0.3) 5px 2px 2px' },
      15: { shadow: 'rgba(0,0,0,0.3) 5px 2px 2px' },
      16: { shadow: 'rgba(0,0,0,0.3) 5px 2px 2px' },
      17: { shadow: 'rgba(0,0,0,0.3) 5px 2px 2px' }
    }
  }
});

canvas.add(iText1);

// function disableTap(canvas) {

//   var lastClickTime = +new Date;
//   var newClickTime;

//   canvas.on('mouse:down', function(options) {
//     newClickTime = +new Date;

//     if (newClickTime - lastClickTime < 500) {

//       var event = options.e;
//       event.preventDefault && event.preventDefault()
//       event.stopPropagation && event.stopPropagation();

//       if (options.target) {
//         options.target.fire('dblclick', options);
//       }
//     }
//     lastClickTime = newClickTime;
//   });
// }

// disableTap(canvases[11]);

function setStyle(object, styleName, value) {
  if (object.setSelectionStyles && object.isEditing) {
    var style = { };
    style[styleName] = value;
    object.setSelectionStyles(style);
  }
  else {
    object[styleName] = value;
  }
}
function getStyle(object, styleName) {
  return (object.getSelectionStyles && object.isEditing)
    ? object.getSelectionStyles()[styleName]
    : object[styleName];
}

function addHandler(id, fn, eventName) {
  document.getElementById(id)[eventName || 'onclick'] = function() {
    var el = this;
    canvases.forEach(function(canvas, obj) {
      if (obj = canvas.getActiveObject()) {
        fn.call(el, obj);
        canvas.renderAll();
      }
    });
  };
}


addHandler('bold', function(obj) {
  var isBold = getStyle(obj, 'fontWeight') === 'bold';
  setStyle(obj, 'fontWeight', isBold ? '' : 'bold');
});

addHandler('italic', function() {
  var isItalic = getStyle(obj, 'fontStyle') === 'italic';
  setStyle(obj, 'fontStyle', isItalic ? '' : 'italic');
});

addHandler('underline', function(obj) {
  var isUnderline = (getStyle(obj, 'textDecoration') || '').indexOf('underline') > -1;
  setStyle(obj, 'textDecoration', isUnderline ? '' : 'underline');
});

addHandler('line-through', function(obj) {
  var isLinethrough = (getStyle(obj, 'textDecoration') || '').indexOf('line-through') > -1;
  setStyle(obj, 'textDecoration', isLinethrough ? '' : 'line-through');
});

addHandler('color', function(obj) {
  setStyle(obj, 'fill', this.value);
}, 'onchange');

addHandler('bg-color', function(obj) {
  setStyle(obj, 'textBackgroundColor', this.value);
}, 'onchange');

addHandler('size', function(obj) {
  setStyle(obj, 'fontSize', parseInt(this.value, 10));
}, 'onchange');

/*document.getElementById('calc-offset').onclick = function() {
  canvases.forEach(function(c) {
    c.calcOffset();
  });
};

document.getElementById('set-coords').onclick = function() {
  canvases.forEach(function(c) {
    c.getObjects().forEach(function(o) {
      o.setCoords();
    })
  });
};

document.getElementById('open-keyboard').onclick = function() {
  document.getElementById('dummy-textarea').focus();
};
*/
