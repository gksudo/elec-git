var adding = 0;

function new_task()
{
  if ( adding === 1 ) return;

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

// TODO
function create_task( title )
{
  console.log(title);

  alert("up next");
}

function rm_task( id )
{
  var panel = document.getElementById(id.id);
  var i     = panel.id;

  if ( confirm("Are you sure you want to delete this?") )
    $("#" + i).remove();
}
