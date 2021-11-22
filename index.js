console.log('js loaded');

$(document).ready(function () {
    getYear();
    
    var i;
    var j;
    $('#scroll').click(function () {
        var sectionResume1 = document.getElementById("resume-1");
        if (sectionResume1.style.display === "none") {
            $('#resume-1').css("display", "block");
            $('#nextBtn').css("display", "block");
            $('#scroll').html('Close my resume');
            $('#nextBtn').html("View previous position");
            i = 2;
        } else {
            $('#resume-1').css("display", "none");
            $('#scroll').html('Scroll my resume');
            $('#nextBtn').css("display", "none");
            for (j=1; j < i+1; j++) {
                var nextSection = '#resume-'+[j];
                $(nextSection).css("display", "none");
            }
            i = 0;
        }
    });
    
    $('#nextBtn').click(function () {
        console.log(i, 'starting i');
        var nextSection = '#resume-'+[i];
        $(nextSection).css("display", "block");
        if (i === 3) {
            $('#nextBtn').html("View my leadership");
        }
        if (i === 4) {
            $('#nextBtn').html("View my education");
        }
        if (i === 5) {
            $('#nextBtn').html("Close my resume");
        }
        if (i === 6) {
            $('#resume-1').css("display", "none");
            for (j=1; j < i+1; j++) {
                var nextSection = '#resume-'+[j];
                $(nextSection).css("display", "none");
                $(this).css("display", "none");
                $('#scroll').html("Scroll my resume");
            };
            i = 0;
        }
        i++;
        console.log(i, 'ending i');
    });
    
    function onClick(element) {
      document.getElementById("img01").src = element.src;
      document.getElementById("modal01").style.display = "block";
    }
    var img1 = $('#img01');
    $('#modal01').attr("display", "block");
    
    // Get the modal
    var modal =$('#id01');

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    
});

var getYear = function() {
    var date = new Date();
    var currentYear = date.getFullYear();
    $('.currentYear').html(currentYear);
}