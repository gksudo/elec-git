function new_task()
{
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

  var title = document.getElementById("title");

  // enter button
  title.addEventListener("keyup", function(event)
  {
    event.preventDefault();
    if (event.keyCode === 13)
    {
        document.getElementById("ent").click();
    }
  });
}

// TODO
function create_task( title )
{
  console.log(title);

  alert("up next");
}
