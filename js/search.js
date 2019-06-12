jQuery(document).ready(function(){
    jQuery("#search-input").on("keyup",function(){
   
        // Search text
        var text = jQuery(this).val().toLowerCase();

        if( text ) {
            // Hide all content class element
            jQuery(".card.plugit-card").hide();

            // Search 
            jQuery('.card.plugit-card .card__container').each(function(){
        
                if(jQuery(this).text().toLowerCase().indexOf(""+text+"") != -1 ){
                    jQuery(this).closest('.card.plugit-card').show();
                }

            });


        } else {
            jQuery(".card.plugit-card").show();
        }
    
        
    
        
    });
});