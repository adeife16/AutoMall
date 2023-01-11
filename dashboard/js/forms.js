function car(){
    $(".control").hide(1000)
        setTimeout(() =>{
          $("#form-card").show(1000)
        },2000)
        getMakes();
      $("#product-form").html(`
    <input type="hidden" value="1" name="category">
    <input type="hidden" value="1" name="sub_category">
    <div class="form-group">
    <label for="makes">Make</label>
    <select class="makes form-control" id="makes" name="makes">
    </select>
    <p class="help-block color-red">This is required</p>
    </div>

    <div class="form-group">
    <label for="models">Model</label>
    <select class="models form-control" id="models" name="models">
    </select>
    <p class="help-block color-red">This is required</p>
    </div>

    <div class="form-group">
    <label for="years">Year</label>
    <select class="years form-control" id="years" name="years">
    </select>
    </div>

    <div class="form-group">
    <label for="trims">Trim</label>
    <select class="trims form-control" id="trims" name="trims">
    </select>
    </div>

    <div class="form-group">
    <label for="condition">Condition</label>
    <select class="condition form-control" id="condition" name="condition">
        <option value=""></option>
        <option value="new">New</option>
        <option value="foreign">Foreign Used</option>
        <option value="naija">Nigerian Used</option>
    </select>
    </div>

    <div class="form-group">
    <label for="register">Registered</label>
    <select class="register form-control" id="register" name="register">
        <option value=""></option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
    </select>
    </div>

    <div class="form-group">
    <label for="vin">VIN Numbere</label>
    <input type="text" class="vin form-control" id="vin" name="vin">
    </div>

    <div class="form-group">
    <label for="type">Body Type</label>
    <input type="text" class="type form-control" id="type" name="type">
    </div>

    <div class="form-group">
    <label for="seat">Seats</label>
    <input type="text" class="seat form-control" id="seat" name="seat">
    </div>

    <div class="form-group">
    <label for="color">Colour</label>
    <select class="color form-control" id="color" name="color">
    </select>
    </div>

    <div class="form-group">
    <label for="trans">Transmission</label>
    <select class="trans form-control" id="trans" name="trans">
    <option value=""></option>
    <option value="MANUAL">Manual</option>
    <option value="AUTOMATIC">Automatic</option>
    <option value="CVT">CVT</option>
    <option value="AMT">AMT</option>
    </select>
    </div>

    <div class="form-group">
    <label for="drive">Drive Train</label>
    <select class="drive form-control" id="drive" name="drive">
    <option value=""></option>
    <option value="Front Wheel">Front Wheel</option>
    <option value="Rear Wheel">Rear Wheel</option>
    <option value="All Wheel">All Wheel</option>
    <option value="4x4">4x4</option>
    </select>
    </div>
    <div class="form-group">
    <label for="engine">Engine Type</label>
    <select class="engine form-control" id="engine" name="engine">
    <option value=""></option>
    <option value="i2">Straight 2</option>
    <option value="i3">Straight 3</option>
    <option value="i4">Straight 4</option>
    <option value="i5">Straight 5</option>
    <option value="i6">Straight 6</option>
    <option value="i8">Straight 8</option>
    <option value="v2">V2</option>
    <option value="v3">V3</option>
    <option value="v4">V4</option>
    <option value="v6">V6</option>
    <option value="v8">V8</option>
    <option value="v10">V10</option>
    <option value="v12">V12</option>
    <option value="v14">V14</option>
    <option value="v16">V16</option>
    <option value="v18">V18</option>
    <option value="f2">Flat 2</option>
    <option value="f4">Flat 4</option>
    <option value="f6">Flat 6</option>
    <option value="f8">Flat 8</option>
    <option value="f12">Flat 12</option>
    <option value="w8">W8</option>
    <option value="w12">W12</option>
    <option value="w16">W16</option>
    </select>
    </div>

    <div class="form-group">
    <label for="hp">Horse Power</label>
    <input type="text" class="hp form-control" id="hp" name="hp">
    </div>

    <div class="form-group">
    <label for="cylinder">Number of Cylinder</label>
    <input type="text" class="cylinder form-control" id="cylinder" name="cylinder">
    </div>

    <div class="form-group">
    <label for="fuel">Fuel</label>
    <input type="text" class="fuel form-control" id="fuel" name="fuel">
    </div>

    <div class="form-group">
    <label for="mileage">Mileage (km)</label>
    <input type="text" class="mileage form-control" id="mileage" name="mileage">
    </div>

    <div class="form-group">
    <label for="price">Price (&#8358;)</label>
    <input type="text" class="price form-control" id="price" name="price">
    </div>

    <div class="form-group">
    <label for="location">Location</label>
    <select class="location form-control" id="location" name="location">
    s
    </select>
    </div>

    <div class="form-group">
    <label for="desc">Description</label>
    <textarea class="desc form-control" id="desc" name="desc"></textarea>
    </div>

            <div class="row mt-3 mb-2">

            <div class="col-12 pr-0 text-left">
                <label for="Images" class="col-form-label text-nowrap"><strong>Pictures</strong></label>
            </div>
            </div>

            <!--Image container -->
            <div class="row"
                data-type="imagesloader"
                data-errorformat="Accepted file formats"
                data-errorsize="Maximum size accepted"
                data-errorduplicate="File already loaded"
                data-errormaxfiles="Maximum number of images you can upload"
                data-errorminfiles="Minimum number of images to upload"
                data-modifyimagetext="Modify immage">

            <!-- Progress bar -->
            <div class="col-12 order-1 mt-2">
                <div data-type="progress" class="progress" style="height: 25px; display:none;">
                <div data-type="progressBar" class="progress-bar progress-bar-striped progress-bar-animated blue color-white" role="progressbar" style="width: 100%;">Load in progress...</div>
                </div>
            </div>

            <!-- Model -->
            <div data-type="image-model" class="col-4 pl-2 pr-2 pt-2" style="max-width:200px; display:none;">

                <div class="ratio-box text-center" data-type="image-ratio-box">
                <img data-type="noimage" class="btn btn-light ratio-img img-fluid p-2 image border dashed rounded" src="./img/photo-camera-gray.svg" style="cursor:pointer;">
                <div data-type="loading" class="img-loading" style="color:#331f77; display:none;">
                    <span class="fa fa-2x fa-spin fa-spinner"></span>
                </div>
                <img data-type="preview" class="btn btn-light ratio-img img-fluid p-2 image border dashed rounded" src="" style="display: none; cursor: default;">
                <span class="badge badge-pill blue color-white p-2 w-50 main-tag" style="display:none;">Main</span>
                </div>

                <!-- Buttons -->
                <div data-type="image-buttons" class="row justify-content-center mt-2">
                <button data-type="add" class="btn border-blue color-blue" type="button"><span class="fa fa-camera mr-2 color-blue"></span>Add</button>
                <button data-type="btn-modify" type="button" class="btn border-blue color-blue m-0" data-toggle="popover" data-placement="right" style="display:none;">
                    <span class="fa fa-pencil-alt mr-2 color-blue"></span>Modify
                </button>
                </div>
            </div>

            <!-- Popover operations -->
            <div data-type="popover-model" style="display:none">
                <div data-type="popover" class="ml-3 mr-3" style="min-width:150px;">
                <div class="row">
                    <div class="col p-0">
                    <button data-operation="main" class="btn btn-block blue color-white btn-sm rounded-pill" type="button"><span class="fa fa-angle-double-up mr-2"></span>Main</button>
                    </div>
                </div>
                <div class="row mt-2">
                    <div class="col-6 p-0 pr-1">
                    <button data-operation="left" class="btn btn-block border-blue color-blue btn-sm rounded-pill" type="button"><span class="fa fa-angle-left mr-2"></span>Left</button>
                    </div>
                    <div class="col-6 p-0 pl-1">
                    <button data-operation="right" class="btn btn-block color-blue border-blue btn-sm rounded-pill" type="button">Right<span class="fa fa-angle-right ml-2"></span></button>
                    </div>
                </div>
                <div class="row mt-2">
                    <div class="col-6 p-0 pr-1">
                    <button data-operation="rotateanticlockwise" class="btn btn-block border-blue color-blue btn-sm rounded-pill" type="button"><span class="color-blue fas fa-undo-alt mr-2"></span>Rotate</button>
                    </div>
                    <div class="col-6 p-0 pl-1">
                    <button data-operation="rotateclockwise" class="btn btn-block border-blue color-blue btn-sm rounded-pill" type="button">Rotate<span class="color-blue fas fa-redo-alt ml-2"></span></button>
                    </div>
                </div>
                <div class="row mt-2">
                    <button data-operation="remove" class="btn btn-outline-danger btn-sm btn-block" type="button"><span class="fa fa-times mr-2"></span>Remove</button>
                </div>
                </div>
            </div>

            </div>

            <div class="form-group row">
            <div class="input-group">
                <!--Hidden file input for images-->
                <input id="files" type="file" name="files[]" data-button="" multiple="" accept="image/jpeg, image/png, image/gif," style="display:none;">
            </div>
            </div>

    <div class="form-group">
    <button class="btn color-white blue" type="button" form="product-form" id="post" name="post">Submit</button>
    </div>
    `)
    activate()
    getColors()
    getStates()
}