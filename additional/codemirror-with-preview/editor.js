$(function() {
    var markedOptions = { 
        gfm: true, 
        tables: true, 
        breaks: true, 
        pedantic: true, 
        sanitize: false, 
        smartLists: true, 
        smartypants: false, 
        langPrefix: 'lang-'
    };

    var options = {
        height: 500
    };

    var parser = marked;
    parser.setOptions(markedOptions);

    var delay;
    // Initialize CodeMirror editor with a nice html5 canvas demo.
    var editor = CodeMirror.fromTextArea(document.getElementById('code'), {
        mode: 'markdown',
        lineWrapping: true
    });

    var code = $('.CodeMirror'),
        codeContent = $('.CodeMirror-sizer'),
        codeScroll = $('.CodeMirror-scroll'),
        preview = $('.uk-htmleditor-preview')

    code.css('height', options.height);
    preview.css('height', options.height);

    editor.on("change", function() {
        clearTimeout(delay);
        delay = setTimeout(updatePreview, 300);
    });

    codeScroll.on('scroll', function () {
        
        var codeHeight       = codeContent.height() - codeScroll.height(),
            previewHeight    = preview[0].scrollHeight - preview.height(),
            ratio            = previewHeight / codeHeight,
            previewPostition = codeScroll.scrollTop() * ratio;

        // apply new scroll
        preview.scrollTop(previewPostition);
        console.log(preview.scrollHeight, preview.height());
    });

    function updatePreview() {
        var previewPane = $('.uk-htmleditor-preview');
        previewPane.html(parser(editor.getValue()));
    }
    setTimeout(updatePreview, 300);
});