function strip_tags(str) {

    var stripped = $.parseHTML(str);

    $(stripped).find("script").remove();
    $(stripped).find("style").remove();
    $(stripped).find("object").remove();
    $(stripped).find("embed").remove();
    $(stripped).find("applet").remove();
    $(stripped).find("noframes").remove();
    $(stripped).find("noscript").remove();
    $(stripped).find("noembed").remove();
    $(stripped).find("img").remove();

    return $(stripped).text().trim();
}