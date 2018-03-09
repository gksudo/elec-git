function new_task()
{
  var txt = '<div class="panel panel-default">' +
    '<div class="panel-heading">' +
    '<h2 class="panel-title">' +
    '<input type="text" id="title">' +
    '<button style="float:right" class="btn btn-default" onclick="create_task(document.getElementById(\'title\').value)">Create</button>' +
    '</h2>' +
    '</div>' +
    '</div>';

  $("#task-list").prepend(txt);
}

function create_task( title )
{
  alert(title);
}
