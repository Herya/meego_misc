
var bs_swe = [ 
                 "ligga i framkant", "visa framf�tterna", "incitament", "implementera", "kompetensutveckling",
                 "plattform", "segment", "m�luppfyllelse",  "kvalitetss�kring", "samverkan", "resource", 
                 "humankapital", "k�rnverksamhet", "initiera", "coaching", "f�retagskultur", "implementera", 
                 "certifiera", "kvalitetss�kra", "synergieffekt", "resultatorienterad", "Strukturkapital",
                 "Helhetssyn", "Vision", "Benchmark", "K�rnverksamhet" 
                 ];

var bs_eng = [
              "Patent", "Discovery", "Restructuring", "Guidance",
              "Reactivation", "Value", "Google", "Apple", "Mission statement",
              "Drill", "Functionality", "Customer oriented", "Performance",
              "Development", "Burn rate", "Facilitate", "Prioritized",
              "Monetise", "Big picture", "Deploy", "Management",
              "Opportunity", "B2B", "Benchmark", "Think outside the box",
              "Reach out", "Exposure", "Bottom up", "Top down",
              "Mission critical", "Flexible", "Growth", "Seamless",
              "Sustainable", "Strategy", "Real-time"
              ];

var getData = function(language)
{
    
    if( language == "swe") return bs_swe;
    
    return bs_eng;
}
