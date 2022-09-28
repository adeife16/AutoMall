$(document).ready(function() {
  getJobPosts();
  $("#period-div").hide();
});
// on job type change
$("#type").change(function(){
  var type = $(this).val();
  if(type === "contract"){post
    $("#period-div").show(500)
  }
  else{
    $("#period-div").hide(500)
  }
})


// on submit button click
$("#submit-job-post").click(function(){
  var title = $("#title").val();
  var type = $("#type").val();
  var desc = $("#desc").val();
  var period = $("#period");
  if(title === "" || type === "" || desc === "" || period === ""){
    alert_failure("Please fill all form fields!");
  }
  else{
    submitJobPost();
  }
})

// display job post
function showJobPosts(data){
  if(data != null && data != ""){
    $("#posted-job").html("");
    var period = "Not Applicable"
    for(var i=0; i<=data.length; i++){
      if(!data[i].period === null){
        period = data[i].period
      }
      $("#posted-job").append
      (`
        <div class="job-post-box p-3 m-4 white color-dark" id="job-post-box">
          <div class="job-post">
            <div class="post-title" id="post-title">
            Title: `+data[i].title+`
            </div>
            <div class="post-type" id="post-type">
            Type: `+data[i].type+`
            </div>
            <div class="post-period" id="post-period">
            Period: `+period+`
            </div>
            <div class="date" id="date">
            Date Posted: `+data[i].date_posted+`
            </div>
            <div class="actions mt-3">
              <div class="edit-action">
                <button type="button" class="btn color-blue white border-blue m-2" name="button" id="edit" data-toggle="modal" data-target="#editModal" value=`+data[i].id+`><i class="ion ion-edit"></i></button>
              </div>
              <div class="delete-action">
                <button type="button" class="btn color-purple white border-purple m-2" name="button" id="delete" data-toggle="modal" data-target="#deleteModal" value=`+data[i].id+`><i class="ion ion-ios-trash"></i></button>
              </div>
            </div>
          </div>
        </div>
      `)
    }
  }
  else{
    $("#posted-job").html(`
      <div class="">
        <h1 class="text-center">No Job Posts</h1>
      </div>
      `);
  }
}
// expand box to show Description
$("#job-post-box").click(function(e){
  e,preventDefault();
  $()
})
// edit button click
$(document).on("click", '#edit', function(e){
  e.preventDefault();
  var postId = $(this).val();
  if(postId === null || postId === ""){

  }
  else{
    editPost(postId);
  }
})

// display edit modal
function displayEdit(data){
  console.log(data);
  $("#post-edit").html("");
  var period = "";
  if(data[0].period){
    period = data[0].period;
  }
  else{
    period = 'Not Applicable';
  }
  for(var i = 0; i <= data.length; i++){
    $("#post-edit").append
    (`
      <form class="post-edit-form" id="post-edit-form" action="" method="post">
        <input type="hidden" name="post-id" id="post-id" value="`+data[i].id+`">
        <div class="form-group">
          <span for="title">Job Title</span>
          <input type="text" class="form-control" id="edit-title" name="edit-title" value="`+data[i].title+`" placeholder="Job Title">
        </div>
        <div class="form-group">
          <span for="type">Job Type</span>
          <select class="form-control" id="edit-type" name="edit-type">
            <option value="">Select Job Type</option>
            <option value="full-time">Full Time</option>
            <option value="part-time">Part Time</option>
            <option value="contract">Contract</option>
          </select>
        </div>
        <div class="form-group">
          <span for="desc">Job Description</span>
          <textarea name="edit-desc" id="edit-desc" class="desc form-control">`+data[i].job_desc+`</textarea>
        </div>
        <div class="form-group" id="edit-period-div">
          <span for="period">Period(In Months)</span>
          <input type="text" name="edit-period" id="edit-period" class="form-control" value="`+period+`" placeholder="Period In Months">
        </div>
        <div class="form-group text-center">
          <button type="button" class="btn color-white blue" name="edit-job-post" id="edit-job-post">Post Job</button>
        </div>
      </form>
    `)
    $("#edit-type option[value="+data[0].type+"]").attr('selected','selected');
  }
}


// submit Edit post Form

$(document).on('click','#edit-job-post', function(e){
  e.preventDefault();
  var title = $("#edit-title").val();
  var type = $("#edit-type").val();
  var desc = $("#edit-desc").val();
  var period = $("#edit-period");
  if(title === "" || type === "" || desc === ""){
    alert_failure("Please fill required all form fields!");
  }
  else if(type === "contract" && period === null || period === ""){
    alert_failure("Contract Job require a period!");
  }
  else{
    $(this).attr("disabled", "disabled");
    updatePost();
  }
})

// delete button click
$(document).on("click", "#delete", function(e){
  e.preventDefault();
  var postId = $(this).val();
  $("#deletePost").val(postId);
})
// confirm delete
$("#deletePost").click(function(e){
  e.preventDefault();
  var postId = $(this).val();
  if(postId === "" || postId === null){

  }
  else{
    deletePost(postId);
  }
})
