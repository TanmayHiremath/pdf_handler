$(document).ready(function () {

      var imagesloader = $('[data-type=imagesloader]').imagesloader({
          // options here
      });
    
      //Form
      $frm = $('#frm');
      // Form submit
      $frm.submit(function (e) {
        var $form = $(this);
        var files = imagesloader.data('format.imagesloader').AttachmentArray;
        var il = imagesloader.data('format.imagesloader');
        if (il.CheckValidity())
          alert('Upload ' + files.length + ' files');        
        e.preventDefault();
        e.stopPropagation();
      });
    
    });

    $(document).ready(function () {

      var imagesloader = $('[data-type=imagesloader]').imagesloader({
          // options here
      });
    
      //Form
      $frm = $('#frm');
      // Form submit
      $frm.submit(function (e) {
        var $form = $(this);
        var files = imagesloader.data('format.imagesloader').AttachmentArray;
        var il = imagesloader.data('format.imagesloader');
        if (il.CheckValidity())
          alert('Upload ' + files.length + ' files');        
        e.preventDefault();
        e.stopPropagation();
      });
    
    });
    var imagesloader = $('[data-type=imagesloader]').imagesloader({

      // animation speed
      fadeTime: 'slow', 
  
      // input ID
      inputID: 'files', 
  
      // maximum number of files
      maxfiles: 4,
  
      // max image bytes
      maxSize: 5000 * 1024,
  
      // min image count
      minSelect: 1,
      
      // allowed file types
      filesType: ["image/jpeg", "image/png", "image/gif"],
  
      // max/min height
      maxWidth: 1280,
      maxHeight: 1024,
  
      // image type
      imgType: "image/jpeg"
  
      // image quality from 0 to 1
      imgQuality: .9,
  
      // error messages
      errorformat: "Accepted format",
      errorsize: "Max size allowed",
      errorduplicate: "File already uploaded",
      errormaxfiles: "Max images you can upload",
      errorminfiles: "Minimum number of images to upload",
  
      // text for modify image button
      modifyimagetext: "Modify image",
      
      // angle of each rotation
      rotation: 90
      
  });