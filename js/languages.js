define([
    'jquery'
    ], function( $ ) {

    // https://msdn.microsoft.com/en-us/library/ee825488(v=cs.20).aspx

    function getPreferredLanguage() {
        return "en-US";
    }

    var stringTranslations = {
        "en-US" : {
            "successful_content_update_message" : "Content updated successfully",
            "article_header_title" : "Article",
            "content_unavailable_shortcode_message" : "Content unavailable",
            "more_button_label" : "More",
            "no_post_found_message" : "No post found",
        },
        "fr-FR" : {
            "successful_content_update_message" : "Contenus mis à jour avec succès",
            "article_header_title" : "Article",
            "unavailable_content_shortcode_message" : "Contenu non disponible",
            "more_button_label" : "Plus d'articles",
            "no_post_found_message" : "Aucun article trouvé",
        },        
    }
    
    function getStringFor( string, languageCode ) {
        
        var stringToReturn = stringTranslations[languageCode][string];

        if ( typeof( stringToReturn ) !== 'undefined' ) {
            return stringToReturn;
        } else {
            return "Translated string not available";
        }
  
    }

    var languages = {
        
        preferredLanguage : getPreferredLanguage(),
        
        getPreferredLanguage : function() {
            return this.preferredLanguage;
        },
        
        setPreferredLanguage : function( languageCode ) {
            this.preferredLanguage = languageCode;
        },
        
        __ : function( string ) {
            return getStringFor( string, this.getPreferredLanguage() );
        }
    
    }
    
    return languages;
    
});