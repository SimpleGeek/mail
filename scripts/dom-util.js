module.exports = class DomUtil {

    hide(id) {
        // Effectively removes the element from the document's
        // flow, as opposed to making it invisible but keeping its
        // effect on the page layout.
        document.getElementById(id).style.display = 'none';
    }

    showBlock(id) {
        // For block elements like <p> or <div>
        document.getElementById(id).style.display = 'block';
    }

    showInline(id) {
        // For inline elements like <a> or <span>
        document.getElementById(id).style.display = 'inline';
    }

}