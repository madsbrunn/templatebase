page = PAGE
page{

    headTag(
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" /> 
    )


    includeCSS{

        normalize = {$template.path}css/normalize.min.css
        main = {$template.path}css/main.css
        screen = {$template.path}css/screen.css
  
    }
  
  
    includeJS{

        modernizr = {$template.path}js/vendor/modernizr-2.6.2.min.js    
    
    }
  
    
    includeJSFooter{
    
        plugins = {$template.path}js/plugins.js
        
    }
}