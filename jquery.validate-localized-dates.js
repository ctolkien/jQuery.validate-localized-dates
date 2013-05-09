/// <reference path="jquery.globalize/globalize.js" />
/// <reference path="jquery-1.9.1.js" />
/// <reference path="jquery.validate.js" />


jQuery.validator.methods["date"] = function (value, element) {
    return this.optional(element) || Globalize.parseDate(value) !== null;
}
