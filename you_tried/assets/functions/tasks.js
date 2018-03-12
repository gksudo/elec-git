/**
  This is the logic behind adding and removing a task.
*/


// so you can't add a task while you adding a task
var adding = 0;

var newTask =
function()
{

}

/**
    creates new task.
*/
function new_task()
{
  if ( adding ) return;

  // TODO maybe make this better?
  var txt = '<div class="panel panel-default">'
            + '<div class="panel-heading">'
              + '<h2 class="panel-title">'
                + '<div class="input-group">'
                  + '<input type="text" id="title" class="form-control" placeholder="New Task">'
                    + '<div class="input-group-btn">'
                      + '<button id="ent" type="button" class="btn btn-default" onclick="create_task(document.getElementById(\'title\').value)">'
                        +  '<b>+</b>'
                      + '</button>'
                    + '</div>'
                  + '</h2>'
                + '</div>'
              + '</div>';


  // TODO see if this is worth it.
  //   var txt = '<h1>TESTING INNER HTML<h1>';
  //
  //   $('<div/>',
  //    {
  //     'id'         : 'testID',
  //     'class'      : 'testClass',
  //     'style'      : 'cursor:pointer;font-weight:bold;',
  //     'html'       : `<span>${txt}</span>`,
  //     'click'      : function() { console.log( this.id ) },
  //     'mouseenter' : function(){ $(this).css( 'color', 'red' ); },
  //     'mouseleave' : function(){ $(this).css( 'color', 'black' ); }
  //  }).prependTo('#task-list');

  $("#task-list").prepend(txt);

  adding = 1;

  var title = document.getElementById("title");

  // enter button
  title.addEventListener("keyup", function(event)
  {
    event.preventDefault();

    if ( event.keyCode === 13 )
      document.getElementById("ent").click();
  });
}

/**
    makes the panel for the task.

    @param { string } title - name of task.
*/
// TODO finish
function create_task( title )
{
  console.log(title);

  alert("up next");

  adding = 0;
}


/**
    removes the task.

    @param { string } id - task id.
*/
function rm_task( id )
{
  var panel = document.getElementById(id.id);
  var i     = panel.id;

  if ( confirm("Are you sure you want to delete this?") )
    $("#" + i).remove();
}
