/*********************
*
*	Insertion Functions
*
*/

var win = window.dialogArguments || opener || parent || top;

function cleanHTML() {

	var answer = confirm("Really remove all div and span HTML?");

	if (answer) {
		tinyMCE.activeEditor.dom.remove(tinyMCE.activeEditor.dom.select('div'), true);
		tinyMCE.activeEditor.dom.remove(tinyMCE.activeEditor.dom.select('span'), true);
		tinyMCE.activeEditor.dom.remove(tinyMCE.activeEditor.dom.select('table'), true);
		tinyMCE.activeEditor.dom.remove(tinyMCE.activeEditor.dom.select('tbody'), true);
		tinyMCE.activeEditor.dom.remove(tinyMCE.activeEditor.dom.select('tr'), true);
		tinyMCE.activeEditor.dom.remove(tinyMCE.activeEditor.dom.select('td'), true);
	}

}

/*
			// remove nested divs
			var posttext = posttext.replace(/<div(.*?)>((.|\n)*?)(<\/div>)/ig, "");

			// remove nested blockquotes
			var posttext = posttext.replace(/<blockquote(.*?)>((.|\n)*?)(<\/blockquote>)/ig, "");
			var posttext = posttext.replace(/<blockquote(.*?)>((.|\n)*?)(<\/blockquote>)/ig, "");

			// remove superfluous linebreaks
			var posttext = posttext.replace(/\s\s/gm, "");

			// do basic cleanups
			var posttext = posttext.replace(/	/g, "");
			//var posttext = posttext.replace(/<p>/g, "\n");
			//var posttext = posttext.replace(/<\/\s*p>/g, "");
			var posttext = posttext.replace(/<p>/g, "");
			var posttext = posttext.replace(/<\/\s*p>/g, "\n\n");
			var posttext = posttext.replace(/<br>/g, "")

			// remove nonbreaking space
			var posttext = posttext.replace(/&nbsp;/g, " ");

			// remove nested spans
			var posttext = posttext.replace(/<span(.*?)>((.|\n)*?)(<\/span>)/ig, "");

			// remove nested blockquotes
			while (posttext != (posttext = posttext.replace(/<blockquote>[^>]*<\/\s*blockquote>/g, "")));

			// remove nested quote links
			var posttext = posttext.replace(/<a class="comment_quote_link"(.*?)>((.|\n)*?)(<\/a>)/ig, "");
			var posttext = posttext.replace(/<a class="comment_reply_link"(.*?)>((.|\n)*?)(<\/a>)/ig, "");
*/