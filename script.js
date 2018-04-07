function commande(nom, argument){
  if (typeof argument === 'undefined') {
    argument = '';
  }
  document.execCommand(nom, false, argument);
}
function rafraichit(){
  var valeur = $('.editeur').html();
  $('.htmlview').text(valeur);
}
$(document).ready(function(){
  $('button').click(function(){
    var id = $(this).attr('id');
    switch(id){
      case "createLink":
        argument = prompt("Insert link");
        commande(id, argument);
        break;
      case "insertImage":
        argument = prompt("Insert image");
        commande(id, argument);
        break;

      case "forecolor":
        argument = prompt("name the color of text");
        commande(id, argument);
        break;

      case "backcolor":
        argument = prompt("name the color of background");
        commande(id, argument);
        break;
      case "fontsize":
        argument = prompt("Enter the text font size");
        commande(id, argument);
        break;

       case "fontName":
        argument = prompt("name the font style");
        commande(id, argument);
        break;

       case "insertText":
        argument = prompt("write the text");
        commande(id, argument);
        break;

      default:
        commande(id);
        break;
    }
    rafraichit();
  });

  $('.editeur').keyup(function(){
    rafraichit();
  });
});

 function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

document.getElementById("save").addEventListener("click", function(){
   
    var text = document.getElementById("editeur").value;
    var filename = document.getElementById("textfeild").value;
    
    download(filename+".txt", text);
}, false);

var doc = new jsPDF();
var specialElementHandlers = {
    '#editor': function (element, renderer) {
        return true;
    }
};

$('#cmd').click(function () {   
    doc.fromHTML($('#editeur').html(), 15, 15, {
        'width': 170,
            'elementHandlers': specialElementHandlers
    });
    var filename = document.getElementById("textfeild").value;
    doc.save(filename +".pdf");
});
