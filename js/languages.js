define([
    'jquery',
	'theme/js/translations'
    ], function( $, Translations ) {

    // https://msdn.microsoft.com/en-us/library/ee825488(v=cs.20).aspx
    var preferredLanguage = "en-US";

    var languages = {
        
        getPreferredLanguage : function() {
            return preferredLanguage;
        },
        
        setPreferredLanguage : function( languageCode ) {
            preferredLanguage = languageCode;
        },
        
        __ : function( string ) {
			
            var stringToReturn = Translations[preferredLanguage][string];

			if ( typeof( stringToReturn ) !== 'undefined' ) {
				return stringToReturn;
			} else {
				return "Translated string not available";
			}
			
        }
    
    };
    
    return languages;
    
});