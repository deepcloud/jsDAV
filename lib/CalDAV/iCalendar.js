/**
 * Calendar interface
 *
 * Implement this interface to allow a node to be recognized as an calendar.
 *
 * @package jsDAV
 * @subpackage CalDAV
 * @copyright Copyright(c) 2011 Tri Tech Computers Ltd. <info AT tri-tech DOT com>
 * @author James Emerton <james AT tri-tech DOT com>
 * @license http://github.com/mikedeboer/jsDAV/blob/master/LICENSE MIT License
 */
"use strict";

var jsDAV = require('./../lib/jsdav');


function jsDAV_CalDAV_iCalendar() {
    this.REGBASE = this.REGBASE | jsDAV.__ICALENDAR__;
}
jsDAV_CalDAV_iCalendar.prototype = new jsDAV_iCollection();

exports.jsDAV_CalDAV_iCalendar = jsDAV_CalDAV_iCalendar;
